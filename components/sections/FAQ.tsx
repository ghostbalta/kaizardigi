"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { ChevronDown, MessageCircle, Shield, Clock, CreditCard } from "lucide-react";

type FAQItem = {
  q: string;
  a: string;
  tag?: "Web" | "SEO" | "Ads" | "IA" | "Support";
  icon?: React.ComponentType<{ className?: string }>;
};

export default function FAQ() {
  const faqs: FAQItem[] = useMemo(
    () => [
      {
        q: "En combien de temps vous livrez un site ?",
        a: "En général : Pack Starter en 7–10 jours, E-commerce en 10–14 jours. Ça dépend du contenu (textes/images) et du nombre de pages. On valide le planning dès le brief.",
        tag: "Web",
        icon: Clock,
      },
      {
        q: "Est-ce que je peux payer en plusieurs fois ?",
        a: "Oui. La plupart des projets se font en 2 étapes : acompte pour démarrer, solde à la livraison. Pour les projets sur mesure, on peut étaler selon les jalons.",
        tag: "Support",
        icon: CreditCard,
      },
      {
        q: "Le SEO est inclus ?",
        a: "Oui, une base SEO propre est incluse (structure, performance, balises, indexation). Le SEO “avancé” (contenu, netlinking, stratégie locale) se fait sur un accompagnement mensuel.",
        tag: "SEO",
        icon: Shield,
      },
      {
        q: "Vous faites Meta Ads / Google Ads ?",
        a: "Oui. On lance des campagnes orientées leads (pas likes), avec tracking des conversions. On optimise chaque semaine selon les résultats (CPL, taux de conversion, qualité des leads).",
        tag: "Ads",
        icon: MessageCircle,
      },
      {
        q: "C’est quoi l’Automatisation & IA exactement ?",
        a: "C’est un système qui répond 24/7 sur WhatsApp ou sur le site, qualifie (activité, ville, budget, objectif), propose un RDV, et relance automatiquement J+1/J+3 si le prospect disparaît.",
        tag: "IA",
      },
      {
        q: "L’assistant IA peut-il parler Darija / Français ?",
        a: "Oui. On peut configurer Darija, Français, Arabe, et même basculer selon le message du client. On définit aussi le ton (pro, friendly, direct).",
        tag: "IA",
      },
      {
        q: "Est-ce que l’IA peut se tromper ?",
        a: "Comme tout assistant, oui — mais on réduit les erreurs avec un script de qualification, des garde-fous, et des réponses “safe”. Et surtout : on transfère à l’humain quand c’est nécessaire.",
        tag: "IA",
      },
      {
        q: "Qui possède le site et les accès ?",
        a: "Vous. Domaine, hébergement, WordPress/Next, comptes pub… tout est à votre nom, et on vous remet les accès.",
        tag: "Support",
      },
    ],
    []
  );

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const tagStyles: Record<string, string> = {
    Web: "bg-cyan-300 text-slate-950",
    SEO: "bg-indigo-300 text-slate-950",
    Ads: "bg-violet-300 text-slate-950",
    IA: "bg-cyan-300 text-slate-950",
    Support: "bg-white text-slate-950",
  };

  return (
    <section id="faq" className="relative overflow-hidden bg-slate-950 py-16 md:py-20 text-white">
      {/* Subtle glow */}
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="absolute bottom-[-180px] right-[-140px] h-[460px] w-[460px] rounded-full bg-cyan-400/12 blur-3xl" />
      </div>

      {/* Grid texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.18] [mask-image:radial-gradient(55%_55%_at_50%_30%,#000_0%,transparent_72%)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:44px_44px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        {/* Header */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white/90 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              FAQ • Questions fréquentes
            </div>

            <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-4xl">
              Tout ce qu’on vous demande{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-indigo-300 to-violet-300 bg-clip-text text-transparent">
                avant de démarrer
              </span>
              .
            </h2>

            <p className="mt-3 text-lg text-white/75">
              Si vous avez un doute, c’est probablement ici. Sinon, on répond vite sur WhatsApp.
            </p>
          </div>
        </Reveal>

        {/* FAQ list */}
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {faqs.map((item, idx) => {
            const Icon = item.icon;
            const isOpen = openIndex === idx;

            return (
              <Reveal key={item.q} delay={idx * 0.03}>
                <div className="rounded-3xl border border-white/12 bg-white/5 backdrop-blur">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="flex w-full items-start gap-4 p-6 text-left"
                    aria-expanded={isOpen}
                    aria-controls={`faq-${idx}`}
                  >
                    <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5">
                      {Icon ? <Icon className="h-5 w-5 text-cyan-300" /> : <span className="h-2 w-2 rounded-full bg-cyan-300" />}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <p className="text-base font-semibold text-white">{item.q}</p>

                        <div className="flex items-center gap-2">
                          {item.tag && (
                            <span className={`rounded-full px-3 py-1 text-[11px] font-semibold ${tagStyles[item.tag]}`}>
                              {item.tag}
                            </span>
                          )}
                          <ChevronDown
                            className={[
                              "h-5 w-5 text-white/70 transition",
                              isOpen ? "rotate-180" : "",
                            ].join(" ")}
                          />
                        </div>
                      </div>

                      <div
                        id={`faq-${idx}`}
                        className={[
                          "grid transition-[grid-template-rows] duration-200 ease-out",
                          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                        ].join(" ")}
                      >
                        <div className="overflow-hidden">
                          <p className="mt-3 text-sm text-white/75">{item.a}</p>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* CTA bottom */}
        <Reveal delay={0.12}>
          <div className="mt-10 rounded-3xl border border-white/12 bg-white/5 p-6 backdrop-blur">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div>
                <p className="text-base font-semibold text-white">
                  Vous avez un cas spécifique (ville, budget, secteur) ?
                </p>
                <p className="mt-1 text-sm text-white/75">
                  Envoyez-nous un message : on vous répond avec une proposition claire.
                </p>
              </div>

              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:opacity-95"
                >
                  Demander un devis
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  Parler sur WhatsApp
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}