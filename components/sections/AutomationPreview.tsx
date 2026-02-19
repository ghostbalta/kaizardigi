"use client";

import Link from "next/link";
import { Bot, CalendarClock, MessageCircle, RefreshCcw } from "lucide-react";
import MatrixRain from "@/components/ui/MatrixRain";

export default function AutomationPreview() {
  return (
    <section className="relative overflow-hidden border-y py-20">
      {/* Matrix background (sans opacity wrapper) */}
      <div className="absolute inset-0 z-[0]">
        <MatrixRain columns={26} color="blue" />
      </div>

      {/* Overlay (moins opaque pour laisser voir le matrix) */}
      <div className="absolute inset-0 z-[1] bg-gray-50/65" />

      {/* DEBUG: si tu vois ce petit point, c’est que le bon composant est rendu */}
      <div className="absolute left-3 top-3 z-[3] h-2 w-2 rounded-full bg-red-500" />

      {/* Content */}
      <div className="relative z-[2] mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border bg-white/90 px-3 py-1 text-xs shadow-sm backdrop-blur">
            <Bot className="h-4 w-4 text-blue-600" />
            <span className="text-gray-800">Automatisation & IA</span>
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Ne perdez plus de prospects sur WhatsApp
          </h2>
          <p className="mt-3 text-lg text-gray-700">
            Réponse instantanée • Qualification • Prise de RDV • Relance automatique
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border bg-white/90 p-8 shadow-sm backdrop-blur">
            <h3 className="text-xl font-semibold text-gray-900">Ce que vous gagnez</h3>

            <div className="mt-6 space-y-4">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50">
                  <MessageCircle className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Réponse 24/7</div>
                  <p className="mt-1 text-sm text-gray-700">
                    L’assistant répond automatiquement même hors horaires.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50">
                  <CalendarClock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">RDV automatique</div>
                  <p className="mt-1 text-sm text-gray-700">
                    Proposition de créneaux + confirmation + rappel.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50">
                  <RefreshCcw className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Relances intelligentes</div>
                  <p className="mt-1 text-sm text-gray-700">
                    Relance J+1 / J+3 si le prospect ne répond pas.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/automatisation-ia"
                className="rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700 transition"
              >
                Découvrir l’offre IA
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-blue-600 bg-white/80 px-6 py-3 text-sm font-medium text-blue-600 hover:bg-blue-600 hover:text-white transition"
              >
                Demander un devis
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border bg-white/90 p-8 shadow-sm backdrop-blur">
            <h3 className="text-xl font-semibold text-gray-900">Exemple de conversation</h3>
            <p className="mt-2 text-sm text-gray-700">
              Un scénario simple qu’on adapte à ton business.
            </p>

            <div className="mt-6 space-y-3 text-sm">
              <div className="rounded-2xl border bg-gray-50/80 p-3 text-gray-900">
                <span className="font-semibold">Client :</span> Salam, je veux un site web.
              </div>
              <div className="rounded-2xl border bg-white/90 p-3 text-gray-900">
                <span className="font-semibold text-blue-600">Assistant :</span> Votre activité et votre ville ?
              </div>
              <div className="rounded-2xl border bg-gray-50/80 p-3 text-gray-900">
                <span className="font-semibold">Client :</span> Salon à Casablanca.
              </div>
              <div className="rounded-2xl border bg-white/90 p-3 text-gray-900">
                <span className="font-semibold text-blue-600">Assistant :</span> Parfait. Un appel de 10 min ?
              </div>
              <div className="rounded-2xl border bg-white/90 p-3 text-gray-900">
                <span className="font-semibold text-blue-600">Assistant :</span>{" "}
                Je peux aussi relancer automatiquement si vous ne répondez pas.
              </div>
            </div>

            <div className="mt-8 rounded-2xl border bg-blue-50/80 p-4">
              <div className="text-sm font-semibold text-gray-900">Idéal pour :</div>
              <p className="mt-1 text-sm text-gray-700">
                cliniques • salons • centres de formation • immobilier • commerces
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
