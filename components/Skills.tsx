import { skills } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  const entries = Object.entries(skills);

  return (
    <section id="skills" className="max-w-editorial mx-auto px-6 md:px-10 py-24 md:py-32">
      <SectionHeading index="05" title="Skills" className="mb-16" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
        {entries.map(([category, items], i) => (
          <Reveal key={category} delay={i * 0.05}>
            <h3 className="text-sm uppercase tracking-wider2 font-bold text-crimson mb-4">
              {category}
            </h3>
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item} className="text-ink/90 font-semibold border-b-2 border-hairline pb-2 transition-colors duration-300 hover:text-crimson hover:border-crimson/40">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
