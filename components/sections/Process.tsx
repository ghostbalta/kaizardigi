"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ClipboardList,
  Palette,
  Code2,
  Rocket,
  BarChart3,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    n: "01",
    title: "Audit & objectifs",
    desc: "On comprend votre activité, votre cible et vos objectifs (leads, RDV, ventes).",
    icon: ClipboardList,
    bullets: ["Analyse rapide", "Objectifs clairs", "Plan d’action"],
    accent: "cyan",
  },
  {
    n: "02",
    title: "Structure & design",
    desc: "Structure simple + design moderne adapté à votre marque.",
    icon: Palette,
    bullets: ["Maquette", "UX mobile", "Hiérarchie claire"],
    accent: "indigo",
  },
  {
    n: "03",
    title: "Développement & contenu",
    desc: "Développement optimisé performance + contenu orienté conversion.",
    icon: Code2,
    bullets: ["Performance", "Sécurité", "SEO de base"],
    accent: "violet",
  },
  {
    n: "04",
    title: "Lancement & tracking",
    desc: "Mise en ligne + outils de suivi (formulaires, conversions, pixels).",
    icon: Rocket,
    bullets: ["Mise en ligne", "Analytics", "Conversions"],
    accent: "cyan",
  },
  {
    n: "05",
    title: "Optimisation continue",
    desc: "SEO, Ads et automatisation WhatsApp pour ne perdre aucun lead.",
    icon: BarChart3,
    bullets: ["SEO / Ads", "Tests & amélioration", "Automatisation IA"],
    accent: "indigo",
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
        glow: "shadow-[0_0_40px_rgba(139,92,246,0.12)]",
      };
    case "indigo":
      return {
        ring: "ring-indigo-200",
        iconBg: "bg-indigo-50",
        iconText: "text-indigo-600",
        dot: "bg-indigo-600",
        glow: "shadow-[0_0_40px_rgba(99,102,241,0.12)]",
      };
    default:
      return {
        ring: "ring-cyan-200",
        iconBg: "bg-cyan-50",
        iconText: "text-cyan-600",
        dot: "bg-cyan-600",
        glow: "shadow-[0_0_40px_rgba(34,211,238,0.12)]",
      };
  }
}

export default function Process() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const timelineRef = useRef<HTMLDivElement | null>(null);

  // Progression basée sur le scroll DANS la timeline
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.75", "end 0.25"], // commence quand la timeline entre, finit avant la fin
  });

  // Ligne = hauteur en %
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  // Petit fade-in + glow
  const lineOpacity = useTransform(scrollYProgress, [0, 0.15, 1], [0.35, 1, 1]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white py-16 md:py-20">
      {/* Futur IA: glow subtil */}
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
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-xs font-medium text-gray-800 shadow-sm">
            <Sparkles className="h-4 w-4 text-cyan-500" />
            Notre méthode
          </div>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Une timeline claire, un{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">
              résultat mesurable
            </span>
          </h2>

          <p className="mt-3 text-lg text-gray-700">
            Chaque étape avance vers un objectif : leads, RDV, ventes.
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative mt-12">
          {/* Base line */}
          <div className="absolute left-5 top-0 h-full w-px bg-gray-200 md:left-1/2" />

          {/* Progress line (scroll-based) */}
          <motion.div
            className="absolute left-5 top-0 w-px md:left-1/2"
            style={{
              height: lineHeight,
              opacity: lineOpacity,
              background:
                "linear-gradient(to bottom, rgb(34,211,238), rgb(99,102,241), rgb(139,92,246))",
              boxShadow: "0 0 24px rgba(34,211,238,0.18)",
            }}
          />

          <div className="space-y-6">
            {steps.map((s, i) => {
              const Icon = s.icon;
              const a = accentStyles(s.accent);
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-15% 0px" }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="relative"
                >
                  {/* Node */}
                  <div className="absolute left-5 top-6 -translate-x-1/2 md:left-1/2">
                    <div className={["flex h-10 w-10 items-center justify-center rounded-2xl bg-white shadow-sm ring-1", a.ring].join(" ")}>
                      <span className={["h-2.5 w-2.5 rounded-full", a.dot].join(" ")} />
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={[
                      "rounded-3xl border bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md",
                      a.glow,
                      "ml-12 md:ml-0",
                      isLeft ? "md:mr-[52%]" : "md:ml-[52%]",
                    ].join(" ")}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className={["flex h-12 w-12 items-center justify-center rounded-2xl", a.iconBg].join(" ")}>
                          <Icon className={["h-6 w-6", a.iconText].join(" ")} />
                        </div>

                        <div>
                          <div className="text-xs font-semibold text-gray-500">
                            Étape {s.n}
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900">
                            {s.title}
                          </h3>
                        </div>
                      </div>

                      <span className="rounded-full border bg-white px-3 py-1 text-xs text-gray-600">
                        Kaizardigi
                      </span>
                    </div>

                    <p className="mt-3 text-sm text-gray-700">{s.desc}</p>

                    <ul className="mt-4 space-y-2 text-sm text-gray-800">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex gap-2">
                          <span className={["mt-2 h-2 w-2 rounded-full", a.dot].join(" ")} />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-3xl border bg-white p-8 shadow-sm">
          <div className="grid gap-6 md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-gray-900">
                Vous voulez qu’on vous propose le meilleur plan ?
              </h3>
              <p className="mt-2 text-gray-700">
                Activité + ville + objectif → on vous recommande la combinaison optimale.
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
                href="/services"
                className="rounded-full border border-gray-900 px-6 py-3 text-center text-sm font-medium text-gray-900 transition hover:bg-gray-900 hover:text-white"
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