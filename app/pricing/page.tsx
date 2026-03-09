"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import Link from "next/link";
import {
  Check,
  Bot,
  ShieldCheck,
  BarChart3,
  Megaphone,
  Search,
  Sparkles,
} from "lucide-react";

const oneTimePacks = [
  {
    name: "Pack Starter",
    price: "2500 DH",
    desc: "Pour démarrer proprement et convertir.",
    features: [
      "Site vitrine (3-5 pages)",
      "Design responsive",
      "Formulaire + WhatsApp",
      "Optimisation mobile & vitesse",
      "Support 3 mois",
    ],
    accent: "cyan",
  },
  {
    name: "Pack E-commerce",
    price: "3500 DH",
    desc: "Pour vendre vos produits en ligne.",
    highlight: true,
    features: [
      "Boutique WooCommerce",
      "Jusqu’à 50 produits",
      "Paiement en ligne",
      "Optimisation SEO de base",
      "Support 3 mois",
    ],
    accent: "indigo",
  },
  {
    name: "Pack Business",
    price: "Sur devis",
    desc: "Sur mesure (fonctionnalités avancées).",
    features: [
      "Design exclusif",
      "Fonctionnalités personnalisées",
      "SEO avancé",
      "Stratégie digitale intégrée",
    ],
    accent: "violet",
  },
];

const monthlyPacks = [
  {
    name: "Growth SEO",
    price: "900 DH / mois",
    icon: Search,
    desc: "Pour monter sur Google et Maps.",
    features: [
      "Optimisation SEO (mensuelle)",
      "Google Business Profile",
      "Contenu / pages (selon besoin)",
      "Rapport simple",
    ],
    accent: "cyan",
  },
  {
    name: "Ads Performance",
    price: "1200 DH / mois",
    icon: Megaphone,
    desc: "Pour générer des leads via Meta/Google.",
    features: [
      "Gestion campagnes (Meta/Google)",
      "Tracking conversions",
      "Optimisation continue",
      "Reporting",
    ],
    accent: "indigo",
  },
  {
    name: "Full Growth",
    price: "1800 DH / mois",
    icon: BarChart3,
    desc: "SEO + Ads + optimisation conversion.",
    highlight: true,
    features: [
      "SEO + Google Maps",
      "Gestion Ads",
      "Optimisation landing",
      "Suivi des leads",
    ],
    accent: "violet",
  },
];

function accentStyles(accent: string) {
  switch (accent) {
    case "violet":
      return {
        ring: "ring-violet-200",
        iconBg: "bg-violet-50",
        iconText: "text-violet-600",
        dot: "bg-violet-600",
        glow: "shadow-[0_0_40px_rgba(139,92,246,0.10)]",
      };
    case "indigo":
      return {
        ring: "ring-indigo-200",
        iconBg: "bg-indigo-50",
        iconText: "text-indigo-600",
        dot: "bg-indigo-600",
        glow: "shadow-[0_0_40px_rgba(99,102,241,0.10)]",
      };
    default:
      return {
        ring: "ring-cyan-200",
        iconBg: "bg-cyan-50",
        iconText: "text-cyan-600",
        dot: "bg-cyan-600",
        glow: "shadow-[0_0_40px_rgba(34,211,238,0.10)]",
      };
  }
}

export default function PricingPage() {
  return (
    <>
      <Navbar />

      <main>
        <PageHeader
          badge="Tarifs • Packs • Abonnements"
          title="Des offres claires, adaptées aux PME"
          subtitle="Choisis un pack de création, puis (si tu veux) un abonnement pour grandir avec SEO, Ads et optimisation."
          primaryHref="/contact"
          primaryLabel="Demander un devis"
          secondaryHref="/automatisation-ia"
          secondaryLabel="Automatisation IA"
        />

        {/* ONE-TIME PACKS */}
        <section className="relative overflow-hidden bg-white py-16 md:py-20">
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-500/8 blur-3xl" />
            <div className="absolute bottom-[-140px] right-[-140px] h-[440px] w-[440px] rounded-full bg-cyan-400/8 blur-3xl" />
          </div>

          <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.5)_1px,transparent_1px)] bg-[size:44px_44px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-6xl px-4">
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <div className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-xs font-medium text-gray-800 shadow-sm">
                  <Sparkles className="h-4 w-4 text-cyan-500" />
                  Packs de création
                </div>

                <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                  Une base solide pour{" "}
                  <span className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">
                    lancer votre présence en ligne
                  </span>
                </h2>

                <p className="mt-3 text-lg text-gray-700">
                  Paiement unique pour la création du site vitrine, e-commerce ou sur mesure.
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {oneTimePacks.map((o, idx) => {
                const a = accentStyles(o.accent);

                return (
                  <Reveal key={o.name} delay={idx * 0.06}>
                    <article
                      className={[
                        "rounded-3xl border bg-white p-8 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md",
                        a.glow,
                        o.highlight ? "border-blue-500 ring-1 ring-blue-100 scale-[1.02]" : "",
                      ].join(" ")}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">{o.name}</h3>
                          <p className="mt-2 text-sm text-gray-700">{o.desc}</p>
                        </div>

                        {o.highlight ? (
                          <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">
                            Recommandé
                          </span>
                        ) : null}
                      </div>

                      <div className="mt-6 text-3xl font-bold text-gray-900">{o.price}</div>

                      <ul className="mt-6 space-y-3 text-sm text-gray-800">
                        {o.features.map((f) => (
                          <li key={f} className="flex items-start gap-3">
                            <span className={["mt-1.5 h-2.5 w-2.5 rounded-full", a.dot].join(" ")} />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        href="/contact"
                        className="mt-8 block rounded-full bg-blue-600 px-6 py-3 text-center text-sm font-medium text-white hover:bg-blue-700 transition"
                      >
                        Demander un devis
                      </Link>
                    </article>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={0.12}>
              <div className="mt-12 rounded-3xl border bg-white p-8 shadow-sm shadow-[0_0_40px_rgba(34,211,238,0.08)]">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 ring-1 ring-cyan-200">
                    <ShieldCheck className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Conseil : le site seul ne suffit pas
                    </h3>
                    <p className="mt-2 text-gray-700">
                      Pour avoir des résultats, ajoute un abonnement SEO/Ads après le lancement.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* MONTHLY PACKS */}
        <section className="relative overflow-hidden bg-white py-16 md:py-20">
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="absolute -top-32 left-0 h-[420px] w-[420px] rounded-full bg-cyan-400/8 blur-3xl" />
            <div className="absolute bottom-[-120px] right-0 h-[420px] w-[420px] rounded-full bg-indigo-500/8 blur-3xl" />
          </div>

          <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.5)_1px,transparent_1px)] bg-[size:44px_44px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-6xl px-4">
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <div className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-xs font-medium text-gray-800 shadow-sm">
                  <Sparkles className="h-4 w-4 text-cyan-500" />
                  Abonnements mensuels
                </div>

                <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                  Un suivi régulier pour{" "}
                  <span className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">
                    accélérer la croissance
                  </span>
                </h2>

                <p className="mt-3 text-lg text-gray-700">
                  Pour grandir mois après mois avec SEO, Ads et optimisation.
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {monthlyPacks.map((p, idx) => {
                const Icon = p.icon;
                const a = accentStyles(p.accent);

                return (
                  <Reveal key={p.name} delay={idx * 0.06}>
                    <article
                      className={[
                        "rounded-3xl border bg-white p-8 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md",
                        a.glow,
                        p.highlight ? "border-blue-500 ring-1 ring-blue-100 scale-[1.02]" : "",
                      ].join(" ")}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div
                          className={[
                            "flex h-12 w-12 items-center justify-center rounded-2xl ring-1",
                            a.iconBg,
                            a.ring,
                          ].join(" ")}
                        >
                          <Icon className={["h-6 w-6", a.iconText].join(" ")} />
                        </div>

                        {p.highlight ? (
                          <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">
                            Recommandé
                          </span>
                        ) : null}
                      </div>

                      <h3 className="mt-4 text-xl font-semibold text-gray-900">{p.name}</h3>
                      <p className="mt-2 text-sm text-gray-700">{p.desc}</p>

                      <div className="mt-6 text-2xl font-bold text-gray-900">{p.price}</div>

                      <ul className="mt-6 space-y-3 text-sm text-gray-800">
                        {p.features.map((f) => (
                          <li key={f} className="flex items-start gap-3">
                            <span className={["mt-1.5 h-2.5 w-2.5 rounded-full", a.dot].join(" ")} />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        href="/contact"
                        className="mt-8 block rounded-full bg-blue-600 px-6 py-3 text-center text-sm font-medium text-white hover:bg-blue-700 transition"
                      >
                        Discuter du plan
                      </Link>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* AUTOMATION */}
        <section className="relative overflow-hidden bg-white py-16 md:py-20">
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="absolute -top-24 right-1/4 h-[380px] w-[380px] rounded-full bg-violet-500/8 blur-3xl" />
            <div className="absolute bottom-[-120px] left-0 h-[360px] w-[360px] rounded-full bg-cyan-400/8 blur-3xl" />
          </div>

          <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.5)_1px,transparent_1px)] bg-[size:44px_44px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-6xl px-4">
            <Reveal>
              <div className="rounded-3xl border bg-white p-10 shadow-sm shadow-[0_0_40px_rgba(99,102,241,0.08)]">
                <div className="grid gap-6 md:grid-cols-3 md:items-center">
                  <div className="flex items-center gap-4 md:col-span-2">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 ring-1 ring-cyan-200">
                      <Bot className="h-7 w-7 text-cyan-600" />
                    </div>
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-xs font-medium text-gray-800 shadow-sm">
                        <Sparkles className="h-4 w-4 text-cyan-500" />
                        Automatisation & IA
                      </div>

                      <h2 className="mt-4 text-2xl font-bold text-gray-900">
                        Automatisation WhatsApp & IA
                      </h2>
                      <p className="mt-2 text-gray-700">
                        Réponse 24/7, qualification, RDV, relances — sur devis selon ton scénario.
                      </p>
                      <div className="mt-3 text-lg font-semibold text-gray-900">
                        Sur devis
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <Link
                      href="/automatisation-ia"
                      className="rounded-full bg-blue-600 px-6 py-3 text-center text-sm font-medium text-white hover:bg-blue-700 transition"
                    >
                      Voir l’offre IA
                    </Link>
                    <Link
                      href="/contact"
                      className="rounded-full border border-blue-600 px-6 py-3 text-center text-sm font-medium text-blue-600 hover:bg-blue-600 hover:text-white transition"
                    >
                      Demander un devis
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative overflow-hidden bg-white py-16 md:py-20">
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="absolute -top-28 left-1/3 h-[320px] w-[320px] rounded-full bg-indigo-500/8 blur-3xl" />
            <div className="absolute bottom-[-100px] right-1/4 h-[300px] w-[300px] rounded-full bg-cyan-400/8 blur-3xl" />
          </div>

          <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.5)_1px,transparent_1px)] bg-[size:44px_44px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-6xl px-4">
            <Reveal>
              <div className="rounded-3xl border bg-white p-10 shadow-sm shadow-[0_0_40px_rgba(34,211,238,0.08)]">
                <div className="grid gap-6 md:grid-cols-3 md:items-center">
                  <div className="md:col-span-2">
                    <div className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-xs font-medium text-gray-800 shadow-sm">
                      <Sparkles className="h-4 w-4 text-cyan-500" />
                      Recommandation
                    </div>

                    <h3 className="mt-4 text-2xl font-bold text-gray-900">
                      Tu veux que je te recommande le meilleur pack ?
                    </h3>
                    <p className="mt-2 text-gray-700">
                      Dis-moi ton activité + ville + objectif (leads/RDV/ventes). On te propose un plan clair.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <Link
                      href="/contact"
                      className="rounded-full bg-blue-600 px-6 py-3 text-center text-sm font-medium text-white hover:bg-blue-700 transition"
                    >
                      Demander un devis
                    </Link>
                    <Link
                      href="/services"
                      className="rounded-full border border-blue-600 px-6 py-3 text-center text-sm font-medium text-blue-600 hover:bg-blue-600 hover:text-white transition"
                    >
                      Voir les services
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}