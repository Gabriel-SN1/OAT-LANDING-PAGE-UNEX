import { motion } from 'framer-motion'
import styles from '../styles/LandingPage.module.css'

const options = [
  ['01', 'Vestibular', 'Processo de ingresso direto para iniciar sua graduação.'],
  ['02', 'Nota do ENEM', 'Use seu desempenho como uma das possibilidades de entrada.'],
  ['03', 'Transferência', 'Continue sua trajetória acadêmica em uma nova instituição.'],
  ['04', 'Segunda graduação', 'Amplie possibilidades profissionais com uma nova formação.'],
]

export default function AdmissionOptions() {
  return (
    <section className={styles.section} aria-labelledby="ingresso-title">
      <div className={styles.container}>
        <div className={styles.sectionHeading}>
          <span className={styles.kicker}>Formas de ingresso</span>
          <h2 id="ingresso-title">Um caminho simples para começar.</h2>
          <p>As opções foram agrupadas para reduzir a quantidade de decisões logo no primeiro contato.</p>
        </div>
        <div className={styles.admissionGrid}>
          {options.map(([number, title, description], index) => (
            <motion.article
              className={styles.admissionCard}
              key={title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.06 }}
            >
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <a href="#inscricao">Saiba como funciona <span aria-hidden="true">→</span></a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
