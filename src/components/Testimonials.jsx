import { testimonials } from '../data/testimonials'
import styles from '../styles/LandingPage.module.css'

export default function Testimonials() {
  return (
    <section className={`${styles.section} ${styles.softSection}`} id="depoimentos" aria-labelledby="testimonials-title">
      <div className={styles.container}>
        <div className={styles.sectionHeading}>
          <span className={styles.kicker}>Depoimentos demonstrativos</span>
          <h2 id="testimonials-title">Histórias tornam a escolha mais próxima.</h2>
          <p>Os nomes e relatos abaixo são fictícios e foram criados exclusivamente para o protótipo acadêmico.</p>
        </div>
        <div className={styles.testimonialGrid}>
          {testimonials.map((item) => (
            <blockquote className={styles.testimonialCard} key={item.name}>
              <span className={styles.quoteMark}>“</span>
              <p>{item.quote}</p>
              <footer><strong>{item.name}</strong><span>{item.course}</span></footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
