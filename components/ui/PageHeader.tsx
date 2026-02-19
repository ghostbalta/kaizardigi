"use client";

import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import MatrixRain from "@/components/ui/MatrixRain";
import { ArrowRight } from "lucide-react";

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
    <section className="relative overflow-hidden border-b py-14 md:py-16">
      {/* Matrix background (un peu plus fort dans le header) */}
      <div className="absolute inset-0 z-[0] opacity-90">
        <MatrixRain columns={22} color="blue" />
      </div>

      {/* Overlay intelligent : lisible au centre, visible sur les bords */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-white/70 via-white/40 to-white/70" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-white/55 via-transparent to-white/55" />

      {/* Glow gradient (léger) */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50/60 via-white to-white" />

      <div className="relative z-[2] mx-auto max-w-5xl px-4 text-center">
        <Reveal>
          {badge && (
            <div className="inline-flex items-center rounded-full border bg-white/90 px-4 py-1.5 text-xs font-medium text-gray-700 shadow-sm backdrop-blur">
              {badge}
            </div>
          )}
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl leading-tight">
            {title}
          </h1>

          <div className="mx-auto mt-4 h-[3px] w-24 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600" />
        </Reveal>

        {subtitle && (
          <Reveal delay={0.1}>
            <p className="mx-auto mt-3 max-w-2xl text-base text-gray-700 md:text-lg">
              {subtitle}
            </p>
          </Reveal>
        )}

        {(primaryLabel || secondaryLabel) && (
          <Reveal delay={0.15}>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {primaryLabel && primaryHref && (
                <Link
                  href={primaryHref}
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700 transition"
                >
                  {primaryLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              )}

              {secondaryLabel && secondaryHref && (
                <Link
                  href={secondaryHref}
                  className="inline-flex items-center rounded-full border border-blue-600 bg-white/70 px-6 py-3 text-sm font-medium text-blue-600 backdrop-blur hover:bg-blue-600 hover:text-white transition"
                >
                  {secondaryLabel}
                </Link>
              )}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
