"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { projects } from "@/data/projects";

const categories = ["Tous", "Site web", "E-commerce", "SEO", "IA & Automation"];

export default function RealisationsPage() {
  const [active, setActive] = useState("Tous");

  const filtered =
    active === "Tous"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <>
      <Navbar />

      <main>
        <PageHeader
          badge="Réalisations • Projets"
          title="Des projets concrets pour PME marocaines"
          subtitle="Sites web, e-commerce, SEO et automatisation — pensés pour générer des résultats."
          primaryHref="/contact"
          primaryLabel="Demander un devis"
        />

        {/* Filters + Grid */}
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
                  Portfolio
                </div>

                <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                  Une sélection de projets{" "}
                  <span className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">
                    pensés pour la performance
                  </span>
                </h2>

                <p className="mt-3 text-lg text-gray-700">
                  Découvrez quelques projets réalisés en création de site web, e-commerce, SEO et automatisation.
                </p>
              </div>
            </Reveal>

            {/* Filters */}
            <Reveal>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setActive(c)}
                    className={[
                      "rounded-full px-5 py-2.5 text-sm font-medium transition",
                      active === c
                        ? "bg-blue-600 text-white shadow-sm"
                        : "border border-slate-200 bg-white text-gray-800 hover:bg-gray-50",
                    ].join(" ")}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </Reveal>

            {/* Grid */}
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {filtered.map((p, idx) => (
                <Reveal key={p.title} delay={idx * 0.05}>
                  <article className="group overflow-hidden rounded-3xl border bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md shadow-[0_0_40px_rgba(34,211,238,0.06)]">
                    <div className="relative h-52 w-full bg-gray-100 overflow-hidden">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-[1.04]"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                      <div className="absolute left-4 top-4">
                        <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white shadow-sm">
                          {p.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {p.title}
                      </h3>

                      {"city" in p && p.city ? (
                        <p className="mt-1 text-sm text-gray-500">{p.city}</p>
                      ) : null}

                      <p className="mt-3 text-sm leading-7 text-gray-700">
                        <span className="font-semibold text-gray-900">
                          Objectif :
                        </span>{" "}
                        {p.objective}
                      </p>

                      <div className="mt-5 flex items-center justify-between">
                        <Link
                          href="/contact"
                          className="text-sm font-medium text-blue-600 transition hover:text-blue-700"
                        >
                          Lancer un projet similaire
                        </Link>

                        <div className="rounded-full bg-blue-50 p-2 text-blue-600 transition group-hover:bg-blue-100">
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
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
                      Nouveau projet
                    </div>

                    <h3 className="mt-4 text-2xl font-bold text-gray-900">
                      Tu veux un projet comme ça ?
                    </h3>
                    <p className="mt-2 text-gray-700">
                      Dis-nous ton activité + ville + objectif. On te propose une solution adaptée.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <Link
                      href="/contact"
                      className="rounded-full bg-blue-600 px-6 py-3 text-center text-sm font-medium text-white hover:bg-blue-700 transition"
                    >
                      Demander un devis
                    </Link>
                    <Link
                      href="/services"
                      className="rounded-full border border-blue-600 px-6 py-3 text-center text-sm font-medium text-blue-600 hover:bg-blue-600 hover:text-white transition"
                    >
                      Voir les services
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