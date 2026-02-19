import Link from "next/link";
import { ShieldCheck, Target, Zap, Headset } from "lucide-react";

export default function Proof() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        {/* centered header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Pourquoi choisir Kaizardigi ?
          </h2>
          <p className="mt-3 text-lg text-gray-700">
            Une approche simple : visibilité + conversion + suivi. Et surtout, des solutions adaptées aux PME marocaines.
          </p>
        </div>

        {/* cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Target,
              title: "Orienté résultats",
              desc: "Leads, RDV, ventes. On optimise pour ce qui compte vraiment.",
            },
            {
              icon: Zap,
              title: "Rapide & structuré",
              desc: "Étapes claires, délais maîtrisés, livraison professionnelle.",
            },
            {
              icon: ShieldCheck,
              title: "Qualité & fiabilité",
              desc: "Site sécurisé, rapide, optimisé mobile et prêt pour Google.",
            },
            {
              icon: Headset,
              title: "Support réactif",
              desc: "On privilégie WhatsApp pour avancer vite avec les PME.",
            },
          ].map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.title} className="rounded-3xl border bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{c.title}</h3>
                <p className="mt-2 text-sm text-gray-700">{c.desc}</p>
              </div>
            );
          })}
        </div>

        {/* replace old counters section (no 0+) */}
        <div className="mt-12 rounded-3xl border bg-blue-50 p-8">
          <div className="grid gap-6 md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold text-gray-900">
                Pas de “0+”. On préfère des preuves réelles.
              </h3>
              <p className="mt-2 text-gray-700">
                Ajoute 3 projets (même petits) + 3 avis clients, et ton site va inspirer confiance immédiatement.
                Si tu veux, on structure aussi des mini “case studies” (objectif → solution → résultat).
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <Link
                href="/realisations"
                className="rounded-full bg-blue-600 px-6 py-3 text-center text-sm font-medium text-white hover:bg-blue-700 transition"
              >
                Voir les réalisations
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
      </div>
    </section>
  );
}
