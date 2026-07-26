"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { profile } from "@/lib/data";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-editorial ${
        scrolled || menuOpen
          ? "bg-cream/90 backdrop-blur-sm border-b border-hairline"
          : "bg-transparent"
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

        <div className="flex items-center gap-3 ml-auto">
          <a
            href={profile.resumeUrl}
            className="text-sm font-semibold border-2 border-ink rounded-full px-4 py-1.5 text-ink hover:border-crimson hover:text-crimson active:scale-95 active:border-crimson active:text-crimson transition-all duration-300"
          >
            Resume
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border-2 border-ink text-ink active:scale-90 active:border-crimson active:text-crimson transition-all duration-200"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease }}
            className="md:hidden overflow-hidden border-t border-hairline bg-cream"
          >
            <ul className="flex flex-col px-6 py-4 text-base font-semibold text-ink/90">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.04, ease }}
                  className="border-b border-hairline last:border-none"
                >
                  <a
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-4 active:text-crimson active:translate-x-1 transition-all duration-150"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
