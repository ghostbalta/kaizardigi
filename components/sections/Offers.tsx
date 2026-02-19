import Link from "next/link";
import { Check, Bot } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const offers = [
  {
    name: "Pack Starter",
    price: "2500 DH",
    desc: "Idéal pour PME qui veulent une présence professionnelle.",
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
    features: [
      "Design exclusif",
      "Fonctionnalités personnalisées",
      "SEO avancé",
      "Stratégie digitale",
    ],
  },
];

export default function Offers() {
  return (
    <section id="offres" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4">

        {/* Header */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Nos offres
            </h2>
            <p className="mt-3 text-lg text-gray-700">
              Des solutions adaptées à chaque niveau de croissance.
            </p>
          </div>
        </Reveal>

        {/* Pricing Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {offers.map((o, idx) => (
            <Reveal key={o.name} delay={idx * 0.06}>
              <div
                className={[
                  "rounded-3xl border bg-white p-8 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md",
                  o.highlight
                    ? "border-blue-500 ring-1 ring-blue-100 scale-[1.02]"
                    : "",
                ].join(" ")}
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  {o.name}
                </h3>
                <p className="mt-2 text-sm text-gray-700">{o.desc}</p>

                <div className="mt-6 text-3xl font-bold text-gray-900">
                  {o.price}
                </div>

                <ul className="mt-6 space-y-3 text-sm text-gray-800">
                  {o.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check className="h-4 w-4 mt-1 text-blue-600" />
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

        {/* Automation Block */}
        <Reveal delay={0.12}>
          <div className="mt-16 rounded-3xl border bg-slate-50 p-8">
            <div className="grid gap-6 md:grid-cols-3 md:items-center">
              <div className="flex items-center gap-4 md:col-span-2">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
                  <Bot className="h-7 w-7 text-blue-600" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Automatisation & IA
                  </h3>
                  <p className="mt-2 text-gray-700">
                    Mise en place complète WhatsApp automatique + qualification +
                    relances + prise de RDV.
                  </p>
                  <div className="mt-3 text-lg font-semibold text-gray-900">
                    Sur devis
                  </div>
                </div>
              </div>

              <div>
                <Link
                  href="/automatisation-ia"
                  className="block rounded-full bg-blue-600 px-6 py-3 text-center text-sm font-medium text-white hover:bg-blue-700 transition"
                >
                  Voir l’offre IA
                </Link>
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
