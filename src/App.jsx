import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar'
import Intro from './Intro'
import About from './About'
import Skills from './Skills'
import Education from './Education'
import Experience from './Experience'
import Projects from './Projects'
import Contact from './Contact'
import LetterheadApp from './LocusLetter'
function HomePage() {
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
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/LocusLetterHead" element={<LetterheadApp />} />
        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;

