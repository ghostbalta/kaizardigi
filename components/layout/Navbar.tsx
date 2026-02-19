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
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const WHATSAPP = "https://wa.me/212679806345"; // remplace
const LOGO_SRC = "/logokaizardigi.png"; // remplace si besoin (logo.png)

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
    <header className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-xl border bg-white shadow-sm">
            <Image
              src={LOGO_SRC}
              alt="Kaizardigi"
              fill
              className="object-contain p-1.5"
              priority
            />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-bold text-gray-900">Kaizardigi</div>
            <div className="text-xs text-gray-500">Agence digitale</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {nav.slice(0, 5).map((n) => {
            const active = isActive(pathname, n.href);
            return (
              <Link
                key={n.href}
                href={n.href}
                className={[
                  "text-sm font-medium transition",
                  active ? "text-blue-600" : "text-gray-800 hover:text-blue-600",
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
            className="inline-flex items-center gap-2 rounded-full border border-blue-600 px-4 py-2.5 text-sm font-medium text-blue-600 hover:bg-blue-600 hover:text-white transition"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700 transition"
          >
            Devis
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger
              className="inline-flex items-center justify-center rounded-xl border bg-white p-2.5 hover:bg-gray-50 transition"
              aria-label="Ouvrir le menu"
            >
              <Menu className="h-5 w-5 text-gray-900" />
            </SheetTrigger>

            <SheetContent side="right" className="w-[340px] p-0">
              {/* Top brand */}
              <div className="border-b bg-white px-5 py-5">
                <div className="flex items-center gap-3">
                  <div className="relative h-11 w-11 overflow-hidden rounded-2xl border bg-white shadow-sm">
                    <Image
                      src={LOGO_SRC}
                      alt="Kaizardigi"
                      fill
                      className="object-contain p-2"
                      priority
                    />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">Kaizardigi</div>
                    <div className="text-xs text-gray-500">
                      Web • SEO • Automatisation IA
                    </div>
                  </div>
                </div>
              </div>

              {/* Nav items premium */}
              <div className="px-3 py-3">
                <div className="rounded-3xl border bg-white p-2 shadow-sm">
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
                            : "text-gray-900 hover:bg-gray-50",
                        ].join(" ")}
                      >
                        <span className="flex items-center gap-3">
                          <span
                            className={[
                              "flex h-9 w-9 items-center justify-center rounded-xl border",
                              active ? "bg-white border-blue-100" : "bg-white",
                            ].join(" ")}
                          >
                            <Icon className={["h-4 w-4", active ? "text-blue-600" : "text-gray-700"].join(" ")} />
                          </span>
                          {n.label}
                        </span>

                        <span
                          className={[
                            "text-xs",
                            active ? "text-blue-700" : "text-gray-400",
                          ].join(" ")}
                        >
                          →
                        </span>
                      </Link>
                    );
                  })}
                </div>

                {/* CTAs */}
                <div className="mt-4 grid gap-3">
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700 transition"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp (Réponse rapide)
                  </a>

                  <Link
                    href="/contact"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-blue-600 px-5 py-3 text-sm font-medium text-blue-600 hover:bg-blue-600 hover:text-white transition"
                  >
                    Demander un devis
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <p className="mt-5 text-center text-xs text-gray-500">
                  Casablanca • PME Maroc
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
