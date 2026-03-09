import Link from "next/link";
import { Check, Bot, ArrowRight, Sparkles } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const offers = [
  {
    name: "Pack Starter",
    price: "2500 DH",
    desc: "Idéal pour PME qui veulent une présence professionnelle.",
    accent: "cyan",
    features: [
      "Site vitrine (3-5 pages)",
      "Design responsive",
      "Formulaire + WhatsApp",
      "Optimisation mobile",
      "Support 3 mois",
    ],
  },
  {
    name: "Pack E-commerce",
    price: "3500 DH",
    desc: "Pour vendre vos produits en ligne.",
    highlight: true,
    accent: "indigo",
    features: [
      "Boutique WooCommerce",
      "Jusqu’à 50 produits",
      "Paiement en ligne",
      "Optimisation SEO",
      "Support 3 mois",
    ],
  },
  {
    name: "Pack Business",
    price: "Sur devis",
    desc: "Projet sur mesure avec fonctionnalités avancées.",
    accent: "violet",
    features: [
      "Design exclusif",
      "Fonctionnalités personnalisées",
      "SEO avancé",
      "Stratégie digitale",
    ],
  },
];

function accentClasses(accent?: string) {
  switch (accent) {
    case "violet":
      return {
        check: "text-violet-300",
        ring: "ring-violet-500/20",
        glow: "shadow-[0_0_0_1px_rgba(139,92,246,0.16),0_0_42px_rgba(139,92,246,0.18)]",
        badge: "bg-violet-300 text-slate-950",
      };
    case "indigo":
      return {
        check: "text-indigo-300",
        ring: "ring-indigo-500/20",
        glow: "shadow-[0_0_0_1px_rgba(99,102,241,0.16),0_0_42px_rgba(99,102,241,0.18)]",
        badge: "bg-indigo-300 text-slate-950",
      };
    default:
      return {
        check: "text-cyan-300",
        ring: "ring-cyan-500/20",
        glow: "shadow-[0_0_0_1px_rgba(34,211,238,0.16),0_0_42px_rgba(34,211,238,0.18)]",
        badge: "bg-cyan-300 text-slate-950",
      };
  }
}

export default function Offers() {
  return (
    <section
      id="offres"
      className="relative overflow-hidden bg-slate-950 py-12 md:py-14 text-white"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-600/25 blur-3xl" />
        <div className="absolute top-24 right-[-140px] h-[420px] w-[420px] rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute bottom-[-180px] left-[-140px] h-[460px] w-[460px] rounded-full bg-violet-500/15 blur-3xl" />
      </div>

      {/* Grid texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.18] [mask-image:radial-gradient(55%_55%_at_50%_30%,#000_0%,transparent_72%)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:44px_44px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white/90 backdrop-blur">
              <Sparkles className="h-4 w-4 text-cyan-300" />
              Offres • Packs • Sur mesure
            </div>

            <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-4xl">
              Des offres adaptées à chaque{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-indigo-300 to-violet-300 bg-clip-text text-transparent">
                niveau de croissance
              </span>
              .
            </h2>

            <p className="mt-3 text-lg text-white/75">
              Choisissez un pack, on s’occupe du reste.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {offers.map((o, idx) => {
            const a = accentClasses(o.accent);

            return (
              <Reveal key={o.name} delay={idx * 0.06}>
                <div className="group relative rounded-3xl border border-white/12 bg-white/5 p-7 backdrop-blur transition">
                  <div className="relative flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{o.name}</h3>
                      <p className="mt-2 text-sm text-white/75">{o.desc}</p>
                    </div>
                  </div>

                  <div className="relative mt-6 text-3xl font-bold text-white">
                    {o.price}
                  </div>

                  <ul className="relative mt-6 space-y-3 text-sm text-white/85">
                    {o.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <Check className={`h-4 w-4 mt-1 ${a.check}`} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="relative mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950"
                  >
                    Demander un devis
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}