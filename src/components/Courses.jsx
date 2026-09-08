import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { courses } from '../data/courses'
import styles from '../styles/LandingPage.module.css'

const filters = ['Todos', 'Saúde', 'Gestão e Direito', 'Tecnologia']

export default function Courses() {
  const [active, setActive] = useState('Todos')
  const filtered = useMemo(
    () => active === 'Todos' ? courses : courses.filter((course) => course.area === active),
    [active],
  )

  return (
    <section className={`${styles.section} ${styles.softSection}`} id="cursos" aria-labelledby="courses-title">
      <div className={styles.container}>
        <div className={styles.headingRow}>
          <div className={styles.sectionHeading}>
            <span className={styles.kicker}>Graduação</span>
            <h2 id="courses-title">Encontre o curso que combina com você.</h2>
          </div>
          <p className={styles.headingAside}>Filtros curtos ajudam o candidato a explorar opções sem sair da página.</p>
        </div>

        <div className={styles.filterBar} role="group" aria-label="Filtrar cursos por área">
          {filters.map((filter) => (
            <button
              className={active === filter ? styles.filterActive : ''}
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className={styles.courseGrid}>
          {filtered.map((course, index) => (
            <motion.article
              layout
              className={styles.courseCard}
              key={course.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28, delay: index * 0.03 }}
            >
              <div className={styles.courseBadge}>{course.accent}</div>
              <div className={styles.courseMeta}><span>{course.area}</span><span>{course.duration}</span></div>
              <h3>{course.name}</h3>
              <p>{course.description}</p>
              <a href="#inscricao">Tenho interesse <span aria-hidden="true">↗</span></a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
