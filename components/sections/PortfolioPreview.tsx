import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Sparkles,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function PortfolioPreview() {
  const top = projects.slice(0, 3);

  return (
    <section className="relative -mt-12 -mb-12 overflow-hidden border-y py-12 md:-mt-14 md:-mb-14">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-500/8 blur-3xl" />
        <div className="absolute bottom-[-140px] right-[-140px] h-[440px] w-[440px] rounded-full bg-cyan-400/8 blur-3xl" />
      </div>

      {/* Subtle grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.5)_1px,transparent_1px)] bg-[size:44px_44px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        {/* Header */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-xs font-medium text-gray-800 shadow-sm">
              <Sparkles className="h-4 w-4 text-cyan-500" />
              Réalisations
            </div>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Des projets pensés pour la{" "}
              <span className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">
                conversion
              </span>
            </h2>

            <p className="mx-auto mt-2 max-w-2xl text-lg text-gray-700">
              Sites web, SEO et automatisation IA : une sélection de projets conçus
              pour renforcer la présence en ligne et générer plus d’opportunités.
            </p>
          </div>
        </Reveal>

        {/* Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {top.map((p, idx) => (
            <Reveal key={p.title} delay={idx * 0.06}>
              <article className="group relative overflow-hidden rounded-3xl border bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md shadow-[0_0_40px_rgba(99,102,241,0.06)]">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-900/10 to-transparent" />

                  <div className="absolute left-4 top-4">
                    <span className="inline-flex rounded-full border border-white/30 bg-white/15 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-md">
                      {p.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight text-gray-900">
                        {p.title}
                      </h3>

                      {"city" in p && p.city ? (
                        <div className="mt-2 inline-flex items-center gap-1.5 text-sm text-gray-500">
                          <MapPin className="h-3.5 w-3.5" />
                          <span>{p.city}</span>
                        </div>
                      ) : null}
                    </div>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 transition group-hover:border-indigo-200 group-hover:bg-indigo-50 group-hover:text-indigo-600">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>

                  <div className="mt-5 h-px w-full bg-gradient-to-r from-gray-200 via-gray-100 to-transparent" />

                  <p className="mt-5 text-sm leading-7 text-gray-700">
                    {p.objective}
                  </p>

                  {"solution" in p && p.solution ? (
                    <div className="mt-4 rounded-2xl border bg-gray-50 p-4">
                      <p className="text-sm leading-6 text-gray-600">
                        <span className="font-medium text-gray-900">Approche :</span>{" "}
                        {p.solution}
                      </p>
                    </div>
                  ) : null}

                  <div className="mt-6 flex items-center justify-between">
                    <Link
                      href="/realisations"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 transition hover:gap-3 hover:text-blue-600"
                    >
                      Voir les réalisations
                      <ArrowRight className="h-4 w-4" />
                    </Link>

                    <span className="rounded-full border bg-white px-3 py-1 text-[11px] font-medium text-gray-500">
                      Case study
                    </span>
                  </div>
                </div>

                {/* Soft border ring */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/60" />
              </article>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <Reveal delay={0.14}>
          <div className="mt-10 rounded-3xl border bg-white p-8 shadow-sm">
            <div className="grid gap-6 md:grid-cols-3 md:items-center">
              <div className="md:col-span-2">
                <div className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-xs font-medium text-gray-800 shadow-sm">
                  <Sparkles className="h-4 w-4 text-cyan-500" />
                  Portfolio
                </div>

                <h3 className="mt-4 text-2xl font-bold text-gray-900">
                  Vous voulez voir plus de projets et de résultats ?
                </h3>

                <p className="mt-2 text-gray-700">
                  Découvrez nos réalisations récentes en création de site web,
                  visibilité digitale et automatisation IA.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <Link
                  href="/realisations"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-black"
                >
                  Voir toutes les réalisations
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/contact"
                  className="rounded-full border border-gray-900 px-6 py-3 text-center text-sm font-medium text-gray-900 transition hover:bg-gray-900 hover:text-white"
                >
                  Demander un devis
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}