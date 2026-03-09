"use client";

import Link from "next/link";
import { Mail, MapPin, MessageCircle, Sparkles } from "lucide-react";

const WHATSAPP = "https://wa.me/212600000000"; // remplace
const EMAIL = "contact@kaizardigi.com";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t bg-white">
      {/* glow */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-20 left-1/3 h-56 w-56 rounded-full bg-cyan-400/8 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-56 w-56 rounded-full bg-indigo-500/8 blur-3xl" />
      </div>

      {/* subtle grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.45)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.45)_1px,transparent_1px)] bg-[size:44px_44px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-14">
        {/* top */}
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-xs font-medium text-slate-800 shadow-sm">
              <Sparkles className="h-4 w-4 text-cyan-500" />
              Kaizardigi
            </div>

            <div className="mt-4 text-lg font-bold text-slate-900">Kaizardigi</div>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              Agence digitale à Casablanca : sites web, SEO local, publicité Meta/Google
              et automatisation WhatsApp & IA.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-blue-600 bg-white px-4 py-2.5 text-sm font-medium text-blue-600 transition hover:bg-blue-600 hover:text-white"
              >
                Devis gratuit
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="text-sm font-semibold text-slate-900">Services</div>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li>
                <Link href="/services" className="transition hover:text-blue-600">
                  Création de sites web
                </Link>
              </li>
              <li>
                <Link href="/services" className="transition hover:text-blue-600">
                  SEO local (Google & Maps)
                </Link>
              </li>
              <li>
                <Link href="/services" className="transition hover:text-blue-600">
                  Publicité Meta & Google
                </Link>
              </li>
              <li>
                <Link href="/automatisation-ia" className="transition hover:text-blue-600">
                  Automatisation & IA
                </Link>
              </li>
            </ul>
          </div>

          {/* Liens */}
          <div>
            <div className="text-sm font-semibold text-slate-900">Liens</div>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li>
                <Link href="/" className="transition hover:text-blue-600">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/realisations" className="transition hover:text-blue-600">
                  Réalisations
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="transition hover:text-blue-600">
                  Tarifs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition hover:text-blue-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-sm font-semibold text-slate-900">Contact</div>

            <div className="mt-4 space-y-4 text-sm text-slate-700">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-50 ring-1 ring-cyan-200">
                  <Mail className="h-5 w-5 text-cyan-600" />
                </div>
                <a
                  href={`mailto:${EMAIL}`}
                  className="underline underline-offset-4 hover:opacity-80"
                >
                  {EMAIL}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-50 ring-1 ring-indigo-200">
                  <MapPin className="h-5 w-5 text-indigo-600" />
                </div>
                <span>Casablanca, Maroc</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-violet-50 ring-1 ring-violet-200">
                  <MessageCircle className="h-5 w-5 text-violet-600" />
                </div>
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
        <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-8 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Kaizardigi. Tous droits réservés.</div>

          <div className="flex flex-wrap gap-4">
            <Link href="/privacy" className="transition hover:text-blue-600">
              Politique de confidentialité
            </Link>
            <Link href="/terms" className="transition hover:text-blue-600">
              Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}