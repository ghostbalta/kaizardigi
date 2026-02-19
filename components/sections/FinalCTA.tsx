import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";

type Props = {
  badge?: string;
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  whatsappHref?: string; // si tu veux un bouton WhatsApp direct
};

export default function FinalCTA({
  badge = "Prêt à lancer ?",
  title = "On te propose un plan clair pour attirer des clients",
  subtitle = "Dis-nous ton activité, ta ville et ton objectif (leads / RDV / ventes). On te répond rapidement.",
  primaryLabel = "Demander un devis",
  primaryHref = "/contact",
  secondaryLabel = "Voir les tarifs",
  secondaryHref = "/pricing",
  whatsappHref,
}: Props) {
  return (
    <section className="border-t bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border bg-white p-10 shadow-sm">
            {/* Soft background */}
            <div className="pointer-events-none absolute inset-0 opacity-70">
              <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-100 blur-3xl" />
              <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-100 blur-3xl" />
            </div>

            <div className="relative grid gap-8 md:grid-cols-3 md:items-center">
              {/* Text */}
              <div className="md:col-span-2">
                <div className="inline-flex items-center gap-2 rounded-full border bg-white/80 px-4 py-2 text-xs font-medium text-gray-800 shadow-sm backdrop-blur">
                  <Sparkles className="h-4 w-4 text-blue-600" />
                  {badge}
                </div>

                <h3 className="mt-5 text-2xl font-bold text-gray-900 md:text-3xl">
                  {title}
                </h3>

                <p className="mt-3 text-gray-700">{subtitle}</p>

                {/* Mini trust line */}
                <div className="mt-5 flex flex-wrap gap-3 text-xs text-gray-600">
                  <span className="rounded-full border bg-white/70 px-3 py-1.5 backdrop-blur">
                    Réponse rapide
                  </span>
                  <span className="rounded-full border bg-white/70 px-3 py-1.5 backdrop-blur">
                    Casablanca • Maroc
                  </span>
                  <span className="rounded-full border bg-white/70 px-3 py-1.5 backdrop-blur">
                    Devis clair
                  </span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col gap-3">
                <Link
                  href={primaryHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-sm shadow-blue-600/20 transition-all duration-300 hover:bg-blue-700 hover:scale-[1.01]"
                >
                  {primaryLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href={secondaryHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-600 bg-white/80 px-6 py-3 text-sm font-medium text-blue-600 backdrop-blur transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-[1.01]"
                >
                  {secondaryLabel}
                </Link>

                {whatsappHref ? (
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border bg-white px-6 py-3 text-sm font-medium text-gray-900 transition hover:bg-gray-50"
                  >
                    <MessageCircle className="h-4 w-4 text-blue-600" />
                    WhatsApp
                  </a>
                ) : null}

                <p className="text-center text-xs text-gray-500">
                  2 minutes pour expliquer ton besoin.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
