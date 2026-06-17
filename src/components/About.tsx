import { profile } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const stats = [
  {
    value: "13+",
    label: "Years experience",
    detail: "Full stack & architecture",
  },
  {
    value: "2",
    label: "Frontend stacks",
    detail: "Angular · React",
  },
  {
    value: "90%",
    label: "Test coverage",
    detail: "Backend + frontend tests",
  },
  {
    value: "8",
    label: "Engineers led",
    detail: "Full stack Agile teams",
  },
];

export default function About() {
  return (
    <section className="relative px-6 py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="about"
          eyebrow="About"
          title="Full stack engineer"
          description="I build complete products — not just APIs. From UI components and routing to services, security, and cloud deployment."
        />

        <div className="grid gap-8 lg:grid-cols-[1.35fr_1fr]">
          <Reveal delay={100}>
            <div className="gradient-border glass relative overflow-hidden rounded-3xl p-8 sm:p-10">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl" />
              <p className="relative text-lg leading-8 text-slate-300">
                {profile.summary}
              </p>
              <div className="relative mt-8 flex flex-wrap gap-2">
                {[
                  "Angular",
                  "React",
                  "Spring Boot",
                  "REST APIs",
                  "AWS",
                  "Kubernetes",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} delay={120 + index * 80}>
                <div className="group gradient-border glass h-full rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(52,211,153,0.12)]">
                  <p className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-4xl font-extrabold text-transparent">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-white">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">{stat.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
