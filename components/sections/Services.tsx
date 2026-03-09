import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { Globe, Search, Megaphone, Bot, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Création de site web",
    desc: "Un site rapide, moderne et pensé pour convertir.",
    icon: Globe,
    bullets: [
      "Site vitrine / e-commerce",
      "Responsive mobile",
      "Pages orientées conversion",
      "Sécurité & performance",
    ],
    accent: "cyan",
  },
  {
    title: "SEO local (Google & Maps)",
    desc: "Apparaître quand on vous cherche dans votre ville.",
    icon: Search,
    bullets: [
      "Google Business Profile",
      "Optimisation SEO on-page",
      "Vitesse & technique",
      "Suivi simple",
    ],
    accent: "indigo",
  },
  {
    title: "Publicité Meta & Google",
    desc: "Des campagnes orientées leads, pas likes.",
    icon: Megaphone,
    bullets: [
      "Facebook / Instagram Ads",
      "Google Ads",
      "Tracking conversions",
      "Optimisation continue",
    ],
    accent: "violet",
  },
  {
    title: "Automatisation & IA",
    desc: "Réponse + qualification + RDV + relance — sans perdre de prospects.",
    icon: Bot,
    bullets: [
      "WhatsApp automatique 24/7",
      "Assistant IA sur site",
      "Relances automatiques",
      "Prise de RDV + rappels",
    ],
    highlight: true,
    accent: "cyan",
  },
];

function accentClasses(accent?: string) {
  switch (accent) {
    case "violet":
      return {
        iconBg: "bg-violet-500/10",
        iconText: "text-violet-300",
        dot: "bg-violet-300",
        chip: "bg-violet-300 text-slate-950",
        link: "text-violet-300",
        ring: "ring-violet-500/20",
        glow: "shadow-[0_0_0_1px_rgba(139,92,246,0.16),0_0_40px_rgba(139,92,246,0.18)]",
      };
    case "indigo":
      return {
        iconBg: "bg-indigo-500/10",
        iconText: "text-indigo-300",
        dot: "bg-indigo-300",
        chip: "bg-indigo-300 text-slate-950",
        link: "text-indigo-300",
        ring: "ring-indigo-500/20",
        glow: "shadow-[0_0_0_1px_rgba(99,102,241,0.16),0_0_40px_rgba(99,102,241,0.18)]",
      };
    default:
      return {
        iconBg: "bg-cyan-500/10",
        iconText: "text-cyan-300",
        dot: "bg-cyan-300",
        chip: "bg-cyan-300 text-slate-950",
        link: "text-cyan-300",
        ring: "ring-cyan-500/20",
        glow: "shadow-[0_0_0_1px_rgba(34,211,238,0.16),0_0_40px_rgba(34,211,238,0.18)]",
      };
  }
}

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-slate-950 py-16 md:py-20 text-white">
      {/* Futuristic background */}
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-600/25 blur-3xl" />
        <div className="absolute top-24 right-[-140px] h-[420px] w-[420px] rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute bottom-[-180px] left-[-140px] h-[460px] w-[460px] rounded-full bg-violet-500/15 blur-3xl" />
      </div>

      {/* Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.20] [mask-image:radial-gradient(55%_55%_at_50%_30%,#000_0%,transparent_72%)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:44px_44px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        {/* Header */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white/90 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              Services • Web • SEO • Ads • IA
            </div>

            <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-4xl">
              Des services pensés pour{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-indigo-300 to-violet-300 bg-clip-text text-transparent">
                générer des leads
              </span>
              .
            </h2>

            <p className="mt-3 text-lg text-white/75">
              Des solutions modernes pour PME marocaines — avec un objectif clair :{" "}
              <span className="font-semibold text-white">attirer des clients</span>.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/services"
                className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
              >
                Voir tous les détails
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:opacity-95"
              >
                Devis gratuit
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>

        {/* Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((s, idx) => {
            const Icon = s.icon;
            const a = accentClasses(s.accent);

            return (
              <Reveal key={s.title} delay={idx * 0.06}>
                <div
                  className={[
                    "group relative rounded-3xl border border-white/12 bg-white/5 p-6 backdrop-blur transition",
                    "hover:-translate-y-0.5 hover:border-white/18 hover:bg-white/7",
                    s.highlight ? `ring-1 ${a.ring} ${a.glow}` : "",
                  ].join(" ")}
                >
                  {/* top glow for highlight */}
                  {s.highlight && (
                    <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(60%_60%_at_20%_0%,rgba(34,211,238,0.20),transparent_60%)]" />
                  )}

                  <div className="relative flex items-start gap-4">
                    {/* Icon */}
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${a.iconBg}`}>
                      <Icon className={`h-6 w-6 ${a.iconText}`} />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-xl font-semibold text-white">{s.title}</h3>

                        {s.highlight && (
                          <span className={`rounded-full px-3 py-1 text-xs font-medium ${a.chip}`}>
                            IA
                          </span>
                        )}
                      </div>

                      <p className="mt-2 text-sm text-white/75">{s.desc}</p>
                    </div>
                  </div>

                  <ul className="relative mt-5 space-y-2 text-sm text-white/85">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className={`mt-2 h-2 w-2 rounded-full ${a.dot}`} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="relative mt-6 flex flex-wrap items-center gap-3">
                    <Link
                      href="/contact"
                      className="rounded-full bg-white px-4 py-2.5 text-sm font-medium text-slate-950 transition hover:opacity-95"
                    >
                      Demander un devis
                    </Link>

                    {s.title === "Automatisation & IA" ? (
                      <Link
                        href="/automatisation-ia"
                        className={`text-sm font-medium ${a.link} underline underline-offset-4 hover:opacity-85`}
                      >
                        Voir l’offre IA
                      </Link>
                    ) : (
                      <Link
                        href="/services"
                        className={`text-sm font-medium ${a.link} underline underline-offset-4 hover:opacity-85`}
                      >
                        Détails
                      </Link>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom note (tech / futuriste) */}
        <Reveal delay={0.12}>
          <div className="mt-10 rounded-3xl border border-white/12 bg-white/5 p-6 backdrop-blur">
            <p className="text-sm text-white/80">
              <span className="font-semibold text-white">💡 Astuce Kaizardigi :</span>{" "}
              on peut connecter votre site + WhatsApp + un mini-CRM pour suivre automatiquement chaque demande
              (pipeline, relances, statut, RDV).
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}