"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import Link from "next/link";
import {
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const WHATSAPP = "https://wa.me/212644567165"; // remplace par ton vrai numéro
const EMAIL = "contact@kaizardigi.com"; // remplace si besoin

const quickSteps = [
  { title: "1) Activité + ville", desc: "Ex: salon beauté, Casablanca" },
  { title: "2) Objectif", desc: "Leads / RDV / ventes" },
  { title: "3) Budget (optionnel)", desc: "Pour aller plus vite" },
  { title: "4) Délai", desc: "Quand tu veux lancer" },
];

export default function ContactPage() {
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
        window.location.href = WHATSAPP;
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

        <section className="relative overflow-hidden bg-white py-16 md:py-20">
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-500/8 blur-3xl" />
            <div className="absolute bottom-[-140px] right-[-140px] h-[440px] w-[440px] rounded-full bg-cyan-400/8 blur-3xl" />
          </div>

          <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.5)_1px,transparent_1px)] bg-[size:44px_44px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-6xl px-4">
            <div className="grid gap-6 md:grid-cols-2">
              {/* LEFT: WhatsApp + infos */}
              <Reveal>
                <div className="rounded-3xl border bg-white p-8 shadow-sm shadow-[0_0_40px_rgba(34,211,238,0.08)]">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 ring-1 ring-cyan-200">
                      <MessageCircle className="h-6 w-6 text-cyan-600" />
                    </div>
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-xs font-medium text-gray-800 shadow-sm">
                        <Sparkles className="h-4 w-4 text-cyan-500" />
                        Réponse rapide
                      </div>

                      <h2 className="mt-4 text-2xl font-bold text-gray-900">
                        WhatsApp = le plus rapide
                      </h2>
                      <p className="mt-2 text-sm leading-7 text-gray-700">
                        Envoie “Devis” + ton activité. On te répond et on te propose un plan clair.
                      </p>
                    </div>
                  </div>

                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Ouvrir WhatsApp
                  </a>

                  <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm">
                    <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
                      <ShieldCheck className="h-4 w-4 text-cyan-600" />
                      Pour un devis rapide, envoie :
                    </div>

                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {quickSteps.map((s, idx) => {
                        const dotColors = [
                          "bg-cyan-600",
                          "bg-indigo-600",
                          "bg-violet-600",
                          "bg-cyan-600",
                        ];

                        return (
                          <div key={s.title} className="rounded-2xl border bg-white p-4 shadow-sm">
                            <div className="flex items-center gap-2">
                              <span className={["h-2.5 w-2.5 rounded-full", dotColors[idx]].join(" ")} />
                              <div className="text-sm font-semibold text-gray-900">{s.title}</div>
                            </div>
                            <div className="mt-1 text-xs text-gray-600">{s.desc}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-8 space-y-4 text-sm text-gray-800">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-50 ring-1 ring-cyan-200">
                        <Mail className="h-5 w-5 text-cyan-600" />
                      </div>
                      <a className="underline underline-offset-4" href={`mailto:${EMAIL}`}>
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
                        <Clock className="h-5 w-5 text-violet-600" />
                      </div>
                      <span>Réponse généralement en -24h</span>
                    </div>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <Link
                      href="/services"
                      className="rounded-full border border-slate-200 px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-slate-50"
                    >
                      Voir les services
                    </Link>
                    <Link
                      href="/automatisation-ia"
                      className="rounded-full border border-blue-600 px-5 py-2.5 text-sm font-medium text-blue-600 transition hover:bg-blue-600 hover:text-white"
                    >
                      Offre IA
                    </Link>
                  </div>
                </div>
              </Reveal>

              {/* RIGHT: Form premium */}
              <Reveal delay={0.06}>
                <div className="rounded-3xl border bg-white p-8 shadow-sm shadow-[0_0_40px_rgba(99,102,241,0.08)]">
                  <div className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-xs font-medium text-gray-800 shadow-sm">
                    <Sparkles className="h-4 w-4 text-cyan-500" />
                    Demande de devis
                  </div>

                  <h2 className="mt-4 text-2xl font-bold text-gray-900">
                    Décris ton besoin
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-gray-700">
                    Décris ton besoin. On te répond rapidement avec une proposition adaptée.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-xs font-medium text-gray-700">
                          Nom
                        </label>
                        <input
                          className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-500 outline-none transition focus:border-cyan-300 focus:ring-4 focus:ring-cyan-100"
                          placeholder="Ton nom"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-xs font-medium text-gray-700">
                          Téléphone
                        </label>
                        <input
                          className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-500 outline-none transition focus:border-indigo-300 focus:ring-4 focus:ring-indigo-100"
                          placeholder="06..."
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-xs font-medium text-gray-700">
                        Email (optionnel)
                      </label>
                      <input
                        className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-500 outline-none transition focus:border-violet-300 focus:ring-4 focus:ring-violet-100"
                        placeholder="email@exemple.com"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-xs font-medium text-gray-700">
                        Service demandé
                      </label>
                      <select
                        className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-cyan-300 focus:ring-4 focus:ring-cyan-100"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
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
                        className="min-h-[170px] w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-500 outline-none transition focus:border-indigo-300 focus:ring-4 focus:ring-indigo-100"
                        placeholder="Activité + ville + objectif + budget (optionnel) + délai..."
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {loading ? "Envoi en cours..." : "Envoyer"}
                    </button>

                    {successMessage && (
                      <p className="text-sm text-green-600">{successMessage}</p>
                    )}

                    {errorMessage && (
                      <p className="text-sm text-red-600">{errorMessage}</p>
                    )}

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