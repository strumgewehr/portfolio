"use client";

import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SplitText } from "./SplitText";

export function Contact() {
  return (
    <section id="contact" className="max-w-editorial mx-auto px-6 md:px-10 py-24 md:py-40 relative">
      <span
        aria-hidden
        className="pointer-events-none select-none absolute -top-6 -left-2 md:-left-4 font-display font-semibold text-[6rem] md:text-[9rem] leading-none text-crimson/[0.14]"
      >
        06
      </span>
      <h2 className="relative font-display font-semibold text-4xl md:text-6xl text-ink max-w-2xl leading-tight">
        <SplitText text="Let's work on something worth building." stagger={0.03} />
      </h2>

      <Reveal delay={0.3}>
        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 bg-crimson text-cream text-sm font-semibold px-6 py-3 rounded-full hover:bg-crimson-deep transition-colors duration-300 shadow-paper"
          >
            <Mail size={15} /> {profile.email}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border-2 border-ink text-ink text-sm font-semibold px-6 py-3 rounded-full hover:border-crimson hover:text-crimson transition-colors duration-300"
          >
            <Github size={15} /> GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border-2 border-ink text-ink text-sm font-semibold px-6 py-3 rounded-full hover:border-crimson hover:text-crimson transition-colors duration-300"
          >
            <Linkedin size={15} /> LinkedIn
          </a>
          <a
            href={profile.resumeUrl}
            className="inline-flex items-center gap-2 border-2 border-ink text-ink text-sm font-semibold px-6 py-3 rounded-full hover:border-crimson hover:text-crimson transition-colors duration-300"
          >
            Resume <ArrowUpRight size={15} />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
