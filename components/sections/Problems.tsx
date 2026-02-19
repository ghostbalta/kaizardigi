import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { TriangleAlert, Timer, Search, MessageCircleOff } from "lucide-react";

const problems = [
  {
    title: "Vous n’êtes pas visible sur Google",
    desc: "Vos clients cherchent vos services… et trouvent vos concurrents.",
    icon: Search,
  },
  {
    title: "Vous perdez des prospects sur WhatsApp",
    desc: "Messages non lus, réponses tardives, aucun suivi = ventes perdues.",
    icon: MessageCircleOff,
  },
  {
    title: "Pas de stratégie claire",
    desc: "Un site seul ne suffit pas : il faut SEO, pubs et un parcours client.",
    icon: TriangleAlert,
  },
  {
    title: "Manque de temps pour gérer le digital",
    desc: "Vous avez une PME à gérer. Le digital doit tourner sans vous.",
    icon: Timer,
  },
];

export default function Problems() {
  return (
    <section className="border-y bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Pourquoi beaucoup de PME n’obtiennent pas de clients en ligne ?
            </h2>
            <p className="mt-3 text-lg text-gray-700">
              En général, le problème n’est pas votre produit — c’est la visibilité et le suivi.
            </p>
          </div>
        </Reveal>

        {/* Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {problems.map((p, idx) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={idx * 0.06}>
                <div className="rounded-3xl border bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-sm text-gray-700">{p.desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Solution card */}
        <Reveal delay={0.12}>
          <div className="mt-12 rounded-3xl border bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900">
              La solution Kaizardigi
            </h3>
            <p className="mt-3 text-gray-700">
              On met en place un système complet :{" "}
              <span className="font-semibold text-gray-900">
                site web + SEO local + publicité + automatisation WhatsApp
              </span>{" "}
              pour transformer les visiteurs en clients.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
              <Link
                href="/contact"
                className="rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700 transition"
              >
                Demander un devis
              </Link>
              <Link
                href="/automatisation-ia"
                className="rounded-full border border-blue-600 px-6 py-3 text-sm font-medium text-blue-600 hover:bg-blue-600 hover:text-white transition"
              >
                Voir l’automatisation IA
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
