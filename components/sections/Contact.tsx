"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  MapPin,
  MessageCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const WHATSAPP = "https://wa.me/212600000000"; // remplace
const EMAIL = "contact@kaizardigi.com"; // adapte si besoin

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Une erreur est survenue.");
      }

      setSuccessMessage("Votre demande a bien été envoyée.");
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: "",
      });
      setTimeout(() => {
  window.location.href = "https://wa.me/212644567165";
}, 1500);
    } catch (error: any) {
      setErrorMessage(
        error?.message || "Impossible d’envoyer le formulaire."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white py-16 md:py-20"
    >
      {/* Futur glow subtil */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-500/8 blur-3xl" />
        <div className="absolute bottom-[-140px] right-[-140px] h-[440px] w-[440px] rounded-full bg-cyan-400/8 blur-3xl" />
      </div>

      {/* Grid ultra léger */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.5)_1px,transparent_1px)] bg-[size:44px_44px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-xs font-medium text-gray-800 shadow-sm">
            <Sparkles className="h-4 w-4 text-cyan-500" />
            Contact
          </div>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Parlons de votre{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">
              projet
            </span>
          </h2>

          <p className="mt-3 text-lg text-gray-700">
            Expliquez votre besoin. On vous répond rapidement, avec une
            recommandation claire selon votre activité, votre ville et votre
            objectif.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Left */}
          <div className="rounded-3xl border bg-white p-6 shadow-sm shadow-[0_0_40px_rgba(34,211,238,0.08)] md:p-8">
            <div className="rounded-3xl border bg-white p-6 shadow-sm md:p-7">
              <div className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-xs font-medium text-gray-800 shadow-sm">
                <MessageCircle className="h-4 w-4 text-cyan-500" />
                Réponse rapide
              </div>

              <h3 className="mt-4 text-2xl font-bold text-gray-900">
                WhatsApp reste le canal le plus rapide
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-700">
                Envoyez-nous votre demande sur WhatsApp et nous vous répondons
                avec des questions simples pour vous orienter vers la meilleure
                solution : site web, SEO, publicité ou automatisation IA.
              </p>

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-black"
              >
                <MessageCircle className="h-4 w-4" />
                Discuter sur WhatsApp
                <ArrowRight className="h-4 w-4" />
              </a>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-sm text-gray-800">
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

                <div className="flex items-center gap-3 text-sm text-gray-800">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-50 ring-1 ring-indigo-200">
                    <MapPin className="h-5 w-5 text-indigo-600" />
                  </div>
                  <span>Casablanca, Maroc</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/automatisation-ia"
                  className="rounded-full border border-gray-900 px-5 py-2.5 text-sm font-medium text-gray-900 transition hover:bg-gray-900 hover:text-white"
                >
                  Offre Automatisation IA
                </Link>

                <Link
                  href="/services"
                  className="rounded-full border border-slate-200 px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-slate-50"
                >
                  Voir les services
                </Link>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="rounded-3xl border bg-white p-6 shadow-sm shadow-[0_0_40px_rgba(99,102,241,0.08)] md:p-8">
            <div className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-xs font-medium text-gray-800 shadow-sm">
              <Sparkles className="h-4 w-4 text-cyan-500" />
              Demande de devis
            </div>

            <h3 className="mt-4 text-2xl font-bold text-gray-900">
              Décrivez votre besoin
            </h3>

            <p className="mt-2 text-sm leading-7 text-gray-700">
              Donnez-nous quelques informations sur votre activité et votre
              objectif. Nous reviendrons vers vous avec une proposition adaptée.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-500 outline-none transition focus:border-cyan-300 focus:ring-4 focus:ring-cyan-100"
                  placeholder="Nom"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <input
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-500 outline-none transition focus:border-indigo-300 focus:ring-4 focus:ring-indigo-100"
                  placeholder="Téléphone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <input
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-500 outline-none transition focus:border-violet-300 focus:ring-4 focus:ring-violet-100"
                placeholder="Email (optionnel)"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />

              <select
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-cyan-300 focus:ring-4 focus:ring-cyan-100"
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
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
                className="min-h-[150px] rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-500 outline-none transition focus:border-indigo-300 focus:ring-4 focus:ring-indigo-100"
                placeholder="Décrivez votre besoin (activité, ville, objectif, budget si possible)"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Envoi en cours..." : "Envoyer la demande"}
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            {successMessage && (
              <p className="mt-4 text-sm text-green-600">{successMessage}</p>
            )}

            {errorMessage && (
              <p className="mt-4 text-sm text-red-600">{errorMessage}</p>
            )}

            <p className="mt-4 text-xs text-gray-500">
              Réponse rapide selon la charge en cours. Pour aller plus vite,
              WhatsApp est recommandé.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}