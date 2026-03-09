"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import Link from "next/link";
import {
  Bot,
  MessageCircle,
  ClipboardCheck,
  CalendarClock,
  RefreshCcw,
  ShieldCheck,
  Check,
  Sparkles,
} from "lucide-react";

const WHATSAPP = "https://wa.me/212600000000"; // remplace

const benefits = [
  {
    title: "Réponse instantanée 24/7",
    desc: "Même hors horaires. Plus de prospects perdus.",
    icon: MessageCircle,
    accent: "cyan",
  },
  {
    title: "Qualification automatique",
    desc: "Nom, ville, besoin, budget, délai… collectés automatiquement.",
    icon: ClipboardCheck,
    accent: "indigo",
  },
  {
    title: "Prise de RDV + rappels",
    desc: "Proposer un créneau, confirmer, rappeler avant le RDV.",
    icon: CalendarClock,
    accent: "violet",
  },
  {
    title: "Relances intelligentes",
    desc: "Relance J+1 / J+3 si le prospect ne répond pas.",
    icon: RefreshCcw,
    accent: "cyan",
  },
];

const steps = [
  {
    n: "01",
    title: "On définit le scénario",
    desc: "Questions/réponses + qualification (adapté à ton business).",
  },
  {
    n: "02",
    title: "On branche WhatsApp & tracking",
    desc: "Réception des messages, collecte des infos, suivi des conversions.",
  },
  {
    n: "03",
    title: "Tests + optimisation",
    desc: "Tests réels, amélioration des réponses, gestion des cas limites.",
  },
  {
    n: "04",
    title: "Mise en production",
    desc: "Activation 24/7 + monitoring simple + ajustements.",
  },
];

const useCases = [
  "Cliniques & cabinets",
  "Salons & beauté",
  "Centres de formation",
  "Immobilier",
  "Restaurants",
  "Commerces",
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

export default function AutomationPage() {
  return (
    <>
      <Navbar />

      <main>
        <PageHeader
          badge="Automatisation • WhatsApp • IA"
          title="Transformez votre WhatsApp en machine à générer des clients"
          subtitle="Réponse instantanée, qualification, RDV et relances automatiques — pour ne plus perdre aucun prospect."
          primaryHref={WHATSAPP}
          primaryLabel="Demander une démo WhatsApp"
          secondaryHref="/contact"
          secondaryLabel="Demander un devis"
        />

        {/* BENEFITS */}
        <section className="relative overflow-hidden bg-white py-16 md:py-20">
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-500/8 blur-3xl" />
            <div className="absolute bottom-[-140px] right-[-140px] h-[440px] w-[440px] rounded-full bg-cyan-400/8 blur-3xl" />
          </div>

          <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.5)_1px,transparent_1px)] bg-[size:44px_44px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-6xl px-4">
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <div className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-xs font-medium text-gray-800 shadow-sm">
                  <Sparkles className="h-4 w-4 text-cyan-500" />
                  Automatisation & IA
                </div>

                <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                  Ce que l’automatisation{" "}
                  <span className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">
                    change
                  </span>
                </h2>

                <p className="mt-3 text-lg text-gray-700">
                  Un système simple qui répond, qualifie, propose un RDV et relance automatiquement.
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {benefits.map((b, idx) => {
                const Icon = b.icon;
                const a = accentStyles(b.accent);

                return (
                  <Reveal key={b.title} delay={idx * 0.06}>
                    <article
                      className={[
                        "rounded-3xl border bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md",
                        a.glow,
                      ].join(" ")}
                    >
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
                            {b.title}
                          </h3>
                          <p className="mt-2 text-sm text-gray-700">{b.desc}</p>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={0.12}>
              <div className="mt-12 rounded-3xl border bg-white p-8 shadow-sm shadow-[0_0_40px_rgba(34,211,238,0.08)]">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 ring-1 ring-cyan-200">
                    <ShieldCheck className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      Objectif : zéro lead perdu
                    </h3>
                    <p className="mt-2 text-gray-700">
                      Si un prospect écrit, il reçoit une réponse immédiate, puis un suivi jusqu’au RDV.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="relative overflow-hidden bg-white py-16 md:py-20">
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="absolute -top-40 left-0 h-[460px] w-[460px] rounded-full bg-cyan-400/8 blur-3xl" />
            <div className="absolute bottom-[-140px] right-0 h-[420px] w-[420px] rounded-full bg-indigo-500/8 blur-3xl" />
          </div>

          <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.5)_1px,transparent_1px)] bg-[size:44px_44px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-6xl px-4">
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <div className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-xs font-medium text-gray-800 shadow-sm">
                  <Sparkles className="h-4 w-4 text-cyan-500" />
                  Déploiement
                </div>

                <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                  Comment ça{" "}
                  <span className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">
                    marche
                  </span>
                </h2>

                <p className="mt-3 text-lg text-gray-700">
                  4 étapes simples, livrées proprement et testées.
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {steps.map((s, idx) => (
                <Reveal key={s.n} delay={idx * 0.06}>
                  <div className="rounded-3xl border bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md shadow-[0_0_40px_rgba(99,102,241,0.06)]">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-xs font-semibold text-blue-600">
                          Étape {s.n}
                        </div>
                        <h3 className="mt-1 text-xl font-semibold text-gray-900">
                          {s.title}
                        </h3>
                      </div>
                      <span className="rounded-full border bg-white px-3 py-1 text-xs text-gray-700">
                        Kaizardigi
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-gray-700">{s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.14}>
              <div className="mt-12 grid gap-6 md:grid-cols-2">
                {/* Chat preview */}
                <div className="rounded-3xl border bg-white p-8 shadow-sm shadow-[0_0_40px_rgba(34,211,238,0.08)]">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 ring-1 ring-cyan-200">
                      <Bot className="h-6 w-6 text-cyan-600" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">
                        Exemple de conversation
                      </div>
                      <div className="text-xs text-gray-600">
                        (Personnalisable selon ton activité)
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3 text-sm">
                    <div className="rounded-2xl border bg-gray-50 p-3 text-gray-900">
                      <span className="font-semibold">Client :</span> Salam, je veux un site web.
                    </div>
                    <div className="rounded-2xl border bg-white p-3 text-gray-900">
                      <span className="font-semibold text-blue-600">Assistant :</span> Votre activité et votre ville ?
                    </div>
                    <div className="rounded-2xl border bg-gray-50 p-3 text-gray-900">
                      <span className="font-semibold">Client :</span> Salon à Casablanca.
                    </div>
                    <div className="rounded-2xl border bg-white p-3 text-gray-900">
                      <span className="font-semibold text-blue-600">Assistant :</span> Parfait. Un appel de 10 min ?
                    </div>
                    <div className="rounded-2xl border bg-white p-3 text-gray-900">
                      <span className="font-semibold text-blue-600">Assistant :</span> Je relance automatiquement si vous ne répondez pas.
                    </div>
                  </div>
                </div>

                {/* Use cases */}
                <div className="rounded-3xl border bg-white p-8 shadow-sm shadow-[0_0_40px_rgba(99,102,241,0.08)]">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Idéal pour
                  </h3>
                  <p className="mt-2 text-sm text-gray-700">
                    Si tu reçois beaucoup de demandes, l’automatisation est rentable très vite.
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {useCases.map((u, idx) => {
                      const accents = ["cyan", "indigo", "violet", "cyan", "indigo", "violet"];
                      const a = accentStyles(accents[idx]);

                      return (
                        <div
                          key={u}
                          className={[
                            "rounded-2xl border bg-white p-4 shadow-sm",
                            a.glow,
                          ].join(" ")}
                        >
                          <div className="flex items-center gap-2">
                            <span className={["h-2.5 w-2.5 rounded-full", a.dot].join(" ")} />
                            <div className="text-sm font-semibold text-gray-900">{u}</div>
                          </div>
                          <div className="mt-1 text-xs text-gray-600">
                            Qualification + RDV + relance
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-8 rounded-2xl border bg-blue-50 p-5">
                    <div className="text-sm font-semibold text-gray-900">
                      Bonus
                    </div>
                    <p className="mt-1 text-sm text-gray-700">
                      On peut aussi intégrer un assistant IA sur le site pour répondre aux questions
                      et orienter vers WhatsApp/devis.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* OFFER */}
        <section className="relative overflow-hidden bg-white py-16 md:py-20">
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="absolute -top-24 right-1/4 h-[380px] w-[380px] rounded-full bg-violet-500/8 blur-3xl" />
            <div className="absolute bottom-[-120px] left-0 h-[360px] w-[360px] rounded-full bg-cyan-400/8 blur-3xl" />
          </div>

          <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.5)_1px,transparent_1px)] bg-[size:44px_44px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-6xl px-4">
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <div className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-xs font-medium text-gray-800 shadow-sm">
                  <Sparkles className="h-4 w-4 text-cyan-500" />
                  Offre
                </div>

                <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                  L’offre{" "}
                  <span className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">
                    Automatisation & IA
                  </span>
                </h2>

                <p className="mt-3 text-lg text-gray-700">
                  Mise en place complète. Prix sur devis selon le scénario et les intégrations.
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <Reveal>
                <div className="rounded-3xl border bg-white p-8 shadow-sm shadow-[0_0_40px_rgba(34,211,238,0.08)]">
                  <div className="text-sm font-semibold text-blue-600">Inclus</div>
                  <h3 className="mt-2 text-xl font-semibold text-gray-900">
                    Setup complet
                  </h3>
                  <ul className="mt-5 space-y-3 text-sm text-gray-800">
                    {[
                      "Scénario questions/réponses + qualification",
                      "Collecte des infos (nom, ville, besoin…)",
                      "Relances automatiques (J+1 / J+3)",
                      "Tests + ajustements",
                    ].map((x) => (
                      <li key={x} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-4 w-4 text-blue-600" />
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.06}>
                <div className="rounded-3xl border border-blue-200 bg-blue-50 p-8 shadow-sm ring-1 ring-blue-100 shadow-[0_0_40px_rgba(99,102,241,0.08)]">
                  <div className="text-sm font-semibold text-blue-600">Options</div>
                  <h3 className="mt-2 text-xl font-semibold text-gray-900">
                    RDV + Assistant site
                  </h3>
                  <ul className="mt-5 space-y-3 text-sm text-gray-800">
                    {[
                      "Prise de RDV + rappels",
                      "Assistant IA sur le site (FAQ + devis)",
                      "Connexion mini-CRM (suivi des leads)",
                      "Notifications & reporting simple",
                    ].map((x) => (
                      <li key={x} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-4 w-4 text-blue-600" />
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="rounded-3xl border bg-white p-8 shadow-sm shadow-[0_0_40px_rgba(139,92,246,0.08)]">
                  <div className="text-sm font-semibold text-blue-600">Tarif</div>
                  <h3 className="mt-2 text-xl font-semibold text-gray-900">
                    Sur devis
                  </h3>
                  <p className="mt-3 text-sm text-gray-700">
                    Le prix dépend du scénario + intégrations. On te donne un devis clair après 5 minutes de questions.
                  </p>

                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700 transition"
                  >
                    Demander une démo WhatsApp
                  </a>

                  <Link
                    href="/contact"
                    className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-blue-600 px-6 py-3 text-sm font-medium text-blue-600 hover:bg-blue-600 hover:text-white transition"
                  >
                    Demander un devis
                  </Link>

                  <p className="mt-4 text-xs text-gray-500">
                    Délais moyens : 7 à 14 jours selon complexité.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative overflow-hidden bg-white py-16 md:py-20">
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="absolute -top-28 left-1/3 h-[320px] w-[320px] rounded-full bg-indigo-500/8 blur-3xl" />
            <div className="absolute bottom-[-100px] right-1/4 h-[300px] w-[300px] rounded-full bg-cyan-400/8 blur-3xl" />
          </div>

          <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.5)_1px,transparent_1px)] bg-[size:44px_44px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-6xl px-4">
            <Reveal>
              <div className="rounded-3xl border bg-white p-10 shadow-sm shadow-[0_0_40px_rgba(34,211,238,0.08)]">
                <div className="grid gap-6 md:grid-cols-3 md:items-center">
                  <div className="md:col-span-2">
                    <div className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-xs font-medium text-gray-800 shadow-sm">
                      <Sparkles className="h-4 w-4 text-cyan-500" />
                      Démo
                    </div>

                    <h3 className="mt-4 text-2xl font-bold text-gray-900">
                      Tu veux une démo adaptée à ton business ?
                    </h3>
                    <p className="mt-2 text-gray-700">
                      Envoie “Automatisation” sur WhatsApp. Je te montre un scénario et je te dis ce qu’on peut automatiser.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <a
                      href={WHATSAPP}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-blue-600 px-6 py-3 text-center text-sm font-medium text-white hover:bg-blue-700 transition"
                    >
                      Démo WhatsApp
                    </a>
                    <Link
                      href="/services"
                      className="rounded-full border border-blue-600 px-6 py-3 text-center text-sm font-medium text-blue-600 hover:bg-blue-600 hover:text-white transition"
                    >
                      Voir tous les services
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