export default function ImagePlaceholder({ label, className = "", tone = "light" }) {
  const tones = {
    light: "bg-offwhite text-stone/60",
    dark: "bg-ink text-white/30",
  };

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${tones[tone]} ${className}`}
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-40"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="0.4" />
        <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="0.4" />
      </svg>
      {label && (
        <span className="relative z-10 text-[11px] uppercase tracking-widest2">{label}</span>
      )}
    </div>
  );
}
