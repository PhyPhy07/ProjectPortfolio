"use client";

import Image from "next/image";
import React, { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const TRUNCATE_LENGTH = 120;

type ExperienceItem = {
  title: string;
  description: string;
  bullets?: string[];
  image: string;
};

const experienceItems: ExperienceItem[] = [
  {
    title: "Home Depot ProAssist Order Management System",
    description:
      "Large-scale web application built to centralize and streamline the management of high-volume customer orders and inventory for Home Depot Pro customers.",
    bullets: [
      "Designed and delivered React + TypeScript features that improved usability and operational workflows",
      "Led backend observability modernization through OpenTelemetry tracing, Prometheus metrics, and Grafana dashboards — reducing investigation time and improving system reliability",
      "Migrated legacy logging to structured TypeScript-based logging",
      "Improved CI/CD pipelines and executed API and service migrations with minimal production risk",
      "Supported platform capabilities: quote management, build project coordination, order expediting, and on-time delivery tracking at scale",
    ],
    image: "/images/pro.jpg",
  }
];

const WorkExperience = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const truncate = (text: string, maxLength: number) =>
    text.length <= maxLength ? text : text.slice(0, maxLength).trim() + "...";

  return (
    <section id="about" className="relative py-24">
      {/* glow effect */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2  w-[90vw] sm:w-[760px] md:w-[1000px] h-[280px] sm:h-[380px] md:h-[520px] opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, rgba(168,85, 247, 0.6) 0%, rgba(126,34, 206, 0.0) 70%)",
        }}
      />
      <div>
        <h3 className="text-2xl md:text-3xl font-semibold text-white/90 mb-8">
          Work Exprience
        </h3>

        <ScrollReveal stagger={0.15} className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 md:gap-8">
          {experienceItems.map((item, index) => (
            <article
              key={index}
              className="group relative overflow-hidden rounded-2xl p-5 sm:p-6 md:p-7 bg-[#140a26] border border-[#2f1c55] shadow-[0_10px_40px_rgba(113, 39, 186, 0.25)] transition-all duration-300 hover:-translate-y-1 md:-translate-y-2 hover:border-[#7c3aed]/60 hover:shadow-[0_20px_60px_rgba(113, 39, 186, 0.40)]"
            >
              {/* card gradient */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl  opacity-70 transition-opacity duration-300 group-hover:opacity-90"
                style={{
                  background:
                    "radial-gradient(120% 80% at 80% 10%, rgba(125,58, 242, 0.35) 0%, rgba(126,58, 242, 0.15) 25%), rgba(18, 8, 36, 0) 60%",
                }}
              ></div>

              <div className="relative  flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 md:gap-8">
                {/* icon */}
                <div className="relative shrink-0 w-16 h-16 sm:size-20 md:size-24 transition-transform duration-300 group-hover:-translate-y-1">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain drop-shadow-[0_8px_24px_rgba(113, 39, 186, 0.35)]"
                    priority
                  />
                </div>

                {/* text content */}
                <div>
                  <h4 className="text-base sm:text-lg md:text-xl font-semibold text-white mt-4 mb-2">
                    {" "}
                    {item.title}
                  </h4>
                  <div className="mt-2 text-xs md:text-sm text-white/60 max-w-sm mx-auto sm:mx-0">
                    <p>{expandedIndex === index ? item.description : truncate(item.description, TRUNCATE_LENGTH)}</p>
                    {expandedIndex === index && item.bullets && (
                      <ul className="mt-3 space-y-2 list-disc list-inside pl-1">
                        {item.bullets.map((bullet, i) => (
                          <li key={i}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                  {(item.description.length > TRUNCATE_LENGTH || item.bullets?.length) && (
                    <div className="mt-4 flex justify-center sm:justify-start">
                      <button
                        onClick={() =>
                          setExpandedIndex(expandedIndex === index ? null : index)
                        }
                        className="inline-flex items-center text-[11px] md:text-xs px-4 py-1.5 rounded-full bg-[#1a0c2e] border border-[#3e1d6d] text-white/80 hover:text-white hover:border-[#a855f7] hover:bg-[#220e3d] transition-colors"
                      >
                        {expandedIndex === index ? "Show less" : "Learn more"}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WorkExperience;