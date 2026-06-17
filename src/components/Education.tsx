import { Award, GraduationCap } from "lucide-react";
import { certifications, education } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section className="relative px-6 py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/[0.03] to-transparent" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          id="education"
          eyebrow="Education"
          title="Background credentials"
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal delay={100}>
            <div className="gradient-border glass group relative h-full overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.35)] sm:p-10">
              <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-violet-500/20 to-violet-500/5 p-4 text-violet-300">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">
                {education.school}
              </h3>
              <p className="mt-3 text-lg text-slate-300">{education.degree}</p>
              <p className="mt-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-400">
                {education.period} · {education.location}
              </p>
              <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl transition-opacity group-hover:opacity-100 opacity-60" />
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="gradient-border glass group relative h-full overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.35)] sm:p-10">
              <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-500/5 p-4 text-amber-300">
                <Award size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Certifications</h3>
              <ul className="mt-6 space-y-4">
                {certifications.map((cert) => (
                  <li
                    key={cert}
                    className="flex gap-4 rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-3 text-slate-300 transition-colors group-hover:border-emerald-500/15 group-hover:text-white"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-amber-400 to-emerald-400" />
                    {cert}
                  </li>
                ))}
              </ul>
              <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-amber-500/10 blur-3xl transition-opacity group-hover:opacity-100 opacity-60" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
