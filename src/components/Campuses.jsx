import { campuses } from '../data/campuses'
import styles from '../styles/LandingPage.module.css'

export default function Campuses() {
  return (
    <section className={styles.section} id="unidades" aria-labelledby="campuses-title">
      <div className={styles.container}>
        <div className={styles.headingRow}>
          <div className={styles.sectionHeading}>
            <span className={styles.kicker}>Presença regional</span>
            <h2 id="campuses-title">Quatro cidades. Novas possibilidades.</h2>
          </div>
          <p className={styles.headingAside}>Ilustrações autorais substituem fotografias do site institucional, respeitando a orientação da atividade.</p>
        </div>
        <div className={styles.campusGrid}>
          {campuses.map((campus) => (
            <article className={styles.campusCard} key={campus.city}>
              <img src={campus.image} alt={`Ilustração abstrata criada para representar a unidade de ${campus.city}`} loading="lazy" width="800" height="520" />
              <div className={styles.campusBody}>
                <span>Bahia</span>
                <h3>{campus.city}</h3>
                <p>{campus.description}</p>
                <a href="#inscricao">Selecionar unidade <span aria-hidden="true">→</span></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
