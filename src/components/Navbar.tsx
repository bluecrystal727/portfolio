"use client";

import { useEffect, useState } from "react";
import { Menu, Sparkles, X } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-[#030712]/80 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a
          href="#"
          className="group flex items-center gap-2 text-lg font-bold tracking-tight text-white"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 text-sm font-extrabold text-slate-950 shadow-[0_0_24px_rgba(52,211,153,0.35)] transition-transform group-hover:scale-105">
            RK
          </span>
          <span>
            {profile.name.split(" ")[0]}
            <span className="gradient-text">.</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-400 transition-all hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${profile.email}`}
          className="group hidden items-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(52,211,153,0.25)] transition-all hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(52,211,153,0.4)] md:inline-flex"
        >
          <Sparkles size={15} />
          Get in touch
        </a>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2.5 text-slate-200 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[#030712]/95 px-6 py-5 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950"
                onClick={() => setOpen(false)}
              >
                Get in touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
