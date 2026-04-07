"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  Database,
  Mail,
  Eye,
  Server,
  MessageCircle,
  Clock3,
  Sparkles,
} from "lucide-react";

const WHATSAPP = "https://wa.me/212644567165";
const EMAIL = "contact@kaizardigi.com";

const sections = [
  {
    icon: Database,
    title: "1) Données collectées",
    desc: "Nous pouvons collecter certaines informations lorsque vous nous contactez via notre site web, WhatsApp ou nos formulaires.",
    points: [
      "Nom et prénom",
      "Numéro de téléphone",
      "Adresse e-mail",
      "Informations liées à votre projet, activité, ville, objectif ou budget",
    ],
    color: "cyan",
  },
  {
    icon: Eye,
    title: "2) Utilisation des données",
    desc: "Les données collectées sont utilisées uniquement pour mieux répondre à vos demandes et assurer le suivi de nos services.",
    points: [
      "Répondre à vos messages et demandes de devis",
      "Proposer une solution adaptée à votre besoin",
      "Améliorer la qualité de notre accompagnement",
      "Assurer un suivi commercial ou technique si nécessaire",
    ],
    color: "indigo",
  },
  {
    icon: Lock,
    title: "3) Protection et sécurité",
    desc: "Nous mettons en place des mesures raisonnables pour protéger vos données contre l’accès non autorisé, la perte ou l’utilisation abusive.",
    points: [
      "Accès limité aux informations",
      "Utilisation d’outils sécurisés",
      "Protection des accès administratifs",
      "Surveillance et bonnes pratiques techniques",
    ],
    color: "violet",
  },
  {
    icon: Server,
    title: "4) Partage des données",
    desc: "Nous ne vendons pas vos données. Elles ne sont pas partagées avec des tiers à des fins commerciales.",
    points: [
      "Aucune vente de données personnelles",
      "Aucun partage public de vos informations",
      "Traitement possible via des outils techniques nécessaires au service",
      "Partage limité uniquement si requis pour exécuter votre demande",
    ],
    color: "cyan",
  },
  {
    icon: Clock3,
    title: "5) Conservation des données",
    desc: "Les données sont conservées pendant la durée raisonnablement nécessaire pour répondre à votre demande ou assurer le suivi du service.",
    points: [
      "Durée adaptée au besoin réel",
      "Suppression progressive des données non nécessaires",
      "Conservation possible en cas d’obligation légale ou administrative",
    ],
    color: "indigo",
  },
  {
    icon: ShieldCheck,
    title: "6) Vos droits",
    desc: "Vous pouvez demander l’accès, la modification ou la suppression de vos données personnelles dans la mesure permise par la réglementation applicable.",
    points: [
      "Demander l’accès à vos données",
      "Corriger une information inexacte",
      "Demander la suppression de certaines données",
      "Nous contacter pour toute question liée à la confidentialité",
    ],
    color: "violet",
  },
];

function getIconWrapper(color: string) {
  if (color === "cyan") {
    return "bg-cyan-50 ring-1 ring-cyan-200 text-cyan-600";
  }
  if (color === "indigo") {
    return "bg-indigo-50 ring-1 ring-indigo-200 text-indigo-600";
  }
  return "bg-violet-50 ring-1 ring-violet-200 text-violet-600";
}

function getDotColor(color: string) {
  if (color === "cyan") return "bg-cyan-600";
  if (color === "indigo") return "bg-indigo-600";
  return "bg-violet-600";
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />

      <main>
        <PageHeader
          badge="Légal • Confidentialité"
          title="Politique de confidentialité"
          subtitle="Nous accordons une grande importance à la protection de vos données personnelles et à la confidentialité de vos échanges."
          primaryHref={WHATSAPP}
          primaryLabel="WhatsApp (réponse rapide)"
          secondaryHref="/contact"
          secondaryLabel="Nous contacter"
        />

        <section className="relative overflow-hidden bg-white py-16 md:py-20">
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-500/8 blur-3xl" />
            <div className="absolute bottom-[-140px] right-[-140px] h-[440px] w-[440px] rounded-full bg-cyan-400/8 blur-3xl" />
          </div>

          <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.5)_1px,transparent_1px)] bg-[size:44px_44px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-6xl px-4">
            <div className="grid gap-6 lg:grid-cols-3">
              {/* LEFT SIDEBAR */}
              <Reveal>
                <div className="rounded-3xl border bg-white p-8 shadow-sm shadow-[0_0_40px_rgba(34,211,238,0.08)] lg:sticky lg:top-24">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 ring-1 ring-cyan-200">
                      <ShieldCheck className="h-6 w-6 text-cyan-600" />
                    </div>

                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-xs font-medium text-gray-800 shadow-sm">
                        <Sparkles className="h-4 w-4 text-cyan-500" />
                        Données & transparence
                      </div>

                      <h2 className="mt-4 text-2xl font-bold text-gray-900">
                        Vos données restent protégées
                      </h2>

                      <p className="mt-2 text-sm leading-7 text-gray-700">
                        Cette page explique quelles données peuvent être collectées,
                        comment elles sont utilisées et quelles mesures nous prenons
                        pour protéger votre confidentialité.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm">
                    <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
                      <ShieldCheck className="h-4 w-4 text-cyan-600" />
                      Points essentiels :
                    </div>

                    <div className="mt-4 grid gap-3">
                      {[
                        "Aucune vente de vos données",
                        "Utilisation limitée à vos demandes",
                        "Protection des accès et des échanges",
                        "Contact possible pour toute demande",
                      ].map((item, idx) => {
                        const dotColors = [
                          "bg-cyan-600",
                          "bg-indigo-600",
                          "bg-violet-600",
                          "bg-cyan-600",
                        ];

                        return (
                          <div
                            key={item}
                            className="rounded-2xl border bg-white p-4 shadow-sm"
                          >
                            <div className="flex items-center gap-2">
                              <span
                                className={[
                                  "h-2.5 w-2.5 rounded-full",
                                  dotColors[idx],
                                ].join(" ")}
                              />
                              <div className="text-sm font-semibold text-gray-900">
                                {item}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-8 space-y-4 text-sm text-gray-800">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-50 ring-1 ring-cyan-200">
                        <Mail className="h-5 w-5 text-cyan-600" />
                      </div>
                      <a
                        className="underline underline-offset-4"
                        href={`mailto:${EMAIL}`}
                      >
                        {EMAIL}
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-50 ring-1 ring-indigo-200">
                        <MessageCircle className="h-5 w-5 text-indigo-600" />
                      </div>
                      <a
                        href={WHATSAPP}
                        target="_blank"
                        rel="noreferrer"
                        className="underline underline-offset-4"
                      >
                        Contact WhatsApp
                      </a>
                    </div>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <Link
                      href="/contact"
                      className="rounded-full border border-slate-200 px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-slate-50"
                    >
                      Page contact
                    </Link>

                    <Link
                      href="/services"
                      className="rounded-full border border-blue-600 px-5 py-2.5 text-sm font-medium text-blue-600 transition hover:bg-blue-600 hover:text-white"
                    >
                      Voir les services
                    </Link>
                  </div>
                </div>
              </Reveal>

              {/* RIGHT CONTENT */}
              <div className="lg:col-span-2">
                <div className="grid gap-6">
                  {sections.map((section, index) => {
                    const Icon = section.icon;

                    return (
                      <Reveal key={section.title} delay={index * 0.04}>
                        <div className="rounded-3xl border bg-white p-8 shadow-sm shadow-[0_0_40px_rgba(99,102,241,0.08)]">
                          <div className="flex items-start gap-4">
                            <div
                              className={`flex h-12 w-12 items-center justify-center rounded-2xl ${getIconWrapper(
                                section.color
                              )}`}
                            >
                              <Icon className="h-6 w-6" />
                            </div>

                            <div className="flex-1">
                              <h2 className="text-2xl font-bold text-gray-900">
                                {section.title}
                              </h2>

                              <p className="mt-2 text-sm leading-7 text-gray-700">
                                {section.desc}
                              </p>

                              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                                {section.points.map((point) => (
                                  <div
                                    key={point}
                                    className="rounded-2xl border bg-white p-4 shadow-sm"
                                  >
                                    <div className="flex items-start gap-2">
                                      <span
                                        className={`mt-1 h-2.5 w-2.5 rounded-full ${getDotColor(
                                          section.color
                                        )}`}
                                      />
                                      <div className="text-sm text-gray-700">
                                        {point}
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Reveal>
                    );
                  })}

                  <Reveal delay={0.24}>
                    <div className="rounded-3xl border bg-white p-8 shadow-sm shadow-[0_0_40px_rgba(34,211,238,0.08)]">
                      <div className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-xs font-medium text-gray-800 shadow-sm">
                        <Sparkles className="h-4 w-4 text-cyan-500" />
                        WhatsApp & automatisation
                      </div>

                      <h2 className="mt-4 text-2xl font-bold text-gray-900">
                        Utilisation de WhatsApp et d’outils d’automatisation
                      </h2>

                      <p className="mt-3 text-sm leading-7 text-gray-700">
                        Dans le cadre de nos services, certaines conversations ou
                        informations transmises via WhatsApp ou via nos formulaires
                        peuvent être traitées à l’aide d’outils d’automatisation afin
                        de répondre plus rapidement, mieux qualifier votre demande et
                        améliorer la qualité du suivi.
                      </p>

                      <p className="mt-3 text-sm leading-7 text-gray-700">
                        Ces traitements restent limités à un usage professionnel lié à
                        votre demande. Nous faisons le nécessaire pour garder ces
                        échanges confidentiels et utilisés uniquement dans le cadre du
                        service demandé.
                      </p>
                    </div>
                  </Reveal>

                  <Reveal delay={0.28}>
                    <div className="rounded-3xl border bg-white p-8 shadow-sm">
                      <h2 className="text-2xl font-bold text-gray-900">
                        Contact
                      </h2>

                      <p className="mt-3 text-sm leading-7 text-gray-700">
                        Pour toute question concernant cette politique de
                        confidentialité ou pour exercer vos droits, vous pouvez nous
                        contacter à :
                      </p>

                      <div className="mt-5 flex flex-col gap-3 text-sm text-gray-800">
                        <a
                          href={`mailto:${EMAIL}`}
                          className="inline-flex items-center gap-2 underline underline-offset-4"
                        >
                          <Mail className="h-4 w-4 text-cyan-600" />
                          {EMAIL}
                        </a>

                        <a
                          href={WHATSAPP}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 underline underline-offset-4"
                        >
                          <MessageCircle className="h-4 w-4 text-indigo-600" />
                          WhatsApp Kaizardigi
                        </a>
                      </div>

                      <p className="mt-6 text-xs text-gray-500">
                        Dernière mise à jour : Avril 2026
                      </p>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}