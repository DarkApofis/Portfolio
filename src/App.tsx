import HeaderComponent from './components/Header'
import Intro from './components/Intro'
import AboutMe from './components/About'
import ProjectsContainer from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import FooterComponent from './components/Footer'

function App() {
  return (
    <>
      <HeaderComponent />
      <main>
        <Intro />
        <AboutMe />
        <ProjectsContainer />
        <Skills />
        <Contact />
      </main>
      <FooterComponent />
    </>
  )
}

export default App
