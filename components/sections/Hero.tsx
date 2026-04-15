import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import {
  ArrowRight,
  Bot,
  Sparkles,
  MessageCircle,
  ShieldCheck,
  Zap,
  CalendarClock,
  Stethoscope,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-18 text-white md:py-22">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 opacity-90">
        <div className="absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-indigo-600/30 blur-3xl" />
        <div className="absolute top-16 right-[-100px] h-[420px] w-[420px] rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-[-180px] left-[-120px] h-[460px] w-[460px] rounded-full bg-violet-500/20 blur-3xl" />
      </div>

      {/* Grid background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.22] [mask-image:radial-gradient(55%_55%_at_50%_30%,#000_0%,transparent_70%)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:44px_44px]" />
      </div>

      {/* Top vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-10 md:grid-cols-[1.08fr_0.92fr]">
          {/* LEFT */}
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white/90 backdrop-blur">
                <Sparkles className="h-4 w-4 text-cyan-300" />
                Kaizardigi • Web • SEO • Automatisation IA
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
                Transformez vos messages WhatsApp en{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-indigo-300 to-violet-300 bg-clip-text text-transparent">
                  rendez-vous et clients
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
                Nous aidons les entreprises marocaines à attirer plus de clients grâce à un{" "}
                <span className="font-semibold text-white">site web performant</span>, un{" "}
                <span className="font-semibold text-white">bon référencement local</span> et une{" "}
                <span className="font-semibold text-white">automatisation WhatsApp intelligente</span>.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-5 flex flex-wrap gap-3 text-sm text-white/75">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
                  <MessageCircle className="h-4 w-4 text-cyan-300" />
                  Réponse instantanée
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
                  <CalendarClock className="h-4 w-4 text-indigo-300" />
                  RDV automatiques
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
                  <ShieldCheck className="h-4 w-4 text-violet-300" />
                  Relances intelligentes
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-5 text-sm text-white/65">
                Basé au Maroc • WhatsApp-first • Déploiement rapide
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/automatisation-ia"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-medium text-slate-950 shadow-sm transition hover:scale-[1.02] hover:bg-cyan-50"
                >
                  Voir l’offre IA
                  <Bot className="h-4 w-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm font-medium text-white backdrop-blur transition hover:scale-[1.02] hover:bg-white/10"
                >
                  Demander un devis
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="mt-1 text-xs text-white/65">Réponse automatique</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <div className="text-2xl font-bold text-white">+RDV</div>
                  <div className="mt-1 text-xs text-white/65">Qualification & prise de rendez-vous</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <div className="text-2xl font-bold text-white">+Leads</div>
                  <div className="mt-1 text-xs text-white/65">Suivi et relances automatiques</div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* RIGHT CARD */}
          <div>
            <Reveal delay={0.08}>
              <div className="relative rounded-3xl border border-white/15 bg-white/5 p-7 shadow-[0_0_60px_rgba(99,102,241,0.12)] backdrop-blur">
                <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />

                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                      <Stethoscope className="h-6 w-6 text-cyan-300" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Assistant IA WhatsApp</div>
                      <div className="text-xs text-white/70">
                        Cabinet médical • Qualification • RDV
                      </div>
                    </div>
                  </div>

                  <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-950">
                    Démo
                  </span>
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/40 p-4">
                  <div className="mb-4 flex items-center gap-2 text-xs text-white/60">
                    <MessageCircle className="h-4 w-4 text-cyan-300" />
                    Exemple de conversation
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-start">
                      <div className="max-w-[85%] rounded-2xl rounded-bl-md border border-white/10 bg-white/5 px-4 py-3 text-white/90">
                        <span className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-white/50">
                          Patient
                        </span>
                        Salam, je voudrais prendre un rendez-vous avec un médecin généraliste.
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <div className="max-w-[85%] rounded-2xl rounded-br-md border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-white/90">
                        <span className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-cyan-300">
                          Assistant IA
                        </span>
                        Avec plaisir. Vous souhaitez un rendez-vous aujourd’hui ou un autre jour ?
                      </div>
                    </div>

                    <div className="flex justify-start">
                      <div className="max-w-[85%] rounded-2xl rounded-bl-md border border-white/10 bg-white/5 px-4 py-3 text-white/90">
                        <span className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-white/50">
                          Patient
                        </span>
                        Demain si possible, en fin de matinée.
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <div className="max-w-[85%] rounded-2xl rounded-br-md border border-indigo-400/20 bg-indigo-400/10 px-4 py-3 text-white/90">
                        <span className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-indigo-300">
                          Assistant IA
                        </span>
                        Très bien. Le cabinet est à Casablanca. Puis-je avoir votre nom complet et votre numéro de téléphone ?
                      </div>
                    </div>

                    <div className="flex justify-start">
                      <div className="max-w-[85%] rounded-2xl rounded-bl-md border border-white/10 bg-white/5 px-4 py-3 text-white/90">
                        <span className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-white/50">
                          Patient
                        </span>
                        Hamza El Idrissi, 06XXXXXXXX.
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <div className="max-w-[85%] rounded-2xl rounded-br-md border border-violet-400/20 bg-violet-400/10 px-4 py-3 text-white/90">
                        <span className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-violet-300">
                          Assistant IA
                        </span>
                        Merci. Je vous propose demain à 11h30. Je peux aussi envoyer une confirmation et un rappel avant le rendez-vous.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    "Réponse 24/7",
                    "Qualification automatique",
                    "Prise de RDV",
                    "Rappels & relances",
                  ].map((x) => (
                    <div
                      key={x}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white/85"
                    >
                      {x}
                    </div>
                  ))}
                </div>

                <div className="mt-7">
                  <Link
                    href="/automatisation-ia"
                    className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:opacity-95"
                  >
                    Découvrir l’offre IA
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