"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  MessageCircle,
  ArrowRight,
  Home,
  Layers,
  Bot,
  Briefcase,
  BadgeDollarSign,
  Phone,
  Sparkles,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const WHATSAPP = "https://wa.me/212679806345";
const LOGO_SRC = "/logokaizardigi.png";

const nav = [
  { label: "Accueil", href: "/", icon: Home },
  { label: "Services", href: "/services", icon: Layers },
  { label: "Automatisation IA", href: "/automatisation-ia", icon: Bot },
  { label: "Réalisations", href: "/realisations", icon: Briefcase },
  { label: "Tarifs", href: "/pricing", icon: BadgeDollarSign },
  { label: "Contact", href: "/contact", icon: Phone },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/75 backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute left-1/3 top-0 h-24 w-24 rounded-full bg-cyan-400/10 blur-2xl" />
        <div className="absolute right-1/4 top-0 h-24 w-24 rounded-full bg-indigo-500/10 blur-2xl" />
      </div>

      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <Image
              src={LOGO_SRC}
              alt="Kaizardigi"
              fill
              className="object-contain p-1.5"
              priority
            />
          </div>

          <div className="leading-tight">
            <div className="text-sm font-bold text-slate-900">Kaizardigi</div>
            <div className="text-xs text-slate-500">Agence digitale</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-2 md:flex">
          {nav.slice(0, 5).map((n) => {
            const active = isActive(pathname, n.href);

            return (
              <Link
                key={n.href}
                href={n.href}
                className={[
                  "rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
                  active
                    ? "bg-blue-50 text-blue-700 shadow-sm ring-1 ring-blue-100"
                    : "text-slate-700 hover:bg-slate-50 hover:text-blue-600",
                ].join(" ")}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-blue-600 bg-white px-4 py-2.5 text-sm font-medium text-blue-600 transition hover:bg-blue-600 hover:text-white"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            Devis
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger
              className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white p-2.5 shadow-sm transition hover:bg-slate-50"
              aria-label="Ouvrir le menu"
            >
              <Menu className="h-5 w-5 text-slate-900" />
            </SheetTrigger>

            <SheetContent side="right" className="w-[340px] border-l border-slate-200 bg-white p-0">
              <div className="relative h-full overflow-hidden">
                {/* glow */}
                <div className="pointer-events-none absolute inset-0 opacity-60">
                  <div className="absolute -top-16 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-indigo-500/8 blur-3xl" />
                  <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-cyan-400/8 blur-3xl" />
                </div>

                {/* subtle grid */}
                <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.45)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.45)_1px,transparent_1px)] bg-[size:40px_40px]" />
                </div>

                <div className="relative z-10">
                  {/* Top brand */}
                  <div className="border-b border-slate-200 bg-white/90 px-5 py-5 backdrop-blur">
                    <div className="flex items-center gap-3">
                      <div className="relative h-11 w-11 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                        <Image
                          src={LOGO_SRC}
                          alt="Kaizardigi"
                          fill
                          className="object-contain p-2"
                          priority
                        />
                      </div>

                      <div>
                        <div className="text-sm font-bold text-slate-900">Kaizardigi</div>
                        <div className="text-xs text-slate-500">
                          Web • SEO • Automatisation IA
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Nav items */}
                  <div className="px-3 py-3">
                    <div className="rounded-3xl border border-slate-200 bg-white/90 p-2 shadow-sm backdrop-blur-sm">
                      {nav.map((n) => {
                        const active = isActive(pathname, n.href);
                        const Icon = n.icon;

                        return (
                          <Link
                            key={n.href}
                            href={n.href}
                            className={[
                              "flex items-center justify-between gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition",
                              active
                                ? "bg-blue-50 text-blue-700"
                                : "text-slate-900 hover:bg-slate-50",
                            ].join(" ")}
                          >
                            <span className="flex items-center gap-3">
                              <span
                                className={[
                                  "flex h-9 w-9 items-center justify-center rounded-xl border",
                                  active
                                    ? "border-blue-100 bg-white"
                                    : "border-slate-200 bg-white",
                                ].join(" ")}
                              >
                                <Icon
                                  className={[
                                    "h-4 w-4",
                                    active ? "text-blue-600" : "text-slate-700",
                                  ].join(" ")}
                                />
                              </span>
                              {n.label}
                            </span>

                            <span
                              className={[
                                "text-xs",
                                active ? "text-blue-700" : "text-slate-400",
                              ].join(" ")}
                            >
                              →
                            </span>
                          </Link>
                        );
                      })}
                    </div>

                    {/* mobile badge */}
                    <div className="mt-4 flex justify-center">
                      <div className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-xs font-medium text-slate-800 shadow-sm">
                        <Sparkles className="h-4 w-4 text-cyan-500" />
                        Casablanca • PME Maroc
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="mt-4 grid gap-3">
                      <a
                        href={WHATSAPP}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
                      >
                        <MessageCircle className="h-4 w-4" />
                        WhatsApp (Réponse rapide)
                      </a>

                      <Link
                        href="/contact"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-blue-600 bg-white px-5 py-3 text-sm font-medium text-blue-600 transition hover:bg-blue-600 hover:text-white"
                      >
                        Demander un devis
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}