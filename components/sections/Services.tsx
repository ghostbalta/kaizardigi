import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { Globe, Search, Megaphone, Bot } from "lucide-react";

const services = [
  {
    title: "Création de site web",
    desc: "Un site rapide, moderne et pensé pour convertir.",
    icon: Globe,
    bullets: ["Site vitrine / e-commerce", "Responsive mobile", "Pages orientées conversion", "Sécurité & performance"],
  },
  {
    title: "SEO local (Google & Maps)",
    desc: "Apparaître quand on vous cherche dans votre ville.",
    icon: Search,
    bullets: ["Google Business Profile", "Optimisation SEO on-page", "Vitesse & technique", "Suivi simple"],
  },
  {
    title: "Publicité Meta & Google",
    desc: "Des campagnes orientées leads, pas likes.",
    icon: Megaphone,
    bullets: ["Facebook / Instagram Ads", "Google Ads", "Tracking conversions", "Optimisation continue"],
  },
  {
    title: "Automatisation & IA",
    desc: "Ne perdez plus de prospects : réponse + RDV + relance.",
    icon: Bot,
    bullets: ["WhatsApp automatique 24/7", "Assistant IA sur site", "Relances automatiques", "Prise de RDV + rappels"],
    highlight: true,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Nos services
            </h2>
            <p className="mt-3 text-lg text-gray-700">
              Des solutions modernes pour PME marocaines, avec un objectif clair :{" "}
              <span className="font-semibold text-gray-900">attirer des clients</span>.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/services"
                className="rounded-full border px-5 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50 transition"
              >
                Voir tous les détails
              </Link>
              <Link
                href="/contact"
                className="rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-blue-700 transition"
              >
                Devis gratuit
              </Link>
            </div>
          </div>
        </Reveal>

        {/* Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((s, idx) => {
            const Icon = s.icon;

            return (
              <Reveal key={s.title} delay={idx * 0.06}>
                <div
                  className={[
                    "group rounded-3xl border bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md",
                    s.highlight ? "border-blue-200 ring-1 ring-blue-100" : "",
                  ].join(" ")}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {s.title}
                        </h3>

                        {s.highlight && (
                          <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">
                            Nouveau
                          </span>
                        )}
                      </div>

                      <p className="mt-2 text-sm text-gray-700">{s.desc}</p>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-2 text-sm text-gray-800">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-2 h-2 w-2 rounded-full bg-blue-600" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <Link
                      href="/contact"
                      className="rounded-full bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700 transition"
                    >
                      Demander un devis
                    </Link>

                    {s.title === "Automatisation & IA" ? (
                      <Link
                        href="/automatisation-ia"
                        className="text-sm font-medium text-blue-600 underline underline-offset-4 hover:opacity-80"
                      >
                        Voir l’offre IA
                      </Link>
                    ) : (
                      <Link
                        href="/services"
                        className="text-sm font-medium text-blue-600 underline underline-offset-4 hover:opacity-80"
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

        {/* Note en bas */}
        <Reveal delay={0.12}>
          <div className="mt-12 rounded-3xl border bg-blue-50 p-6">
            <p className="text-sm text-gray-800">
              💡 <span className="font-semibold text-gray-900">Astuce Kaizardigi :</span>{" "}
              On peut connecter votre site + WhatsApp + un mini-CRM pour suivre automatiquement chaque demande.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
