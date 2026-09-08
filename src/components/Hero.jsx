import { motion } from 'framer-motion'
import styles from '../styles/LandingPage.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="topo">
      <div className={`${styles.container} ${styles.heroGrid}`}>
        <motion.div
          className={styles.heroCopy}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <span className={styles.eyebrow}>Seu próximo capítulo pode começar agora</span>
          <h1>Transforme curiosidade em <em>carreira.</em></h1>
          <p>
            Descubra uma graduação que combine com seus planos e encontre um caminho de ingresso simples, claro e direto.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#cursos">Explorar cursos</a>
            <a className={styles.secondaryButton} href="#inscricao">Começar inscrição</a>
          </div>
          <ul className={styles.heroFacts} aria-label="Destaques da proposta">
            <li><strong>4</strong><span>cidades na Bahia</span></li>
            <li><strong>8+</strong><span>cursos no protótipo</span></li>
            <li><strong>100%</strong><span>responsivo</span></li>
          </ul>
        </motion.div>

        <motion.div
          className={styles.heroVisual}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          aria-label="Ilustração abstrata sobre vida universitária"
        >
          <div className={styles.visualGlow}></div>
          <div className={styles.visualCardMain}>
            <span className={styles.visualChip}>2026.2</span>
            <div className={styles.visualLines}><i></i><i></i><i></i></div>
            <strong>Escolha.<br/>Aprenda.<br/>Evolua.</strong>
          </div>
          <div className={`${styles.floatingCard} ${styles.floatingOne}`}><b>01</b><span>curso ideal</span></div>
          <div className={`${styles.floatingCard} ${styles.floatingTwo}`}><b>04</b><span>unidades</span></div>
          <div className={styles.heroOrb}></div>
        </motion.div>
      </div>
    </section>
  )
}
