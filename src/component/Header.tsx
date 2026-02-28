'use client';
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import {HiBars3} from 'react-icons/hi2';
const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false); 
 const [isOpen, setIsOpen] = useState(false);

 useEffect(() => {
    const onScroll = () => { setIsScrolled(window.scrollY > 8)};
   onScroll();
   window.addEventListener('scroll', onScroll, { passive: true });
   return () => window.removeEventListener('scroll', onScroll);
 }, []);


  return (
    <><header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled || isOpen ? `bg-[#F67989]/80 backdrop-blur-md shadow-[0_40px_40px_rgba(113, 39, 54, 186, 0.20)]` : `bg-transparent`}`}></header><div>
         <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        {/*logo*/}
          <Link href="/" className="text-3xl font-extrabold text-[#7e2238]">Σ</Link>
{/*desktop navigation*/}
<nav className="hidden lg:flex items-center space-x-10 font-medium text-lg text-white/80">
    <Link href="#home" className="hover:text-[#ffecd1] transition duration-200">Home</Link>
    <Link href="#about" className="hover:text-[#ffecd1] transition duration-200">About</Link>
    <Link href="#lab" className="hover:text-[#ffecd1] transition duration-200">Stacked Skills</Link>
    <Link href="#projects" className="hover:text-[#ffecd1] transition duration-200">Projects</Link>
    <Link href="#contact" className="hover:text-[#ffecd1] transition duration-200">Contact</Link>
</nav>
<button>
    <HiBars3 className="size-6 text-white" />
</button>
</div>
</div>
</>
  )
}

export default Header