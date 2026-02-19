import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Combien coûte la création d’un site web ?",
    a: "Ça dépend du besoin. En général : site vitrine à partir de 2500 DH, e-commerce à partir de 3500 DH, et sur mesure sur devis.",
  },
  {
    q: "En combien de temps le site sera prêt ?",
    a: "En moyenne : 7 à 14 jours pour un site vitrine, 14 à 21 jours pour un e-commerce (selon contenu et fonctionnalités).",
  },
  {
    q: "Le SEO est-il inclus ?",
    a: "Oui, on met une base SEO : structure, performance, version mobile, titres/balises, et bonnes pratiques pour Google.",
  },
  {
    q: "Est-ce que vous gérez la publicité Meta/Google ?",
    a: "Oui. On crée des campagnes orientées résultats (leads / RDV / ventes), avec suivi des conversions et optimisation continue.",
  },
  {
    q: "C’est quoi l’automatisation WhatsApp ?",
    a: "C’est un système qui répond automatiquement, pose des questions pour qualifier le prospect, propose un RDV, puis relance si le prospect ne répond pas. Résultat : moins de prospects perdus.",
  },
  {
    q: "L’assistant IA peut être ajouté au site web ?",
    a: "Oui. On peut ajouter un assistant IA sur le site pour répondre aux questions fréquentes et orienter vers WhatsApp ou une demande de devis.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="border-y bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              FAQ
            </h2>
            <p className="mt-3 text-lg text-gray-700">
              Les réponses aux questions les plus fréquentes.
            </p>
          </div>
        </Reveal>

        {/* Accordion */}
        <Reveal delay={0.06}>
          <div className="mx-auto mt-12 max-w-3xl rounded-3xl border bg-white p-3 shadow-sm">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`} className="px-2">
                  <AccordionTrigger className="px-3 text-left text-gray-900 hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="px-3 pb-4 text-sm text-gray-700">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal delay={0.12}>
          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-7 py-3 text-sm font-medium text-white hover:bg-blue-700 transition"
            >
              Demander un devis
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
