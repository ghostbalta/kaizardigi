import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import MatrixRain from "@/components/ui/MatrixRain";
import { ArrowRight, Bot, Sparkles, MessageCircle, ShieldCheck, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-28">
      {/* Base gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-white to-slate-50" />

      {/* Matrix visible (light mode friendly) */}
      <MatrixRain columns={20} color="blue" />

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* LEFT */}
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border bg-white/80 px-4 py-2 text-xs font-medium text-gray-800 shadow-sm backdrop-blur">
                <Sparkles className="h-4 w-4 text-blue-600" />
                Kaizardigi • Web • SEO • Automatisation IA
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 md:text-6xl leading-tight">
                L’IA qui répond,
                <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 bg-clip-text text-transparent">
                  qualifie et relance vos prospects
                </span>
                <span className="block">sur WhatsApp.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl text-lg text-gray-700">
                On combine <span className="font-semibold text-gray-900">site web</span>,{" "}
                <span className="font-semibold text-gray-900">SEO local</span> et{" "}
                <span className="font-semibold text-gray-900">automatisation WhatsApp & IA</span>{" "}
                pour transformer les messages en RDV et ventes.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/automatisation-ia"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3 text-sm font-medium text-white shadow-sm shadow-blue-600/20 transition-all duration-300 hover:bg-blue-700 hover:scale-[1.02]"
                >
                  Voir l’offre IA
                  <Bot className="h-4 w-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-blue-600 bg-white/80 px-7 py-3 text-sm font-medium text-blue-600 backdrop-blur transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-[1.02]"
                >
                  Demander un devis
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-4 text-sm text-gray-600">
                <span className="inline-flex items-center gap-2 rounded-full border bg-white/75 px-4 py-2 backdrop-blur">
                  <MessageCircle className="h-4 w-4 text-blue-600" />
                  Réponse 24/7
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border bg-white/75 px-4 py-2 backdrop-blur">
                  <Zap className="h-4 w-4 text-blue-600" />
                  RDV automatique
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border bg-white/75 px-4 py-2 backdrop-blur">
                  <ShieldCheck className="h-4 w-4 text-blue-600" />
                  Relances
                </span>
              </div>
            </Reveal>
          </div>

          {/* RIGHT: IA card */}
          <div>
            <Reveal delay={0.08}>
              <div className="rounded-3xl border bg-white/85 p-7 shadow-sm backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50">
                      <Bot className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">
                        Assistant IA WhatsApp
                      </div>
                      <div className="text-xs text-gray-600">
                        Qualification • RDV • Relance
                      </div>
                    </div>
                  </div>

                  <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">
                    Sur devis
                  </span>
                </div>

                {/* Chat mock */}
                <div className="mt-6 space-y-3 text-sm">
                  <div className="rounded-2xl border bg-gray-50 p-3 text-gray-900">
                    <span className="font-semibold">Client :</span> Salam, je veux un devis.
                  </div>
                  <div className="rounded-2xl border bg-white p-3 text-gray-900">
                    <span className="font-semibold text-blue-600">IA :</span> Votre activité et votre ville ?
                  </div>
                  <div className="rounded-2xl border bg-gray-50 p-3 text-gray-900">
                    <span className="font-semibold">Client :</span> Centre de formation, Casablanca.
                  </div>
                  <div className="rounded-2xl border bg-white p-3 text-gray-900">
                    <span className="font-semibold text-blue-600">IA :</span> Objectif : leads ou RDV ?
                  </div>
                </div>

                {/* Mini benefits */}
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {["Réponse 24/7", "Qualification", "RDV + rappels", "Relance J+1 / J+3"].map((x) => (
                    <div
                      key={x}
                      className="rounded-2xl border bg-slate-50 px-4 py-3 text-xs text-gray-800"
                    >
                      {x}
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/automatisation-ia"
                    className="inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700 transition"
                  >
                    Découvrir
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex w-full items-center justify-center rounded-full border border-blue-600 px-6 py-3 text-sm font-medium text-blue-600 hover:bg-blue-600 hover:text-white transition"
                  >
                    Devis
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
