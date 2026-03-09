"use client";

import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import MatrixRain from "@/components/ui/MatrixRain";
import { ArrowRight, Sparkles } from "lucide-react";

type Props = {
  badge?: string;
  title: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function PageHeader({
  badge,
  title,
  subtitle,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: Props) {
  return (
    <section className="relative overflow-hidden border-b bg-white py-16 md:py-20">
      {/* Matrix background */}
      <div className="absolute inset-0 z-[0] opacity-[0.12]">
        <MatrixRain columns={22} color="blue" />
      </div>

      {/* White overlays */}
      <div className="absolute inset-0 z-[1] bg-white/80" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-white/90 via-white/75 to-white/95" />

      {/* Glow accents */}
      <div className="pointer-events-none absolute inset-0 z-[1] opacity-70">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-500/8 blur-3xl" />
        <div className="absolute bottom-[-140px] right-[-140px] h-[440px] w-[440px] rounded-full bg-cyan-400/8 blur-3xl" />
        <div className="absolute left-[-80px] top-1/3 h-[280px] w-[280px] rounded-full bg-violet-500/6 blur-3xl" />
      </div>

      {/* Subtle grid */}
      <div className="pointer-events-none absolute inset-0 z-[1] opacity-[0.04]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.5)_1px,transparent_1px)] bg-[size:44px_44px]" />
      </div>

      <div className="relative z-[2] mx-auto max-w-5xl px-4 text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-xs font-medium text-gray-800 shadow-sm">
            <Sparkles className="h-4 w-4 text-cyan-500" />
            <span>{badge || "Kaizardigi"}</span>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="mx-auto mt-5 max-w-4xl text-3xl font-bold tracking-tight text-gray-900 md:text-5xl leading-tight">
            {title}
          </h1>
        </Reveal>

        {subtitle && (
          <Reveal delay={0.1}>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-700 md:text-lg">
              {subtitle}
            </p>
          </Reveal>
        )}

        {(primaryLabel || secondaryLabel) && (
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {primaryLabel && primaryHref && (
                <Link
                  href={primaryHref}
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
                >
                  {primaryLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              )}

              {secondaryLabel && secondaryHref && (
                <Link
                  href={secondaryHref}
                  className="inline-flex items-center rounded-full border border-blue-600 bg-white px-6 py-3 text-sm font-medium text-blue-600 transition hover:bg-blue-600 hover:text-white"
                >
                  {secondaryLabel}
                </Link>
              )}
            </div>
          </Reveal>
        )}

        {/* Floating premium card */}
        <Reveal delay={0.2}>
          <div className="mx-auto mt-10 max-w-3xl">
            <div className="rounded-3xl border border-white/70 bg-white/80 px-5 py-4 shadow-[0_10px_35px_rgba(15,23,42,0.08)] backdrop-blur-sm">
              <div className="grid gap-4 text-left md:grid-cols-3">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-600">
                    Visibilité
                  </div>
                  <p className="mt-1 text-sm text-gray-700">
                    Être trouvé au bon moment par les bons prospects.
                  </p>
                </div>

                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600">
                    Conversion
                  </div>
                  <p className="mt-1 text-sm text-gray-700">
                    Transformer les visites en demandes et en rendez-vous.
                  </p>
                </div>

                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-600">
                    Automatisation
                  </div>
                  <p className="mt-1 text-sm text-gray-700">
                    Répondre, qualifier et relancer sans perdre de leads.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}