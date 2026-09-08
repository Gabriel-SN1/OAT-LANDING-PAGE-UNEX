import Header from './components/Header'
import Hero from './components/Hero'
import AdmissionOptions from './components/AdmissionOptions'
import Courses from './components/Courses'
import About from './components/About'
import Benefits from './components/Benefits'
import Campuses from './components/Campuses'
import Testimonials from './components/Testimonials'
import News from './components/News'
import LeadForm from './components/LeadForm'
import Footer from './components/Footer'
import styles from './styles/LandingPage.module.css'

function App() {
  return (
    <div className={styles.page}>
      <a className={styles.skipLink} href="#conteudo">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <Hero />
        <AdmissionOptions />
        <Courses />
        <About />
        <Benefits />
        <Campuses />
        <Testimonials />
        <News />
        <LeadForm />
      </main>
      <Footer />
    </div>
  )
}

export default App
