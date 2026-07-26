"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { profile } from "@/lib/data";
import { SplitText } from "./SplitText";
import { Ornament } from "./Ornament";

const ease = [0.22, 1, 0.36, 1] as const;

function CTAButtons({ delay = 0.9 }: { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease }}
      className="flex flex-wrap items-center gap-4"
    >
      <a
        href="#projects"
        className="group inline-flex items-center gap-1.5 bg-crimson text-cream text-sm font-semibold px-6 py-3 rounded-full hover:bg-crimson-deep active:bg-crimson-deep active:scale-95 transition-all duration-300 ease-editorial shadow-paper"
      >
        View Projects
        <ArrowUpRight
          size={15}
          className="transition-transform duration-300 ease-editorial group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </a>
      <a
        href={profile.github}
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
        className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-ink text-ink hover:border-crimson hover:text-crimson hover:rotate-[8deg] active:border-crimson active:text-crimson active:scale-90 transition-all duration-300 ease-editorial"
      >
        <Github size={17} />
      </a>
      <a
        href={profile.linkedin}
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
        className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-ink text-ink hover:border-crimson hover:text-crimson hover:rotate-[8deg] active:border-crimson active:text-crimson active:scale-90 transition-all duration-300 ease-editorial"
      >
        <Linkedin size={17} />
      </a>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex flex-col items-start md:hero-viewport md:flex md:items-center max-w-editorial mx-auto px-6 md:px-10 pt-28 md:pt-32 pb-20 md:pb-16 overflow-hidden"
    >
      <Ornament
        variant="network"
        className="pointer-events-none absolute -right-16 -top-10 w-[30rem] h-[30rem] opacity-[0.35] hidden lg:block"
      />

      {/* ---------- MOBILE composition (< md): compact byline layout ---------- */}
      <div className="w-full relative z-10 md:hidden">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="uppercase tracking-wider2 text-xs font-semibold text-crimson mb-6"
        >
          AI Engineering &amp; Cybersecurity Research
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="relative w-[4.5rem] h-[4.5rem] flex-shrink-0 rounded-full overflow-hidden border-2 border-ivory shadow-paper">
            <Image
              src="/images/garv-sethi-circle.jpg"
              alt="Portrait of Garv Sethi"
              fill
              sizes="72px"
              className="object-cover grayscale-[20%] contrast-[1.03]"
              priority
            />
          </div>
          <div>
            <h1 className="font-display font-semibold text-4xl leading-none text-ink">
              {profile.name}
            </h1>
            <p className="text-[11px] uppercase tracking-wider2 font-semibold text-warm-gray mt-2">
              {profile.location}
            </p>
          </div>
        </motion.div>

        <div className="font-display text-2xl font-medium text-ink max-w-2xl leading-snug mb-10">
          <SplitText text={profile.tagline} delay={0.35} stagger={0.02} />
        </div>

        <CTAButtons delay={0.75} />
      </div>

      {/* ---------- DESKTOP composition (md+): side-by-side editorial layout ---------- */}
      <div className="hidden md:grid w-full relative z-10 md:grid-cols-[1.5fr_1fr] gap-16 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="uppercase tracking-wider2 text-sm font-semibold text-crimson mb-6"
          >
            AI Engineering &amp; Cybersecurity Research
          </motion.p>

          <h1 className="font-display font-semibold text-7xl lg:text-8xl leading-[1.0] text-ink">
            <SplitText text={profile.name} delay={0.05} stagger={0.08} />
          </h1>

          <div className="mt-8 font-display text-3xl lg:text-4xl font-medium text-ink max-w-2xl leading-snug">
            <SplitText text={profile.tagline} delay={0.35} stagger={0.02} />
          </div>

          <div className="mt-12">
            <CTAButtons delay={0.9} />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24, rotate: -3 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease }}
          className="group relative w-full max-w-[280px]"
        >
          <div className="absolute -z-10 inset-0 rounded-full bg-crimson/15 translate-x-3 translate-y-3 transition-transform duration-500 ease-editorial group-hover:translate-x-5 group-hover:translate-y-5" />

          <div className="relative rounded-full overflow-hidden border-4 border-ivory shadow-paper-hover transition-transform duration-500 ease-editorial group-hover:scale-[1.05] group-hover:-rotate-2">
            <div className="relative aspect-square">
              <Image
                src="/images/garv-sethi-circle.jpg"
                alt="Portrait of Garv Sethi"
                fill
                sizes="280px"
                className="object-cover grayscale-[20%] contrast-[1.03] transition-all duration-500 ease-editorial group-hover:grayscale-0"
                priority
              />
            </div>
            <div className="absolute inset-0 rounded-full ring-2 ring-crimson/0 transition-all duration-500 ease-editorial group-hover:ring-crimson/50" />
          </div>

          <div className="mt-5 text-left">
            <p className="font-display text-lg text-ink leading-none">{profile.name}</p>
            <p className="text-xs uppercase tracking-wider2 font-semibold text-warm-gray mt-1">
              {profile.location}
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, -22, 0] }}
        transition={{
          opacity: { duration: 1.2, delay: 0.2 },
          y: { duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 },
        }}
        aria-hidden
        className="pointer-events-none absolute right-[8%] top-1/2 -translate-y-1/2 font-display text-[22rem] leading-none text-crimson/[0.05] select-none hidden xl:block"
      >
        01
      </motion.div>
    </section>
  );
}
