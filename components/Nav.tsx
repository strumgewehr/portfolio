"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-editorial ${
        scrolled ? "bg-cream/90 backdrop-blur-sm border-b border-hairline" : "bg-transparent"
      }`}
    >
      <nav className="max-w-editorial mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <ul className="hidden md:flex items-center gap-8 text-sm font-semibold text-ink/90">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="link-underline">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={profile.resumeUrl}
          className="ml-auto text-sm font-semibold border-2 border-ink rounded-full px-4 py-1.5 text-ink hover:border-crimson hover:text-crimson transition-colors duration-300"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}
