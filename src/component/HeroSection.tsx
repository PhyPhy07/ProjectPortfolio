"use client";

import Image from "next/image";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import ScrollReveal from "./ScrollReveal";

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-24 sm:pt-32 md:pt-36 pb-16 sm:pb-24">
      <div className="mt-8 sm:mt-12 md:mt-24 px-4 sm:px-6">
        {/* Avatar and headline */}
        <ScrollReveal stagger={0.12} className="flex flex-col md:flex-row gap-8 items-start md:items-center">
          {/* Avatar and greeting */}
          <div className="relative flex justify-center md:justify-start">
            <div className="pointer-events-none absolute -inset-12 md:-inset-24 rounded-full bg-linear-to-b from-[#36A07F] via-[#C0350F]/60 to-transparent blur-3xl opacity-90" />
            <div className="relative">
              <div className="select-none pointer-events-none absolute -top-8 -right-6 md:-top-16 md:-right-40 text-md text-white/70 -mt-24 md:-mt-1 z-10">
                <span className="sm:whitespace-nowrap">
                  Hello World! I'm{" "}
                  <span className="text-[#FFB31F]">Phy Sneed ("Phylicia" if we want to get fancy)</span>
                </span>
                <div className="relative w-12 h-6 md:w-36 md:h-20 ml-8 md:ml-58 mt-1">
                  <Image src="/images/heroarrow.gif" alt="arrow image" fill className="object-contain scale-x-100 -rotate-6" priority />
                </div>
              </div>
              <div className="rounded-3xl overflow-hidden w-48 h-48 sm:w-64 sm:h-64 md:w-[300px] md:h-[300px] bg-[#C78AIE] p-4">
                <Image
                  src="/avatarr.png"
                  alt="avatar image"
                  width={300}
                  height={300}
                  className="relative object-contain w-full h-full"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </div>

          {/* Headline */}
          <div className="md:pl-2 text-center md:text-left">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-normal tracking-tight leading-[1.2]">
              <span className="block whitespace-nowrap">I blend precision with prose,</span>
              <span className="block">curiosity with practicality,</span>
              <span className="block">and structure with <span className="text-[#FFB31F]">soul</span>.</span>
            </h1>
          </div>
        </ScrollReveal>

        {/* Role and description */}
        <div id="about">
        <ScrollReveal delay={0.15} className="mt-10 sm:mt-16 max-w-3xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">About Me</h2>
          <span></span>
          <div className="text-white/70 leading-7 space-y-4">
            <p>I'm a Software Engineer who brings something distinct to the table — the analytical rigor of a systems thinker, the communication depth of a trained rhetorician, and the product intuition of someone who built it from the ground up.</p>
            <p>I spent 15 years at The Home Depot, growing from cashier to department supervisor. I wasn't just observing how a $150B retailer operates — I was in it, managing people, solving real-time problems, and understanding what customers and associates actually need from the tools built for them.</p>
            <p>Along the way, I earned a Master's in Composition and Rhetoric — which taught me to ask who the audience is before writing a single thing. That instinct doesn't leave you. It shows up in how I read a codebase, frame a problem, and talk to stakeholders.</p>
            <p>After completing my Master's, I was selected to join The Home Depot's in-house software engineering program — a rare chance to bring both worlds together. For the past two years, I've been doing just that, writing production code with the store floor always in view.</p>
            <p className="text-[#FFB31F]">My path is unconventional — every step of it intentional.</p>
            <p className="text-xl sm:text-2xl md:text-3xl text-[#D3453E] font-normal tracking-tight">
              <Typewriter words={["Engineer by training. Builder by instinct."]} typeSpeed={120} deleteSpeed={0} delaySpeed={5000} cursor={false} loop={1} />
            </p>
          </div>
        </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;