import './App.css'
import NavBar from './components/NavBar'
import BackgroundBlobs from './components/BackgroundBlobs'
import HomeContent from './components/HomeContent'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import HorizontalScrollSection from './components/HorizontalScrollSection';
import Footer from './components/Footer'
function App() {


  return (
    <>
    <div className='homePage'>
      <BackgroundBlobs />
      <NavBar />
      <HomeContent />
    </div>
    <AboutMe />
    <HorizontalScrollSection />
    <Skills />
    <Education />
    <Contact />
    <Footer />
 
    </>
  )
}

export default App
