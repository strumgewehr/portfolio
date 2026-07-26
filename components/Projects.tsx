"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { TiltCard } from "./TiltCard";

export function Projects() {
  return (
    <section id="projects" className="max-w-editorial mx-auto px-6 md:px-10 py-24 md:py-32">
      <SectionHeading index="04" title="Featured Projects" className="mb-4" />
      <Reveal delay={0.15}>
        <p className="text-warm-gray font-semibold max-w-prose mb-16">
          Systems spanning AI-assisted security tooling, sentiment intelligence, and
          privacy-preserving communication.
        </p>
      </Reveal>

      <div className="space-y-10" style={{ perspective: "1400px" }}>
        {projects.map((project, i) => (
          <Reveal
            key={project.name}
            delay={i * 0.07}
            y={44}
            rotate={i % 2 === 0 ? -2.5 : 2.5}
          >
            <TiltCard
              className={`relative overflow-visible group rounded-2xl border border-hairline bg-ivory shadow-paper hover:shadow-paper-hover transition-shadow duration-500 ease-editorial p-8 md:p-12 ${
                project.featured ? "border-crimson/30" : ""
              }`}
            >
              <span
                aria-hidden
                style={{ transform: "translateZ(20px)" }}
                className="pointer-events-none select-none absolute top-4 right-6 font-display text-7xl md:text-8xl leading-none text-crimson/[0.10] transition-transform duration-500 ease-editorial group-hover:-translate-y-1"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-0 top-0 h-[3px] w-full bg-crimson origin-left rounded-t-2xl"
              />

              <div
                style={{ transform: "translateZ(30px)" }}
                className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 relative"
              >
                <div className="flex-1">
                  {project.featured && (
                    <span className="inline-block text-[11px] tracking-wider2 uppercase text-crimson mb-3">
                      Centerpiece Project
                    </span>
                  )}
                  <h3 className="font-display font-semibold text-3xl md:text-4xl text-ink mb-2 group-hover:text-crimson transition-colors duration-400 ease-editorial">
                    {project.name}
                  </h3>
                  <p className="text-warm-gray font-semibold italic mb-5">{project.subtitle}</p>
                  <p className="text-ink/90 font-medium leading-relaxed max-w-2xl mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs text-ink/80 font-semibold bg-cream border-2 border-hairline rounded-full px-3 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex md:flex-col gap-3 md:min-w-[9rem]">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="group/btn inline-flex items-center justify-center gap-2 text-sm font-semibold border-2 border-ink rounded-full px-5 py-2.5 text-ink hover:border-crimson hover:text-crimson active:border-crimson active:text-crimson active:scale-95 transition-all duration-300"
                    >
                      <Github size={15} className="transition-transform duration-300 group-hover/btn:rotate-[10deg]" />
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="group/btn inline-flex items-center justify-center gap-2 text-sm font-semibold bg-crimson text-cream rounded-full px-5 py-2.5 hover:bg-crimson-deep active:bg-crimson-deep active:scale-95 transition-all duration-300"
                    >
                      Live Demo
                      <ArrowUpRight size={15} className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                  )}
                </div>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
