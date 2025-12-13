import './App.css'
import './animations.css'
import NavBar from './components/NavBar'
import BackgroundBlobs from './components/BackgroundBlobs'
import HomeContent from './components/HomeContent'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import HorizontalScrollSection from './components/HorizontalScrollSection'
import Footer from './components/Footer'
import { useScrollAnimation } from './hooks/useScrollAnimation'

function App() {
  useScrollAnimation();

  return (
    <>
    <div className='homePage'>
      <BackgroundBlobs />
      <NavBar />
      <HomeContent />
    </div>
    <div className='animate-on-scroll slide-left'><AboutMe /></div>
    <HorizontalScrollSection />
    <div className='animate-on-scroll scale-up'><Skills /></div>
    <div className='animate-on-scroll slide-right'><Education /></div>
    <div className='animate-on-scroll fade-up'><Contact /></div>
    <div className='animate-on-scroll bounce-in'><Footer /></div>
    </>
  )
}

export default App
