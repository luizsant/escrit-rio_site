import type { VercelRequest, VercelResponse } from '@vercel/node'
import Parser from 'rss-parser'

function secondsUntilNext8amBRT(): number {
  const now = new Date()
  const brt = new Date(now.toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' }))
  const next8am = new Date(brt)
  next8am.setHours(8, 0, 0, 0)
  if (brt >= next8am) next8am.setDate(next8am.getDate() + 1)
  return Math.max(Math.floor((next8am.getTime() - brt.getTime()) / 1000), 60)
}

interface Article {
  title: string
  link: string
  date: string
  source: string
  snippet: string
}

const parser = new Parser({
  timeout: 8000,
  headers: { 'User-Agent': 'Mozilla/5.0 (compatible; LuizSantiagoLaw/1.0)' },
})

const FEEDS = [
  { source: 'Conjur', url: 'https://www.conjur.com.br/feed/' },
  { source: 'JOTA', url: 'https://www.jota.info/feed' },
]

export default async function handler(_req: VercelRequest, res: VercelResponse) {
  const results = await Promise.allSettled(
    FEEDS.map(async (feed) => {
      const parsed = await parser.parseURL(feed.url)
      return parsed.items.slice(0, 3).map((item): Article => {
        const raw = item.contentSnippet ?? item.summary ?? ''
        const snippet = raw.replace(/\s+/g, ' ').trim().slice(0, 160)
        return {
          title: item.title ?? '',
          link: item.link ?? '',
          date: item.pubDate ?? item.isoDate ?? '',
          source: feed.source,
          snippet: snippet.length === 160 ? snippet + '…' : snippet,
        }
      })
    })
  )

  const articles: Article[] = results
    .flatMap((r) => (r.status === 'fulfilled' ? r.value : []))
    .filter((a) => a.title && a.link)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 6)

  const ttl = secondsUntilNext8amBRT()
  res.setHeader('Cache-Control', `s-maxage=${ttl}, stale-while-revalidate=3600`)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.json({ articles })
}
