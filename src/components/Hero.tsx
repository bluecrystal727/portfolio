import { ArrowDown, Mail, MapPin, Monitor, Server } from "lucide-react";
import { profile } from "@/data/portfolio";
import BackgroundMesh from "./BackgroundMesh";
import LinkedInIcon from "./LinkedInIcon";
import Reveal from "./Reveal";

const backendLines = [
  "@RestController",
  "public ApiResponse getOrders() {",
  "  return service.findAll();",
  "}",
];

const frontendLines = [
  "@Component({",
  "  template: `<app-table",
  "    [data]=\"orders\">`",
  "})",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 pb-24 pt-28 sm:pt-32">
      <BackgroundMesh />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
        <div>
          <Reveal>
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-200 backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
              </span>
              Full stack · Frontend to cloud
            </div>
          </Reveal>

          <Reveal delay={100}>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300/80">
              {profile.title} · {profile.subtitle}
            </p>
          </Reveal>

          <Reveal delay={180}>
            <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-7xl">
              Building{" "}
              <span className="gradient-text animate-gradient bg-gradient-to-r from-emerald-300 via-cyan-300 to-violet-300">
                complete
              </span>{" "}
              enterprise applications
            </h1>
          </Reveal>

          <Reveal delay={260}>
            <p className="mt-6 max-w-2xl text-xl font-medium text-slate-300">
              {profile.name}
            </p>
            <p className="mt-3 max-w-2xl text-lg leading-relaxed text-slate-400">
              13+ years delivering end-to-end solutions — Angular & React
              frontends, Spring Boot APIs, databases, and cloud deployments for
              finance, healthcare, and logistics.
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Angular", "React", "Spring Boot", "AWS", "Kubernetes"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
                  >
                    {tech}
                  </span>
                ),
              )}
            </div>
          </Reveal>

          <Reveal delay={380}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {[
                { icon: MapPin, text: profile.location },
                {
                  icon: Mail,
                  text: profile.email,
                  href: `mailto:${profile.email}`,
                },
              ].map((item) => (
                <span
                  key={item.text}
                  className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-slate-300"
                >
                  <item.icon size={15} className="text-emerald-400" />
                  {item.href ? (
                    <a
                      href={item.href}
                      className="transition-colors hover:text-white"
                    >
                      {item.text}
                    </a>
                  ) : (
                    item.text
                  )}
                </span>
              ))}
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-slate-300 transition-all hover:border-emerald-500/30 hover:text-white"
              >
                <LinkedInIcon size={15} className="text-emerald-400" />
                LinkedIn
              </a>
            </div>
          </Reveal>

          <Reveal delay={460}>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#fullstack"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-[0_0_40px_rgba(52,211,153,0.25)] transition-all hover:scale-[1.03] hover:shadow-[0_0_50px_rgba(52,211,153,0.4)]"
              >
                See full stack work
              </a>
              <a
                href="#contact"
                className="glass inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-all hover:border-emerald-500/30 hover:bg-white/10"
              >
                Start a conversation
              </a>
            </div>
          </Reveal>

          <Reveal delay={540}>
            <a
              href="#about"
              className="mt-20 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-emerald-300"
              aria-label="Scroll to about section"
            >
              Scroll to discover
              <ArrowDown size={16} className="animate-bounce text-emerald-400" />
            </a>
          </Reveal>
        </div>

        <Reveal delay={300} className="hidden lg:block">
          <div className="grid gap-4">
            <div className="gradient-border relative overflow-hidden rounded-3xl bg-slate-900/80 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
              <div className="flex items-center justify-between border-b border-white/10 bg-slate-950/80 px-5 py-3">
                <div className="flex items-center gap-2 text-xs text-cyan-300">
                  <Monitor size={14} />
                  dashboard.component.ts
                </div>
                <span className="rounded-full bg-cyan-500/15 px-2 py-0.5 text-[10px] font-semibold uppercase text-cyan-300">
                  Frontend
                </span>
              </div>
              <div className="space-y-1 p-5 font-mono text-xs leading-6">
                {frontendLines.map((line, index) => (
                  <div key={line} className="flex gap-3">
                    <span className="w-4 shrink-0 text-right text-slate-600">
                      {index + 1}
                    </span>
                    <span className="text-cyan-300/90">{line}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center text-slate-600">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">
                REST API
              </span>
            </div>

            <div className="gradient-border relative overflow-hidden rounded-3xl bg-slate-900/80 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
              <div className="flex items-center justify-between border-b border-white/10 bg-slate-950/80 px-5 py-3">
                <div className="flex items-center gap-2 text-xs text-emerald-300">
                  <Server size={14} />
                  OrderController.java
                </div>
                <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold uppercase text-emerald-300">
                  Backend
                </span>
              </div>
              <div className="space-y-1 p-5 font-mono text-xs leading-6">
                {backendLines.map((line, index) => (
                  <div key={line} className="flex gap-3">
                    <span className="w-4 shrink-0 text-right text-slate-600">
                      {index + 1}
                    </span>
                    <span
                      className={
                        index === 0
                          ? "text-violet-300"
                          : index === 1 || index === 3
                            ? "text-emerald-300"
                            : "text-slate-300"
                      }
                    >
                      {line}
                    </span>
                  </div>
                ))}
              </div>
              <div className="border-t border-white/10 bg-emerald-500/5 px-5 py-3 text-xs text-slate-400">
                Angular · React → Spring Boot → PostgreSQL · AWS
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            {[
              { label: "Full stack", value: "13+ yrs" },
              { label: "UI stacks", value: "2" },
              { label: "Test cov.", value: "90%" },
            ].map((item) => (
              <div
                key={item.label}
                className="glass gradient-border rounded-2xl px-4 py-4 text-center"
              >
                <p className="text-2xl font-bold text-white">{item.value}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-slate-500">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
