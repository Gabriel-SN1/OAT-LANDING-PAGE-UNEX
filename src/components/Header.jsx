import { useState } from 'react'
import styles from '../styles/LandingPage.module.css'

const navItems = [
  ['Cursos', '#cursos'],
  ['Unidades', '#unidades'],
  ['Sobre', '#sobre'],
  ['Depoimentos', '#depoimentos'],
]

export default function Header() {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <header className={styles.header}>
      <div className={`${styles.container} ${styles.navWrap}`}>
        <a className={styles.brand} href="#topo" aria-label="Página inicial do redesign UNEX">
          <span className={styles.brandMark}>U</span>
          <span className={styles.brandText}>UNEX<span>redesign</span></span>
        </a>

        <button
          className={styles.menuButton}
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="menu-principal"
          aria-label="Abrir ou fechar menu"
        >
          <span></span><span></span><span></span>
        </button>

        <nav id="menu-principal" className={`${styles.nav} ${open ? styles.navOpen : ''}`} aria-label="Navegação principal">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <a className={styles.navCta} href="#inscricao" onClick={closeMenu}>Quero estudar</a>
        </nav>
      </div>
    </header>
  )
}
