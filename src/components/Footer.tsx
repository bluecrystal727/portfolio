import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-6 py-10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-slate-300">{profile.name}</span>. Crafted with
          precision.
        </p>
        <p>
          Built with{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text font-semibold text-transparent">
            Next.js
          </span>
        </p>
      </div>
    </footer>
  );
}
