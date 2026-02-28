import React from 'react'
import ScrollReveal from './ScrollReveal'
import { TbBrandTypescript } from "react-icons/tb";
import { SiReact, SiNextdotjs } from "react-icons/si";
import { RiJavascriptLine } from 'react-icons/ri';
import { SiGooglecloud } from "react-icons/si";
import { FaGit } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiPrometheus } from "react-icons/si";
import { SiGrafana } from "react-icons/si";
const skillIcons = [
  { Icon: TbBrandTypescript, label: 'TypeScript' },
  { Icon: RiJavascriptLine, label: 'JavaScript' },
  { Icon: SiReact, label: 'React' },
  { Icon: SiNextdotjs, label: 'Next.js' },
  { Icon: SiGooglecloud, label: 'Google Cloud' },
  { Icon: FaGit, label: 'Git' },
  { Icon: FaGithub, label: 'GitHub' },
  { Icon: SiPrometheus, label: 'Prometheus' },
  { Icon: SiGrafana, label: 'Grafana' },
];
const TechStack = () => {
  return (
    <section id='lab' className='relative py-28 overflow-hidden'>
        <ScrollReveal stagger={0.08} className='text-center'>
            <p className='text-white/70 mb-10 text-[#FFB31F]'>Skills & Tools I've Worked With:</p>
        </ScrollReveal>

        <div className='relative w-full overflow-hidden'>
          <div className='flex flex-nowrap animate-scroll-horizontal w-max gap-12 md:gap-16 px-4'>
            {[...skillIcons, ...skillIcons, ...skillIcons, ...skillIcons].map(({ Icon, label }, i) => (
              <div
                key={i}
                className='flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white/5 px-6 py-4 text-white/80 transition-colors hover:text-[#D3453E]'
                title={label}
              >
                <Icon className='size-12 md:size-14' />
              </div>
            ))}
          </div>
        </div>
    </section>  
  );
};

export default TechStack;