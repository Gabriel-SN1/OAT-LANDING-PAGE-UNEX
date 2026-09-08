import { motion } from 'framer-motion'
import styles from '../styles/LandingPage.module.css'

export default function About() {
  return (
    <section className={styles.section} id="sobre" aria-labelledby="about-title">
      <div className={`${styles.container} ${styles.aboutGrid}`}>
        <motion.div
          className={styles.aboutVisual}
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className={styles.aboutPanel}>
            <span>IDEIAS</span><span>PRÁTICA</span><span>CONEXÕES</span>
            <strong>Uma experiência acadêmica construída em movimento.</strong>
          </div>
        </motion.div>
        <div className={styles.aboutCopy}>
          <span className={styles.kicker}>Sobre a proposta</span>
          <h2 id="about-title">Ensino superior com informação mais clara e escolhas mais humanas.</h2>
          <p>
            Neste redesign, a apresentação institucional deixa de ser um bloco extenso e passa a explicar, em poucas linhas, o valor da experiência universitária. O foco é orientar o candidato sem sobrecarregá-lo.
          </p>
          <p>
            A interface usa hierarquia visual, espaços generosos, linguagem direta e chamadas para ação consistentes para conduzir a navegação.
          </p>
          <a className={styles.textLink} href="#diferenciais">Conhecer os diferenciais <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </section>
  )
}
