import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/starsign/Nav";
import { PhoneMockup } from "@/components/starsign/PhoneMockup";
import { SignatureMark } from "@/components/starsign/SignatureMark";
import logo from "@/assets/starsign-logo.png";
import heroConcert from "@/assets/hero-concert.jpg";
import artistStage from "@/assets/artist-stage.jpg";
import crowd from "@/assets/crowd.jpg";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "Star'Sign — Your moment. Their signature." },
      {
        name: "description",
        content:
          "Star'Sign turns every concert moment into a unique, signed digital memory. Capture. Pulse. Sign. Share. Join the beta.",
      },
    ],
  }),
});

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-primary-glow">
      <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
      {children}
    </span>
  );
}

function SectionHeading({
  eyebrow,
  title,
  sub,
  center = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  sub?: React.ReactNode;
  center?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.05] sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {sub && <p className="mt-5 text-pretty text-base text-muted-foreground sm:text-lg">{sub}</p>}
    </div>
  );
}

/* ----------------------------- HERO ----------------------------- */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <img
        src={heroConcert}
        alt="Concert crowd holding a phone in front of purple stage lights"
        className="absolute inset-0 h-full w-full object-cover opacity-60"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      <div className="absolute inset-0 bg-gradient-stage" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:px-8">
        <div className="animate-fade-up">
          <Eyebrow>Live music · New layer</Eyebrow>
          <h1 className="mt-5 text-balance text-5xl font-semibold leading-[0.98] sm:text-6xl md:text-7xl">
            Your concert moment.{" "}
            <span className="text-gradient-neon">Their signature.</span>
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg text-muted-foreground sm:text-xl">
            Star&apos;Sign transforms a live moment into a unique digital memory — captured by you,
            co-signed by the artist, certified by the event.
          </p>
          <p className="mt-3 font-display text-sm uppercase tracking-[0.3em] text-primary-glow">
            Le moment devient signature.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#beta"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-neon px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-neon transition-transform hover:scale-105"
            >
              Join the beta
              <span aria-hidden>→</span>
            </a>
            <a
              href="#pros"
              className="inline-flex items-center gap-2 rounded-full border border-border/70 px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              For artists & pros
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Working prototype
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Music Tech incubation
            </span>
            <span className="hidden sm:flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Beta opening 2026
            </span>
          </div>
        </div>

        <div className="relative animate-float">
          <div className="absolute -inset-10 bg-gradient-stage blur-2xl" />
          <PhoneMockup variant="souvenir" bg={artistStage} className="relative" />
          <div className="absolute -bottom-6 -left-6 hidden sm:block">
            <PhoneMockup variant="sign" bg={artistStage} className="w-36 max-w-[150px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------ CONCEPT ONE-LINER --------------------- */
function Concept() {
  return (
    <section id="concept" className="relative border-y border-border/40 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
        <Eyebrow>The concept</Eyebrow>
        <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
          Not just a concert photo.
          <br />
          A <span className="text-gradient-neon">moment co-signed</span> by the artist.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg">
          You capture the live. The artist triggers the pulse. Star&apos;Sign signs the moment with
          date, place and event — a real artifact you can keep, collect and share.
        </p>
      </div>
    </section>
  );
}

/* ----------------------- HOW IT WORKS (5 steps) ----------------- */
const steps = [
  {
    n: "01",
    title: "Capture",
    body: "Snap a photo or video of your live moment.",
    variant: "capture" as const,
  },
  {
    n: "02",
    title: "Pulse",
    body: "The artist triggers a shared live pulse from stage.",
    variant: "pulse" as const,
  },
  {
    n: "03",
    title: "Sign",
    body: "The artist's signature is drawn over your moment.",
    variant: "sign" as const,
  },
  {
    n: "04",
    title: "Souvenir",
    body: "A certified, dated, located memory is generated.",
    variant: "souvenir" as const,
  },
  {
    n: "05",
    title: "Share",
    body: "Keep it. Collect it. Share it. Forever yours.",
    variant: "share" as const,
  },
];

function HowItWorks() {
  return (
    <section id="how" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="The flow"
          title={
            <>
              Capture · Pulse · <span className="text-gradient-neon">Sign</span> · Share
            </>
          }
          sub="Five steps. One signed memory. From the first beat to the last share."
        />

        <div className="mt-16 grid gap-10 md:grid-cols-3 lg:grid-cols-5">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="group relative flex flex-col items-center text-center"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <PhoneMockup variant={s.variant} bg={artistStage} className="mb-6" />
              <p className="font-display text-xs uppercase tracking-[0.25em] text-primary-glow">
                Step {s.n}
              </p>
              <h3 className="mt-1 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 max-w-[14rem] text-sm text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------- FANS SECTION ----------------------- */
function Fans() {
  const items = [
    { t: "Real memories", d: "No more blurry phone photos. A signed moment that proves you were there." },
    { t: "A personal gallery", d: "Every concert becomes a piece in your fan collection." },
    { t: "Relive the emotion", d: "Open the app, feel the moment again — date, place, signature." },
    { t: "Share something unique", d: "Drop it on socials, send it to your crew. Nobody else has yours." },
  ];
  return (
    <section id="fans" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-stage" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
        <div className="relative">
          <img
            src={crowd}
            alt="Festival crowd lit by purple stage lights"
            className="relative z-10 aspect-[4/5] w-full rounded-3xl object-cover shadow-neon"
            loading="lazy"
            width={1280}
            height={1600}
          />
          <div className="absolute -bottom-8 -right-6 z-20 w-48 sm:w-56">
            <PhoneMockup variant="souvenir" bg={artistStage} />
          </div>
          <div className="absolute -inset-6 -z-0 rounded-[2.5rem] bg-primary/20 blur-3xl" />
        </div>

        <div>
          <Eyebrow>For fans</Eyebrow>
          <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight sm:text-5xl">
            For fans who want more than{" "}
            <span className="text-gradient-neon">blurry photos</span>.
          </h2>
          <p className="mt-5 max-w-xl text-muted-foreground sm:text-lg">
            A new way to say <em className="not-italic text-foreground">&ldquo;I was there.&rdquo;</em>{" "}
            — backed by the artist, the venue and the moment itself.
          </p>

          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {items.map((it) => (
              <li
                key={it.t}
                className="rounded-2xl border border-border/60 bg-gradient-card p-5 transition-colors hover:border-primary/40"
              >
                <h3 className="font-semibold">{it.t}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{it.d}</p>
              </li>
            ))}
          </ul>

          <a
            href="#beta"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-neon px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow-sm transition-transform hover:scale-105"
          >
            Become a beta tester →
          </a>
        </div>
      </div>
    </section>
  );
}

/* -------------------------- ARTISTS SECTION -------------------- */
function Artists() {
  const items = [
    { t: "A live engagement tool", d: "Trigger a shared moment without breaking the show." },
    { t: "Direct post-show contact", d: "An opt-in connection with fans, beyond social platforms." },
    { t: "Signature, not gimmick", d: "Your signature, your style, your moment — owned by the artist." },
    { t: "Community insights", d: "See where your audience is, when they react, what they keep." },
  ];
  return (
    <section id="artists" className="relative border-y border-border/40 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
        <div className="order-2 lg:order-1">
          <Eyebrow>For artists</Eyebrow>
          <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight sm:text-5xl">
            Give your audience a moment{" "}
            <span className="text-gradient-neon">they can keep</span>.
          </h2>
          <p className="mt-5 max-w-xl text-muted-foreground sm:text-lg">
            One tap from the stage. A wave of signed moments across the crowd. A new layer of
            intimacy with the people who came for you.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {items.map((it) => (
              <div
                key={it.t}
                className="rounded-2xl border border-border/60 bg-gradient-card p-5"
              >
                <h3 className="font-semibold">{it.t}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{it.d}</p>
              </div>
            ))}
          </div>

          <a
            href="#pro-contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-6 py-3 text-sm font-semibold text-primary-glow transition-colors hover:bg-primary/20"
          >
            Discover the artist experience →
          </a>
        </div>

        <div className="order-1 grid grid-cols-2 gap-4 lg:order-2">
          <PhoneMockup variant="pulse" bg={artistStage} className="mt-10" />
          <PhoneMockup variant="souvenir" bg={artistStage} />
        </div>
      </div>
    </section>
  );
}

/* ------------------------- PROS / ECOSYSTEM -------------------- */
function Pros() {
  const targets = [
    {
      t: "Organizers & festivals",
      d: "Turn every show into a signature experience. Differentiate, engage, and extend the event lifetime.",
    },
    {
      t: "Labels & managers",
      d: "Strengthen the bond between artist and audience. Build a verified fan layer that lives beyond the show.",
    },
    {
      t: "Ticketing platforms",
      d: "Add a post-event experience to every ticket sold. New value, no friction.",
    },
    {
      t: "Brands & partners",
      d: "Sponsor the moment, not just the banner. Authentic, opt-in, contextualized.",
    },
  ];
  return (
    <section id="pros" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="For the music ecosystem"
          title={
            <>
              A new layer of value for <span className="text-gradient-neon">live music</span>.
            </>
          }
          sub="Star'Sign sits between fans, artists and the live event — a structured layer for engagement, memory and audience intelligence."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {targets.map((t) => (
            <article
              key={t.t}
              className="group relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-card p-7 transition-all hover:border-primary/40 hover:shadow-glow-sm"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-neon opacity-0 transition-opacity group-hover:opacity-100" />
              <h3 className="text-xl font-semibold">{t.t}</h3>
              <p className="mt-2 text-muted-foreground">{t.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------- WHY DIFFERENT (compare) ----------------- */
function WhyDifferent() {
  const rows = [
    { what: "Selfie", missing: "Personal but unsigned" },
    { what: "Story", missing: "Shareable but temporary" },
    { what: "Autograph", missing: "Emotional but not scalable" },
    { what: "Ticket", missing: "Transactional, not experiential" },
    { what: "Social post", missing: "Visible but not contextualized" },
  ];
  return (
    <section className="relative border-y border-border/40 bg-secondary/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Why Star'Sign"
          title={
            <>
              Everything else captures the show.{" "}
              <span className="text-gradient-neon">Star&apos;Sign signs the moment.</span>
            </>
          }
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <ul className="space-y-3">
            {rows.map((r) => (
              <li
                key={r.what}
                className="flex items-center justify-between gap-6 rounded-2xl border border-border/60 bg-card/60 px-5 py-4"
              >
                <span className="font-semibold">{r.what}</span>
                <span className="text-sm text-muted-foreground">{r.missing}</span>
              </li>
            ))}
          </ul>

          <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-card p-8 shadow-neon">
            <SignatureMark className="h-16 w-32 text-primary-glow" />
            <h3 className="mt-4 text-2xl font-semibold sm:text-3xl">Star&apos;Sign combines all of it.</h3>
            <ul className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
              {[
                "Artist trigger",
                "Fan capture",
                "Event context",
                "Proof of presence",
                "Signed memory",
                "Shareable artifact",
              ].map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------ MOMENTUM / PROOF --------------------- */
function Momentum() {
  const items = [
    { k: "Working", v: "Functional web prototype tested live" },
    { k: "Validated", v: "Spontaneous interest from real concert audiences" },
    { k: "Incubated", v: "Music Tech incubation context" },
    { k: "Backed", v: "Carried by La Marmite Digitale" },
  ];
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Already in motion"
          title={<>Already tested. <span className="text-gradient-neon">Already understood.</span></>}
          sub="Built from real frustration on real concert nights — not a pitch deck."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.k} className="rounded-2xl border border-border/60 bg-gradient-card p-6">
              <p className="font-display text-xs uppercase tracking-[0.25em] text-primary-glow">
                {it.k}
              </p>
              <p className="mt-3 text-base">{it.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- BETA CTA -------------------------- */
function BetaForm() {
  return (
    <section id="beta" className="relative overflow-hidden py-24 sm:py-32">
      <img
        src={crowd}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-25"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
      <div className="absolute inset-0 bg-gradient-stage" />

      <div className="relative mx-auto max-w-3xl px-5 text-center lg:px-8">
        <Eyebrow>Beta — limited spots</Eyebrow>
        <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Become a <span className="text-gradient-neon">Star&apos;Sign</span> beta tester.
        </h2>
        <p className="mt-5 text-muted-foreground sm:text-lg">
          Be among the first to live signed concert moments. Early access, exclusive drops,
          shape the app with us.
        </p>

        <form
          className="mx-auto mt-10 grid max-w-xl gap-3 text-left"
          onSubmit={(e) => {
            e.preventDefault();
            const f = e.currentTarget;
            f.querySelector<HTMLButtonElement>("button[type=submit]")!.innerText = "You're in ✦";
          }}
        >
          <div className="grid gap-3 sm:grid-cols-2">
            <input
              required
              placeholder="First name"
              className="rounded-xl border border-border bg-card/80 px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none"
            />
            <input
              required
              type="email"
              placeholder="Email"
              className="rounded-xl border border-border bg-card/80 px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none"
            />
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            <input
              placeholder="Favorite music style"
              className="rounded-xl border border-border bg-card/80 px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none sm:col-span-1"
            />
            <input
              placeholder="City"
              className="rounded-xl border border-border bg-card/80 px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none"
            />
            <select
              defaultValue=""
              className="rounded-xl border border-border bg-card/80 px-4 py-3 text-sm text-muted-foreground focus:border-primary focus:outline-none"
            >
              <option value="" disabled>Concert frequency</option>
              <option>1–2 / year</option>
              <option>3–5 / year</option>
              <option>6–10 / year</option>
              <option>10+ / year</option>
            </select>
          </div>
          <button
            type="submit"
            className="mt-2 rounded-full bg-gradient-neon px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-neon transition-transform hover:scale-[1.02]"
          >
            Get my beta access →
          </button>
          <p className="mt-2 text-center text-xs text-muted-foreground">
            No spam. Just signed moments and beta drops.
          </p>
        </form>
      </div>
    </section>
  );
}

/* ----------------------- PRO CONTACT --------------------------- */
function ProContact() {
  return (
    <section id="pro-contact" className="relative border-y border-border/40 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:px-8">
        <div>
          <Eyebrow>Artists · Labels · Venues · Festivals · Brands</Eyebrow>
          <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight sm:text-5xl">
            Let&apos;s imagine your{" "}
            <span className="text-gradient-neon">first signed live moment</span>.
          </h2>
          <p className="mt-5 max-w-xl text-muted-foreground sm:text-lg">
            Pilot a Star&apos;Sign experience on your next show. We co-build the integration with
            your team — minimal logistics, maximum impact.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:hello@star-sign.co"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-neon px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow-sm hover:scale-105 transition-transform"
            >
              Contact the team
            </a>
            <a
              href="mailto:hello@star-sign.co?subject=Demo%20request"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-secondary transition-colors"
            >
              Request a demo
            </a>
            <a
              href="mailto:hello@star-sign.co?subject=Partnership"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-secondary transition-colors"
            >
              Explore partnership
            </a>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 opacity-80">
          {["VENUES", "LABELS", "FESTIVALS", "TICKETING", "BRANDS", "PRESS"].map((p) => (
            <div
              key={p}
              className="flex aspect-square items-center justify-center rounded-2xl border border-dashed border-border/70 bg-card/40 text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- FAQ ------------------------------ */
function FAQ() {
  const qa = [
    {
      q: "What is Star'Sign exactly?",
      a: "A mobile app that turns a live concert moment into a unique digital memory, co-signed by the artist, with date, place and event context.",
    },
    { q: "Is the app available now?", a: "We're opening a closed beta in 2026. Join the waitlist to get early access." },
    {
      q: "How does the signature work?",
      a: "During the show, the artist triggers a live pulse from their Star'Sign space. Fans capturing the moment receive an authentic, certified signature on their memory.",
    },
    { q: "Is it only for big artists?", a: "No. Star'Sign works for emerging artists, headliners, festivals, club nights — any live music context." },
    { q: "Can venues and festivals use it?", a: "Yes. Organizers can activate Star'Sign for their event and offer it as a built-in experience." },
    { q: "What about image rights and consent?", a: "Everything is opt-in. Artists control their signature. Fans control their captures and shares." },
    { q: "How do I become a beta tester?", a: "Fill the beta form above. We'll reach out when your spot opens." },
    { q: "How can professionals contact the team?", a: "Email hello@star-sign.co or use the pro contact buttons above. We answer fast." },
  ];
  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <SectionHeading
          center
          eyebrow="FAQ"
          title={<>Questions, <span className="text-gradient-neon">cleared</span>.</>}
        />
        <div className="mt-12 divide-y divide-border/60 rounded-3xl border border-border/60 bg-gradient-card">
          {qa.map((item) => (
            <details key={item.q} className="group px-6 py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-medium">
                {item.q}
                <span className="grid h-7 w-7 place-items-center rounded-full border border-border text-primary-glow transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- FOOTER ---------------------------- */
function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/60 bg-background">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-neon opacity-60" />
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <img src={logo} alt="Star'Sign" className="h-9 w-9" />
            <span className="font-display text-lg font-semibold tracking-wide">
              STAR<span className="text-primary">&apos;</span>SIGN
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Le moment devient signature.
            <br />
            Your moment. Their signature.
          </p>
          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" /> In development
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Product</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="#concept" className="hover:text-foreground">Concept</a></li>
            <li><a href="#how" className="hover:text-foreground">How it works</a></li>
            <li><a href="#beta" className="hover:text-foreground">Join the beta</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">For pros</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="#artists" className="hover:text-foreground">Artists</a></li>
            <li><a href="#pros" className="hover:text-foreground">Organizers & labels</a></li>
            <li><a href="#pro-contact" className="hover:text-foreground">Request a demo</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="mailto:hello@star-sign.co" className="hover:text-foreground">hello@star-sign.co</a></li>
            <li><a href="mailto:press@star-sign.co" className="hover:text-foreground">Press</a></li>
            <li><a href="#" className="hover:text-foreground">Instagram · TikTok</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 px-5 py-6 text-center text-xs text-muted-foreground lg:px-8">
        © {new Date().getFullYear()} Star&apos;Sign — All rights reserved · Privacy · Legal
      </div>
    </footer>
  );
}

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Concept />
        <HowItWorks />
        <Fans />
        <Artists />
        <Pros />
        <WhyDifferent />
        <Momentum />
        <BetaForm />
        <ProContact />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
