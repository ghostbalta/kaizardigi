export default function About() {
  return (
    <section id="apropos" className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">À propos de Kaizardigi</h2>
            <p className="mt-3 text-gray-600">
              Kaizardigi est une agence digitale basée à Casablanca. Nous aidons les PME marocaines
              à gagner en visibilité et à attirer plus de clients grâce à des solutions concrètes :
              sites web performants, SEO local, publicité en ligne et automatisation WhatsApp.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border p-4">
                <div className="font-semibold">Approche simple</div>
                <div className="mt-1 text-sm text-gray-600">
                  On te guide étape par étape, sans jargon.
                </div>
              </div>
              <div className="rounded-2xl border p-4">
                <div className="font-semibold">Objectif résultats</div>
                <div className="mt-1 text-sm text-gray-600">
                  Leads, RDV, ventes — tout est mesuré.
                </div>
              </div>
              <div className="rounded-2xl border p-4">
                <div className="font-semibold">Support réactif</div>
                <div className="mt-1 text-sm text-gray-600">
                  WhatsApp pour aller vite, surtout en local.
                </div>
              </div>
              <div className="rounded-2xl border p-4">
                <div className="font-semibold">Automatisation IA</div>
                <div className="mt-1 text-sm text-gray-600">
                  Ne perdez plus de prospects : réponse + relance auto.
                </div>
              </div>
            </div>

            <div className="mt-6">
              <a
                href="#contact"
                className="inline-block rounded-full bg-black px-5 py-2.5 text-sm text-white hover:opacity-90 transition"
              >
                Parler de mon projet
              </a>
            </div>
          </div>

          <div className="rounded-3xl border bg-gray-50 p-6">
            <div className="rounded-2xl border bg-white p-5">
              <div className="text-sm font-semibold">Notre promesse</div>
              <p className="mt-2 text-sm text-gray-600">
                Un site web + une stratégie digitale + un système WhatsApp qui répond et relance
                automatiquement — pour que tu récupères plus de clients sans perdre du temps.
              </p>

              <div className="mt-5 grid gap-3">
                <div className="rounded-xl border p-3 text-sm">
                  ✅ Audit rapide & recommandations claires
                </div>
                <div className="rounded-xl border p-3 text-sm">
                  ✅ Livraison professionnelle (mobile/PC)
                </div>
                <div className="rounded-xl border p-3 text-sm">
                  ✅ Optimisation continue (SEO / pubs / automation)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
