import { defineConfig } from 'vite'
import type { Plugin } from 'vite'
import Parser from 'rss-parser'

interface Article {
  title: string
  link: string
  date: string
  source: string
}

const FEEDS = [
  { source: 'Conjur', url: 'https://www.conjur.com.br/feed/' },
  { source: 'JOTA', url: 'https://www.jota.info/feed' },
]

function devApiPlugin(): Plugin {
  return {
    name: 'dev-api-noticias',
    configureServer(server) {
      server.middlewares.use('/api/noticias', async (_req, res) => {
        const parser = new Parser({
          timeout: 8000,
          headers: { 'User-Agent': 'Mozilla/5.0 (compatible; LuizSantiagoLaw/1.0)' },
        })

        const results = await Promise.allSettled(
          FEEDS.map(async (feed) => {
            const parsed = await parser.parseURL(feed.url)
            return parsed.items.slice(0, 3).map(
              (item): Article => ({
                title: item.title ?? '',
                link: item.link ?? '',
                date: item.pubDate ?? item.isoDate ?? '',
                source: feed.source,
              })
            )
          })
        )

        const articles: Article[] = results
          .flatMap((r) => (r.status === 'fulfilled' ? r.value : []))
          .filter((a) => a.title && a.link)
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .slice(0, 6)

        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ articles }))
      })
    },
  }
}

export default defineConfig({
  plugins: [devApiPlugin()],
})
