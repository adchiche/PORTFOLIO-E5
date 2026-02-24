import { useEffect, useState } from 'react'
import './App.css'
import phpImg from './Images/php.png'
import javaImg from './Images/java.png'
import sqlImg from './Images/sql.png'
import pythonImg from './Images/python.png'
import symfonyImg from './Images/symfony.png'
import htmlImg from './Images/html.png'
import cssImg from './Images/css.png'
import jsImg from './Images/javascript.png'
import profileImage from './Images/photo_profil.jpg'
import allperf from './Images/allperf.png'
import elitTechnologie from './Images/elit-technologie.png'
import immoSync from './Images/immo-sync.png'

function Typing({ text, speed = 80, pause = 1000 }) {
  const [display, setDisplay] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timeout
    if (!isDeleting && display.length < text.length) {
      timeout = setTimeout(() => setDisplay(text.slice(0, display.length + 1)), speed)
    } else if (!isDeleting && display.length === text.length) {
      timeout = setTimeout(() => setIsDeleting(true), pause)
    } else if (isDeleting && display.length > 0) {
      timeout = setTimeout(() => setDisplay(text.slice(0, display.length - 1)), Math.round(speed / 1.8))
    } else if (isDeleting && display.length === 0) {
      timeout = setTimeout(() => setIsDeleting(false), speed)
    }
    return () => clearTimeout(timeout)
  }, [display, isDeleting, text, speed, pause])

  return (
    <span className="typing" aria-live="polite">
      {display}
      <span className="caret" aria-hidden />
    </span>
  )
}

function App() {
  const [theme, setTheme] = useState('light')
  const [modal, setModal] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Gestion du thème
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  // Gestion du défilement pour l'effet de rétrécissement de la navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    document.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])

  // Fermer le menu mobile lors du redimensionnement de la fenêtre
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Fermer le menu mobile lors du clic sur un lien
  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <div className="site-root">
      {/* Mobile Menu Overlay */}
      <div
        className="mobile-overlay"
        data-visible={mobileMenuOpen}
        onClick={closeMobileMenu}
        aria-hidden={!mobileMenuOpen}
      />

      {/* Navigation Bar */}
      <nav className={`topnav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          {/* Mobile Menu Toggle */}
          <button
            className="menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Menu"
          >
            <span className="hamburger" />
          </button>

          {/* Navigation Links */}
          <div
            className="nav-links"
            data-visible={mobileMenuOpen}
            onClick={closeMobileMenu}
          >
            <a href={import.meta.env.BASE_URL} className="nav-link active">Accueil</a>
            <a href={`${import.meta.env.BASE_URL}allperf.html`} className="nav-link">Stage Allperf</a>
            <a href={`${import.meta.env.BASE_URL}elit-technologie.html`} className="nav-link">Stage ElitTechnologie</a>
            <a href={`${import.meta.env.BASE_URL}immo-sync.html`} className="nav-link">ImmoSync</a>

          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-inner">
          <div className="presentation">
            <h1>
              Salut, je suis <span className="name">Adam Chiche</span>
            </h1>
            <section aria-label="Présentation courte">
              <div className="presentation-inner">
                <div style={{ marginBottom: '0.6rem' }}>
                  <Typing text={"Développement d'applications et solutions logicielles"} />
                </div>
                <p>
                  Actuellement étudiant en deuxième année de <strong>BTS Services Informatiques aux
                    Organisations (SIO)</strong>, option <strong>SLAM</strong> (Solutions
                  Logicielles et Applications Métier).
                </p>
                <p>
                  Cette formation m'a permis d'acquérir des compétences techniques en
                  développement informatique, notamment en <strong>Java, PHP, JavaScript,
                    HTML</strong> et <strong>CSS</strong> à travers des projets réalisés
                  dans un cadre pédagogique. J'ai appris à analyser des besoins,
                  concevoir des applications, structurer du code et travailler
                  avec des bases de données.
                </p>
                <p>
                  Le BTS SIO m'a également apporté une méthodologie de travail rigoureuse,
                  incluant la compréhension d'un cahier des charges, la documentation
                  des solutions développées et le respect des contraintes techniques —
                  des compétences transférables et utiles dans de nombreux contextes
                  professionnels.
                </p>
              </div>
              <div className="hero-cta">
                <a className="btn" href={`${import.meta.env.BASE_URL}CV-BTS-SIO.pdf`} download>
                  Télécharger mon CV
                </a>
                <a className="btn ghost" href={`${import.meta.env.BASE_URL}CV-BTS-SIO.pdf`} target="_blank" rel="noopener noreferrer">
                  Consulter mon CV
                </a>
              </div>
            </section>
          </div>

          <div className="profile-image-container">
            <img
              src={profileImage}
              alt="Adam Chiche - Développeur d'applications"
              className="profile-image"
              loading="lazy"
            />
          </div>
        </div>
        {/* removed decorative blob/orb per user request */}
      </header>

      <section id="parcours" className="parcours section">
        <h2 className="bts-title">MON PARCOURS</h2>
        <div className="parcours-grid">
          <article className="parcours-card">
            <h3>2023-2024</h3>
            <p>
              En 2023–2024, j’ai obtenu un baccalauréat général, mention Assez Bien,
              avec les spécialités Mathématiques et Physique-Chimie, au lycée Ozar Hatorah de Créteil.
              Cette formation m’a permis de développer des compétences en raisonnement logique,
              en analyse de problèmes et en méthode de travail, notamment à travers la résolution
              d’exercices complexes et l’application de notions scientifiques structurées.
            </p>
          </article>

          <article className="parcours-card">
            <h3>2024-2026 (en cours)</h3>
            <p>
              Depuis 2024, je suis étudiant en BTS Services Informatiques aux Organisations (SIO), option SLAM (Solutions Logicielles et Applications Métier).
              Cette formation me permet d’acquérir et de renforcer des compétences en développement logiciel et web,
              à travers l’apprentissage de plusieurs langages de programmation et la réalisation de projets pédagogiques.
              Le BTS SIO m’a également apporté une méthodologie de travail rigoureuse, incluant l’analyse des besoins,
              la conception de solutions applicatives et la structuration du code dans un cadre professionnel.
            </p>
          </article>
        </div>
      </section>

      <section id="bts" className="bts-section section">
        <h2 className="bts-title">PRÉSENTATION DU BTS SIO</h2>
        <p className="bts-intro">
          Le BTS Services Informatiques aux Organisations (SIO) est un tremplin
          dynamique pour ceux qui souhaitent façonner l'avenir numérique. Ce
          programme plonge les étudiants dans deux spécialités complémentaires
          : le développement d'applications (SLAM) et l'administration des
          infrastructures (SISR).
        </p>

        <div className="bts-cards">
          <article className="bts-card">
            <h3>Option SLAM (Solutions Logicielles et Applications Métier)</h3>
            <p>
              Cette option couvre la conception, le développement et la gestion
              d'applications logicielles. Les étudiants apprennent à créer des
              solutions adaptées aux entreprises : logiciels, sites web et
              applications mobiles.
            </p>
            <ul>
              <li>Compétences : programmation, conception, bases de données</li>
              <li>Technos fréquentes : Java, PHP, JavaScript, frameworks web</li>
              <li>Objectif : produire des applications fiables et maintenables</li>
            </ul>
          </article>

          <article className="bts-card">
            <h3>Option SISR (Solutions d'Infrastructure, Systèmes et Réseaux)</h3>
            <p>
              Cette spécialisation porte sur l'administration et la gestion des
              infrastructures informatiques. Les étudiants apprennent à assurer
              la disponibilité, la sécurité et la performance des systèmes.
            </p>
            <ul>
              <li>Compétences : réseaux, administration système, sécurité</li>
              <li>Technos fréquentes : serveurs, virtualisation, outils réseau</li>
              <li>Objectif : maintenir des infrastructures robustes et sûres</li>
            </ul>
          </article>
        </div>
        <div className="bts-cta-wrap">
          <a className="btn bts-cta" href="#synthese">Consulter le tableau de synthèse</a>
        </div>

      </section>

      <section id="skills" className="section skills">
        <h2 className="bts-title">COMPÉTENCES</h2>
        <div className="skills-grid">
          {[
            { key: 'PHP', src: phpImg },
            { key: 'JAVA', src: javaImg },
            { key: 'SQL', src: sqlImg },
            { key: 'PYTHON', src: pythonImg },
            { key: 'SYMFONY', src: symfonyImg },
            { key: 'HTML', src: htmlImg },
            { key: 'CSS', src: cssImg },
            { key: 'JAVASCRIPT', src: jsImg },
          ].map((s) => (
            <div key={s.key} className="skill-card">
              <div className="skill-logo">
                <img className="skill-logo-img" src={s.src} alt={s.key} />
              </div>
              <div className="skill-name">{s.key}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Section Stages */}
      <section id="stages" className="section">
        <h2 className="bts-title">STAGES</h2>
        <div className="projects-grid">
          {/* Stage Allperf */}
          <a href={`${import.meta.env.BASE_URL}allperf.html`} id="allperf-project" className="project-card project-link" aria-label="Ouvrir la page Allperf">
            <div className="project-image">
              <img
                src={allperf}
                alt="Stage Allperf"
                loading="lazy"
                style={{ objectPosition: 'center center' }}
              />
            </div>
            <div className="project-content">
              <h3>Stage de première année chez Allperf</h3>
            </div>
          </a>

          {/* Stage ElitTechnologie */}
          <a href={`${import.meta.env.BASE_URL}elit-technologie.html`} id="elittechnologie-project" className="project-card project-link" aria-label="Ouvrir la page ElitTechnologie">
            <div className="project-image">
              <img
                src={elitTechnologie}
                alt="Stage ElitTechnologie"
                loading="lazy"
                style={{ objectPosition: 'center center' }}
              />
            </div>
            <div className="project-content">
              <h3>Stage réalisé chez ElitTechnologie</h3>
            </div>
          </a>

          <h2 className="bts-title">PROJETS</h2>
          {/* Stage ImmoSync */}
          <a href={`${import.meta.env.BASE_URL}immo-sync.html`} id="immosync-project" className="project-card project-link" aria-label="Ouvrir la page ImmoSync">
            <div className="project-image">
              <img
                src={immoSync}
                alt="Stage ImmoSync"
                loading="lazy"
                style={{ objectPosition: 'center center' }}
              />
            </div>
            <div className="project-content">
              <p>Application web dédiée à la gestion et au suivi de travaux,
                permettant de centraliser les projets, de planifier les interventions,
                de suivre l’avancement des tâches et de faciliter la coordination entre les différents acteurs,
                tout en offrant diverses fonctionnalités de gestion.
              </p>

            </div>
          </a>
          <footer className="site-footer">
            <p>Me contacter sur l'adresse mail : <a href="https://mail.google.com/mail/?view=cm&fs=1&to=adamchichepro@gmail.com" target="_blank" rel="noopener noreferrer">adamchichepro@gmail.com</a></p>
          </footer>
        </div>
      </section>




    </div>
  )
}

export default App
