import { Mail } from "lucide-react";
import { profile } from "@/data/portfolio";
import BackgroundMesh from "./BackgroundMesh";
import LinkedInIcon from "./LinkedInIcon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section className="relative overflow-hidden px-6 py-24 sm:py-32">
      <BackgroundMesh />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          id="contact"
          eyebrow="Contact"
          title="Let's connect"
          description="Open to full stack Java roles, technical leadership, and end-to-end product engineering opportunities."
          align="center"
        />

        <Reveal delay={120}>
          <div className="gradient-border relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] bg-slate-950/80 p-10 text-center shadow-[0_30px_100px_rgba(0,0,0,0.45)] sm:p-14">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10" />

            <p className="relative mx-auto max-w-2xl text-xl leading-relaxed text-slate-300">
              Need someone who can own the frontend, backend, and deployment?
              I&apos;d love to hear about your next project.
            </p>

            <div className="relative mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 px-8 py-4 text-sm font-bold text-slate-950 shadow-[0_0_40px_rgba(52,211,153,0.25)] transition-all hover:scale-[1.03] hover:shadow-[0_0_50px_rgba(52,211,153,0.4)] sm:w-auto"
              >
                <Mail size={18} />
                {profile.email}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass inline-flex w-full items-center justify-center gap-3 rounded-full px-8 py-4 text-sm font-semibold text-white transition-all hover:border-emerald-500/30 hover:bg-white/10 sm:w-auto"
              >
                <LinkedInIcon size={18} />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
