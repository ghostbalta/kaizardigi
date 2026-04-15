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
  ArrowRight,
} from "lucide-react";

const WHATSAPP = "https://wa.me/212644567165"; // remplace

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
    desc: "Questions/réponses + qualification, adaptés à ton activité et à ton marché.",
  },
  {
    n: "02",
    title: "On branche WhatsApp & le suivi",
    desc: "Réception des messages, collecte des infos, tracking des leads et organisation simple.",
  },
  {
    n: "03",
    title: "Tests + optimisation",
    desc: "Tests réels, amélioration des réponses, ajustement du ton et gestion des cas limites.",
  },
  {
    n: "04",
    title: "Mise en production",
    desc: "Activation 24/7, suivi simple et ajustements selon les résultats.",
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

const pricingPlans = [
  {
    name: "Starter",
    price: "700 DH / mois",
    label: "Offre lancement",
    accent: "cyan",
    featured: false,
    description: "Parfait pour commencer avec une automatisation simple et rentable.",
    cta: "Tester maintenant",
    items: [
      "Réponses automatiques aux clients",
      "Qualification basique des prospects",
      "Jusqu’à 200 conversations / mois",
      "Support standard",
    ],
    note: "Idéal pour tester l’automatisation IA.",
  },
  {
    name: "Growth",
    price: "1500 DH / mois",
    label: "Le plus choisi",
    accent: "indigo",
    featured: true,
    description: "Le meilleur choix pour générer plus de leads qualifiés et de rendez-vous.",
    cta: "Obtenir plus de clients",
    items: [
      "Qualification avancée des prospects",
      "Prise de rendez-vous automatique",
      "Optimisation des réponses IA",
      "Suivi des leads",
      "Jusqu’à 1000 conversations / mois",
      "Support prioritaire",
    ],
    note: "Idéal pour générer des clients et des RDV.",
  },
  {
    name: "Business",
    price: "3000 DH / mois",
    label: "Pour scaler",
    accent: "violet",
    featured: false,
    description: "Pensé pour les entreprises qui veulent automatiser sérieusement et évoluer.",
    cta: "Passer au niveau supérieur",
    items: [
      "Automatisation complète du parcours client",
      "Intégration CRM et suivi avancé",
      "Scénarios personnalisés",
      "Conversations illimitées (fair use)",
      "Support premium",
    ],
    note: "Idéal pour les entreprises qui veulent scaler.",
  },
];

const setupItems = [
  "Configuration de l’agent IA",
  "Intégration WhatsApp",
  "Scénarios et logique conversationnelle",
  "Connexion CRM / Google Sheets",
];

const extraOptions = [
  "+100 conversations : +200 DH",
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
        softBox: "bg-violet-50 border-violet-200",
        badge: "bg-violet-50 text-violet-700 border-violet-200",
        button: "bg-violet-600 hover:bg-violet-700",
      };
    case "indigo":
      return {
        ring: "ring-indigo-200",
        iconBg: "bg-indigo-50",
        iconText: "text-indigo-600",
        dot: "bg-indigo-600",
        glow: "shadow-[0_0_40px_rgba(99,102,241,0.10)]",
        softBox: "bg-indigo-50 border-indigo-200",
        badge: "bg-indigo-50 text-indigo-700 border-indigo-200",
        button: "bg-blue-600 hover:bg-blue-700",
      };
    default:
      return {
        ring: "ring-cyan-200",
        iconBg: "bg-cyan-50",
        iconText: "text-cyan-600",
        dot: "bg-cyan-600",
        glow: "shadow-[0_0_40px_rgba(34,211,238,0.10)]",
        softBox: "bg-cyan-50 border-cyan-200",
        badge: "bg-cyan-50 text-cyan-700 border-cyan-200",
        button: "bg-cyan-600 hover:bg-cyan-700",
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
          subtitle="Réponse instantanée, qualification, prise de rendez-vous et relances automatiques — avec des tarifs clairs et adaptés à votre activité."
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
                  Un système intelligent qui répond, qualifie, propose un RDV et relance automatiquement.
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
                      Si un prospect vous écrit, il reçoit une réponse immédiate, puis un suivi jusqu’au rendez-vous ou à la conversion.
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
                  4 étapes simples pour mettre en place une automatisation utile, claire et rentable.
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
                        (Personnalisable selon votre activité)
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
                      <span className="font-semibold text-blue-600">Assistant :</span> Parfait. Souhaitez-vous un appel de 10 minutes ?
                    </div>
                    <div className="rounded-2xl border bg-white p-3 text-gray-900">
                      <span className="font-semibold text-blue-600">Assistant :</span> Je peux aussi vous relancer automatiquement si vous ne répondez pas.
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border bg-white p-8 shadow-sm shadow-[0_0_40px_rgba(99,102,241,0.08)]">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Idéal pour
                  </h3>
                  <p className="mt-2 text-sm text-gray-700">
                    Si vous recevez régulièrement des messages, l’automatisation devient rentable très vite.
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
                      On peut aussi intégrer un assistant IA sur votre site pour répondre aux questions et orienter vers WhatsApp ou vers une demande de devis.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* PRICING */}
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
                  Tarifs transparents
                </div>

                <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                  Des offres{" "}
                  <span className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">
                    claires
                  </span>{" "}
                  pour chaque niveau de besoin
                </h2>

                <p className="mt-3 text-lg text-gray-700">
                  Choisissez la formule adaptée à votre activité, puis faites évoluer votre automatisation selon vos résultats.
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {pricingPlans.map((plan, idx) => {
                const a = accentStyles(plan.accent);

                return (
                  <Reveal key={plan.name} delay={idx * 0.06}>
                    <article
                      className={[
                        "relative rounded-3xl border bg-white p-8 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md",
                        a.glow,
                        plan.featured
                          ? "border-blue-200 ring-1 ring-blue-100 md:-mt-3"
                          : "border-gray-200",
                      ].join(" ")}
                    >
                      {plan.featured && (
                        <div className="absolute -top-3 left-6 rounded-full bg-blue-600 px-4 py-1.5 text-xs font-semibold text-white shadow-sm">
                          Recommandé
                        </div>
                      )}

                      <div className={["inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium", a.badge].join(" ")}>
                        {plan.label}
                      </div>

                      <h3 className="mt-5 text-2xl font-bold text-gray-900">
                        {plan.name}
                      </h3>
                      <div className="mt-3 text-3xl font-bold tracking-tight text-gray-900">
                        {plan.price}
                      </div>
                      <p className="mt-4 text-sm text-gray-700">
                        {plan.description}
                      </p>

                      <ul className="mt-6 space-y-3 text-sm text-gray-800">
                        {plan.items.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <Check className="mt-0.5 h-4 w-4 text-blue-600" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className={["mt-6 rounded-2xl border p-4", a.softBox].join(" ")}>
                        <p className="text-sm font-medium text-gray-800">{plan.note}</p>
                      </div>

                      <a
                        href={WHATSAPP}
                        target="_blank"
                        rel="noreferrer"
                        className={[
                          "mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white transition",
                          a.button,
                        ].join(" ")}
                      >
                        {plan.cta}
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </article>
                  </Reveal>
                );
              })}
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <Reveal>
                <div className="rounded-3xl border bg-white p-8 shadow-sm shadow-[0_0_40px_rgba(34,211,238,0.08)]">
                  <div className="text-sm font-semibold text-blue-600">Frais de mise en place</div>
                  <h3 className="mt-2 text-2xl font-bold text-gray-900">
                    À partir de 1500 DH jusqu’à 5000 DH
                  </h3>
                  <p className="mt-3 text-sm text-gray-700">
                    Le coût dépend de la complexité du scénario, des intégrations et du niveau de personnalisation.
                  </p>

                  <ul className="mt-6 space-y-3 text-sm text-gray-800">
                    {setupItems.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-4 w-4 text-blue-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.06}>
                <div className="rounded-3xl border bg-white p-8 shadow-sm shadow-[0_0_40px_rgba(99,102,241,0.08)]">
                  <div className="text-sm font-semibold text-blue-600">Options supplémentaires</div>
                  <h3 className="mt-2 text-2xl font-bold text-gray-900">
                    Faites évoluer selon vos besoins
                  </h3>
                  <p className="mt-3 text-sm text-gray-700">
                    Vous pouvez démarrer simple, puis ajouter des options selon le volume de messages et vos objectifs commerciaux.
                  </p>

                  <ul className="mt-6 space-y-3 text-sm text-gray-800">
                    {extraOptions.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-4 w-4 text-blue-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 rounded-2xl border bg-blue-50 p-5">
                    <div className="text-sm font-semibold text-gray-900">
                      Pourquoi cette approche fonctionne
                    </div>
                    <p className="mt-1 text-sm text-gray-700">
                      Vous gagnez du temps, vous répondez plus vite, vous qualifiez automatiquement les prospects et vous augmentez vos chances de convertir.
                    </p>
                  </div>
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
                      Vous voulez voir ce que l’automatisation peut faire pour votre business ?
                    </h3>
                    <p className="mt-2 text-gray-700">
                      Envoyez “Automatisation” sur WhatsApp. Je vous montre un scénario concret, les possibilités d’automatisation et la formule la plus adaptée.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <a
                      href={WHATSAPP}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-blue-600 px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-blue-700"
                    >
                      Démo WhatsApp
                    </a>
                    <Link
                      href="/services"
                      className="rounded-full border border-blue-600 px-6 py-3 text-center text-sm font-medium text-blue-600 transition hover:bg-blue-600 hover:text-white"
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