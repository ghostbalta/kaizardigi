"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import Link from "next/link";
import { Globe, Search, Megaphone, Bot, Check, Sparkles } from "lucide-react";

const blocks = [
  {
    title: "Création de site web",
    desc: "Un site rapide, moderne et pensé pour convertir.",
    icon: Globe,
    bullets: [
      "Site vitrine / e-commerce",
      "Responsive mobile",
      "Pages orientées conversion",
      "Sécurité & performance",
      "Base SEO intégrée",
    ],
    cta: { label: "Devis site web", href: "/contact" },
    accent: "cyan",
  },
  {
    title: "SEO local (Google & Maps)",
    desc: "Apparaître quand on vous cherche dans votre ville.",
    icon: Search,
    bullets: [
      "Google Business Profile",
      "Optimisation contenu + structure",
      "Vitesse & technique",
      "Pages locales si besoin",
      "Suivi & recommandations",
    ],
    cta: { label: "Devis SEO", href: "/contact" },
    accent: "indigo",
  },
  {
    title: "Publicité Meta & Google",
    desc: "Des campagnes orientées résultats (leads / RDV / ventes).",
    icon: Megaphone,
    bullets: [
      "Facebook / Instagram Ads",
      "Google Ads (Search / Local)",
      "Tracking conversions",
      "Optimisation continue",
      "Reporting clair",
    ],
    cta: { label: "Lancer une campagne", href: "/contact" },
    accent: "violet",
  },
  {
    title: "Automatisation & IA",
    desc: "Réponse, qualification, RDV et relances automatiques (WhatsApp + site).",
    icon: Bot,
    bullets: [
      "WhatsApp automatique 24/7",
      "Qualification (nom, ville, besoin…)",
      "Prise de RDV + rappels",
      "Relances J+1 / J+3",
      "Assistant IA sur site (option)",
    ],
    highlight: true,
    cta: { label: "Découvrir l’offre IA", href: "/automatisation-ia" },
    accent: "cyan",
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

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main>
        <PageHeader
          badge="Services • PME Maroc"
          title="Des services digitaux concrets pour attirer des clients"
          subtitle="Notre méthode : visibilité + conversion + suivi. Sites web, SEO local, publicité et automatisation WhatsApp & IA."
          primaryHref="/contact"
          primaryLabel="Demander un devis"
          secondaryHref="/automatisation-ia"
          secondaryLabel="Automatisation IA"
        />

        {/* Grid services */}
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
                  Nos services
                </div>

                <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                  Une offre claire pour{" "}
                  <span className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">
                    générer plus d’opportunités
                  </span>
                </h2>

                <p className="mt-3 text-lg text-gray-700">
                  Sites web, SEO local, publicité et automatisation IA : des services pensés pour attirer, convertir et suivre vos prospects.
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {blocks.map((b, idx) => {
                const Icon = b.icon;
                const a = accentStyles(b.accent);

                return (
                  <Reveal key={b.title} delay={idx * 0.06}>
                    <article
                      className={[
                        "rounded-3xl border bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md",
                        a.glow,
                        b.highlight ? "border-blue-200 ring-1 ring-blue-100" : "",
                      ].join(" ")}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={[
                            "flex h-12 w-12 items-center justify-center rounded-2xl ring-1",
                            a.iconBg,
                            a.ring,
                          ].join(" ")}
                        >
                          <Icon className={["h-6 w-6", a.iconText].join(" ")} />
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center justify-between gap-3">
                            <h2 className="text-xl font-semibold text-gray-900">
                              {b.title}
                            </h2>

                            {b.highlight ? (
                              <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">
                                Nouveau
                              </span>
                            ) : null}
                          </div>

                          <p className="mt-2 text-sm text-gray-700">{b.desc}</p>
                        </div>
                      </div>

                      <ul className="mt-5 space-y-3 text-sm text-gray-800">
                        {b.bullets.map((x) => (
                          <li key={x} className="flex items-start gap-3">
                            <span
                              className={["mt-1.5 h-2.5 w-2.5 rounded-full", a.dot].join(" ")}
                            />
                            <span>{x}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-7 flex flex-wrap gap-3">
                        <Link
                          href={b.cta.href}
                          className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 transition"
                        >
                          {b.cta.label}
                        </Link>
                        <Link
                          href="/contact"
                          className="rounded-full border border-slate-200 px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-slate-50 transition"
                        >
                          Parler du projet
                        </Link>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA band */}
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
                      Tu veux le meilleur plan pour ton business ?
                    </h3>
                    <p className="mt-2 text-gray-700">
                      Dis-nous ton activité + ville + objectif. On te recommande une combinaison
                      (site + SEO + pubs + automatisation) adaptée.
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
                      href="/realisations"
                      className="rounded-full border border-blue-600 px-6 py-3 text-center text-sm font-medium text-blue-600 hover:bg-blue-600 hover:text-white transition"
                    >
                      Voir des projets
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