import React from 'react'
import { useState } from 'react'

const Navbar = () => {
    const [tab, setTab] = useState('home')
    const [mobileMenuOpen,setMobileMenuOpen] = useState(false)
    const handleTabChange = (id) => {
        const el = document.getElementById(id);
  if (el) {
    const yOffset = -60; // Adjust based on navbar height
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
        setTab(id);
        setMobileMenuOpen(false)
    }
  return (
   <div className="w-full fixed top-0 z-50 bg-[#fafafa] shadow-md">
  <div className="mx-auto flex w-full max-w-[60rem] justify-between items-center py-4 px-4 sm:px-6">
    {/* Hamburger (mobile) */}
    <div className="md:hidden">
      <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    {/* Site name/logo */}
    <div className="text-xl sm:text-2xl font-bold text-center flex-1 md:flex-none md:text-left">
      Yujal Shrestha
    </div>

    {/* Desktop nav */}
    <nav className="hidden md:flex space-x-4 lg:space-x-6 font-sans font-semibold text-base lg:text-lg">
      <button className={`${tab === 'home' ? 'text-gray-900' : 'text-[#8B8888]'}`} onClick={() => handleTabChange('home')}>Home</button>
      <button className={`${tab === 'about' ? 'text-gray-900' : 'text-[#8B8888]'}`} onClick={() => handleTabChange('about')}>About</button>
      <button className={`${tab === 'education' ? 'text-gray-900' : 'text-[#8B8888]'}`} onClick={() => handleTabChange('education')}>Education</button>
      <button className={`${tab === 'experience' ? 'text-gray-900' : 'text-[#8B8888]'}`} onClick={() => handleTabChange('experience')}>Experience</button>
      <button className={`${tab === 'projects' ? 'text-gray-900' : 'text-[#8B8888]'}`} onClick={() => handleTabChange('projects')}>Projects</button>
      <button className={`${tab === 'contact' ? 'text-gray-900' : 'text-[#8B8888]'}`} onClick={() => handleTabChange('contact')}>Contact</button>
    </nav>
  </div>

  {/* Mobile menu */}
  {mobileMenuOpen && (
    <nav className="flex flex-col items-center space-y-4 py-4 md:hidden font-sans font-semibold text-lg">
      <button className={`${tab === 'home' ? 'text-gray-900' : 'text-[#8B8888]'}`} onClick={() => handleTabChange('home')}>Home</button>
      <button className={`${tab === 'about' ? 'text-gray-900' : 'text-[#8B8888]'}`} onClick={() => handleTabChange('about')}>About</button>
      <button className={`${tab === 'education' ? 'text-gray-900' : 'text-[#8B8888]'}`} onClick={() => handleTabChange('education')}>Education</button>
      <button className={`${tab === 'experience' ? 'text-gray-900' : 'text-[#8B8888]'}`} onClick={() => handleTabChange('experience')}>Experience</button>
      <button className={`${tab === 'projects' ? 'text-gray-900' : 'text-[#8B8888]'}`} onClick={() => handleTabChange('projects')}>Projects</button>
      <button className={`${tab === 'contact' ? 'text-gray-900' : 'text-[#8B8888]'}`} onClick={() => handleTabChange('contact')}>Contact</button>
    </nav>
  )}
</div>


  )
}

export default Navbar
