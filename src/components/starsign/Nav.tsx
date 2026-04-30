import { useState } from "react";
import logo from "@/assets/starsign-logo.png";

const links = [
  { label: "Concept", href: "#concept" },
  { label: "Comment ça marche", href: "#how" },
  { label: "Fans", href: "#fans" },
  { label: "Artistes", href: "#artists" },
  { label: "Pros", href: "#pros" },
  { label: "FAQ", href: "#faq" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/40">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="Star'Sign" className="h-9 w-9" />
          <span className="font-display text-lg font-semibold tracking-wide">
            STAR<span className="text-primary">&apos;</span>SIGN
          </span>
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden md:block">
          <a
            href="#beta"
            className="inline-flex items-center rounded-full bg-gradient-neon px-5 py-2 text-sm font-semibold text-primary-foreground shadow-glow-sm transition-transform hover:scale-105"
          >
            Rejoindre la bêta
          </a>
        </div>
        <button
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden rounded-md border border-border/60 p-2"
        >
          <span className="block h-0.5 w-5 bg-foreground" />
          <span className="mt-1 block h-0.5 w-5 bg-foreground" />
          <span className="mt-1 block h-0.5 w-5 bg-foreground" />
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-border/40 bg-background/95 px-5 py-4">
          <ul className="space-y-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm text-muted-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#beta"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center rounded-full bg-gradient-neon px-5 py-2 text-sm font-semibold text-primary-foreground"
              >
                Rejoindre la bêta
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}