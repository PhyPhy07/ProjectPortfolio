"use client";

import Image from "next/image";
import React from "react";
import { Typewriter } from 'react-simple-typewriter'
import ScrollReveal from "./ScrollReveal";

const HereSection = () => {
  return (
    <section id="home" className="relative pt-36 pb-24">
      <div className="mt-12 md:mt-24">
        {/* avatar and headline */}
        <ScrollReveal stagger={0.12} className="flex flex-col md:flex-row gap-8 items-start md:items-center">
          {/* avatar and greetings */}
          <div className="relative flex justify-center md:justify-end">
            <div className="pointer-events-none absolute -inset-12 md:-inset-24 rounded-full bg-linear-to-b from-[#36A07F] via-[#C0350F]/60 to-transparent blur-3xl opacity-90"></div>
            <div className="relative">
                <Image src="/images/avatar.png" alt="avatar image" width={240} height={240} className="relative object-cover rounded-full" priority unoptimized/>

                <div  className="select-none pointer-events-none absolute -top-8 -right-6 md:-top-16 md:-right-40 text-md text-white/70">
                    <div className="items-right justify-right">
                    
                        <div className="-mt-24 md:-mt-1">
                            <span className="whitespace-nowrap">Hello World! I'm {" "}<span className="text-[#FFB31F]">Phy Sneed ("Phylicia" if we want to get fancy)</span></span>
                            <div className="relative w-12 h-6 md:w-36 md:h-20 ml-8 md:ml-58 mt-1">
                            <Image src="/images/heroarrow.gif" alt="arrow image" fill  className="object-contain scale-x-100 -rotate-6" priority/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>

          {/* headline */}
          <div className="md:pl-2 text-center md:text-left">
            <p className="text-sm md:text-base text-white/60 mb-2">
              I'm a Software Engineer who is ...
            </p>

            <h1 className="text-4xl sm:text-5xl font-normal tracking-tight leading-[1.15]">
              <span className="block">curious by nature,</span>
              <span className="block">
             
                <span className="relative inline-block align-baseline">
                  <span className="relative z-10 text-[#FFB31F]">and practical by design.</span>
                  <span className="pointer-events-none absolute -inset-x-2 -inset-y-2 translate-y-1 -z-10 rotate-12">
                  
                  </span>
                </span>
              </span>
            </h1>
          </div>
        </ScrollReveal>

        {/* role and description */}
        <ScrollReveal delay={0.15} className="mt-16 max-w-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight">
                Where Precision Meets{" "}
                <span className="text-[#D3453E]">
                  <Typewriter 
                    words={["Prose."]}
                    typeSpeed={40}
                    deleteSpeed={0}
                    delaySpeed={600}
                    cursor
                    cursorStyle="|"
                    loop={1}
                  />
                </span>
            </h2>
            

            <p className="mt-6 text-white/70 leading-7">A Software Engineer with a Systems Mind and a Writer’s Discipline</p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HereSection;