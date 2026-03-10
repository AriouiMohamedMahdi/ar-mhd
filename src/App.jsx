import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticleField from './components/ParticleField'

export default function App() {
  return (
    <div className="relative min-h-screen bg-bg">
      <Cursor />
      <ParticleField />
      <Navbar />
      <div className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Blog />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
