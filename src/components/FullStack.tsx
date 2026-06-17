import { ArrowDownLeft, ArrowDownRight, Layers3 } from "lucide-react";
import { fullStackHighlights, fullStackLayers } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const layerStyles: Record<string, string> = {
  cyan: "border-cyan-500/25 bg-cyan-500/10 text-cyan-300",
  emerald: "border-emerald-500/25 bg-emerald-500/10 text-emerald-300",
  violet: "border-violet-500/25 bg-violet-500/10 text-violet-300",
  amber: "border-amber-500/25 bg-amber-500/10 text-amber-300",
};

export default function FullStack() {
  return (
    <section className="relative px-6 py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/[0.04] via-transparent to-emerald-500/[0.03]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          id="fullstack"
          eyebrow="Full Stack"
          title="End to end delivery"
          description="From user-facing Angular and React interfaces to Spring Boot APIs, databases, and cloud deployment — I build the complete application stack."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <Reveal delay={100}>
            <div className="gradient-border glass relative overflow-hidden rounded-3xl p-7 sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-2xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 p-3 text-cyan-300">
                  <Layers3 size={22} />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                    Application flow
                  </p>
                  <p className="text-lg font-bold text-white">
                    UI → API → Services → Cloud
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {fullStackLayers.map((layer, index) => (
                  <div key={layer.layer}>
                    <div
                      className={`rounded-2xl border p-4 ${layerStyles[layer.color]}`}
                    >
                      <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em]">
                        {layer.layer}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {layer.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-slate-200"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    {index < fullStackLayers.length - 1 && (
                      <div className="flex justify-center py-1 text-slate-600">
                        <ArrowDownRight size={16} className="hidden sm:block" />
                        <span className="sm:hidden">↓</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {fullStackHighlights.map((item, index) => (
              <Reveal key={item.title} delay={140 + index * 80}>
                <div className="gradient-border glass group h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(34,211,238,0.08)]">
                  <div className="mb-3 flex items-center gap-2">
                    <ArrowDownLeft size={16} className="text-cyan-400" />
                    <h3 className="font-bold text-white">{item.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-400 transition-colors group-hover:text-slate-300">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={200}>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { label: "Frontend", value: "Angular · React" },
              { label: "Backend", value: "Java · Spring Boot" },
              { label: "Ship to", value: "AWS · GCP · K8s" },
            ].map((item) => (
              <div
                key={item.label}
                className="glass gradient-border rounded-2xl px-5 py-4 text-center"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {item.label}
                </p>
                <p className="mt-2 text-sm font-bold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
