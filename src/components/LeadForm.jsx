import { useState } from 'react'
import { campuses } from '../data/campuses'
import { courses } from '../data/courses'
import styles from '../styles/LandingPage.module.css'

export default function LeadForm() {
  const [sent, setSent] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <section className={`${styles.section} ${styles.leadSection}`} id="inscricao" aria-labelledby="lead-title">
      <div className={`${styles.container} ${styles.leadGrid}`}>
        <div className={styles.leadCopy}>
          <span className={styles.kicker}>Dê o primeiro passo</span>
          <h2 id="lead-title">Seu curso pode estar a um formulário de distância.</h2>
          <p>Escolha uma área e deixe um contato. Nesta versão acadêmica, o envio é apenas demonstrativo e nenhum dado é armazenado.</p>
          <div className={styles.leadNote}><strong>Privacidade por padrão</strong><span>O protótipo não envia nem salva informações pessoais.</span></div>
        </div>

        <form className={styles.formCard} onSubmit={handleSubmit}>
          <label>Nome
            <input required name="nome" type="text" autoComplete="name" placeholder="Seu nome" />
          </label>
          <div className={styles.formRow}>
            <label>E-mail
              <input required name="email" type="email" autoComplete="email" placeholder="voce@email.com" />
            </label>
            <label>Telefone
              <input required name="telefone" type="tel" autoComplete="tel" placeholder="(73) 99999-9999" />
            </label>
          </div>
          <div className={styles.formRow}>
            <label>Curso
              <select required name="curso" defaultValue="">
                <option value="" disabled>Selecione</option>
                {courses.slice(0, 6).map((course) => <option key={course.id}>{course.name}</option>)}
              </select>
            </label>
            <label>Unidade
              <select required name="unidade" defaultValue="">
                <option value="" disabled>Selecione</option>
                {campuses.map((campus) => <option key={campus.city}>{campus.city}</option>)}
              </select>
            </label>
          </div>
          <label className={styles.checkLabel}>
            <input required type="checkbox" />
            <span>Concordo em simular o envio dos dados para fins de demonstração.</span>
          </label>
          <button className={styles.primaryButton} type="submit">Quero receber informações</button>
          {sent && <p className={styles.formSuccess} role="status">Demonstração concluída. Nenhum dado foi enviado ou armazenado.</p>}
        </form>
      </div>
    </section>
  )
}
