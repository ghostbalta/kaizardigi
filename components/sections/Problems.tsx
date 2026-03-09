"use client";

import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import {
  TriangleAlert,
  Timer,
  Search,
  MessageCircleOff,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const problems = [
  {
    title: "Vous n’êtes pas visible sur Google",
    desc: "Vos clients cherchent vos services… et trouvent vos concurrents.",
    icon: Search,
    accent: "cyan",
  },
  {
    title: "Vous perdez des prospects sur WhatsApp",
    desc: "Messages non lus, réponses tardives, aucun suivi = ventes perdues.",
    icon: MessageCircleOff,
    accent: "indigo",
  },
  {
    title: "Pas de stratégie claire",
    desc: "Un site seul ne suffit pas : il faut SEO, pubs et un parcours client.",
    icon: TriangleAlert,
    accent: "violet",
  },
  {
    title: "Manque de temps pour gérer le digital",
    desc: "Vous avez une PME à gérer. Le digital doit tourner sans vous.",
    icon: Timer,
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

export default function Problems() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20">
      {/* Futur glow subtil */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-500/8 blur-3xl" />
        <div className="absolute bottom-[-140px] right-[-140px] h-[440px] w-[440px] rounded-full bg-cyan-400/8 blur-3xl" />
      </div>

      {/* Grid ultra léger */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.5)_1px,transparent_1px)] bg-[size:44px_44px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        {/* Header */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-xs font-medium text-gray-800 shadow-sm">
              <Sparkles className="h-4 w-4 text-cyan-500" />
              Les blocages fréquents
            </div>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Pourquoi beaucoup de PME n’obtiennent pas de{" "}
              <span className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">
                clients en ligne
              </span>{" "}
              ?
            </h2>

            <p className="mt-3 text-lg text-gray-700">
              En général, le problème n’est pas votre produit — c’est la
              visibilité, le suivi et l’absence d’un système digital structuré.
            </p>
          </div>
        </Reveal>

        {/* Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {problems.map((p, idx) => {
            const Icon = p.icon;
            const a = accentStyles(p.accent);

            return (
              <Reveal key={p.title} delay={idx * 0.06}>
                <article
                  className={[
                    "rounded-3xl border bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md",
                    a.glow,
                  ].join(" ")}
                >
                  <div className="flex items-start justify-between gap-4">
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

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {p.title}
                        </h3>
                        <p className="mt-3 text-sm text-gray-700">{p.desc}</p>

                        <div className="mt-4 flex items-center gap-2 text-sm text-gray-800">
                          <span
                            className={["h-2 w-2 rounded-full", a.dot].join(" ")}
                          />
                          <span>Frein direct à la conversion</span>
                        </div>
                      </div>
                    </div>

                    <span className="rounded-full border bg-white px-3 py-1 text-xs text-gray-600">
                      Kaizardigi
                    </span>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Solution CTA card */}
        <Reveal delay={0.12}>
          <div className="mt-12 rounded-3xl border bg-white p-8 shadow-sm">
            <div className="grid gap-6 md:grid-cols-3 md:items-center">
              <div className="md:col-span-2">
                <div className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-xs font-medium text-gray-800 shadow-sm">
                  <Sparkles className="h-4 w-4 text-cyan-500" />
                  La solution Kaizardigi
                </div>

                <h3 className="mt-4 text-2xl font-bold text-gray-900">
                  Un système complet pour capter, suivre et convertir vos prospects
                </h3>

                <p className="mt-3 text-gray-700">
                  On met en place une combinaison claire :
                  <span className="font-semibold text-gray-900">
                    {" "}
                    site web + SEO local + publicité + automatisation WhatsApp
                  </span>{" "}
                  pour transformer les visiteurs en demandes qualifiées.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-black"
                >
                  Demander un devis
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/automatisation-ia"
                  className="rounded-full border border-gray-900 px-6 py-3 text-center text-sm font-medium text-gray-900 transition hover:bg-gray-900 hover:text-white"
                >
                  Voir l’automatisation IA
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}