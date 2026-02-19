import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import Link from "next/link";
import { Check, Bot, ShieldCheck, BarChart3, Megaphone, Search } from "lucide-react";

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
  },
];

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
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-6xl px-4">
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                  Packs de création
                </h2>
                <p className="mt-3 text-lg text-gray-700">
                  Paiement unique pour la création du site (vitrine, e-commerce ou sur mesure).
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {oneTimePacks.map((o, idx) => (
                <Reveal key={o.name} delay={idx * 0.06}>
                  <div
                    className={[
                      "rounded-3xl border bg-white p-8 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md",
                      o.highlight ? "border-blue-500 ring-1 ring-blue-100 scale-[1.02]" : "",
                    ].join(" ")}
                  >
                    <h3 className="text-xl font-semibold text-gray-900">{o.name}</h3>
                    <p className="mt-2 text-sm text-gray-700">{o.desc}</p>

                    <div className="mt-6 text-3xl font-bold text-gray-900">{o.price}</div>

                    <ul className="mt-6 space-y-3 text-sm text-gray-800">
                      {o.features.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <Check className="mt-0.5 h-4 w-4 text-blue-600" />
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
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.12}>
              <div className="mt-12 rounded-3xl border bg-blue-50 p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
                    <ShieldCheck className="h-6 w-6 text-blue-600" />
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
        <section className="border-y bg-slate-50 py-20">
          <div className="mx-auto max-w-6xl px-4">
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                  Abonnements mensuels
                </h2>
                <p className="mt-3 text-lg text-gray-700">
                  Pour grandir mois après mois (SEO, Ads, optimisation).
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {monthlyPacks.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <Reveal key={p.name} delay={idx * 0.06}>
                    <div
                      className={[
                        "rounded-3xl border bg-white p-8 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md",
                        p.highlight ? "border-blue-500 ring-1 ring-blue-100 scale-[1.02]" : "",
                      ].join(" ")}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50">
                          <Icon className="h-6 w-6 text-blue-600" />
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
                            <Check className="mt-0.5 h-4 w-4 text-blue-600" />
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
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* AUTOMATION */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-6xl px-4">
            <Reveal>
              <div className="rounded-3xl border bg-slate-50 p-10">
                <div className="grid gap-6 md:grid-cols-3 md:items-center">
                  <div className="flex items-center gap-4 md:col-span-2">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
                      <Bot className="h-7 w-7 text-blue-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
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
        <section className="border-t bg-slate-50 py-20">
          <div className="mx-auto max-w-6xl px-4">
            <Reveal>
              <div className="rounded-3xl border bg-white p-10 shadow-sm">
                <div className="grid gap-6 md:grid-cols-3 md:items-center">
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold text-gray-900">
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
