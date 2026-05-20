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
import IntroSM from './IntroSM';
import LocusFrame from './LocusFrame';
import LocusLogo from './LocusLogo';
import NepalElectionChat from './ElectionChat';
function HomePage() {
  return (
    <div className='bg-[#FAFAFA] overflow-x-hidden'>
      <Navbar />
      <div className='flex flex-col w-full h-auto items-center justify-center'>
        <div className="block lg:hidden">
        <IntroSM />
      </div>
      <div className="hidden lg:block">
        <Intro />
      </div>
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
  if (sessionStorage.redirectPath) {
    const redirectPath = sessionStorage.redirectPath;
    sessionStorage.removeItem('redirectPath');
    window.history.replaceState(null, '', redirectPath);
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/LocusLetterHead" element={<LetterheadApp />} />
        <Route path="/LocusFrame" element={<LocusFrame />} />
        <Route path="/LocusLogo" element={<LocusLogo />} />
        <Route path="/ElectionChat" element={<NepalElectionChat />} />

        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
