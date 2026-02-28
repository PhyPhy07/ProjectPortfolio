import Link from 'next/link'
import React from 'react'
import { GrLinkedin, GrGithub } from "react-icons/gr";
import ScrollReveal from './ScrollReveal'

const ContactSection = () => {
  return (
    <section id="contact" className='py-24 relative'>
        <ScrollReveal stagger={0.08}>
            <h3 className='text-2xl md:text-3xl font-semibold text-[#FFB31F] mb-7'>Contact</h3>
            <p className='text-sm text-white/60 max-w-xl'>I’m currently looking to join a cross-functional team that values improving people’s lives through accessible design, or have a project in mind? Let’s connect.</p>
            <div className='mt-6 text-white/80'>
                <Link href="mailto:hello@codetutorbd.com" className='hover:text-[#D3453E]'>hello@codetutorbd.com</Link>
            </div>

            <div className='mt-6 flex items-center gap-4 text-white/80'>
                <Link href="https://www.linkedin.com/in/phylicia-sneed/" target="_blank" rel="noopener noreferrer" className='hover:text-[#D3453E]'>
                <GrLinkedin className='size-8'/>
                </Link>
                <Link href="https://github.com/PhyPhy07" target="_blank" rel="noopener noreferrer" className='hover:text-[#D3453E]'>
                <GrGithub className='size-8'/>
                </Link>
            </div>
        </ScrollReveal>
    </section>
  );
};

export default ContactSection;