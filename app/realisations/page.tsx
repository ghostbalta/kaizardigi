"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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

        {/* Filters */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-6xl px-4">
            <Reveal>
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setActive(c)}
                    className={[
                      "rounded-full px-5 py-2.5 text-sm font-medium transition",
                      active === c
                        ? "bg-blue-600 text-white"
                        : "border text-gray-800 hover:bg-gray-50",
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
                  <div className="group overflow-hidden rounded-3xl border bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">
                    <div className="relative h-52 w-full bg-gray-100">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover transition duration-300 group-hover:scale-[1.03]"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute left-4 top-4">
                        <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">
                          {p.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {p.title}
                      </h3>

                      <p className="mt-3 text-sm text-gray-700">
                        <span className="font-semibold text-gray-900">
                          Objectif :
                        </span>{" "}
                        {p.objective}
                      </p>

                      <div className="mt-5 flex items-center justify-between">
                        <Link
                          href="/contact"
                          className="text-sm font-medium text-blue-600 underline underline-offset-4 hover:opacity-80"
                        >
                          Lancer un projet similaire
                        </Link>

                        <ArrowRight className="h-4 w-4 text-blue-600" />
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="border-y bg-slate-50 py-20">
          <div className="mx-auto max-w-6xl px-4">
            <Reveal>
              <div className="rounded-3xl border bg-white p-10 shadow-sm">
                <div className="grid gap-6 md:grid-cols-3 md:items-center">
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold text-gray-900">
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
