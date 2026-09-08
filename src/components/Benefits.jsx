import styles from '../styles/LandingPage.module.css'

const benefits = [
  ['Experiência prática', 'A aprendizagem ganha sentido quando o estudante conecta conteúdo, projetos e situações reais.'],
  ['Ambientes de aprendizagem', 'Espaços físicos e digitais podem apoiar estudo, colaboração e experimentação.'],
  ['Conexão profissional', 'Carreira e empregabilidade aparecem desde cedo como parte da jornada acadêmica.'],
  ['Apoio ao estudante', 'Informação acessível e canais bem definidos tornam a experiência mais simples.'],
]

export default function Benefits() {
  return (
    <section className={`${styles.section} ${styles.darkSection}`} id="diferenciais" aria-labelledby="benefits-title">
      <div className={styles.container}>
        <div className={`${styles.sectionHeading} ${styles.lightHeading}`}>
          <span className={styles.kicker}>Diferenciais</span>
          <h2 id="benefits-title">Mais do que mostrar estrutura: explicar valor.</h2>
          <p>Os diferenciais foram escritos como benefícios percebidos pelo estudante, em vez de apenas listar características.</p>
        </div>
        <div className={styles.benefitGrid}>
          {benefits.map(([title, description], index) => (
            <article className={styles.benefitCard} key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
