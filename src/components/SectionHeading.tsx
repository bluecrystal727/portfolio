import Reveal from "./Reveal";

interface SectionHeadingProps {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "mx-auto text-center items-center" : "";

  return (
    <Reveal>
      <div
        id={id}
        className={`mb-14 flex max-w-3xl scroll-mt-28 flex-col ${alignment}`}
      >
        <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          {eyebrow}
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
          {title.split(" ").length > 2 ? (
            <>
              {title.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="gradient-text">
                {title.split(" ").slice(-1)[0]}
              </span>
            </>
          ) : (
            title
          )}
        </h2>
        {description && (
          <p className="mt-5 text-lg leading-relaxed text-slate-400">
            {description}
          </p>
        )}
      </div>
    </Reveal>
  );
}
