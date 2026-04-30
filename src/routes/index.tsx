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
      { title: "Star'Sign — Le moment devient signature." },
      {
        name: "description",
        content:
          "Star'Sign transforme chaque moment de concert en souvenir numérique unique et signé. Capture. Pulse. Sign. Share. Rejoignez la bêta.",
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
          <Eyebrow>Musique live · Nouvelle couche</Eyebrow>
          <h1 className="mt-5 text-balance text-5xl font-semibold leading-[0.98] sm:text-6xl md:text-7xl">
            Votre moment de concert.{" "}
            <span className="text-gradient-neon">Leur signature.</span>
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg text-muted-foreground sm:text-xl">
            Star&apos;Sign transforme un moment live en souvenir numérique unique — capturé par
            vous, co-signé par l&apos;artiste, certifié par l&apos;événement.
          </p>
          <p className="mt-3 font-display text-sm uppercase tracking-[0.3em] text-primary-glow">
            Le moment devient signature.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#beta"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-neon px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-neon transition-transform hover:scale-105"
            >
              Rejoindre la bêta
              <span aria-hidden>→</span>
            </a>
            <a
              href="#pros"
              className="inline-flex items-center gap-2 rounded-full border border-border/70 px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Pour artistes & pros
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Prototype fonctionnel
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Incubation Music Tech
            </span>
            <span className="hidden sm:flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Bêta ouverte en 2026
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
        <Eyebrow>Le concept</Eyebrow>
        <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
          Pas juste une photo de concert.
          <br />
          Un <span className="text-gradient-neon">moment co-signé</span> par l&apos;artiste.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg">
          Vous capturez le live. L&apos;artiste déclenche la pulse. Star&apos;Sign signe le moment
          avec date, lieu et événement — un véritable artefact à garder, collectionner et partager.
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
    body: "Prenez une photo ou une vidéo de votre moment live.",
    variant: "capture" as const,
  },
  {
    n: "02",
    title: "Pulse",
    body: "L'artiste déclenche une pulse live partagée depuis la scène.",
    variant: "pulse" as const,
  },
  {
    n: "03",
    title: "Sign",
    body: "La signature de l'artiste se dessine sur votre moment.",
    variant: "sign" as const,
  },
  {
    n: "04",
    title: "Souvenir",
    body: "Un souvenir certifié, daté et localisé est généré.",
    variant: "souvenir" as const,
  },
  {
    n: "05",
    title: "Share",
    body: "Gardez-le. Collectionnez-le. Partagez-le. À vous pour toujours.",
    variant: "share" as const,
  },
];

function HowItWorks() {
  return (
    <section id="how" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Le parcours"
          title={
            <>
              Capture · Pulse · <span className="text-gradient-neon">Sign</span> · Share
            </>
          }
          sub="Cinq étapes. Un souvenir signé. Du premier beat au dernier partage."
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
                Étape {s.n}
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
    { t: "De vrais souvenirs", d: "Fini les photos floues. Un moment signé qui prouve que vous y étiez." },
    { t: "Une galerie personnelle", d: "Chaque concert devient une pièce de votre collection de fan." },
    { t: "Revivez l'émotion", d: "Ouvrez l'app, ressentez le moment à nouveau — date, lieu, signature." },
    { t: "Partagez l'unique", d: "Postez-le, envoyez-le à votre crew. Personne d'autre n'a le vôtre." },
  ];
  return (
    <section id="fans" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-stage" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
        <div className="relative">
          <img
            src={crowd}
            alt="Foule de festival éclairée par des lumières de scène violettes"
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
          <Eyebrow>Pour les fans</Eyebrow>
          <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight sm:text-5xl">
            Pour les fans qui veulent plus que des{" "}
            <span className="text-gradient-neon">photos floues</span>.
          </h2>
          <p className="mt-5 max-w-xl text-muted-foreground sm:text-lg">
            Une nouvelle façon de dire <em className="not-italic text-foreground">&ldquo;J&apos;y étais.&rdquo;</em>{" "}
            — validée par l&apos;artiste, le lieu et le moment lui-même.
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
            Devenir bêta-testeur →
          </a>
        </div>
      </div>
    </section>
  );
}

/* -------------------------- ARTISTS SECTION -------------------- */
function Artists() {
  const items = [
    { t: "Un outil d'engagement live", d: "Déclenchez un moment partagé sans casser le show." },
    { t: "Un lien direct post-show", d: "Une connexion opt-in avec les fans, au-delà des réseaux." },
    { t: "Signature, pas gadget", d: "Votre signature, votre style, votre moment — possédés par l'artiste." },
    { t: "Insights communauté", d: "Voyez où est votre public, quand il réagit, ce qu'il garde." },
  ];
  return (
    <section id="artists" className="relative border-y border-border/40 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
        <div className="order-2 lg:order-1">
          <Eyebrow>Pour les artistes</Eyebrow>
          <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight sm:text-5xl">
            Offrez à votre public un moment{" "}
            <span className="text-gradient-neon">qu&apos;il pourra garder</span>.
          </h2>
          <p className="mt-5 max-w-xl text-muted-foreground sm:text-lg">
            Un tap depuis la scène. Une vague de moments signés à travers la foule. Une nouvelle
            couche d&apos;intimité avec celles et ceux venus pour vous.
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
            Découvrir l&apos;expérience artiste →
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
      t: "Organisateurs & festivals",
      d: "Faites de chaque show une expérience signature. Différenciez-vous, engagez et prolongez la vie de l'événement.",
    },
    {
      t: "Labels & managers",
      d: "Renforcez le lien entre artiste et public. Construisez une base fans vérifiée qui vit au-delà du concert.",
    },
    {
      t: "Plateformes de billetterie",
      d: "Ajoutez une expérience post-événement à chaque billet vendu. Nouvelle valeur, zéro friction.",
    },
    {
      t: "Marques & partenaires",
      d: "Sponsorisez le moment, pas juste la bannière. Authentique, opt-in, contextualisé.",
    },
  ];
  return (
    <section id="pros" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Pour l'écosystème musical"
          title={
            <>
              Une nouvelle couche de valeur pour la <span className="text-gradient-neon">musique live</span>.
            </>
          }
          sub="Star'Sign se situe entre les fans, les artistes et l'événement live — une couche structurée pour l'engagement, le souvenir et la connaissance du public."
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
    { what: "Selfie", missing: "Personnel mais non signé" },
    { what: "Story", missing: "Partageable mais éphémère" },
    { what: "Autographe", missing: "Émotionnel mais pas scalable" },
    { what: "Billet", missing: "Transactionnel, pas expérientiel" },
    { what: "Post social", missing: "Visible mais non contextualisé" },
  ];
  return (
    <section className="relative border-y border-border/40 bg-secondary/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Pourquoi Star'Sign"
          title={
            <>
              Tout le reste capture le show.{" "}
              <span className="text-gradient-neon">Star&apos;Sign signe le moment.</span>
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
            <h3 className="mt-4 text-2xl font-semibold sm:text-3xl">Star&apos;Sign réunit tout cela.</h3>
            <ul className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
              {[
                "Déclenchement artiste",
                "Capture fan",
                "Contexte événement",
                "Preuve de présence",
                "Souvenir signé",
                "Artefact partageable",
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
    { k: "Fonctionnel", v: "Prototype web testé en conditions live" },
    { k: "Validé", v: "Intérêt spontané de vrais publics de concert" },
    { k: "Incubé", v: "Cadre d'incubation Music Tech" },
    { k: "Soutenu", v: "Porté par La Marmite Digitale" },
  ];
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Déjà en mouvement"
          title={<>Déjà testé. <span className="text-gradient-neon">Déjà compris.</span></>}
          sub="Né d'une vraie frustration lors de vraies soirées concert — pas d'un pitch deck."
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
        <Eyebrow>Bêta — places limitées</Eyebrow>
        <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Devenez bêta-testeur <span className="text-gradient-neon">Star&apos;Sign</span>.
        </h2>
        <p className="mt-5 text-muted-foreground sm:text-lg">
          Soyez parmi les premiers à vivre des moments de concert signés. Accès anticipé,
          drops exclusifs, façonnez l&apos;app avec nous.
        </p>

        <form
          className="mx-auto mt-10 grid max-w-xl gap-3 text-left"
          onSubmit={(e) => {
            e.preventDefault();
            const f = e.currentTarget;
            f.querySelector<HTMLButtonElement>("button[type=submit]")!.innerText = "C'est validé ✦";
          }}
        >
          <div className="grid gap-3 sm:grid-cols-2">
            <input
              required
              placeholder="Prénom"
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
              placeholder="Style musical favori"
              className="rounded-xl border border-border bg-card/80 px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none sm:col-span-1"
            />
            <input
              placeholder="Ville"
              className="rounded-xl border border-border bg-card/80 px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none"
            />
            <select
              defaultValue=""
              className="rounded-xl border border-border bg-card/80 px-4 py-3 text-sm text-muted-foreground focus:border-primary focus:outline-none"
            >
              <option value="" disabled>Fréquence concerts</option>
              <option>1–2 / an</option>
              <option>3–5 / an</option>
              <option>6–10 / an</option>
              <option>10+ / an</option>
            </select>
          </div>
          <button
            type="submit"
            className="mt-2 rounded-full bg-gradient-neon px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-neon transition-transform hover:scale-[1.02]"
          >
            Obtenir mon accès bêta →
          </button>
          <p className="mt-2 text-center text-xs text-muted-foreground">
            Pas de spam. Juste des moments signés et des drops bêta.
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
          <Eyebrow>Artistes · Labels · Salles · Festivals · Marques</Eyebrow>
          <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight sm:text-5xl">
            Imaginons votre{" "}
            <span className="text-gradient-neon">premier moment live signé</span>.
          </h2>
          <p className="mt-5 max-w-xl text-muted-foreground sm:text-lg">
            Pilotez une expérience Star&apos;Sign sur votre prochain show. On co-construit
            l&apos;intégration avec vos équipes — logistique minimale, impact maximal.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:hello@star-sign.co"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-neon px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow-sm hover:scale-105 transition-transform"
            >
              Contacter l&apos;équipe
            </a>
            <a
              href="mailto:hello@star-sign.co?subject=Demande%20de%20demo"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-secondary transition-colors"
            >
              Demander une démo
            </a>
            <a
              href="mailto:hello@star-sign.co?subject=Partenariat"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-secondary transition-colors"
            >
              Explorer un partenariat
            </a>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 opacity-80">
          {["SALLES", "LABELS", "FESTIVALS", "BILLETTERIE", "MARQUES", "PRESSE"].map((p) => (
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
      q: "C'est quoi Star'Sign, exactement ?",
      a: "Une app mobile qui transforme un moment de concert en souvenir numérique unique, co-signé par l'artiste, avec date, lieu et contexte événement.",
    },
    { q: "L'app est-elle disponible maintenant ?", a: "Nous ouvrons une bêta fermée en 2026. Inscrivez-vous sur la liste d'attente pour un accès anticipé." },
    {
      q: "Comment fonctionne la signature ?",
      a: "Pendant le show, l'artiste déclenche une pulse live depuis son espace Star'Sign. Les fans qui capturent le moment reçoivent une signature authentique et certifiée sur leur souvenir.",
    },
    { q: "C'est seulement pour les gros artistes ?", a: "Non. Star'Sign fonctionne pour les artistes émergents, les têtes d'affiche, les festivals, les soirées club — tout contexte de musique live." },
    { q: "Les salles et festivals peuvent-ils l'utiliser ?", a: "Oui. Les organisateurs peuvent activer Star'Sign pour leur événement et le proposer comme expérience intégrée." },
    { q: "Et les droits à l'image et le consentement ?", a: "Tout est opt-in. Les artistes contrôlent leur signature. Les fans contrôlent leurs captures et partages." },
    { q: "Comment devenir bêta-testeur ?", a: "Remplissez le formulaire bêta ci-dessus. On vous recontacte dès qu'une place s'ouvre." },
    { q: "Comment les pros contactent l'équipe ?", a: "Écrivez à hello@star-sign.co ou utilisez les boutons de contact pro ci-dessus. On répond vite." },
  ];
  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <SectionHeading
          center
          eyebrow="FAQ"
          title={<>Questions, <span className="text-gradient-neon">réponses</span>.</>}
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
            Votre moment. Leur signature.
          </p>
          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" /> En développement
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Produit</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="#concept" className="hover:text-foreground">Concept</a></li>
            <li><a href="#how" className="hover:text-foreground">Comment ça marche</a></li>
            <li><a href="#beta" className="hover:text-foreground">Rejoindre la bêta</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Pour les pros</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="#artists" className="hover:text-foreground">Artistes</a></li>
            <li><a href="#pros" className="hover:text-foreground">Organisateurs & labels</a></li>
            <li><a href="#pro-contact" className="hover:text-foreground">Demander une démo</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="mailto:hello@star-sign.co" className="hover:text-foreground">hello@star-sign.co</a></li>
            <li><a href="mailto:press@star-sign.co" className="hover:text-foreground">Presse</a></li>
            <li><a href="#" className="hover:text-foreground">Instagram · TikTok</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 px-5 py-6 text-center text-xs text-muted-foreground lg:px-8">
        © {new Date().getFullYear()} Star&apos;Sign — Tous droits réservés · Confidentialité · Mentions légales
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
