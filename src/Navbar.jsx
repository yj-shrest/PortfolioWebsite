import React from 'react'
import { useState } from 'react'

const Navbar = () => {
    const [tab, setTab] = useState('home')
    const handleTabChange = (id) => {
        const el = document.getElementById(id);
  if (el) {
    const yOffset = -60; // Adjust based on navbar height
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
        setTab(id);
    }
  return (
    <div className="flex justify-center items-center py-5 w-full text-lg fixed top-0 z-50 bg-[#fafafa]">
        <nav className="space-x-10 font-sans font-semibold">
            <button className={`${tab === 'home' ? 'text-gray-900' : 'text-[#8B8888]' }`} onClick={() => handleTabChange('home')}>Home</button>
            <button className={`${tab === 'about' ? 'text-gray-900' : 'text-[#8B8888]'}`} onClick={() => handleTabChange('about')}>About</button>
            <button className={`${tab === 'education' ? 'text-gray-900' : 'text-[#8B8888]'}`} onClick={() => handleTabChange('education')}>Education</button>
            <button className={`${tab === 'experience' ? 'text-gray-900' : 'text-[#8B8888]'}`} onClick={() => handleTabChange('experience')}>Experience</button>
            <button className={`${tab === 'projects' ? 'text-gray-900' : 'text-[#8B8888]'}`} onClick={() => handleTabChange('projects')}>Projects</button>
            <button className={`${tab === 'contact' ? 'text-gray-900' : 'text-[#8B8888]'}`} onClick={() => handleTabChange('contact')}>Contact</button>
        </nav>
    </div>
  )
}

export default Navbar
