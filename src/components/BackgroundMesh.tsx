export default function BackgroundMesh() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-emerald-500/20 blur-[120px] animate-pulse-glow" />
      <div className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-cyan-500/15 blur-[100px] animate-float" />
      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-violet-500/10 blur-[100px] animate-float-delayed" />
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute inset-0 noise-overlay" />
    </div>
  );
}
