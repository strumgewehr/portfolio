import { experience } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="max-w-editorial mx-auto px-6 md:px-10 py-24 md:py-32">
      <SectionHeading index="03" title="Experience" className="mb-16" />

      <div className="relative">
        <div className="absolute left-0 md:left-[11rem] top-2 bottom-2 w-[2px] bg-crimson/20 hidden sm:block" />

        <div className="space-y-16">
          {experience.map((item, i) => (
            <Reveal key={item.role + item.org} delay={i * 0.08}>
              <div className="grid sm:grid-cols-[10rem_1fr] gap-4 sm:gap-8 relative">
                <div className="sm:pr-8">
                  <p className="text-sm text-warm-gray font-semibold tracking-wide">{item.period}</p>
                </div>
                <div className="sm:pl-8 relative">
                  <span className="hidden sm:block absolute -left-[2.15rem] top-1.5 w-3 h-3 rounded-full bg-crimson ring-4 ring-crimson/15" />
                  <h3 className="font-display font-semibold text-2xl md:text-3xl text-ink">{item.role}</h3>
                  <p className="text-warm-gray font-semibold mt-1 mb-5">{item.org}</p>
                  <ul className="space-y-3">
                    {item.bullets.map((b, bi) => (
                      <li
                        key={bi}
                        className="text-ink/90 font-medium leading-relaxed pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-crimson before:font-bold"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
