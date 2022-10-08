import styled from 'styled-components'
import AboutMe from './components/About'
import HeaderComponent from './components/Header'
import Intro from './components/Intro'
import ProjectsContainer from './components/Projects'
import FooterComponent from './components/Footer'

const Main = styled.main`
  margin: 0 auto;
  padding: 0 1rem;
  width: 100%;
  max-width: 1000px;
`

function App() {

  return (
    <>
      <HeaderComponent />
      <Main>
        <Intro />
        <AboutMe />
        <ProjectsContainer />
      </Main>
      <FooterComponent/>
    </>
  )
}

export default App
