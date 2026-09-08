import styles from '../styles/LandingPage.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} ${styles.footerGrid}`}>
        <div>
          <a className={`${styles.brand} ${styles.footerBrand}`} href="#topo">
            <span className={styles.brandMark}>U</span>
            <span className={styles.brandText}>UNEX<span>redesign</span></span>
          </a>
          <p>Projeto acadêmico de redesign. Não é um site oficial da UNEX.</p>
        </div>
        <div><strong>Navegação</strong><a href="#cursos">Cursos</a><a href="#unidades">Unidades</a><a href="#sobre">Sobre</a></div>
        <div><strong>Ingresso</strong><a href="#inscricao">Vestibular</a><a href="#inscricao">ENEM</a><a href="#inscricao">Transferência</a></div>
        <div><strong>Projeto</strong><span>React + Vite</span><span>CSS Modules</span><span>Framer Motion</span></div>
      </div>
      <div className={`${styles.container} ${styles.footerBottom}`}>
        <span>© 2026 — Trabalho didático.</span>
        <span>Conteúdo e ilustrações criados para fins acadêmicos.</span>
      </div>
    </footer>
  )
}
