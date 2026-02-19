import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import Link from "next/link";
import { Globe, Search, Megaphone, Bot, Check } from "lucide-react";

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
  },
];

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
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-6 md:grid-cols-2">
              {blocks.map((b, idx) => {
                const Icon = b.icon;
                return (
                  <Reveal key={b.title} delay={idx * 0.06}>
                    <div
                      className={[
                        "rounded-3xl border bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md",
                        b.highlight ? "border-blue-200 ring-1 ring-blue-100" : "",
                      ].join(" ")}
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50">
                          <Icon className="h-6 w-6 text-blue-600" />
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
                            <Check className="mt-0.5 h-4 w-4 text-blue-600" />
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
                          className="rounded-full border px-5 py-2.5 text-sm hover:bg-gray-50 transition"
                        >
                          Parler du projet
                        </Link>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA band */}
        <section className="border-y bg-slate-50 py-20">
          <div className="mx-auto max-w-6xl px-4">
            <Reveal>
              <div className="rounded-3xl border bg-white p-10 shadow-sm">
                <div className="grid gap-6 md:grid-cols-3 md:items-center">
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold text-gray-900">
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
