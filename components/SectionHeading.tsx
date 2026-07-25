"use client";

import { SplitText } from "./SplitText";

export function SectionHeading({
  index,
  title,
  className = "",
}: {
  index: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <span
        aria-hidden
        className="pointer-events-none select-none absolute -top-10 -left-2 md:-left-4 font-display font-semibold text-[6rem] md:text-[9rem] leading-none text-crimson/[0.14]"
      >
        {index}
      </span>
      <SplitText
        as="h2"
        text={title}
        className="relative font-display font-semibold text-3xl md:text-4xl text-ink"
      />
      <span className="relative mt-4 block h-[3px] w-14 bg-crimson" />
    </div>
  );
}
