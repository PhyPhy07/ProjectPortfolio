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
            <div className="pointer-events-none absolute -inset-12 md:-inset-24 rounded-full bg-linear-to-b from-[#F67989] via-[#9D446A]/40 to-transparent blur-3xl opacity-90"></div>
            <div className="relative">
                <Image src="/images/avatar.png" alt="avatar image" width={240} height={240} className="relative object-cover rounded-full" priority unoptimized/>

                {/* small greeting with curve arrow */}
                <div  className="select-none pointer-events-none absolute -top-8 -right-6 md:-top-16 md:-right-40 text-xs text-white/70">
                    <div className="relative flex items-center justify-end">
                        <div className="relative w-16 h-6 md:w-24 md:h-16">
                            <Image src="/images/hero-arrow.png" alt="arrow image" fill  className="object-contain scale-x-100 -rotate-6" priority/>
                        </div>
                        <div className="-mt-6 md:-mt-10 shrink-0">
                            <span>Hello World! I'm {" "}</span>
                            <span className="text-[#a78bfa]">Phy Sneed ("Phylicia" if we want to get fancy)</span>
                        </div>
                    </div>
                </div>
            </div>
          </div>

          {/* headline */}
          <div className="md:pl-2 text-center md:text-left">
            <p className="text-sm md:text-base text-white/60 mb-2">
              A Software Engineer with 
            </p>

            <h1 className="text-4xl sm:text-5xl font-normal tracking-tight leading-[1.15]">
              <span className="block">Curious by Nature</span>
              <span className="block">
             
                <span className="relative inline-block align-baseline">
                  <span className="relative z-10 text-[#F67989]">Practical by Design</span>
                  <span className="pointer-events-none absolute -inset-x-2 -inset-y-2 translate-y-1 -z-10 rotate-12">
                  
                  </span>
                </span>
              </span>
            </h1>

            <p className="mt-2 text-[10px] md:text-xs text-white/50 max-w-md md:max-w-lg mx-auto md:mx-0">
            Frontend Engineer with Full-Stack Perspective
            </p>
          </div>
        </ScrollReveal>

        {/* role and description */}
        <ScrollReveal delay={0.15} className="mt-16 max-w-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight">
                <Typewriter 
                words={["Where Precision Meets Prose."]}
                typeSpeed={65}
                deleteSpeed={0}
                delaySpeed={600}
                cursor
                cursorStyle="|"
                loop={1}
                />
            </h2>
            

            <p className="mt-6 text-white/70 leading-7">A Software Engineer with a Systems Mind and a Writer’s Discipline</p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HereSection;