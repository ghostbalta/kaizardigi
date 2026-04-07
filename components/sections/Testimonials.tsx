import { Star, Quote, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

const testimonials = [
  {
    name: "Yassine",
    business: "Avocat",
    city: "Casablanca",
    text: "Le site a donné une image plus professionnelle à notre activité. Nous avons commencé à recevoir des demandes sérieuses rapidement.",
    accent: "cyan",
  },
  {
    name: "Imane",
    business: "Boutique en ligne",
    city: "Rabat",
    text: "L’accompagnement était clair, rapide et professionnel. Le résultat est propre et adapté à notre marché.",
    accent: "indigo",
  },
  {
    name: "Hamid",
    business: "Restaurant",
    city: "Marrakech",
    text: "Très bonne communication et vrai sens du détail. Le projet a été livré avec une structure claire et une bonne expérience mobile.",
    accent: "violet",
  },
];

function accentClasses(accent?: string) {
  switch (accent) {
    case "violet":
      return {
        star: "text-violet-300 fill-violet-300",
        quote: "text-violet-300",
        ring: "ring-violet-500/20",
        glow: "shadow-[0_0_0_1px_rgba(139,92,246,0.16),0_0_42px_rgba(139,92,246,0.18)]",
      };
    case "indigo":
      return {
        star: "text-indigo-300 fill-indigo-300",
        quote: "text-indigo-300",
        ring: "ring-indigo-500/20",
        glow: "shadow-[0_0_0_1px_rgba(99,102,241,0.16),0_0_42px_rgba(99,102,241,0.18)]",
      };
    default:
      return {
        star: "text-cyan-300 fill-cyan-300",
        quote: "text-cyan-300",
        ring: "ring-cyan-500/20",
        glow: "shadow-[0_0_0_1px_rgba(34,211,238,0.16),0_0_42px_rgba(34,211,238,0.18)]",
      };
  }
}

export default function Testimonials() {
  return (
    <section
      id="temoignages"
      className="relative overflow-hidden bg-slate-950 py-12 text-white md:py-14"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-600/25 blur-3xl" />
        <div className="absolute top-24 right-[-140px] h-[420px] w-[420px] rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute bottom-[-180px] left-[-140px] h-[460px] w-[460px] rounded-full bg-violet-500/15 blur-3xl" />
      </div>

      {/* Grid texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.18] [mask-image:radial-gradient(55%_55%_at_50%_30%,#000_0%,transparent_72%)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:44px_44px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white/90 backdrop-blur">
              <Sparkles className="h-4 w-4 text-cyan-300" />
              Témoignages • Confiance • Résultats
            </div>

            <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-4xl">
              Ce que nos{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-indigo-300 to-violet-300 bg-clip-text text-transparent">
                clients disent
              </span>
              .
            </h2>

            <p className="mt-3 text-lg text-white/75">
              Une collaboration claire, un rendu propre, et une vraie logique
              orientée résultats.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, idx) => {
            const a = accentClasses(t.accent);

            return (
              <Reveal key={t.name} delay={idx * 0.06}>
                <div
                  className={`group relative rounded-3xl border border-white/12 bg-white/5 p-7 backdrop-blur transition ring-1 ${a.ring} ${a.glow}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${a.star}`} />
                      ))}
                    </div>

                    <Quote className={`h-8 w-8 ${a.quote} opacity-80`} />
                  </div>

                  <p className="mt-6 text-sm leading-7 text-white/85">
                    “{t.text}”
                  </p>

                  <div className="mt-6 border-t border-white/10 pt-5">
                    <div className="text-base font-semibold text-white">
                      {t.name}
                    </div>
                    <div className="mt-1 text-sm text-white/65">
                      {t.business} • {t.city}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.18}>
          <div className="mt-8 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950"
            >
              Demander un devis
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}