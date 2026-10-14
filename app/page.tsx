import ThemeToggle from "./theme-toggle";
import Logo from "./logo";

const whatsappNumber = "5511999998888";
const defaultMessage =
  "Olá! Vim pelo site da Nexus Tech e gostaria de solicitar um orçamento para o meu equipamento.";
const whatsappUrl = `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${encodeURIComponent(
  defaultMessage
)}&type=phone_number&app_absent=0`;

const whatsappQrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(
  whatsappUrl
)}`;

const lojaVirtualUrl = "https://loja.nexustech.com.br";
const instagramUrl = "https://www.instagram.com/nexustech";
const linkedinUrl = "https://www.linkedin.com/company/nexustech";
const youtubeUrl = "https://www.youtube.com";

const services = [
  {
    icon: "💻",
    title: "Manutenção de Computadores & Formatação",
    description:
      "Formatação completa com backup seguro de fotos e arquivos. Remoção de vírus, limpeza técnica interna e aplicação de pasta térmica de alta condutividade.",
    tags: ["Formatação", "Backup Seguro", "Limpeza Química"]
  },
  {
    icon: "🔧",
    title: "Manutenção Especializada em Notebooks",
    description:
      "Reparo avançado em placa-mãe, troca de telas quebradas, teclados, reparo de carcaça e dobradiças, conector de carga (DC Jack) e substituição de baterias.",
    tags: ["Troca de Tela", "Reparo em Carcaça", "Troca de Bateria"]
  },
  {
    icon: "🖨️",
    title: "Manutenção de Impressoras (Jato e Tanque)",
    description:
      "Assistência completa para impressoras Epson EcoTank, Canon e HP. Desentupimento de cabeça de impressão, troca e reset de almofadas e manutenção mecânica.",
    tags: ["Epson EcoTank", "Reset de Almofadas", "Desentupimento"]
  },
  {
    icon: "🚀",
    title: "Upgrades de Hardware e Desempenho",
    description:
      "Multiplique a velocidade do seu computador ou notebook com instalação de SSD NVMe/SATA, expansão de memória RAM e placas de vídeo dedicadas.",
    tags: ["SSD Ultrarrápido", "Memória RAM", "Mais Velocidade"]
  },
  {
    icon: "🌐",
    title: "Redes Estruturadas e Servidores",
    description:
      "Configuração e implantação de redes Wi-Fi de alta cobertura, roteadores empresariais, switches gerenciáveis e servidores locais para empresas.",
    tags: ["Wi-Fi Corporativo", "Cabeamento de Rede", "Servidores"]
  },
  {
    icon: "🏢",
    title: "Suporte de TI para Empresas",
    description:
      "Planos de suporte preventivo e corretivo sob medida para escritórios, clínicas e empresas, com atendimento rápido, SLA garantido e suporte prioritário.",
    tags: ["Contrato Mensal", "SLA Rápido", "Consultoria TI"]
  }
];

const brands = [
  { name: "Intel", logo: "/brands/intel.svg" },
  { name: "AMD", logo: "/brands/amd.svg" },
  { name: "NVIDIA", logo: "/brands/nvidia.svg" },
  { name: "Kingston", logo: "/brands/kingston.svg" },
  { name: "Logitech", logo: "/brands/logitech.svg" },
  { name: "Epson", logo: "/brands/epson.svg" },
  { name: "ASUS", logo: "/brands/asus.svg" },
  { name: "Dell", logo: "/brands/dell.svg" }
];

const testimonials = [
  {
    name: "Carlos Eduardo Ribeiro",
    role: "Diretor de Operações",
    comment:
      "Excelente atendimento da Nexus Tech! Levei meu notebook que não ligava e diagnosticaram com rapidez. O reparo na placa ficou pronto antes do prazo combinado e com laudo técnico impecável.",
    stars: 5
  },
  {
    name: "Mariana Souza",
    role: "Arquiteta & Designer",
    comment:
      "Instalaram um SSD NVMe na minha estação de trabalho e a máquina virou um foguete para renderização 3D. Fizeram o backup de todos os projetos com total segurança. Atendimento de altíssimo nível.",
    stars: 5
  },
  {
    name: "Dr. Marcos Vinicius",
    role: "Gestor de Clínica Médica",
    comment:
      "A equipe da Nexus Tech cuida da infraestrutura de rede e dos computadores da clínica há anos. Suporte ágil, seguro e com profissionais extremamente qualificados. Recomendo de olhos fechados.",
    stars: 5
  }
];

export default function Home() {
  return (
    <main>
      {/* HEADER / NAVBAR FIXO */}
      <header className="site-header">
        <div className="container header-container">
          <a href="#" className="header-logo-link" aria-label="Nexus Tech Início">
            <Logo size="md" />
          </a>

          <nav className="header-nav">
            <a href="#servicos" className="nav-link">
              Serviços
            </a>
            <a href="#sobre" className="nav-link">
              Sobre
            </a>
            <a href="#marcas" className="nav-link">
              Marcas
            </a>
            <a href="#avaliacoes" className="nav-link">
              Avaliações
            </a>
            <a href="#contato" className="nav-link">
              Contato
            </a>
            <a
              href={lojaVirtualUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link nav-link-loja"
            >
              Loja Online ↗
            </a>
          </nav>

          <div className="header-actions">
            <ThemeToggle />
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary header-cta"
            >
              Pedir Orçamento
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="badge-pill">
              <span className="badge-dot"></span>
              <span>Mais de 10 anos de excelência em soluções de informática</span>
            </div>
            <h1>
              Assistência Técnica Especializada em{" "}
              <span className="text-gradient">Computadores, Notebooks e Impressoras.</span>
            </h1>
            <p className="hero-lead">
              Seu equipamento lento ou com defeito não precisa ser a sua rotina. Realizamos
              diagnóstico transparente, manutenção ágil e upgrades de alta performance com
              garantia e confiabilidade comprovadas.
            </p>
            <div className="hero-actions">
              <a
                className="btn btn-primary btn-lg"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>💬 Falar no WhatsApp Agora</span>
              </a>
              <a className="btn btn-secondary btn-lg" href="#servicos">
                Ver Todos os Serviços
              </a>
            </div>
            <div className="hero-trust">
              <div className="trust-item">
                <span className="trust-icon">✓</span>
                <span>Orçamento com laudo claro</span>
              </div>
              <div className="trust-item">
                <span className="trust-icon">✓</span>
                <span>Peças originais com garantia</span>
              </div>
              <div className="trust-item">
                <span className="trust-icon">✓</span>
                <span>Suporte residencial e empresarial</span>
              </div>
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-card-header">
              <span className="hero-card-badge">SUPORTE COMPLETO</span>
              <h2>Atendimento Técnico Ágil</h2>
            </div>
            <p>
              Soluções completas para clientes residenciais e contratos corporativos para empresas,
              com atendimento humano e sem termos complicados.
            </p>
            <ul className="hero-card-list">
              <li>
                <strong>Notebooks:</strong> Telas, carcaças quebradas, teclados e baterias
              </li>
              <li>
                <strong>Computadores:</strong> Limpeza química, remoção de vírus e formatação
              </li>
              <li>
                <strong>Impressoras:</strong> Desentupimento e manutenção em tanque de tinta
              </li>
              <li>
                <strong>Upgrades:</strong> SSD NVMe e memórias para turbinar o desempenho
              </li>
            </ul>
            <div className="hero-card-footer">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-card-action"
              >
                Solicitar Diagnóstico sem Compromisso →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE SERVIÇOS */}
      <section id="servicos" className="section">
        <div className="container">
          <div className="section-head text-center">
            <span className="section-subtitle">O QUE FAZEMOS DE MELHOR</span>
            <h2>Serviços Especializados da Nexus Tech</h2>
            <p className="section-copy mx-auto">
              Equipe técnica altamente qualificada para manter seus equipamentos rápidos, confiáveis
              e prontos para trabalhar.
            </p>
          </div>

          <div className="services-grid">
            {services.map((item) => (
              <article key={item.title} className="service-card">
                <div className="service-icon-wrap">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="service-tags">
                  {item.tags.map((tag) => (
                    <span key={tag} className="tag-badge">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="service-link"
                >
                  Consultar sobre este serviço →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BANNER LOJA VIRTUAL */}
      <section className="section-banner-loja">
        <div className="container banner-loja-wrap">
          <div className="banner-loja-content">
            <span className="banner-loja-tag">LOJA ONLINE OFICIAL</span>
            <h2>Precisa de periféricos, cabos ou peças para seu computador?</h2>
            <p>
              Conheça nossa loja virtual com os melhores produtos homologados, pronta entrega e
              condições imperdíveis de pagamento.
            </p>
          </div>
          <div className="banner-loja-btn">
            <a
              href={lojaVirtualUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              Acessar Loja Virtual Nexus Tech →
            </a>
          </div>
        </div>
      </section>

      {/* SEÇÃO SOBRE NÓS / DIFERENCIAIS */}
      <section id="sobre" className="section accent">
        <div className="container split">
          <div>
            <span className="section-subtitle">CONFIANÇA E EXPERIÊNCIA</span>
            <h2>Por que escolher a Nexus Tech?</h2>
            <p>
              Nossa missão é oferecer atendimento transparente e resolutivo. Entendemos o quanto o
              seu computador é vital para seus estudos, trabalho e lazer. Por isso, tratamos cada
              máquina com o máximo cuidado, laudos claros e honestidade no diagnóstico.
            </p>
            <div className="pillars-list">
              <div className="pillar-item">
                <span className="pillar-bullet">01</span>
                <div>
                  <strong>Diagnóstico Transparente</strong>
                  <p>Você sabe exatamente o que precisa ser feito antes de qualquer cobrança.</p>
                </div>
              </div>
              <div className="pillar-item">
                <span className="pillar-bullet">02</span>
                <div>
                  <strong>Garantia e Peças de Qualidade</strong>
                  <p>Trabalhamos exclusivamente com componentes homologados e confiáveis.</p>
                </div>
              </div>
              <div className="pillar-item">
                <span className="pillar-bullet">03</span>
                <div>
                  <strong>Agilidade na Entrega</strong>
                  <p>Compromisso com prazos rápidos para minimizar o tempo longe do seu aparelho.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="stats-col">
            <div className="stats-box">
              <div className="stat-card">
                <span className="stat-number">+10</span>
                <strong className="stat-label">Anos de Atuação</strong>
                <span className="stat-desc">Tradição consolidada em tecnologia</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">+12k</span>
                <strong className="stat-label">Máquinas Atendidas</strong>
                <span className="stat-desc">Computadores, notebooks e impressoras</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">4.9★</span>
                <strong className="stat-label">Avaliação de Clientes</strong>
                <span className="stat-desc">Reconhecimento pela honestidade técnica</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">100%</span>
                <strong className="stat-label">Suporte Dedicado</strong>
                <span className="stat-desc">Atendimento residencial e corporativo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE MARCAS PARCEIRAS */}
      <section id="marcas" className="section">
        <div className="container">
          <div className="section-head text-center">
            <span className="section-subtitle">TECNOLOGIA DE PONTA</span>
            <h2>As Melhores Marcas do Mercado</h2>
            <p className="section-copy mx-auto">
              Utilizamos peças, componentes e acessórios dos fabricantes líderes globais em
              confiabilidade e desempenho.
            </p>
          </div>

          <div className="brands-grid">
            {brands.map((brand) => (
              <div key={brand.name} className="brand-card" title={brand.name}>
                <img
                  src={brand.logo}
                  alt={`Logotipo da marca ${brand.name}`}
                  className="brand-logo-img"
                  width={120}
                  height={40}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO DE AVALIAÇÕES / DEPOIMENTOS */}
      <section id="avaliacoes" className="section testimonials-section">
        <div className="container">
          <div className="section-head text-center">
            <span className="section-subtitle">OPINIÃO DE QUEM CONFIA</span>
            <h2>O Que Nossos Clientes Dizem</h2>
            <p className="section-copy mx-auto">
              A satisfação dos nossos clientes é o nosso maior cartão de visitas.
            </p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((item) => (
              <div key={item.name} className="testimonial-card">
                <div className="testimonial-stars">{"★".repeat(item.stars)}</div>
                <p className="testimonial-text">"{item.comment}"</p>
                <div className="testimonial-author">
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO DE VÍDEOS / TECNOLOGIA */}
      <section className="section videos">
        <div className="container">
          <div className="videos-head">
            <div>
              <span className="badge-pill-light">TECNOLOGIA EM FOCO</span>
              <h2>Acompanhe Nossos Conteúdos de Tecnologia</h2>
              <p className="section-copy text-white-muted">
                Dicas de manutenção, análises de hardware e novidades do mundo tech para você.
              </p>
            </div>
            <a
              className="btn btn-secondary"
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Acessar Canal de Vídeos →
            </a>
          </div>
          <div className="video-grid">
            <div className="video-card">
              <iframe
                title="Montagem e Manutenção de Hardware - Nexus Tech"
                src="https://www.youtube.com/embed/66K4pUuLX2g"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <div className="video-card">
              <iframe
                title="Procedimento Técnico de Diagnóstico e Limpeza"
                src="https://www.youtube.com/embed/D6965N796BE"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE LOCALIZAÇÃO E CONTATO */}
      <section id="contato" className="section contact-section">
        <div className="container split">
          <div className="contact-details">
            <span className="section-subtitle">VENHA NOS VISITAR</span>
            <h2>Onde Estamos</h2>
            <p>
              Venha tomar um café conosco ou envie uma mensagem no WhatsApp para adiantar o seu
              atendimento.
            </p>

            <div className="contact-info-list">
              <div className="contact-info-item">
                <span className="contact-icon">📍</span>
                <div>
                  <strong>Endereço:</strong>
                  <p>Av. Paulista, 1000 - Bela Vista</p>
                  <p>São Paulo / SP - CEP: 01310-100</p>
                </div>
              </div>

              <div className="contact-info-item">
                <span className="contact-icon">🕒</span>
                <div>
                  <strong>Horário de Funcionamento:</strong>
                  <p>Segunda à Sexta: 08:30 às 18:30</p>
                  <p>Sábado: 09:00 às 13:00</p>
                  <p className="text-closed">Domingo: Fechado</p>
                </div>
              </div>

              <div className="contact-info-item">
                <span className="contact-icon">📞</span>
                <div>
                  <strong>Telefone e WhatsApp:</strong>
                  <p>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      (11) 99999-8888
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* BOX DE CONVERSÃO WHATSAPP / QR */}
            <div className="contact-cta">
              <div className="contact-cta-copy">
                <strong>Atendimento Imediato no WhatsApp</strong>
                <p>Clique no botão ou aponte a câmera do seu celular para o QR Code ao lado.</p>
                <a
                  className="btn btn-primary"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  💬 Iniciar Conversa no WhatsApp
                </a>
              </div>
              <div className="qr-wrap">
                <img
                  src={whatsappQrUrl}
                  alt="QR code para WhatsApp da Nexus Tech"
                  width={92}
                  height={92}
                  loading="lazy"
                />
                <span>Escanear QR Code</span>
              </div>
            </div>
          </div>

          <div className="map-column">
            <div className="map-wrap">
              <iframe
                title="Localização da Nexus Tech"
                src="https://www.google.com/maps?q=-23.561492,-46.655881&z=17&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER COMPLETO */}
      <footer className="site-footer">
        <div className="container footer-top">
          <div className="footer-col brand-col">
            <Logo size="lg" />
            <p className="footer-desc">
              Assistência técnica especializada em computadores, notebooks e impressoras. Mais de
              uma década trazendo tecnologia e confiança com laudo transparente e garantia real.
            </p>
            <div className="footer-socials">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Instagram da Nexus Tech"
              >
                Instagram
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="LinkedIn da Nexus Tech"
              >
                LinkedIn
              </a>
              <a
                href={youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="YouTube da Nexus Tech"
              >
                YouTube
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Navegação Rápida</h4>
            <ul className="footer-links">
              <li>
                <a href="#servicos">Nossos Serviços</a>
              </li>
              <li>
                <a href="#sobre">Sobre a Nexus Tech</a>
              </li>
              <li>
                <a href="#marcas">Marcas Parceiras</a>
              </li>
              <li>
                <a href="#avaliacoes">Avaliações de Clientes</a>
              </li>
              <li>
                <a href="#contato">Localização & Contato</a>
              </li>
              <li>
                <a href={lojaVirtualUrl} target="_blank" rel="noopener noreferrer">
                  Loja Virtual Online ↗
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Serviços Principais</h4>
            <ul className="footer-links">
              <li>
                <a href="#servicos">Formatação e Backup</a>
              </li>
              <li>
                <a href="#servicos">Conserto de Notebooks</a>
              </li>
              <li>
                <a href="#servicos">Manutenção de Impressoras</a>
              </li>
              <li>
                <a href="#servicos">Upgrade para SSD</a>
              </li>
              <li>
                <a href="#servicos">Redes e Servidores</a>
              </li>
              <li>
                <a href="#servicos">Suporte TI para Empresas</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Contato & Horários</h4>
            <p className="footer-text">
              <strong>Endereço:</strong>
              <br />
              Av. Paulista, 1000 - Bela Vista
              <br />
              São Paulo / SP - CEP: 01310-100
            </p>
            <p className="footer-text">
              <strong>WhatsApp:</strong> (11) 99999-8888
            </p>
            <p className="footer-text">
              <strong>Seg à Sex:</strong> 08:30 às 18:30
              <br />
              <strong>Sáb:</strong> 09:00 às 13:00
              <br />
              <strong>Dom:</strong> Fechado
            </p>
          </div>
        </div>

        <div className="container footer-bottom">
          <p>© {new Date().getFullYear()} Nexus Tech. Todos os direitos reservados.</p>
          <p className="footer-cred">
            Tecnologia e Assistência Técnica Especializada em Computadores e Redes.
          </p>
        </div>
      </footer>

      {/* BOTÃO FLUTUANTE DE WHATSAPP COM BADGE */}
      <a
        className="whatsapp-float"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir WhatsApp da Nexus Tech para atendimento imediato"
      >
        <span className="whatsapp-float-icon">💬</span>
        <span className="whatsapp-float-text">WhatsApp</span>
        <span className="whatsapp-pulse"></span>
      </a>
    </main>
  );
}
