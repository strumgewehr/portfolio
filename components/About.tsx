import { about } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { Ornament } from "./Ornament";

export function About() {
  return (
    <section id="about" className="relative max-w-editorial mx-auto px-6 md:px-10 py-24 md:py-32 overflow-hidden">
      <Ornament
        variant="topo"
        className="pointer-events-none absolute -right-10 top-10 w-[26rem] h-auto opacity-[0.4] hidden lg:block"
      />
      <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16 relative">
        <SectionHeading index="02" title="About" className="mb-8 md:mb-0 md:sticky md:top-28" />
        <div className="space-y-6 max-w-prose">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <p className="text-lg leading-relaxed font-medium text-ink/90">{p}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
