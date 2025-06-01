import { useState } from 'react'
import Navbar from './Navbar'
import Intro from './Intro'
import About from './About'
import Skills from './Skills'
import Education from './Education'
import Experience from './Experience'
import Projects from './Projects'
import Contact from './Contact'
function App() {


  return (
    <div className='bg-[#FAFAFA]'>
      <Navbar />
      <div className='flex flex-col w-full h-auto items-center justify-center'>
        <Intro />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App
