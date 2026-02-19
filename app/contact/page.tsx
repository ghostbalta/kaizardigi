import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import Link from "next/link";
import { Mail, MapPin, MessageCircle, Clock, ShieldCheck } from "lucide-react";

const WHATSAPP = "https://wa.me/212600000000"; // remplace
const EMAIL = "contact@kaizardigi.com"; // remplace

const quickSteps = [
  { title: "1) Activité + ville", desc: "Ex: salon beauté, Casablanca" },
  { title: "2) Objectif", desc: "Leads / RDV / ventes" },
  { title: "3) Budget (optionnel)", desc: "Pour aller plus vite" },
  { title: "4) Délai", desc: "Quand tu veux lancer" },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main>
        <PageHeader
          badge="Contact • Devis"
          title="Parlons de ton projet"
          subtitle="WhatsApp est le plus rapide. Sinon, envoie le formulaire et on te répond rapidement."
          primaryHref={WHATSAPP}
          primaryLabel="WhatsApp (réponse rapide)"
          secondaryHref="/pricing"
          secondaryLabel="Voir les tarifs"
        />

        <section className="py-20 bg-white">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-6 md:grid-cols-2">
              {/* LEFT: WhatsApp + infos */}
              <Reveal>
                <div className="rounded-3xl border bg-white p-8 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50">
                      <MessageCircle className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        WhatsApp = le plus rapide
                      </h2>
                      <p className="mt-2 text-sm text-gray-700">
                        Envoie “Devis” + ton activité. On te répond et on te propose un plan clair.
                      </p>
                    </div>
                  </div>

                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700 transition"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Ouvrir WhatsApp
                  </a>

                  {/* Quick steps */}
                  <div className="mt-8 rounded-3xl border bg-slate-50 p-6">
                    <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
                      <ShieldCheck className="h-4 w-4 text-blue-600" />
                      Pour un devis rapide, envoie :
                    </div>

                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {quickSteps.map((s) => (
                        <div key={s.title} className="rounded-2xl border bg-white p-4">
                          <div className="text-sm font-semibold text-gray-900">{s.title}</div>
                          <div className="mt-1 text-xs text-gray-600">{s.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact info */}
                  <div className="mt-8 space-y-4 text-sm text-gray-800">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-blue-600" />
                      <a className="underline underline-offset-4" href={`mailto:${EMAIL}`}>
                        {EMAIL}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-blue-600" />
                      <span>Casablanca, Maroc</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-blue-600" />
                      <span>Réponse généralement en -24h</span>
                    </div>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <Link
                      href="/services"
                      className="rounded-full border px-5 py-2.5 text-sm hover:bg-gray-50 transition"
                    >
                      Voir les services
                    </Link>
                    <Link
                      href="/automatisation-ia"
                      className="rounded-full border border-blue-600 px-5 py-2.5 text-sm font-medium text-blue-600 hover:bg-blue-600 hover:text-white transition"
                    >
                      Offre IA
                    </Link>
                  </div>
                </div>
              </Reveal>

              {/* RIGHT: Form premium */}
              <Reveal delay={0.06}>
                <div className="rounded-3xl border bg-white p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900">Demande de devis</h2>
                  <p className="mt-2 text-sm text-gray-700">
                    Décris ton besoin. (On branchera n8n après pour automatiser.)
                  </p>

                  <form className="mt-6 grid gap-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-xs font-medium text-gray-700">
                          Nom
                        </label>
                        <input
                          className="w-full rounded-2xl border px-4 py-3 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                          placeholder="Ton nom"
                          name="name"
                          required
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-xs font-medium text-gray-700">
                          Téléphone
                        </label>
                        <input
                          className="w-full rounded-2xl border px-4 py-3 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                          placeholder="06..."
                          name="phone"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-xs font-medium text-gray-700">
                        Email (optionnel)
                      </label>
                      <input
                        className="w-full rounded-2xl border px-4 py-3 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                        placeholder="email@exemple.com"
                        name="email"
                        type="email"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-xs font-medium text-gray-700">
                        Service demandé
                      </label>
                      <select
                        className="w-full rounded-2xl border px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-200"
                        name="service"
                        defaultValue=""
                        required
                      >
                        <option value="" disabled>
                          Choisir un service
                        </option>
                        <option value="site">Création de site web</option>
                        <option value="seo">SEO local (Google & Maps)</option>
                        <option value="ads">Publicité Meta / Google</option>
                        <option value="automation">Automatisation WhatsApp & IA</option>
                      </select>
                    </div>

                    <div>
                      <label className="mb-2 block text-xs font-medium text-gray-700">
                        Message
                      </label>
                      <textarea
                        className="min-h-[170px] w-full rounded-2xl border px-4 py-3 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                        placeholder="Activité + ville + objectif + budget (optionnel) + délai..."
                        name="message"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700 transition"
                    >
                      Envoyer
                    </button>

                    <p className="text-xs text-gray-500">
                      Conseil : si c’est urgent, WhatsApp est plus rapide.
                    </p>
                  </form>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
