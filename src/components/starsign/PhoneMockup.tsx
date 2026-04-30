import { SignatureMark } from "./SignatureMark";

type Variant = "capture" | "pulse" | "sign" | "souvenir" | "share";

const labels: Record<Variant, { eyebrow: string; title: string }> = {
  capture: { eyebrow: "01 — Capture", title: "Live moment" },
  pulse: { eyebrow: "02 — Pulse", title: "The artist triggers" },
  sign: { eyebrow: "03 — Sign", title: "Signature in motion" },
  souvenir: { eyebrow: "04 — Souvenir", title: "Certified memory" },
  share: { eyebrow: "05 — Share", title: "Yours forever" },
};

export function PhoneMockup({
  variant,
  artist = "Lorenzo",
  venue = "Accor Arena, Paris",
  date = "25.05.2026 — 22:17",
  bg,
  className = "",
}: {
  variant: Variant;
  artist?: string;
  venue?: string;
  date?: string;
  bg?: string;
  className?: string;
}) {
  const meta = labels[variant];
  return (
    <div
      className={`relative mx-auto aspect-[9/19] w-full max-w-[260px] overflow-hidden rounded-[2.2rem] border border-border/70 bg-card shadow-neon ${className}`}
    >
      {/* notch */}
      <div className="absolute left-1/2 top-2 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />
      {/* bg image */}
      {bg && (
        <img
          src={bg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-70"
          loading="lazy"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90" />

      {/* status bar */}
      <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-5 pt-3 text-[10px] font-medium text-white/80">
        <span>9:41</span>
        <span>•••</span>
      </div>

      {/* content */}
      <div className="relative z-10 flex h-full flex-col justify-between p-5 pt-10 text-white">
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-primary-glow">{meta.eyebrow}</p>
          <p className="mt-1 text-sm font-semibold">{meta.title}</p>
        </div>

        {variant === "pulse" && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="absolute h-24 w-24 rounded-full border border-primary animate-pulse-ring" />
            <span className="absolute h-24 w-24 rounded-full border border-primary animate-pulse-ring" style={{ animationDelay: "0.6s" }} />
            <span className="h-6 w-6 rounded-full bg-primary shadow-neon" />
          </div>
        )}

        {(variant === "sign" || variant === "souvenir" || variant === "share") && (
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center">
            <SignatureMark
              animate={variant === "sign"}
              className="h-28 w-44 text-primary-glow drop-shadow-[0_0_18px_oklch(0.78_0.22_320/.7)]"
            />
          </div>
        )}

        {variant === "capture" && (
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2">
            <div className="h-14 w-14 rounded-full border-4 border-white/90" />
          </div>
        )}

        {(variant === "souvenir" || variant === "share") && (
          <div className="relative z-10 mt-auto rounded-xl border border-white/15 bg-black/50 p-3 backdrop-blur-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] font-semibold">{artist}</p>
                <p className="text-[9px] text-white/60">{venue}</p>
              </div>
              <span className="rounded-full bg-primary/20 px-2 py-0.5 text-[8px] uppercase tracking-wider text-primary-glow">
                Certified
              </span>
            </div>
            <p className="mt-1 text-[9px] text-white/50">{date}</p>
          </div>
        )}
      </div>
    </div>
  );
}