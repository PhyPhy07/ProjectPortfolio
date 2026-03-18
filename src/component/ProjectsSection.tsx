import React from 'react'
import Image from 'next/image'
import ScrollReveal from './ScrollReveal'

const ProjectsSection = () => {
  return (
    <section id="projects" className='relative py-28 space-y-24'>
        <div>
            <div className='pointer-events-none absolute right-0 left-1/3 top-8 -z-10 h-[420px] opacity-40 blur-3xl'
            style={{
                background: 'radial-gradient(60% 60% at 60% 40%, rgba(30, 107, 90, 0.6) 0%, rgba(8, 43, 39, 0) 70%)',
            }}
            />
            <ScrollReveal stagger={0.12} className='grid grid-cols-1 md:grid-cols-2 items-center'>
                <div className='relative -pl-50 z-10'>
                    <div className='mb-12'>
                        <p className='text-xs text-[#5a9a8a]'>Featured Project</p>
                        <h3 className='text-2xl md:text-3xl font-semibold text-[#FFB31F]'>Pink Print: DIY Project Planner</h3>
                    </div>

                    <div className='relative md:-mr-24 md:-mt-6 z-20 max-w-5xl rounded-2xl p-5 bg-[#082B27]/95 backdrop-blur-md border border-[#ffecd1]/30 shadow-[0_6px_50px_rgba(0,0,0,0.4)]'>
                        <div className='text-sm font-semibold leading-relaxed p-3 text-white space-y-2'>
                            <p> A DIY project planner powered by Gemini AI that converts natural language descriptions into structured, actionable project plans for painting, flooring, and fencing — built with real-world expertise from years on the floor as a Home Depot sales rep.

</p>
                            <div>
                                <p className='font-bold text-[#FFB31F] mb-0.5'>Highlights:</p>
                                <ul className='list-disc list-inside space-y-0.5 ml-1'>
                                    <li><strong>AI-powered cost estimation</strong> — Natural language input → structured project details via Gemini</li>
                                    <li><strong>Smart clarifying questions</strong> — From prior HD sales rep experience—asks for missing info (interior/exterior, dimensions, surface type) before estimating to ensure you cover all edge cases</li>
                                    <li><strong>Project types</strong> — Painting (rooms, doors, ceilings, trim), flooring (hardwood, carpet, tile, LVP), fencing</li>
                                    <li><strong>Materials breakdown</strong> — Paint gallons, underlayment, posts, etc., with cost ranges</li>
                                    <li><strong>Link</strong> — <a href="https://buildingforabuilder.vercel.app/" target="_blank" rel="noopener noreferrer" className='text-[#5a9a8a] hover:underline'>https://pinkprint.vercel.app/</a></li>
                                </ul>
                            </div>
                            <div>
                                <p className='font-bold text-[#FFB31F] mb-0.5'>Tech stack:</p>
                                <p className='ml-1 leading-relaxed'>Next.js 16, Vercel AI SDK, Supabase, Zod, Tailwind CSS</p>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute -inset-px rounded-[14px] opacity-60"
                        style={{
                            background: 'linear-gradient(135deg, rgba(30, 107, 90, 0.35), rgba(8, 43, 39, 0.05))',
                        }}
                        />
                    </div>
                    <div className='mt-6 ml-2 flex justify-start space-x-3 text-white/60'>
                        <span>*</span>
                        <span>*</span>
                    </div>
                </div>

                <div>
                    <div tabIndex={0} className='group cursor-pointer rounded-2xl overflow-hidden border border-[#ffecd1] shadow-[0_0_90px_rgba(30,107,90,0.28)] transition-transform duration-300 hover:-translate-y-1 focus:-translate-y-1 hover:border-[#D3453E]/60'
                    style={{
                        background: 'linear-gradient(180deg, #1e6b5a 0%, #134237 40%, #082B27 100%)',
                    }}>
                        <div className='relative overflow-hidden h-[341px] max-w-[99.5%] mx-auto'>
                            <Image src="/images/pinkprintdemo.png" alt='Pink Print: DIY Project Planner' fill className='object-contain object-top' sizes="(max-width: 792px) 100vw, 50vw"/>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </div>

        <div>
            <div className='pointer-events-none absolute right-0 left-1/3 top-8 -z-10 h-[420px] opacity-40 blur-3xl'
            style={{
                background: 'radial-gradient(60% 60% at 60% 40%, rgba(30, 107, 90, 0.6) 0%, rgba(8, 43, 39, 0) 70%)',
            }}
            />
            <ScrollReveal stagger={0.12} delay={0.8} className='grid grid-cols-1 md:grid-cols-2 items-center'>
                <div className='relative md:order-2 z-10'>
                    <div className='mb-12 text-right'>
                        <p className='text-xs text-[#5a9a8a]'>Featured Project</p>
                        <h3 className='text-2xl md:text-3xl font-semibold text-[#FFB31F]'>Carpe Diem: Task Management App</h3>
                    </div>

                    <div className='relative md:-ml-24 md:-mt-6 z-20 max-w-5xl rounded-2xl p-5 bg-[#082B27]/95 backdrop-blur-md border border-[#ffecd1]/30 shadow-[0_6px_50px_rgba(0,0,0,0.4)]'>
                        <div className='text-sm font-semibold leading-relaxed p-3 text-white space-y-2'>
                            <p>Carpe Diem — Full-stack productivity app that combines a personalized dashboard with a simple todo system.</p>
                            <div>
                                <p className='font-bold text-[#FFB31F] mb-0.5'>Features:</p>
                                <ul className='list-disc list-inside space-y-0.5 ml-1'>
                                    <li><strong>Authentication</strong> — GitHub OAuth and email/password sign-in, password reset, and display name</li>
                                    <li><strong>Task management</strong> — Create tasks with statuses, due dates, and priorities</li>
                                    <li><strong>Personalization</strong> — Marvel themed, mobile friendly, custom UI, and accessible components</li>
                                    <li><strong>Link</strong> — <a href="https://carpe-diem-omega.vercel.app/" target="_blank" rel="noopener noreferrer" className='text-[#5a9a8a] hover:underline'>https://carpe-diem-omega.vercel.app/</a></li>
                                </ul>
                            </div>
                            <div>
                                <p className='font-bold text-[#FFB31F] mb-0.5'>Tech stack:</p>
                                <p className='ml-1 leading-relaxed'>Next.js 16 (App Router), React 19, TypeScript, Supabase (Auth + PostgreSQL), Tailwind CSS, shadcn/ui, Radix UI, Vercel</p>
                            </div>
                            <div>
                                <p className='font-bold text-[#FFB31F] mb-0.5'>Highlights:</p>
                                <ul className='list-disc list-inside space-y-0.5 ml-1'>
                                    <li>Server actions for mutations</li>
                                    <li>Row-level data isolation per user</li>
                                    <li>Auth callback handling for OAuth and password reset</li>
                                    <li>Modular component structure</li>
                                </ul>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute -inset-px rounded-[14px] opacity-60"
                        style={{
                            background: 'linear-gradient(135deg, rgba(30, 107, 90, 0.35), rgba(8, 43, 39, 0.05))',
                        }}
                        />
                    </div>
                    <div className='mt-6 ml-2 flex justify-end space-x-3 text-white/60'>
                        <span>*</span>
                        <span>*</span>
                    </div>
                </div>

                <div className='relative md:order-1'>
                    <div tabIndex={0} className='group cursor-pointer rounded-2xl overflow-hidden border border-[#ffecd1] shadow-[0_0_90px_rgba(30,107,90,0.28)] transition-transform duration-300 hover:-translate-y-1 focus:-translate-y-1 hover:border-[#D3453E]/60'
                    style={{
                        background: 'linear-gradient(180deg, #1e6b5a 0%, #134237 40%, #082B27 100%)',
                    }}>
                        <div className='relative overflow-hidden h-[480px]'>
                            <Image src="/todoapp.png" alt='Carpe Diem task app' fill className='object-cover object-top' sizes="(max-width: 768px) 100vw, 50vw"/>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </div>

        <div>
            <div className='pointer-events-none absolute right-0 left-1/3 top-8 -z-10 h-[420px] opacity-40 blur-3xl'
            style={{
                background: 'radial-gradient(60% 60% at 60% 40%, rgba(30, 107, 90, 0.6) 0%, rgba(8, 43, 39, 0) 70%)',
            }}
            />
            <ScrollReveal stagger={0.14} delay={1.6} className='grid grid-cols-1 md:grid-cols-2 items-center'>
                <div className='relative -pl-50 z-10'>
                    <div className='mb-12'>
                        <p className='text-xs text-[#5a9a8a]'>Featured Project</p>
                        <h3 className='text-2xl md:text-3xl font-semibold text-[#FFB31F]'>The Weather Wonder</h3>
                    </div>

                    <div className='relative md:-mr-24 md:-mt-6 z-20 max-w-5xl rounded-2xl p-5 bg-[#082B27]/95 backdrop-blur-md border border-[#ffecd1]/30 shadow-[0_6px_50px_rgba(0,0,0,0.4)]'>
                        <div className='text-sm font-semibold leading-relaxed p-3 text-white space-y-2'>
                            <p>Weather Wonder — Full-stack weather app that aggregates three APIs (Open-Meteo, Pirate Weather, Weather.gov), scores each forecast, and shows the most optimistic one—sunniest and warmest outlook.</p>
                            <div>
                                <p className='font-bold text-[#FFB31F] mb-0.5'>Highlights:</p>
                                <ul className='list-disc list-inside space-y-0.5 ml-1'>
                                    <li><strong>Multi-provider blending</strong> — Fetches from three APIs in parallel, filters outliers, and selects the best forecast with a custom scoring algorithm</li>
                                    <li><strong>Weather wellness</strong> — Weather score, sinus risk, arthritis risk, and pressure change</li>
                                    <li><strong>Location search</strong> — Geocoding via Nominatim (city, state, or ZIP)</li>
                                    <li><strong>Mobile-first</strong> — Responsive layout, touch targets, safe-area support</li>
                                    <li><strong>Server-side caching</strong> — 5-minute cache to reduce API calls</li>
                                    <li><strong>Live app</strong> — <a href="https://the-bright-blend.vercel.app" target="_blank" rel="noopener noreferrer" className='text-[#5a9a8a] hover:underline'>the-bright-blend.vercel.app</a></li>
                                </ul>
                            </div>
                            <div>
                                <p className='font-bold text-[#FFB31F] mb-0.5'>Tech stack:</p>
                                <p className='ml-1 leading-relaxed'>Next.js 15 (App Router), React 19, Tailwind CSS, TypeScript, Vercel</p>
                            </div>
                            <div>
                                <p className='font-bold text-[#FFB31F] mb-0.5'>Architecture:</p>
                                <p className='ml-1 leading-relaxed'>Provider registry with a shared interface, normalized data model, optimizer for outlier filtering and scoring, and Mermaid docs for data flow.</p>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute -inset-px rounded-[14px] opacity-60"
                        style={{
                            background: 'linear-gradient(135deg, rgba(30, 107, 90, 0.35), rgba(8, 43, 39, 0.05))',
                        }}
                        />
                    </div>
                    <div className='mt-6 ml-2 flex justify-start space-x-3 text-white/60'>
                        <span>*</span>
                        <span>*</span>
                    </div>
                </div>

                <div>
                    <div tabIndex={0} className='group cursor-pointer rounded-2xl overflow-hidden border border-[#ffecd1] shadow-[0_0_90px_rgba(30,107,90,0.28)] transition-transform duration-300 hover:-translate-y-1 focus:-translate-y-1 hover:border-[#D3453E]/60'
                    style={{
                        background: 'linear-gradient(180deg, #1e6b5a 0%, #134237 40%, #082B27 100%)',
                    }}>
                        <div className='relative overflow-hidden md:h-[360px] h-[250px]'>
                            <Image src="/weather-wonder.png" alt='The Weather Wonder app' fill className='object-cover object-top' sizes="(max-width: 768px) 100vw, 50vw"/>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </div>
    </section>
  )
}

export default ProjectsSection