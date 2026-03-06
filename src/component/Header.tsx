'use client';
import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { HiBars3, HiXMark } from 'react-icons/hi2'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#experience', label: 'Work Experience' },
  { href: '#lab', label: 'Stacked Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false); 
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => { setMounted(true); }, []);

    useEffect(() => {
        const onScroll = () => { setIsScrolled(window.scrollY > 8)};
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
    }, [isOpen]);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');
        if (!href?.startsWith('#')) return;
        const target = document.querySelector(href);
        if (target) {
            setIsOpen(false);
            const headerOffset = 80;
            const { top } = target.getBoundingClientRect();
            window.scrollTo({ top: top + window.scrollY - headerOffset, behavior: 'smooth' });
        }
    };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 pt-[env(safe-area-inset-top)] ${isScrolled || isOpen ? "bg-[#5a9a8a]/80 backdrop-blur-md shadow-[0_40px_40px_rgba(30,107,90,0.25)]" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <nav className="hidden lg:flex items-center space-x-10 font-medium text-lg text-white/80">
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} onClick={scrollToSection} className="hover:text-[#ffecd1] transition duration-200">{label}</a>
          ))}
        </nav>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden ml-auto p-2 -m-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-white"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <HiXMark className="size-6" /> : <HiBars3 className="size-6" />}
        </button>
      </div>

      {/* Mobile drawer - rendered via portal to avoid header's backdrop-blur affecting it */}
      {mounted && createPortal(
        <div className={`lg:hidden fixed inset-0 z-[100] ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
          {/* Backdrop - light overlay, click to close */}
          <div
            onClick={() => setIsOpen(false)}
            className={`absolute inset-0 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.25)' }}
          />
          {/* Drawer panel - solid yellow, no transparency */}
          <div
            className={`absolute top-0 right-0 bottom-0 w-[min(280px,85vw)] border-l-2 border-[#ffecd1]/30 shadow-[-8px_0_32px_rgba(0,0,0,0.5)] transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            style={{ backgroundColor: '#082B27', opacity: 1 }}
          >
            <div className="flex flex-col pt-6 pb-8 px-6">
              <div className="flex justify-end mb-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 -m-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-white hover:text-[#ffecd1]"
                  aria-label="Close menu"
                >
                  <HiXMark className="size-6" />
                </button>
              </div>
              <nav className="flex flex-col gap-1">
                {navLinks.map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    onClick={scrollToSection}
                    className="py-4 px-4 text-lg font-medium text-white hover:bg-white/10 hover:text-[#FFB31F] transition-colors rounded-lg min-h-[48px] flex items-center"
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>,
        document.body
      )}
    </header>
  )
}

export default Header