
import './App.css'
import { Header } from './components/Header';
import { AboutMe } from './components/AboutMe';
import { Timeline } from './components/Timeline';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';

function App() {

  return (
    <>
      <Header />
      <main className="content-wrapper">
        <AboutMe />
        <Projects />
        <Timeline />
      </main>
      <Footer />
    </>
  )
}

export default App
