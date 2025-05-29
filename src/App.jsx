import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import About from "./components/About"
import Education from "./components/Education"
import Contact from "./components/Contact"

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar/>
      <main>
        <Hero/>
        <Skills/>
        <Experience/>
        <About/>
        <Education/>
        <Contact/>
      </main>
    </div>
  )
}

export default App
