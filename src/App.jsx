import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Qualitative from './components/Qualitative'
import Quantitative from './components/Quantitative'
import Studies from './components/Studies'
import Consulting from './components/Consulting'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Qualitative />
        <Quantitative />
        <Studies />
        <Consulting />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
