import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function PortfolioPreview() {
  const top = projects.slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-slate-50 py-24">
      {/* subtle background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-sky-100/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        {/* Header */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-blue-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700 backdrop-blur">
              Portfolio
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Des réalisations pensées pour la conversion
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
              Sites web, SEO et automatisation IA : une sélection de projets conçus
              pour renforcer la présence en ligne et générer plus d’opportunités.
            </p>
          </div>
        </Reveal>

        {/* Grid */}
        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {top.map((p, idx) => (
            <Reveal key={p.title} delay={idx * 0.08}>
              <article className="group relative overflow-hidden rounded-[28px] border border-white/70 bg-white/80 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_18px_50px_rgba(15,23,42,0.10)]">
                {/* image */}
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.05]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-slate-900/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent" />

                  <div className="absolute left-4 top-4">
                    <span className="inline-flex rounded-full border border-white/20 bg-white/15 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-md">
                      {p.category}
                    </span>
                  </div>
                </div>

                {/* content */}
                <div className="relative p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight text-slate-900">
                        {p.title}
                      </h3>

                      {"city" in p && p.city ? (
                        <div className="mt-2 inline-flex items-center gap-1.5 text-sm text-slate-500">
                          <MapPin className="h-3.5 w-3.5" />
                          <span>{p.city}</span>
                        </div>
                      ) : null}
                    </div>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-600 transition-all duration-300 group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-600">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>

                  <div className="mt-5 h-px w-full bg-gradient-to-r from-slate-200 via-slate-100 to-transparent" />

                  <p className="mt-5 text-sm leading-7 text-slate-600">
                    {p.objective}
                  </p>

                  {"solution" in p && p.solution ? (
                    <p className="mt-4 line-clamp-2 text-sm leading-6 text-slate-500">
                      <span className="font-medium text-slate-700">Approche :</span>{" "}
                      {p.solution}
                    </p>
                  ) : null}

                  <div className="mt-7 flex items-center justify-between">
                    <Link
                      href="/realisations"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-all duration-300 hover:gap-3 hover:text-blue-700"
                    >
                      Voir les réalisations
                      <ArrowRight className="h-4 w-4" />
                    </Link>

                    <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                      Case study
                    </span>
                  </div>
                </div>

                {/* subtle border glow */}
                <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ring-white/60" />
              </article>
            </Reveal>
          ))}
        </div>

        {/* CTA bottom */}
        <Reveal delay={0.16}>
          <div className="mt-14 flex justify-center">
            <Link
              href="/realisations"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3.5 text-sm font-medium text-white transition duration-300 hover:bg-blue-600"
            >
              Voir toutes les réalisations
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}