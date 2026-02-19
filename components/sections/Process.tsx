import Link from "next/link";
import { ClipboardList, Palette, Code2, Rocket, BarChart3 } from "lucide-react";

const steps = [
  {
    n: "01",
    title: "Audit & objectifs",
    desc: "On comprend votre activité, votre cible et vos objectifs (leads, RDV, ventes).",
    icon: ClipboardList,
    bullets: ["Analyse rapide", "Objectifs clairs", "Plan d’action"],
  },
  {
    n: "02",
    title: "Structure & design",
    desc: "On construit une structure simple, puis un design moderne adapté à votre marque.",
    icon: Palette,
    bullets: ["Maquette", "UX mobile", "Hiérarchie des sections"],
  },
  {
    n: "03",
    title: "Développement & contenu",
    desc: "Développement WordPress/tech + contenu optimisé conversion et SEO.",
    icon: Code2,
    bullets: ["Performance", "Sécurité", "SEO de base"],
  },
  {
    n: "04",
    title: "Lancement & tracking",
    desc: "Mise en ligne + installation des outils de suivi (formulaires, conversions, pixels).",
    icon: Rocket,
    bullets: ["Mise en ligne", "Google Analytics", "Pixels/Conversions"],
  },
  {
    n: "05",
    title: "Optimisation continue",
    desc: "On améliore avec le temps : SEO, pubs, et automatisation WhatsApp pour ne perdre aucun lead.",
    icon: BarChart3,
    bullets: ["SEO / Ads", "Tests & amélioration", "Automatisation IA"],
  },
];

export default function Process() {
  return (
    <section className="border-y bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* centered header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Notre processus de travail
          </h2>
          <p className="mt-3 text-lg text-gray-700">
            Un cadre clair, des étapes visibles, et un résultat mesurable.
          </p>
        </div>

        {/* steps */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.n}
                className="rounded-3xl border bg-white p-6 shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>

                    <div>
                      <div className="text-xs font-semibold text-blue-600">
                        Étape {s.n}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {s.title}
                      </h3>
                    </div>
                  </div>

                  <span className="rounded-full border bg-white px-3 py-1 text-xs text-gray-700">
                    Kaizardigi
                  </span>
                </div>

                <p className="mt-3 text-sm text-gray-700">{s.desc}</p>

                <ul className="mt-4 space-y-2 text-sm text-gray-800">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 h-2 w-2 rounded-full bg-blue-600" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl border bg-white p-8 shadow-sm">
          <div className="grid gap-6 md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-gray-900">
                Vous voulez qu’on vous propose le meilleur plan ?
              </h3>
              <p className="mt-2 text-gray-700">
                Dites-nous votre activité + ville + objectif. On vous recommande une combinaison
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
                href="/services"
                className="rounded-full border border-blue-600 px-6 py-3 text-center text-sm font-medium text-blue-600 hover:bg-blue-600 hover:text-white transition"
              >
                Voir les services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
