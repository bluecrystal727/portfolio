import { Briefcase } from "lucide-react";
import { experiences } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section className="relative px-6 py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="experience"
          eyebrow="Experience"
          title="Full stack journey"
          description="From Angular UI components and Spring Boot APIs to cloud deployments — thirteen years of end-to-end delivery."
        />

        <div className="relative">
          <div className="absolute bottom-0 left-[19px] top-0 hidden w-px bg-gradient-to-b from-emerald-500/60 via-cyan-500/30 to-transparent sm:block" />

          <div className="space-y-8">
            {experiences.map((job, index) => (
              <Reveal key={`${job.company}-${job.period}`} delay={index * 100}>
                <article className="relative sm:pl-16">
                  <div className="absolute left-0 top-8 hidden sm:flex">
                    <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-2xl border border-emerald-500/30 bg-[#030712] shadow-[0_0_24px_rgba(52,211,153,0.25)]">
                      <Briefcase size={16} className="text-emerald-400" />
                    </div>
                  </div>

                  <div className="gradient-border glass group overflow-hidden rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.35)] sm:p-9">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.04] via-transparent to-cyan-500/[0.04] opacity-0 transition-opacity group-hover:opacity-100" />

                    <div className="relative mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <time className="inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                          {job.period}
                        </time>
                        <h3 className="mt-4 text-2xl font-bold text-white">
                          {job.role}
                        </h3>
                        <p className="mt-2 text-base text-cyan-300/90">
                          {job.company}
                          <span className="text-slate-600"> · </span>
                          {job.location}
                        </p>
                        {"stack" in job && job.stack && (
                          <div className="mt-4 flex flex-wrap gap-2">
                            {job.stack.map((tech) => (
                              <span
                                key={tech}
                                className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-1 text-xs font-medium text-cyan-200"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <ul className="relative space-y-4">
                      {job.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex gap-4 text-slate-400 leading-relaxed transition-colors group-hover:text-slate-300"
                        >
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 shadow-[0_0_10px_rgba(52,211,153,0.6)]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
