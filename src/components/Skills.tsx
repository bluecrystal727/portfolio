import {
  Cloud,
  Code2,
  Database,
  Layers,
  type LucideIcon,
} from "lucide-react";
import { skillGroups } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const groupIcons: Record<string, LucideIcon> = {
  Frontend: Code2,
  Backend: Layers,
  "Cloud & DevOps": Cloud,
  "Data & Quality": Database,
};

const groupColors: Record<string, string> = {
  Frontend: "from-cyan-500/20 to-cyan-500/5 text-cyan-300",
  Backend: "from-emerald-500/20 to-emerald-500/5 text-emerald-300",
  "Cloud & DevOps": "from-violet-500/20 to-violet-500/5 text-violet-300",
  "Data & Quality": "from-amber-500/20 to-amber-500/5 text-amber-300",
};

export default function Skills() {
  return (
    <section className="relative px-6 py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/[0.03] via-transparent to-transparent" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          id="skills"
          eyebrow="Skills"
          title="Full stack toolkit"
          description="Frontend frameworks, Java backends, databases, and the cloud tooling to ship production applications end to end."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = groupIcons[group.label] ?? Layers;
            const colorClass = groupColors[group.label] ?? groupColors.Backend;

            return (
              <Reveal key={group.label} delay={index * 90}>
                <div className="group gradient-border glass relative h-full overflow-hidden rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
                  <div
                    className={`mb-5 inline-flex rounded-2xl bg-gradient-to-br p-3 ${colorClass}`}
                  >
                    <Icon size={22} />
                  </div>

                  <h3 className="text-lg font-bold text-white">{group.label}</h3>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-300 transition-colors group-hover:border-emerald-500/20 group-hover:text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-emerald-500/10 blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
