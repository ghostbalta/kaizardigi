"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

type Props = {
  phone?: string; // format international sans +, ex: 2126xxxxxxx
  message?: string;
};

export default function WhatsAppFloating({
  phone = "212600000000",
  message = "Salam, je veux un devis.",
}: Props) {
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <Link
        href={href}
        target="_blank"
        rel="noreferrer"
        className="group flex items-center gap-3 rounded-full bg-blue-600 px-4 py-3 text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
        aria-label="Contacter Kaizardigi sur WhatsApp"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
          <MessageCircle className="h-5 w-5" />
        </span>

        <div className="hidden sm:block">
          <div className="text-sm font-semibold leading-4">WhatsApp</div>
          <div className="text-xs opacity-90 leading-4">Réponse rapide</div>
        </div>
      </Link>
    </div>
  );
}
