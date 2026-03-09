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
  whatsappHref?: string;
};

export default function FinalCTA({
  badge = "Prêt à lancer ?",
  title = "On te propose un plan clair pour générer des clients",
  subtitle = "Dis-nous ton activité, ta ville et ton objectif (leads / RDV / ventes). On te répond rapidement avec une proposition concrète.",
  primaryLabel = "Demander un devis",
  primaryHref = "/contact",
  secondaryLabel = "Voir les tarifs",
  secondaryHref = "/pricing",
  whatsappHref,
}: Props) {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 md:py-20 text-white">
      {/* Glow background */}
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-600/25 blur-3xl" />
        <div className="absolute bottom-[-160px] right-[-120px] h-[420px] w-[420px] rounded-full bg-cyan-400/15 blur-3xl" />
      </div>

      {/* Grid texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.18] [mask-image:radial-gradient(55%_55%_at_50%_30%,#000_0%,transparent_72%)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:44px_44px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-white/5 p-10 backdrop-blur">

            {/* Content grid */}
            <div className="grid gap-8 md:grid-cols-3 md:items-center">

              {/* LEFT TEXT */}
              <div className="md:col-span-2">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white/90 backdrop-blur">
                  <Sparkles className="h-4 w-4 text-cyan-300" />
                  {badge}
                </div>

                <h3 className="mt-5 text-2xl font-bold md:text-3xl">
                  <span className="bg-gradient-to-r from-cyan-300 via-indigo-300 to-violet-300 bg-clip-text text-transparent">
                    {title}
                  </span>
                </h3>

                <p className="mt-3 text-white/75">
                  {subtitle}
                </p>

                {/* Trust line */}
                <div className="mt-5 flex flex-wrap gap-3 text-xs text-white/70">
                  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 backdrop-blur">
                    Réponse rapide
                  </span>
                  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 backdrop-blur">
                    Casablanca • Maroc
                  </span>
                  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 backdrop-blur">
                    Devis clair
                  </span>
                </div>
              </div>

              {/* RIGHT CTAs */}
              <div className="flex flex-col gap-3">

                <Link
                  href={primaryHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:opacity-95"
                >
                  {primaryLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href={secondaryHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  {secondaryLabel}
                </Link>

                {whatsappHref ? (
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                  >
                    <MessageCircle className="h-4 w-4 text-cyan-300" />
                    WhatsApp
                  </a>
                ) : null}

                <p className="text-center text-xs text-white/60">
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