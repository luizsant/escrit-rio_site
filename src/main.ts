import './style.css'
import logoBranco from './assets/newbrand/logo-horizontal-branco.webp'
import logoVertical from './assets/newbrand/logo-vertical-branco.webp'
import retrato480 from './assets/newbrand/luiz-santiago-480.webp'
import retrato800 from './assets/newbrand/luiz-santiago-800.webp'
import monogramaOuro from './assets/newbrand/monograma-ouro.webp'
import simboloOuro from './assets/newbrand/simbolo-ouro.webp'
import seloDefesa from './assets/formacao/defesa_do_executado-removebg-preview.png'
import seloExecucao from './assets/formacao/expert-execucao-removebg-preview-1.png'
import seloNyls from './assets/formacao/MYLS_academy-removebg-preview.png'
import imgExecucao from './assets/atuacao/execucao.webp'
import imgAgro from './assets/atuacao/agro-nelore.webp'

const whatsappLink =
  'https://wa.me/5591993836796?text=Ol%C3%A1%2C%20gostaria%20de%20um%20atendimento%20jur%C3%ADdico.'

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#atuacao', label: 'Atuação' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#noticias', label: 'Notícias' },
  { href: '#contato', label: 'Contato' },
]

const testimonials = [
  {
    quote:
      'Atendimento profissional, bem detalhado e com muita atenção às necessidades do cliente. Luiz demonstra profundo conhecimento em seu campo de atuação e presta todo suporte em todas as etapas do processo.',
    author: 'Felipe Alvarenga',
    role: 'Avaliação no Google',
  },
  {
    quote:
      'A confiança que tive ao lidar com o Luiz dá o conforto que qualquer um precisa pra escolher um profissional. Excelente trabalho.',
    author: 'Italo José Barbosa Mácola',
    role: 'Avaliação no Google',
  },
  {
    quote:
      'Sua expertise e dedicação foram comprovadas em diversos casos em que tive a oportunidade de tê-lo como meu representante legal. Sempre demonstrou profundo conhecimento jurídico, alcançando resultados rápidos.',
    author: 'Ana Cristina Rufino',
    role: 'Avaliação no Google',
  },
]

const digitalFeatures = [
  {
    icon: 'globe',
    title: 'Sem fronteiras geográficas',
    description:
      'Atendimento em qualquer tribunal do país. Comunicação, documentos e acompanhamento processual acontecem digitalmente.',
  },
  {
    icon: 'monitor-smartphone',
    title: 'Audiências por videoconferência',
    description:
      'Pelo Juízo 100% Digital do CNJ, audiências e sessões ocorrem por videoconferência, com segurança e sem deslocamento.',
  },
  {
    icon: 'file-text',
    title: 'Processo 100% eletrônico',
    description:
      'Atos processuais via PJe e PROJUDI. Petições, intimações e documentos com rastreabilidade em tempo real.',
  },
]

const execItems = [
  { icon: 'gavel', text: 'Embargos à execução e impugnação ao cumprimento de sentença' },
  { icon: 'lock-keyhole', text: 'Bloqueio Sisbajud, penhora e impenhorabilidade' },
  { icon: 'shield-check', text: 'Defesa em IDPJ e redirecionamento da execução' },
  { icon: 'landmark', text: 'Cobrança bancária, fiador, avalista e sócio' },
  { icon: 'scale', text: 'Execução fiscal — em todo o Brasil, exceto no Pará' },
]

const agroItems = [
  { icon: 'sprout', text: 'Crédito rural: custeio, investimento e comercialização' },
  { icon: 'file-text', text: 'Revisão de contratos, encargos e garantias rurais' },
  { icon: 'wheat', text: 'Endividamento do produtor e renegociação do passivo' },
  { icon: 'home', text: 'Penhora de imóvel rural, safra, veículo e equipamentos' },
  { icon: 'shield', text: 'Proteção do patrimônio e da continuidade da atividade' },
]

const tags = [
  { icon: 'file-text', label: 'Citação e intimação recentes' },
  { icon: 'lock-keyhole', label: 'Bloqueio Sisbajud' },
  { icon: 'home', label: 'Penhora de imóvel ou veículo' },
  { icon: 'users', label: 'Fiador, avalista e sócio' },
  { icon: 'landmark', label: 'Cobrança bancária' },
  { icon: 'sprout', label: 'Contrato de crédito rural' },
  { icon: 'wheat', label: 'CPR e garantia de safra' },
  { icon: 'scale', label: 'Execução fiscal (exceto no Pará)' },
]

const testimonialCards = testimonials
  .map(
    (t) => `
      <article class="depo reveal">
        <span class="depo__mark" aria-hidden="true">&ldquo;</span>
        <p class="depo__stars" role="img" aria-label="Avaliação de 5 estrelas">★★★★★</p>
        <blockquote>${t.quote}</blockquote>
        <footer>
          <strong>${t.author}</strong>
          <span>${t.role}</span>
        </footer>
      </article>
    `
  )
  .join('')

const digitalCards = digitalFeatures
  .map(
    (feature) => `
      <article class="dif reveal">
        <b aria-hidden="true"><i data-lucide="${feature.icon}"></i></b>
        <h3>${feature.title}</h3>
        <p>${feature.description}</p>
      </article>
    `
  )
  .join('')

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <a class="skip-link" href="#conteudo">Ir para o conteúdo principal</a>

  <header class="header" id="header">
    <div class="header__inner">
      <a class="header__logo" href="#inicio" aria-label="Luiz Santiago Advocacia — início">
        <img src="${logoBranco}" alt="Luiz Santiago Advocacia e Consultoria" width="1530" height="328" />
        <span class="header__slogan">Defesa do executado e do agronegócio</span>
      </a>
      <nav class="nav" id="nav" aria-label="Navegação principal">
        <img class="nav__mark" src="${logoVertical}" alt="" width="1084" height="742" aria-hidden="true" />
        <ul class="nav__list">
          ${navLinks.map((link) => `<li><a href="${link.href}">${link.label}</a></li>`).join('')}
        </ul>
        <a class="btn btn--gold btn--sm js-whatsapp" href="${whatsappLink}" target="_blank" rel="noopener noreferrer">WhatsApp</a>
      </nav>
      <button class="burger" id="burger" aria-label="Abrir menu" aria-expanded="false" aria-controls="nav">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>

  <main id="conteudo">
    <section class="hero hero--navy" id="inicio">
      <div class="hero__media">
        <img
          src="${retrato800}"
          srcset="${retrato480} 480w, ${retrato800} 800w"
          sizes="(max-width: 1024px) 42vw, 820px"
          alt="Luiz Antônio Santiago Corrêa, advogado sócio do escritório"
          fetchpriority="high"
          width="800"
          height="800"
        />
      </div>
      <div class="hero__scrim"></div>
      <div class="hero__glow"></div>
      <img class="hero__watermark" src="${monogramaOuro}" alt="" width="418" height="438" aria-hidden="true" />

      <div class="container hero__inner">
        <p class="eyebrow reveal">
          <img src="${simboloOuro}" alt="" width="800" height="800" aria-hidden="true" />
          Luiz Santiago Advocacia e Consultoria
        </p>
        <h1 class="hero__title reveal">Defesa do executado<br>e do <span>agronegócio.</span></h1>
        <p class="hero__sub reveal">
          Escritório com atuação nacional na defesa de quem está sendo cobrado
          e na proteção jurídica de quem produz. Diagnóstico inicial em até 24h
          nos dias úteis, direto com o sócio.
        </p>
        <div class="hero__actions reveal">
          <a class="btn btn--gold btn--lg js-whatsapp" href="${whatsappLink}" target="_blank" rel="noopener noreferrer">
            <i data-lucide="message-circle" aria-hidden="true"></i>
            Falar com o escritório
          </a>
          <a class="btn btn--glass btn--lg" href="#atuacao">Conhecer a atuação <span aria-hidden="true">↓</span></a>
        </div>
        <ul class="selos hero__selos reveal">
          <li><i data-lucide="gavel" aria-hidden="true"></i> Defesa do executado</li>
          <li><i data-lucide="sprout" aria-hidden="true"></i> Defesa do agronegócio</li>
          <li><i data-lucide="globe" aria-hidden="true"></i> Atuação em todo o Brasil</li>
        </ul>
      </div>

      <ul class="hero__bar">
        <li>
          <i data-lucide="clock" aria-hidden="true"></i>
          <strong>Prazo é decisivo</strong>
          <span>A citação abre um tempo curto para apresentar defesa</span>
        </li>
        <li>
          <i data-lucide="shield" aria-hidden="true"></i>
          <strong>Patrimônio em risco</strong>
          <span>Penhora e garantia exigem estratégia, não improviso</span>
        </li>
        <li>
          <i data-lucide="globe" aria-hidden="true"></i>
          <strong>Todo o Brasil</strong>
          <span>Atendimento digital, sem deslocamento</span>
        </li>
      </ul>
    </section>

    <section class="section section--atuacao" id="atuacao">
      <div class="container">
        <header class="head">
          <span class="tagline reveal">Atuação</span>
          <h2 class="h2 reveal">Dois eixos. <span>A mesma leitura do risco.</span></h2>
          <p class="lead reveal">
            Quem está no polo passivo e quem produz no campo enfrentam cobranças
            diferentes. A condução começa pelo título, pelo cálculo e pelo patrimônio
            que o credor pode alcançar.
          </p>
        </header>

        <div class="pillars">
          <article class="pillar reveal">
            <div class="pillar__media">
              <img src="${imgExecucao}" alt="Advogado diante de documentos e da balança da Justiça" width="1400" height="700" loading="lazy" />
            </div>
            <span class="pillar__ico" aria-hidden="true"><i data-lucide="gavel"></i></span>
            <h3>Defesa do executado</h3>
            <p>
              Atuação para pessoas e empresas citadas em execução, cumprimento de
              sentença ou cobrança judicial — inclusive bloqueio, penhora e
              redirecionamento aos sócios.
            </p>
            <ul>
              ${execItems
                .map(
                  (item) =>
                    `<li><i data-lucide="${item.icon}" aria-hidden="true"></i><span>${item.text}</span></li>`
                )
                .join('')}
            </ul>
          </article>

          <article class="pillar pillar--agro reveal">
            <div class="pillar__media">
              <img src="${imgAgro}" alt="Rebanho de gado Nelore em pasto ao entardecer" width="1280" height="539" loading="lazy" />
            </div>
            <span class="pillar__ico" aria-hidden="true"><i data-lucide="sprout"></i></span>
            <h3>Agronegócio e crédito rural</h3>
            <p>
              Defesa jurídica de produtores, pecuaristas e empresas rurais em
              contratos de crédito, endividamento, garantias e proteção do
              patrimônio da atividade.
            </p>
            <ul>
              ${agroItems
                .map(
                  (item) =>
                    `<li><i data-lucide="${item.icon}" aria-hidden="true"></i><span>${item.text}</span></li>`
                )
                .join('')}
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--situacoes" id="situacoes">
      <div class="container">
        <span class="tagline reveal">Situações</span>
        <h2 class="h2 reveal">Quando o prazo e o patrimônio <span>não podem esperar.</span></h2>
        <p class="lead reveal">
          A defesa muda conforme o título e o estágio do processo.
          O que não muda é o custo de esperar.
        </p>
        <ul class="tags reveal">
          ${tags
            .map(
              (tag) =>
                `<li><i data-lucide="${tag.icon}" aria-hidden="true"></i>${tag.label}</li>`
            )
            .join('')}
        </ul>
      </div>
    </section>

    <section class="section section--sobre" id="sobre">
      <div class="container sobre">
        <figure class="sobre__fig reveal">
          <img
            src="${retrato800}"
            srcset="${retrato480} 480w, ${retrato800} 800w"
            sizes="(max-width: 1024px) 78vw, 420px"
            alt="Luiz Antônio Santiago Corrêa, advogado responsável pelo escritório"
            loading="lazy"
            width="800"
            height="800"
          />
          <img class="sobre__selo" src="${simboloOuro}" alt="" width="800" height="800" aria-hidden="true" />
          <figcaption>
            <strong>Luiz Antônio Santiago Corrêa</strong>
            <span>OAB/PA 18.239 · OAB/SP 549.491</span>
          </figcaption>
        </figure>
        <div class="sobre__text">
          <span class="tagline reveal">O escritório</span>
          <h2 class="h2 reveal">Atendimento direto com o <span>sócio do escritório.</span></h2>
          <p class="body reveal">
            Luiz Antônio Santiago Corrêa, da Luiz Santiago Sociedade Individual de Advocacia,
            atua na defesa de quem enfrenta execução e na proteção jurídica de quem produz —
            com leitura técnica do título, do cálculo e do patrimônio.
          </p>
          <p class="body reveal">
            Mestre em Direito pelo IDP (Brasília) e Magíster em Direito Empresarial pela
            Universidad Católica Argentina. A atuação alcança clientes em todo o Brasil;
            em execução fiscal, com a exclusão do estado do Pará.
          </p>
          <ul class="selos sobre__selos reveal">
            <li><i data-lucide="gavel" aria-hidden="true"></i> Defesa do executado</li>
            <li><i data-lucide="sprout" aria-hidden="true"></i> Defesa do agronegócio</li>
          </ul>
          <a
            class="proof-link reveal"
            href="https://www.escavador.com/nomes/luiz-antonio-santiago-correa-11f8570d16"
            target="_blank"
            rel="noopener noreferrer"
          >
            Atuação em mais de 1.000 processos judiciais comprovados pelo Escavador
            <i data-lucide="external-link" aria-hidden="true"></i>
          </a>
          <p class="sobre__cred reveal">
            Mestrado em Direito (IDP) · Magíster em Direito Empresarial (UCA) · formação complementar em defesa do executado e execução
          </p>
          <div class="sobre__inst reveal" aria-label="Formação complementar">
            <img src="${seloDefesa}" alt="Expert na Defesa do Executado" width="160" height="38" />
            <img src="${seloExecucao}" alt="Expert em Execução" width="148" height="38" />
            <img src="${seloNyls}" alt="NYLS Academy" width="120" height="32" />
          </div>
          <a class="btn btn--glass reveal js-whatsapp" href="${whatsappLink}" target="_blank" rel="noopener noreferrer">
            Falar direto com o sócio <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>

    <section class="section section--digital" id="digital">
      <div class="container">
        <header class="head">
          <span class="tagline reveal">Atuação nacional</span>
          <h2 class="h2 reveal">Atendimento em qualquer <span>estado do Brasil.</span></h2>
        </header>
        <div class="dif__grid">${digitalCards}</div>
      </div>
    </section>

    <section class="section section--depo" id="depoimentos">
      <div class="container">
        <header class="head">
          <span class="tagline reveal">Depoimentos</span>
          <h2 class="h2 reveal">O que dizem quem nos avaliou <span>no Google.</span></h2>
        </header>
        <div class="grid3">${testimonialCards}</div>
      </div>
    </section>

    <section class="section section--noticias" id="noticias">
      <div class="container">
        <header class="head">
          <span class="tagline reveal">Notícias jurídicas</span>
          <h2 class="h2 reveal">Atualizações do <span>mundo do direito.</span></h2>
        </header>
        <div class="news-grid" id="news-grid">
          <div class="news-skeleton"></div>
          <div class="news-skeleton"></div>
          <div class="news-skeleton"></div>
          <div class="news-skeleton"></div>
          <div class="news-skeleton"></div>
          <div class="news-skeleton"></div>
        </div>
        <p class="news-sources">Fontes: Conjur · JOTA</p>
      </div>
    </section>

    <section class="section section--contato center" id="contato">
      <div class="container">
        <img class="contato__logo reveal" src="${logoVertical}" alt="Luiz Santiago Advocacia e Consultoria" width="1084" height="742" />
        <h2 class="h2 reveal">Recebeu uma citação, uma dívida rural ou <span>uma proposta de acordo?</span></h2>
        <p class="lead reveal">
          Retorno em até 24h nos dias úteis. Atendimento com sigilo e canal direto.
          Execução cível em todo o Brasil · fiscal: exceto no Pará.
        </p>
        <div class="contato__actions reveal">
          <a class="btn btn--whats btn--lg js-whatsapp" href="${whatsappLink}" target="_blank" rel="noopener noreferrer">
            <i data-lucide="message-circle" aria-hidden="true"></i>
            WhatsApp
          </a>
          <a class="btn btn--glass btn--lg" href="mailto:luizsantiago@luizsantiago.adv.br">
            <i data-lucide="mail" aria-hidden="true"></i>
            E-mail
          </a>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <img class="footer__watermark" src="${monogramaOuro}" alt="" width="418" height="438" aria-hidden="true" />
    <div class="container footer__grid">
      <div class="footer__brand">
        <img src="${logoBranco}" alt="Luiz Santiago Advocacia e Consultoria" width="1530" height="328" />
        <p class="footer__tag">Defesa do executado e do agronegócio</p>
        <p class="footer__desc">
          Defesa jurídica de pessoas, empresas e produtores em execuções,
          crédito rural, cobranças judiciais e proteção patrimonial.
        </p>
        <p class="footer__legal">
          Luiz Santiago Sociedade Individual de Advocacia<br />
          CNPJ 56.028.437/0001-98
        </p>
      </div>
      <nav class="footer__col" aria-label="Navegação do rodapé">
        <h3>Navegação</h3>
        <ul>
          ${navLinks.map((link) => `<li><a href="${link.href}">${link.label}</a></li>`).join('')}
        </ul>
      </nav>
      <div class="footer__col">
        <h3>Contato</h3>
        <ul>
          <li><a href="${whatsappLink}" target="_blank" rel="noopener noreferrer">(91) 99383-6796 via WhatsApp</a></li>
          <li><a href="mailto:luizsantiago@luizsantiago.adv.br">luizsantiago@luizsantiago.adv.br</a></li>
          <li>
            <address>
              Tv. Alm. Wandenkolk, 1243 — Sala 1201<br />
              Nazaré, Belém/PA · CEP 66055-030
            </address>
          </li>
        </ul>
      </div>
    </div>
    <div class="container footer__bottom">
      <p class="footer__aviso">
        Conteúdo meramente informativo. Este site não constitui oferta de serviços, captação de clientela,
        mercantilização da advocacia ou promessa de resultado, em observância ao Código de Ética e Disciplina
        da OAB e ao Provimento nº 205/2021. As informações apresentadas têm caráter geral e não substituem a
        análise individual de cada caso por profissional habilitado.
      </p>
      <p class="footer__copy">
        <span>© ${new Date().getFullYear()} Luiz Santiago Advocacia e Consultoria</span>
        <span>OAB/PA 18.239 · OAB/SP 549.491</span>
      </p>
    </div>
  </footer>

  <a class="whats js-whatsapp" href="${whatsappLink}" target="_blank" rel="noopener noreferrer" aria-label="Fale conosco pelo WhatsApp">
    <span class="whats__tip" aria-hidden="true">Fale conosco pelo WhatsApp</span>
    <svg viewBox="0 0 32 32" aria-hidden="true" fill="currentColor"><path d="M16 3C8.8 3 3 8.8 3 16c0 2.3.6 4.5 1.7 6.4L3 29l6.8-1.8c1.9 1 4 1.6 6.2 1.6 7.2 0 13-5.8 13-13S23.2 3 16 3zm0 23.7c-2 0-3.9-.5-5.5-1.5l-.4-.2-4 1.1 1.1-3.9-.3-.4c-1.1-1.7-1.6-3.7-1.6-5.8C5.3 10.1 10.1 5.3 16 5.3S26.7 10.1 26.7 16 21.9 26.7 16 26.7zm5.9-7.8c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7.1c-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-2-1.8-2.3s0-.5.1-.7l.5-.6c.2-.2.2-.3.3-.5s0-.4 0-.6c-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.8s1.2 3.3 1.4 3.5c.2.2 2.4 3.7 5.8 5.1.8.3 1.4.6 1.9.7.8.3 1.5.2 2.1.1.6-.1 1.9-.8 2.2-1.6s.3-1.4.2-1.6c-.1-.1-.3-.2-.6-.3z"/></svg>
  </a>
`

function initLucideIcons(root?: ParentNode): void {
  const lucideApi = (window as Window & { lucide?: { createIcons: (opts?: { root?: ParentNode }) => void } }).lucide
  if (!lucideApi) return
  lucideApi.createIcons(root ? { root } : undefined)
}

function initReveal(): void {
  const targets = document.querySelectorAll<HTMLElement>('.reveal')
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    targets.forEach((el) => el.classList.add('is-in'))
    return
  }

  const io = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-in')
        observer.unobserve(entry.target)
      })
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
  )

  targets.forEach((el) => io.observe(el))
}

function initHeader(): void {
  const header = document.getElementById('header')
  const burger = document.getElementById('burger')
  const nav = document.getElementById('nav')
  if (!header || !burger || !nav) return

  const sync = () => header.classList.toggle('is-stuck', window.scrollY > 40)
  sync()
  window.addEventListener('scroll', sync, { passive: true })

  const fechar = () => {
    nav.classList.remove('is-open')
    burger.setAttribute('aria-expanded', 'false')
    burger.setAttribute('aria-label', 'Abrir menu')
    document.body.style.overflow = ''
  }

  burger.addEventListener('click', () => {
    const aberto = nav.classList.toggle('is-open')
    burger.setAttribute('aria-expanded', String(aberto))
    burger.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu')
    document.body.style.overflow = aberto ? 'hidden' : ''
  })

  nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', fechar))

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) {
      fechar()
      burger.focus()
    }
  })

  const mapa: Record<string, string> = {
    inicio: 'inicio',
    atuacao: 'atuacao',
    situacoes: 'atuacao',
    sobre: 'sobre',
    digital: 'sobre',
    depoimentos: 'sobre',
    noticias: 'noticias',
    contato: 'contato',
  }

  const links: Record<string, HTMLAnchorElement> = {}
  nav.querySelectorAll<HTMLAnchorElement>('.nav__list a').forEach((a) => {
    links[a.getAttribute('href')!.slice(1)] = a
  })

  const spy = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (!entrada.isIntersecting) return
        const alvo = mapa[entrada.target.id]
        Object.keys(links).forEach((k) => {
          links[k].classList.toggle('is-active', k === alvo)
        })
      })
    },
    { rootMargin: '-45% 0px -50% 0px' }
  )

  document.querySelectorAll<HTMLElement>('main section[id]').forEach((s) => spy.observe(s))
}

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

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
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
            <span class="news-source-badge">${escapeHtml(a.source)}</span>
            <span>${formatNewsDate(a.date)}</span>
          </div>
          <h3>${escapeHtml(a.title)}</h3>
          ${a.snippet ? `<p class="news-snippet">${escapeHtml(a.snippet)}</p>` : ''}
          <a
            class="news-link"
            href="${escapeHtml(a.link)}"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ler matéria: ${escapeHtml(a.title)}"
          >
            Ler no site
            <i data-lucide="arrow-right" aria-hidden="true"></i>
          </a>
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
initReveal()
initHeader()
void loadNews()
