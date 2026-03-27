import './style.css'
import logo from './assets/logo-advocacia-ts.png'

const practiceAreas = [
  {
    title: 'Defesa do Executado',
    description:
      'Atuação especializada em execução de título extrajudicial, cumprimento de sentença, ação monitória e ação de cobrança, com estratégia processual para reduzir constrições e preservar patrimônio.'
  },
  {
    title: 'Direito Processual Civil',
    description:
      'Condução técnica de procedimentos e recursos no CPC, com domínio em temas sensíveis de instrução e prova, inclusive em debates sobre aspectos polêmicos da prova.'
  },
  {
    title: 'Bloqueios de Ativos (SISBAJUD)',
    description:
      'Estruturação de medidas para impugnação de penhoras on-line e pedidos de desbloqueio, com abordagem rápida para minimizar impactos financeiros e operacionais.'
  },
  {
    title: 'Gestão de Provas',
    description:
      'Planejamento e produção probatória orientada ao resultado, incluindo organização documental, prova técnica e suporte em perícias para fortalecer a defesa.'
  },
  {
    title: 'Direito Bancário',
    description:
      'Atuação em controvérsias com instituições financeiras, revisão de encargos e estratégias defensivas em cobranças e execuções de natureza bancária.'
  },
  {
    title: 'Defesa em IDPJ',
    description:
      'Defesa técnica no Incidente de Desconsideração da Personalidade Jurídica, com foco em afastar responsabilização indevida de sócios e proteger patrimônio pessoal.'
  }
]


const areaCards = practiceAreas
  .map(
    (area) => `
      <article class="area-card">
        <h3>${area.title}</h3>
        <p>${area.description}</p>
      </article>
    `
  )
  .join('')

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header class="site-header">
    <a class="brand" href="#inicio">
      <img class="brand-logo" src="${logo}" alt="Luiz Santiago Advocacia e Consultoria" />
    </a>
    <nav class="site-nav">
      <a href="#areas">Áreas</a>
      <a href="#equipe">Equipe</a>
      <a href="#digital">Atendimento digital</a>
    </nav>
    <a class="btn-outline" href="#contato">Entre em contato</a>
  </header>

  <main>
    <section id="inicio" class="hero">
      <div class="hero-content">
        <p class="eyebrow">Advocacia personalizada</p>
        <h1>Soluções jurídicas estratégicas para o escritório e para o crescimento do seu negócio.</h1>
        <p class="hero-text">Estrutura institucional inspirada em grandes escritórios, mantendo a identidade visual da sua marca: sobriedade, confiança e posicionamento premium. Atuação jurídica em todo o Brasil.</p>
        <div class="hero-actions">
          <a class="btn-primary" href="#contato">Falar com o escritório</a>
          <a class="btn-ghost" href="#areas">Conhecer áreas</a>
        </div>
      </div>
      <aside class="hero-aside">
        <div class="metric"><strong>+10</strong><span>Anos de experiência</span></div>
        <div class="metric"><strong>+1000</strong><span>Processos já atuados</span></div>
        <div class="metric"><strong>Nacional</strong><span>Atuação em todo o Brasil por meio do processo 100% digital</span></div>
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
            Atuação em mais de 1000 processos judiciais comprovados pelo Escavador
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
            alt="Luiz Antônio Santiago Corrêa"
            loading="lazy"
            decoding="async"
          />
        </div>
      </article>
    </section>

    <section id="digital" class="section alt">
      <div class="section-head">
        <p class="eyebrow">Atuação nacional</p>
        <h2>Atendimento em todo o Brasil por meio do Juízo 100% Digital</h2>
      </div>
      <article class="area-card">
        <p>
          O Juízo 100% Digital é a possibilidade de o cidadão valer-se da tecnologia para ter acesso à Justiça sem precisar comparecer fisicamente aos fóruns.
        </p>
        <p>
          Nesse modelo, todos os atos processuais são praticados exclusivamente por meio eletrônico e remoto, pela internet.
        </p>
        <p>
          Isso também se aplica às audiências e sessões de julgamento, que ocorrem exclusivamente por videoconferência.
        </p>
      </article>
    </section>

    <section id="contato" class="contact">
      <p class="eyebrow">Contato</p>
      <h2>Vamos conversar sobre a sua demanda?</h2>
      <p>Retorno em até 24h nos dias úteis. Atendimento com sigilo e canal direto. Atuamos em todo o Brasil.</p>
      <div class="hero-actions">
        <a class="btn-primary" href="https://wa.me/5591993836796" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        <a class="btn-ghost" href="mailto:luizsantiago@luizsantiago.adv.br">E-mail</a>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <p>© 2026 Luiz Santiago Advocacia e Consultoria</p>
    <p>OAB/PA 18.239 · CNPJ 56.028.437/0001-98</p>
    <p>luizsantiago@luizsantiago.adv.br</p>
    <p>Atuação jurídica em todo o Brasil</p>
    <p>Ed. Alm. Wandenkolk - Tv. Alm. Wandenkolk, 1243 - Sala 1201 - Umarizal, Belém - PA, 66055-030</p>
  </footer>
`
