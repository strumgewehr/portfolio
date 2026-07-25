"use client";

import { Reveal } from "./Reveal";

const stats = [
  { value: "05", label: "Projects shipped" },
  { value: "02", label: "Core domains — AI & Cybersecurity" },
  { value: "01", label: "Flagship platform — Redoubt Ops" },
];

export function Stats() {
  return (
    <section className="bg-crimson">
      <div className="max-w-editorial mx-auto px-6 md:px-10 py-14 md:py-20 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} y={20}>
            <p className="font-display font-semibold text-6xl md:text-7xl text-cream leading-none">
              {s.value}
            </p>
            <p className="mt-3 text-cream/85 text-sm md:text-base uppercase tracking-wider2 font-medium">
              {s.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
