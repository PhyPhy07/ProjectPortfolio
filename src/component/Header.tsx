'use client';
import React, { useEffect, useState } from 'react'
import { HiBars3 } from 'react-icons/hi2'

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false); 
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => { setIsScrolled(window.scrollY > 8)};
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');
        if (!href?.startsWith('#')) return;
        const target = document.querySelector(href);
        if (target) {
            const headerOffset = 80;
            const { top } = target.getBoundingClientRect();
            window.scrollTo({ top: top + window.scrollY - headerOffset, behavior: 'smooth' });
        }
    };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled || isOpen ? "bg-[#5a9a8a]/80 backdrop-blur-md shadow-[0_40px_40px_rgba(30,107,90,0.25)]" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="#home" onClick={scrollToSection} className="text-3xl font-extrabold text-[#7e2238]">Σ</a>
        <nav className="hidden lg:flex items-center space-x-10 font-medium text-lg text-white/80">
          <a href="#home" onClick={scrollToSection} className="hover:text-[#ffecd1] transition duration-200">Home</a>
          <a href="#experience" onClick={scrollToSection} className="hover:text-[#ffecd1] transition duration-200">Work Experience</a>
          <a href="#lab" onClick={scrollToSection} className="hover:text-[#ffecd1] transition duration-200">Stacked Skills</a>
          <a href="#projects" onClick={scrollToSection} className="hover:text-[#ffecd1] transition duration-200">Projects</a>
          <a href="#contact" onClick={scrollToSection} className="hover:text-[#ffecd1] transition duration-200">Contact</a>
        </nav>
        <button>
          <HiBars3 className="size-6 text-white" />
        </button>
      </div>
    </header>
  )
}

export default Header