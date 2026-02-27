'use client';
import React, { useEffect, useState } from 'react'
import Link from 'next/link';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false); 
 const [isOpen, setIsOpen] = useState(false);

 useEffect(() => {
    const onScroll = () => { setIsScrolled(window.scrollY > 8)};
   onScroll();
   window.addEventListener('scroll', onScroll, { passive: true });
   return () => window.removeEventListener('scroll', onScroll);
 }, []);

 const handleOpen = () => {
    setIsOpen(!isOpen);
 }

  return (
    <><header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled || isOpen ? `bg-[#0b0416]/70 backdrop-blur-md shadow-[0_40px_40px_rgba(113, 39, 54, 186, 0.20)]` : `bg-transparent`}`}></header><div>
         <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        {/*logo*/}
          <Link href="/" className="text-3xl font-extrabold text-[#7e2238]">Σ</Link>
{/*navigation*/}
<nav className="hidden lg:flex items-center space-x-10">
    <Link href="#Home" className="hover:text-[#a855f7] transition duration-200">Home</Link>
    <Link href="#About" className="hover:text-[#a855f7] transition duration-200">About</Link>
    <Link href="#Projects" className="hover:text-[#a855f7] transition duration-200">Projects</Link>
    <Link href="#Contact" className="hover:text-[#a855f7] transition duration-200">Contact</Link>
</nav>
{/*mobile navigation*/}
<div className="lg:hidden"></div>
      </div></div></>
  )
}

export default Header