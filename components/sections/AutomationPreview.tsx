"use client";

import Link from "next/link";
import {
  Bot,
  CalendarClock,
  MessageCircle,
  RefreshCcw,
  Sparkles,
  ArrowRight,
  Check,
} from "lucide-react";

const benefits = [
  {
    title: "Réponse 24/7",
    desc: "L’assistant répond automatiquement même hors horaires pour ne laisser aucun prospect sans réponse.",
    icon: MessageCircle,
    accent: "cyan",
  },
  {
    title: "RDV automatique",
    desc: "Proposition de créneaux, confirmation et rappel avant l’appel ou le rendez-vous.",
    icon: CalendarClock,
    accent: "indigo",
  },
  {
    title: "Relances intelligentes",
    desc: "Relance J+1 / J+3 si le prospect ne répond pas ou hésite encore.",
    icon: RefreshCcw,
    accent: "violet",
  },
];

const plans = [
  {
    name: "Starter",
    price: "700 DH/mois",
    note: "200 conversations / mois",
    accent: "cyan",
    featured: false,
  },
  {
    name: "Growth",
    price: "1500 DH/mois",
    note: "1000 conversations / mois",
    accent: "indigo",
    featured: true,
  },
  {
    name: "Business",
    price: "3000 DH/mois",
    note: "Illimitées (fair use)",
    accent: "violet",
    featured: false,
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

export default function AutomationPreview() {
  return (
    <section className="relative -mt-12 -mb-12 overflow-hidden border-y py-12 md:-mt-14 md:-mb-14">
      
      {/* Overlay */}
      <div className="absolute inset-0 z-[0] bg-white/78" />

      {/* Glows */}
      <div className="pointer-events-none absolute inset-0 z-[1] opacity-70">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-500/8 blur-3xl" />
        <div className="absolute bottom-[-140px] right-[-140px] h-[440px] w-[440px] rounded-full bg-cyan-400/8 blur-3xl" />
      </div>

      {/* Grid */}
      <div className="pointer-events-none absolute inset-0 z-[1] opacity-[0.04]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.5)_1px,transparent_1px)] bg-[size:44px_44px]" />
      </div>

      <div className="relative z-[2] mx-auto max-w-6xl px-4">

        {/* === LE RESTE DU CODE RESTE EXACTEMENT COMME TU L’AVAIS === */}
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-xs font-medium text-gray-800 shadow-sm">
            <Sparkles className="h-4 w-4 text-cyan-500" />
            Automatisation & IA
          </div>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Ne perdez plus de prospects sur{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">
              WhatsApp
            </span>
          </h2>

          <p className="mt-2 text-lg text-gray-700">
            Réponse instantanée, qualification, rendez-vous et relances automatiques.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
          {/* LEFT */}
          <div className="rounded-3xl border bg-white p-6 shadow-sm md:p-7">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-cyan-500" />
              <span className="text-sm font-semibold text-gray-900">
                Ce que vous gagnez
              </span>
            </div>

            <h3 className="mt-3 text-2xl font-bold text-gray-900">
              Un WhatsApp qui répond, qualifie et relance
            </h3>

            <div className="mt-6 space-y-5">
              {benefits.map((item) => {
                const Icon = item.icon;
                const a = accentStyles(item.accent);

                return (
                  <div key={item.title} className="flex gap-4">
                    <div
                      className={[
                        "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ring-1",
                        a.iconBg,
                        a.ring,
                      ].join(" ")}
                    >
                      <Icon className={["h-6 w-6", a.iconText].join(" ")} />
                    </div>

                    <div>
                      <div className="font-semibold text-gray-900">
                        {item.title}
                      </div>
                      <p className="mt-1 text-sm text-gray-700">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 rounded-2xl border bg-gray-50 p-4">
              <div className="text-sm font-semibold text-gray-900">
                Idéal pour
              </div>
              <p className="mt-2 text-sm text-gray-700">
                cliniques • salons • centres de formation • immobilier • commerces
              </p>
            </div>

            <div className="mt-6 rounded-2xl border bg-blue-50 p-4">
              <div className="flex items-start gap-3">
                <Check className="mt-0.5 h-4 w-4 text-blue-600" />
                <p className="text-sm text-gray-700">
                  Mise en place à partir de{" "}
                  <span className="font-semibold text-gray-900">1500 DH</span>{" "}
                  selon le scénario et les intégrations.
                </p>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/automatisation-ia"
                className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-black"
              >
                Découvrir l’offre IA
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-gray-900 px-6 py-3 text-sm font-medium text-gray-900 transition hover:bg-gray-900 hover:text-white"
              >
                Demander un devis
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="rounded-3xl border bg-white p-6 shadow-sm md:p-7">
            <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
              {/* Conversation */}
             {/* Conversation */}
              <div>
                <div className="flex items-center gap-2">
                  <Bot className="h-4 w-4 text-cyan-500" />
                  <span className="text-sm font-semibold text-gray-900">
                    Exemple de conversation
                  </span>
                </div>

                <p className="mt-2 text-sm text-gray-700">
                  Un scénario réaliste qu’on adapte ensuite à votre activité.
                </p>

                <div className="mt-5 space-y-3 text-sm">
                  <div className="flex justify-start">
                    <div className="max-w-[85%] rounded-2xl rounded-bl-md border bg-gray-50 px-4 py-3 text-gray-900 shadow-sm">
                      <span className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                        Client
                      </span>
                      Salam, je veux créer un site web pour mon activité.
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div className="max-w-[85%] rounded-2xl rounded-br-md border border-cyan-100 bg-cyan-50/80 px-4 py-3 text-gray-900 shadow-sm">
                      <span className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-cyan-700">
                        Assistant IA
                      </span>
                      Avec plaisir. Quel type d’activité avez-vous et dans quelle ville êtes-vous ?
                    </div>
                  </div>

                  <div className="flex justify-start">
                    <div className="max-w-[85%] rounded-2xl rounded-bl-md border bg-gray-50 px-4 py-3 text-gray-900 shadow-sm">
                      <span className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                        Client
                      </span>
                      J’ai un salon de beauté à Casablanca.
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div className="max-w-[85%] rounded-2xl rounded-br-md border border-indigo-100 bg-indigo-50/80 px-4 py-3 text-gray-900 shadow-sm">
                      <span className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-indigo-700">
                        Assistant IA
                      </span>
                      Parfait. Souhaitez-vous un site vitrine pour présenter vos services ou un site avec réservation ?
                    </div>
                  </div>

                  <div className="flex justify-start">
                    <div className="max-w-[85%] rounded-2xl rounded-bl-md border bg-gray-50 px-4 py-3 text-gray-900 shadow-sm">
                      <span className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                        Client
                      </span>
                      Un site simple pour présenter mes services et recevoir des demandes.
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div className="max-w-[85%] rounded-2xl rounded-br-md border border-violet-100 bg-violet-50/80 px-4 py-3 text-gray-900 shadow-sm">
                      <span className="mb-1 block text-[11px] font-semibold uppercase tracking-wide text-violet-700">
                        Assistant IA
                      </span>
                      Très bien. Je peux vous proposer un appel de 10 minutes pour vous orienter rapidement et préparer un devis adapté.
                    </div>
                  </div>
                </div>
              </div>


              {/* Pricing */}
              <div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-cyan-500" />
                  <span className="text-sm font-semibold text-gray-900">
                    Aperçu des packs
                  </span>
                </div>

                <p className="mt-2 text-sm text-gray-700">
                  Des tarifs transparents pour démarrer simplement.
                </p>

                <div className="mt-5 space-y-3">
                  {plans.map((plan) => (
                    <div
                      key={plan.name}
                      className={[
                        "rounded-2xl border p-4 shadow-sm",
                        plan.featured
                          ? "border-indigo-200 bg-indigo-50/70"
                          : "bg-white",
                      ].join(" ")}
                    >
                      <div className="flex justify-between">
                        <div>
                          <div className="font-semibold text-gray-900">
                            {plan.name}
                          </div>
                          <div className="text-xs text-gray-600">
                            {plan.note}
                          </div>
                        </div>
                        <div className="font-bold text-gray-900">
                          {plan.price}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5">
                  <Link
                    href="/automatisation-ia"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-blue-600"
                  >
                    Voir tous les détails
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}