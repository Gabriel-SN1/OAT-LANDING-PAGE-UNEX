import { news } from '../data/news'
import styles from '../styles/LandingPage.module.css'

export default function News() {
  return (
    <section className={styles.section} aria-labelledby="news-title">
      <div className={styles.container}>
        <div className={styles.headingRow}>
          <div className={styles.sectionHeading}>
            <span className={styles.kicker}>Conteúdo</span>
            <h2 id="news-title">Informação que ajuda na decisão.</h2>
          </div>
          <p className={styles.headingAside}>Notícias foram reinterpretadas como conteúdo útil ao futuro estudante. Todos os títulos são autorais e demonstrativos.</p>
        </div>
        <div className={styles.newsGrid}>
          {news.map((item, index) => (
            <article className={styles.newsCard} key={item.title}>
              <div className={styles.newsVisual}><span>0{index + 1}</span></div>
              <div>
                <span className={styles.newsTag}>{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
                <a href="#inscricao">Continuar jornada <span aria-hidden="true">→</span></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
