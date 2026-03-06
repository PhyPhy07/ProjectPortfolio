import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GrLinkedin, GrGithub } from "react-icons/gr";
import ScrollReveal from './ScrollReveal'

const ContactSection = () => {
  return (
    <section id="contact" className='py-24 relative'>
        <ScrollReveal stagger={0.08}>
            <h3 className='text-2xl md:text-3xl font-semibold text-[#FFB31F] mb-7'>I'd Love to Connect!</h3>

            <div className='mb-12 rounded-2xl overflow-hidden border border-[#ffecd1] shadow-[0_0_90px_rgba(30,107,90,0.28)] transition-transform duration-300 hover:-translate-y-1'
                style={{
                    background: 'linear-gradient(180deg, #1e6b5a 0%, #134237 40%, #082B27 100%)',
                }}>
                <div className='relative overflow-hidden aspect-square max-w-md'>
                    <Image src="/IMG_7015.png" alt="Connect with Phy" fill className='object-cover object-top' sizes="(max-width: 768px) 100vw, 448px"/>
                </div>
            </div>

            <p className='text-sm text-white/60 max-w-xl'>Passionate about accessible software, rapid learning, and shipping great products. I’m exploring software engineering roles where curiosity is welcomed, feedback is king, and cross-functional collaboration fuels the outcome.</p>
         

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