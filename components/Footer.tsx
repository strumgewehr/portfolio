import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t-2 border-ink/10">
      <div className="max-w-editorial mx-auto px-6 md:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm font-semibold text-warm-gray">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>Designed &amp; built with Next.js, Tailwind, and Framer Motion.</p>
      </div>
    </footer>
  );
}
