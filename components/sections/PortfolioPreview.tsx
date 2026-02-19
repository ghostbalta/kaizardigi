import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function PortfolioPreview() {
  const top = projects.slice(0, 3);

  return (
    <section className="py-20 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Réalisations
            </h2>
            <p className="mt-3 text-lg text-gray-700">
              Quelques exemples de projets : sites, e-commerce, SEO et automatisation.
            </p>
          </div>
        </Reveal>

        {/* Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {top.map((p, idx) => (
            <Reveal key={p.title} delay={idx * 0.06}>
              <div className="group overflow-hidden rounded-3xl border bg-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md">
                <div className="relative h-44 w-full bg-gray-100">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-blue-600 px-3 py-1 text-[11px] font-medium text-white">
                      {p.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-base font-semibold text-gray-900">
                    {p.title}
                  </h3>

                  <p className="mt-3 text-sm text-gray-700">
                    <span className="font-semibold text-gray-900">Objectif :</span>{" "}
                    {p.objective}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA bottom */}
        <Reveal delay={0.12}>
          <div className="mt-12 flex justify-center">
            <Link
              href="/realisations"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3 text-sm font-medium text-white hover:bg-blue-700 transition"
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
