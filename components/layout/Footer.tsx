import Link from "next/link";
import { Mail, MapPin, MessageCircle } from "lucide-react";

const WHATSAPP = "https://wa.me/212600000000"; // remplace
const EMAIL = "contact@kaizardigi.com";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14">
        {/* top */}
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="text-lg font-bold text-gray-900">Kaizardigi</div>
            <p className="mt-3 text-sm text-gray-700">
              Agence digitale à Casablanca : sites web, SEO local, publicité Meta/Google
              et automatisation WhatsApp & IA.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700 transition"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-blue-600 px-4 py-2.5 text-sm font-medium text-blue-600 hover:bg-blue-600 hover:text-white transition"
              >
                Devis gratuit
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="text-sm font-semibold text-gray-900">Services</div>
            <ul className="mt-4 space-y-3 text-sm text-gray-700">
              <li>
                <Link href="/services" className="hover:text-blue-600 transition">
                  Création de sites web
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-600 transition">
                  SEO local (Google & Maps)
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-600 transition">
                  Publicité Meta & Google
                </Link>
              </li>
              <li>
                <Link href="/automatisation-ia" className="hover:text-blue-600 transition">
                  Automatisation & IA
                </Link>
              </li>
            </ul>
          </div>

          {/* Liens */}
          <div>
            <div className="text-sm font-semibold text-gray-900">Liens</div>
            <ul className="mt-4 space-y-3 text-sm text-gray-700">
              <li>
                <Link href="/" className="hover:text-blue-600 transition">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/realisations" className="hover:text-blue-600 transition">
                  Réalisations
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-blue-600 transition">
                  Tarifs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-600 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-sm font-semibold text-gray-900">Contact</div>

            <div className="mt-4 space-y-4 text-sm text-gray-700">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-600" />
                <a
                  href={`mailto:${EMAIL}`}
                  className="underline underline-offset-4 hover:opacity-80"
                >
                  {EMAIL}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span>Casablanca, Maroc</span>
              </div>

              <div className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5 text-blue-600" />
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4 hover:opacity-80"
                >
                  WhatsApp direct
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t pt-8 text-xs text-gray-500 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Kaizardigi. Tous droits réservés.</div>
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy" className="hover:text-blue-600 transition">
              Politique de confidentialité
            </Link>
            <Link href="/terms" className="hover:text-blue-600 transition">
              Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

