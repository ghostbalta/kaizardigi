import Link from "next/link";
import { Mail, MapPin, MessageCircle } from "lucide-react";

const WHATSAPP = "https://wa.me/212600000000"; // remplace
const EMAIL = "contact@kaizardigi.com"; // adapte si besoin

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header centré */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Contact
          </h2>
          <p className="mt-3 text-lg text-gray-700">
            Explique ton besoin. On te répond rapidement (WhatsApp recommandé).
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Left: CTA + infos */}
          <div className="rounded-3xl border bg-gray-50 p-8">
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold text-blue-600">
                Réponse rapide
              </div>
              <h3 className="mt-2 text-2xl font-bold text-gray-900">
                WhatsApp = le plus rapide
              </h3>
              <p className="mt-2 text-sm text-gray-700">
                Envoie “Devis” ou “Automatisation” et on te répond avec des questions simples
                pour te proposer la meilleure offre.
              </p>

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700 transition"
              >
                <MessageCircle className="h-4 w-4" />
                Discuter sur WhatsApp
              </a>

              <div className="mt-8 grid gap-4">
                <div className="flex items-center gap-3 text-sm text-gray-800">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <a href={`mailto:${EMAIL}`} className="underline underline-offset-4 hover:opacity-80">
                    {EMAIL}
                  </a>
                </div>

                <div className="flex items-center gap-3 text-sm text-gray-800">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span>Casablanca, Maroc</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/automatisation-ia"
                  className="rounded-full border border-blue-600 px-5 py-2.5 text-sm font-medium text-blue-600 hover:bg-blue-600 hover:text-white transition"
                >
                  Offre Automatisation IA
                </Link>
                <Link
                  href="/services"
                  className="rounded-full border px-5 py-2.5 text-sm hover:bg-white transition"
                >
                  Voir les services
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Form (non branché pour l’instant) */}
          <div className="rounded-3xl border bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900">
              Demande de devis
            </h3>
            <p className="mt-2 text-sm text-gray-700">
              Remplis ce formulaire. (On le connectera à n8n à la fin.)
            </p>

            <form className="mt-6 grid gap-3">
              <div className="grid gap-3 md:grid-cols-2">
                <input
                  className="rounded-2xl border px-4 py-3 text-sm text-gray-900 placeholder:text-gray-500"
                  placeholder="Nom"
                  name="name"
                  required
                />
                <input
                  className="rounded-2xl border px-4 py-3 text-sm text-gray-900 placeholder:text-gray-500"
                  placeholder="Téléphone"
                  name="phone"
                  required
                />
              </div>

              <input
                className="rounded-2xl border px-4 py-3 text-sm text-gray-900 placeholder:text-gray-500"
                placeholder="Email (optionnel)"
                name="email"
                type="email"
              />

              <select
                className="rounded-2xl border px-4 py-3 text-sm text-gray-900"
                name="service"
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Service demandé
                </option>
                <option value="site">Création de site web</option>
                <option value="seo">SEO local (Google & Maps)</option>
                <option value="ads">Publicité Meta / Google Ads</option>
                <option value="automation">Automatisation WhatsApp & IA</option>
              </select>

              <textarea
                className="min-h-[140px] rounded-2xl border px-4 py-3 text-sm text-gray-900 placeholder:text-gray-500"
                placeholder="Décris ton besoin (activité, ville, objectif, budget si possible)"
                name="message"
                required
              />

              <button
                type="submit"
                className="rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700 transition"
              >
                Envoyer
              </button>
            </form>

            <p className="mt-3 text-xs text-gray-500">
              (Prochaine étape : connexion du formulaire à n8n webhook + email automatique.)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
