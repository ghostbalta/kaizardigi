import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import {
  ArrowRight,
  Bot,
  Sparkles,
  MessageCircle,
  ShieldCheck,
  Zap,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-18 md:py-22 text-white">
      {/* Background: glow */}
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-600/30 blur-3xl" />
        <div className="absolute top-24 right-[-120px] h-[420px] w-[420px] rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-[-180px] left-[-120px] h-[460px] w-[460px] rounded-full bg-violet-500/20 blur-3xl" />
      </div>

      {/* Background: grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.25] [mask-image:radial-gradient(55%_55%_at_50%_30%,#000_0%,transparent_70%)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:44px_44px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* LEFT */}
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white/90 backdrop-blur">
                <Sparkles className="h-4 w-4 text-cyan-300" />
                Kaizardigi • Web • SEO • Automatisation IA
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl leading-tight">
                L’IA qui répond,
                <span className="block bg-gradient-to-r from-cyan-300 via-indigo-300 to-violet-300 bg-clip-text text-transparent">
                  qualifie et relance vos prospects
                </span>
                <span className="block">sur WhatsApp.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl text-lg text-white/80">
                On combine <span className="font-semibold text-white">site web</span>,{" "}
                <span className="font-semibold text-white">SEO local</span> et{" "}
                <span className="font-semibold text-white">automatisation WhatsApp & IA</span>{" "}
                pour transformer les messages en RDV et ventes.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-3 text-sm text-white/70">
                Basé au Maroc • WhatsApp-first • Mise en place en 7 jours
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/automatisation-ia"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-medium text-slate-950 shadow-sm transition hover:scale-[1.02]"
                >
                  Voir l’offre IA
                  <Bot className="h-4 w-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10 hover:scale-[1.02]"
                >
                  Demander un devis
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/80">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur">
                  <MessageCircle className="h-4 w-4 text-cyan-300" />
                  Réponse 24/7
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur">
                  <Zap className="h-4 w-4 text-violet-300" />
                  RDV automatique
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur">
                  <ShieldCheck className="h-4 w-4 text-indigo-300" />
                  Relances
                </span>
              </div>
            </Reveal>
          </div>

          {/* RIGHT CARD */}
          <div>
            <Reveal delay={0.08}>
              <div className="rounded-3xl border border-white/15 bg-white/5 p-7 backdrop-blur">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                      <Bot className="h-6 w-6 text-cyan-300" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Assistant IA WhatsApp</div>
                      <div className="text-xs text-white/70">Qualification • RDV • Relance</div>
                    </div>
                  </div>

                  <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-950">
                    Sur devis
                  </span>
                </div>

                <div className="mt-6 space-y-3 text-sm">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <span className="font-semibold">Client :</span> Salam, je veux un devis.
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-3">
                    <span className="font-semibold text-cyan-300">IA :</span> Votre activité et votre ville ?
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <span className="font-semibold">Client :</span> Centre de formation, Casablanca.
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-3">
                    <span className="font-semibold text-cyan-300">IA :</span> Objectif : leads ou RDV ?
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {["Réponse 24/7", "Qualification", "RDV + rappels", "Relance J+1 / J+3"].map(
                    (x) => (
                      <div
                        key={x}
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs"
                      >
                        {x}
                      </div>
                    )
                  )}
                </div>

                <div className="mt-7">
                  <Link
                    href="/automatisation-ia"
                    className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:opacity-95"
                  >
                    Découvrir
                  </Link>
                  <Link
                    href="/contact"
                    className="mt-3 block text-center text-sm text-white/80 underline underline-offset-4 hover:text-white"
                  >
                    Demander un devis
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