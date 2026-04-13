import './style.css'
import logo from './assets/logo-advocacia-ts.png'

const practiceAreas = [
  {
    icon: 'scale',
    title: 'Defesa do Executado',
    description:
      'Atuação especializada em execução de título extrajudicial, cumprimento de sentença, ação monitória e ação de cobrança, com estratégia processual para reduzir constrições e preservar patrimônio.'
  },
  {
    icon: 'scroll-text',
    title: 'Direito Processual Civil',
    description:
      'Condução técnica de procedimentos e recursos no CPC, com domínio em temas sensíveis de instrução e prova, inclusive em debates sobre aspectos polêmicos da prova.'
  },
  {
    icon: 'lock-keyhole',
    title: 'Bloqueios de Ativos (SISBAJUD)',
    description:
      'Estruturação de medidas para impugnação de penhoras on-line e pedidos de desbloqueio, com abordagem rápida para minimizar impactos financeiros e operacionais.'
  },
  {
    icon: 'heart-pulse',
    title: 'Direito à Saúde (Falso Coletivo)',
    description:
      'Atuação estratégica na tese do falso coletivo para revisão de reajustes abusivos em planos de saúde, com pedidos de liminar, aplicação de parâmetros da ANS e restituição de valores pagos indevidamente.'
  },
  {
    icon: 'landmark',
    title: 'Direito Bancário',
    description:
      'Atuação em controvérsias com instituições financeiras, revisão de encargos e estratégias defensivas em cobranças e execuções de natureza bancária.'
  },
  {
    icon: 'shield-check',
    title: 'Defesa em IDPJ',
    description:
      'Defesa técnica no Incidente de Desconsideração da Personalidade Jurídica, com foco em afastar responsabilização indevida de sócios e proteger patrimônio pessoal.'
  }
]

const testimonials = [
  {
    quote:
      'Atendimento profissional, bem detalhado e com muita atenção às necessidades do cliente. Luiz demonstra profundo conhecimento em seu campo de atuação e presta todo suporte em todas as etapas do processo.',
    author: 'Felipe Alvarenga',
    role: 'Avaliação no Google',
    tag: '★★★★★'
  },
  {
    quote:
      'A confiança que tive ao lidar com o Luiz dá o conforto que qualquer um precisa pra escolher um profissional. Excelente trabalho.',
    author: 'Italo José Barbosa Mácola',
    role: 'Avaliação no Google',
    tag: '★★★★★'
  },
  {
    quote:
      'Sua expertise e dedicação foram comprovadas em diversos casos em que tive a oportunidade de tê-lo como meu representante legal. Sempre demonstrou profundo conhecimento jurídico, alcançando resultados rápidos.',
    author: 'Ana Cristina Rufino',
    role: 'Avaliação no Google',
    tag: '★★★★★'
  }
]

const areaCards = practiceAreas
  .map(
    (area) => `
      <article class="area-card">
        <span class="card-icon lucide-icon" aria-hidden="true"><i data-lucide="${area.icon}"></i></span>
        <h3>${area.title}</h3>
        <p>${area.description}</p>
      </article>
    `
  )
  .join('')

const testimonialCards = testimonials
  .map(
    (t) => `
      <article class="testimonial-card">
        <span class="quote-icon lucide-icon" aria-hidden="true"><i data-lucide="quote"></i></span>
        <p class="testimonial-text">${t.quote}</p>
        <footer class="testimonial-footer">
          <p class="testimonial-author">${t.author}</p>
          <p class="testimonial-role">${t.role}</p>
          <span class="testimonial-tag">${t.tag}</span>
        </footer>
      </article>
    `
  )
  .join('')

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <a class="skip-link" href="#conteudo">Ir para o conteúdo principal</a>

  <header class="site-header">
    <div class="header-row">
      <a class="brand" href="#inicio">
        <img class="brand-logo" src="${logo}" alt="Luiz Santiago Advocacia e Consultoria" height="67" />
      </a>
      <nav class="site-nav" aria-label="Navegação principal">
        <a href="#areas">Áreas</a>
        <a href="#equipe">Equipe</a>
        <a href="#depoimentos">Depoimentos</a>
        <a href="#digital">Atendimento digital</a>
        <a href="#noticias">Notícias</a>
      </nav>
      <div class="header-actions">
        <a class="btn-outline" href="#contato">Entre em contato</a>
        <button
          class="menu-toggle"
          aria-label="Abrir menu de navegação"
          aria-expanded="false"
          aria-controls="mobile-nav"
        >
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
      </div>
    </div>
    <nav class="mobile-nav" id="mobile-nav" aria-label="Menu mobile">
      <a href="#areas">Áreas de atuação</a>
      <a href="#equipe">Equipe</a>
      <a href="#depoimentos">Depoimentos</a>
      <a href="#digital">Atendimento digital</a>
      <a href="#noticias">Notícias</a>
      <a href="#contato" class="mobile-cta">Entre em contato</a>
    </nav>
  </header>

  <main id="conteudo">
    <section id="inicio" class="hero">
      <div class="hero-content">
        <p class="eyebrow">Advocacia personalizada</p>
        <h1>Defesa jurídica estratégica para proteger o seu patrimônio e o da sua empresa.</h1>
        <p class="hero-text">Especializado em defesa do executado, bloqueios de ativos (SISBAJUD) e proteção patrimonial — com atuação comprovada em mais de 1.000 processos em todo o Brasil, direto com o sócio do escritório.</p>
        <div class="hero-actions">
          <a class="btn-primary" href="#contato">Falar com o escritório</a>
          <a class="btn-ghost" href="#areas">
            <span class="lucide-icon btn-icon" aria-hidden="true"><i data-lucide="sparkles"></i></span>
            Conhecer áreas
          </a>
        </div>
      </div>
      <aside class="hero-aside">
        <div class="metric">
          <strong>+10</strong>
          <span>Anos de experiência</span>
        </div>
        <div class="metric">
          <strong>+1.000</strong>
          <span>Processos atuados, comprovados pelo Escavador</span>
        </div>
        <div class="metric">
          <strong>100%</strong>
          <span>Digital — atendimento em qualquer estado, sem deslocamento</span>
        </div>
      </aside>
    </section>

    <section id="areas" class="section">
      <div class="section-head">
        <p class="eyebrow">Áreas de atuação</p>
        <h2>Especialidades em execução e defesa patrimonial</h2>
      </div>
      <div class="area-grid">${areaCards}</div>
    </section>

    <section id="equipe" class="section alt">
      <div class="section-head">
        <p class="eyebrow">Nossa equipe</p>
        <h2>Atendimento direto com o sócio do escritório</h2>
      </div>
      <article class="team-highlight">
        <div class="team-highlight-content">
          <p class="eyebrow">Mini currículo</p>
          <h3>Luiz Antônio Santiago Corrêa</h3>
          <p class="role">Sócio · OAB/PA 18.239</p>
          <p>Mestre em Direito Econômico pelo IDP (Brasília) e Mestre em Direito Empresário pela Pontificia Universidad Católica Argentina (Buenos Aires).</p>
          <p>Especialista em defesa do executado, com atuação em execuções, cumprimento de sentença, bloqueios de ativos (SISBAJUD) e estratégia processual para proteção patrimonial.</p>
          <a
            class="team-proof-link"
            href="https://www.escavador.com/nomes/luiz-antonio-santiago-correa-11f8570d16"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver comprovação de atuação no Escavador"
          >
            Atuação em mais de 1.000 processos judiciais comprovados pelo Escavador
            <span class="team-proof-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" focusable="false">
                <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z"></path>
                <path d="M5 5h6v2H7v10h10v-4h2v6H5V5z"></path>
              </svg>
            </span>
          </a>
          <div class="hero-actions">
            <a class="btn-primary" href="#contato">Falar direto com o sócio</a>
          </div>
        </div>
        <div class="team-highlight-photo-wrap">
          <img
            class="team-highlight-photo"
            src="https://www.luizsantiagolaw.com.br/assets/img/hero/advogado-Bm7ZUCAr.webp"
            alt="Luiz Antônio Santiago Corrêa, advogado sócio"
            loading="lazy"
            decoding="async"
            width="340"
            height="460"
          />
        </div>
      </article>
    </section>

    <section id="depoimentos" class="section">
      <div class="section-head">
        <p class="eyebrow">Depoimentos</p>
        <h2>O que dizem nossos clientes</h2>
      </div>
      <div class="testimonials-grid">${testimonialCards}</div>
    </section>

    <section id="digital" class="section alt">
      <div class="section-head">
        <p class="eyebrow">Atuação nacional</p>
        <h2>Atendemos sua empresa em qualquer estado do Brasil</h2>
      </div>
      <div class="area-grid">
        <article class="area-card">
          <div class="digital-icon" aria-hidden="true">
            <span class="lucide-icon"><i data-lucide="globe"></i></span>
          </div>
          <h3>Sem fronteiras geográficas</h3>
          <p>Representamos sua empresa em qualquer tribunal do país, independentemente de onde você esteja. Toda comunicação, envio de documentos e acompanhamento processual acontecem digitalmente.</p>
        </article>
        <article class="area-card">
          <div class="digital-icon" aria-hidden="true">
            <span class="lucide-icon"><i data-lucide="monitor-smartphone"></i></span>
          </div>
          <h3>Audiências por videoconferência</h3>
          <p>Pelo Juízo 100% Digital do CNJ, audiências e sessões de julgamento ocorrem por videoconferência. Você participa de onde estiver, com total segurança e sem perda de agilidade processual.</p>
        </article>
        <article class="area-card">
          <div class="digital-icon" aria-hidden="true">
            <span class="lucide-icon"><i data-lucide="file-text"></i></span>
          </div>
          <h3>Processo 100% eletrônico</h3>
          <p>Todos os atos processuais tramitam via PJe e PROJUDI. Petições, intimações e documentos são gerenciados digitalmente, com rastreabilidade em tempo real e sem burocracia presencial.</p>
        </article>
      </div>
    </section>

    <section id="noticias" class="section">
      <div class="section-head">
        <p class="eyebrow">Notícias jurídicas</p>
        <h2>Atualizações do mundo do direito</h2>
      </div>
      <div class="news-grid" id="news-grid">
        <div class="news-skeleton"></div>
        <div class="news-skeleton"></div>
        <div class="news-skeleton"></div>
        <div class="news-skeleton"></div>
        <div class="news-skeleton"></div>
        <div class="news-skeleton"></div>
      </div>
      <p class="news-sources">Fontes: Conjur · JOTA</p>
    </section>

    <section id="contato" class="contact">
      <p class="eyebrow">Contato</p>
      <h2>Vamos conversar sobre a sua demanda?</h2>
      <p>Retorno em até 24h nos dias úteis. Atendimento com sigilo e canal direto. Atuamos em todo o Brasil.</p>
      <div class="hero-actions">
        <a
          class="btn-primary"
          href="https://wa.me/5591993836796?text=Ol%C3%A1%2C%20gostaria%20de%20um%20atendimento%20jur%C3%ADdico."
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="lucide-icon btn-icon" aria-hidden="true"><i data-lucide="message-circle"></i></span>
          WhatsApp
        </a>
        <a class="btn-ghost" href="mailto:luizsantiago@luizsantiago.adv.br">
          <span class="lucide-icon btn-icon" aria-hidden="true"><i data-lucide="mail"></i></span>
          E-mail
        </a>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="#inicio" aria-label="Voltar ao início">
          <img src="${logo}" alt="Luiz Santiago Advocacia" height="52" />
        </a>
        <p>Advocacia estratégica em execução civil e defesa patrimonial em todo o Brasil.</p>
        <p class="footer-credentials">OAB/PA 18.239 · CNPJ 56.028.437/0001-98</p>
      </div>
      <nav class="footer-nav" aria-label="Links rápidos">
        <p class="footer-col-title">Navegação</p>
        <a href="#areas">Áreas de atuação</a>
        <a href="#equipe">Equipe</a>
        <a href="#depoimentos">Depoimentos</a>
        <a href="#digital">Atendimento digital</a>
        <a href="#noticias">Notícias</a>
        <a href="#contato">Contato</a>
      </nav>
      <div class="footer-contact">
        <p class="footer-col-title">Contato</p>
        <a href="https://wa.me/5591993836796" target="_blank" rel="noopener noreferrer">(91) 99383-6796 via WhatsApp</a>
        <a href="mailto:luizsantiago@luizsantiago.adv.br">luizsantiago@luizsantiago.adv.br</a>
        <address>
          Ed. Alm. Wandenkolk<br>
          Tv. Alm. Wandenkolk, 1243 — Sala 1201<br>
          Umarizal, Belém/PA · 66055-030
        </address>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2026 Luiz Santiago Advocacia e Consultoria. Todos os direitos reservados.</p>
      <p>Atuação jurídica em todo o Brasil</p>
    </div>
  </footer>

  <a
    class="whatsapp-float"
    href="https://wa.me/5591993836796?text=Ol%C3%A1%2C%20gostaria%20de%20um%20atendimento%20jur%C3%ADdico."
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Falar pelo WhatsApp"
  >
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  </a>
`

function initLucideIcons(root?: ParentNode): void {
  const lucideApi = (window as Window & { lucide?: { createIcons: (opts?: { root?: ParentNode }) => void } }).lucide
  if (!lucideApi) return
  lucideApi.createIcons(root ? { root } : undefined)
}

function initPremiumReveal(): void {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll<HTMLElement>('.reveal').forEach((el) => el.classList.add('is-inview'))
    return
  }

  const io = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-inview')
        observer.unobserve(entry.target)
      })
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0 }
  )

  document
    .querySelectorAll<HTMLElement>(
      '.hero-content, .hero-aside .metric, .section-head, .area-card, .team-highlight, .testimonial-card, .news-card, .contact > *, .site-footer > *'
    )
    .forEach((el, i) => {
      el.classList.add('reveal')
      el.style.setProperty('--reveal-delay', `${Math.min(i * 0.04, 0.32)}s`)
      io.observe(el)
    })
}

const menuToggle = document.querySelector<HTMLButtonElement>('.menu-toggle')
const mobileNav = document.querySelector<HTMLElement>('#mobile-nav')

menuToggle?.addEventListener('click', () => {
  const isOpen = mobileNav?.classList.toggle('open')
  menuToggle.setAttribute('aria-expanded', String(!!isOpen))
  menuToggle.setAttribute(
    'aria-label',
    isOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'
  )
})

document.querySelectorAll<HTMLAnchorElement>('#mobile-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileNav?.classList.remove('open')
    menuToggle?.setAttribute('aria-expanded', 'false')
    menuToggle?.setAttribute('aria-label', 'Abrir menu de navegação')
  })
})

interface NewsArticle {
  title: string
  link: string
  date: string
  source: string
  snippet: string
}

function formatNewsDate(dateStr: string): string {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  if (isNaN(d.getTime())) return ''
  return d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })
}

async function loadNews(): Promise<void> {
  const grid = document.querySelector<HTMLElement>('#news-grid')
  if (!grid) return

  try {
    const res = await fetch('/api/noticias')
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const { articles } = (await res.json()) as { articles: NewsArticle[] }

    if (!articles.length) {
      grid.innerHTML = '<p class="news-empty">Nenhuma notícia disponível no momento.</p>'
      return
    }

    grid.innerHTML = articles
      .map(
        (a) => `
        <article class="news-card">
          <div class="news-meta">
            <span class="news-source-badge">${a.source}</span>
            <span>${formatNewsDate(a.date)}</span>
          </div>
          <h3>${a.title}</h3>
          ${a.snippet ? `<p class="news-snippet">${a.snippet}</p>` : ''}
          <a
            href="${a.link}"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ler matéria: ${a.title}"
          >Ler no site →</a>
        </article>
      `
      )
      .join('')
    initLucideIcons(grid)
  } catch {
    grid.innerHTML =
      '<p class="news-empty">Não foi possível carregar as notícias. Tente novamente mais tarde.</p>'
  }
}

initLucideIcons()
initPremiumReveal()
void loadNews()
