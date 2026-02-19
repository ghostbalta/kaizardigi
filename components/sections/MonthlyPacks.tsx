const monthly = [
  {
    title: "Référencement SEO",
    packs: [
      { name: "Local", price: "1000 DH/mois", old: "1200 DH", items: ["Optimisation Google My Business", "SEO on-page", "2 articles blog optimisés SEO"] },
      { name: "National", price: "2000 DH/mois", old: "2500 DH", items: ["SEO complet (on-page + off-page)", "4 articles blog/mois", "Netlinking basique"] },
      { name: "Premium", price: "3000 DH/mois", old: "3500 DH", items: ["Stratégie SEO complète", "8 articles blog/mois", "Backlinks de qualité", "Audit + suivi avancé"] },
    ],
  },
  {
    title: "Gestion des Réseaux Sociaux",
    packs: [
      { name: "Starter", price: "1000 DH/mois", old: "1200 DH", items: ["8 publications/mois", "2 stories/semaine", "Gestion page (réponses basiques)"] },
      { name: "Business", price: "2200 DH/mois", old: "2500 DH", items: ["15 publications/mois", "5 stories/semaine", "Gestion communauté", "Reporting mensuel"] },
      { name: "Premium", price: "3200 DH/mois", old: "3500 DH", items: ["20 publications/mois", "7 stories/semaine", "Stratégie contenu", "1 shooting/mois (si local)", "Reporting + optimisation"] },
    ],
  },
  {
    title: "Publicité Digitale (Meta Ads & Google Ads)",
    packs: [
      { name: "Starter", price: "1200 DH/mois", old: "1500 DH", items: ["Mise en place campagne Meta", "Ciblage client idéal", "2 campagnes/mois"] },
      { name: "Business", price: "2300 DH/mois", old: "2500 DH", items: ["Gestion complète (Meta + Google)", "Tests A/B", "Reporting détaillé"] },
      { name: "Premium", price: "3500 DH/mois", old: "4000 DH", items: ["Stratégie multi-canal (Meta, Google, TikTok)", "Optimisation quotidienne", "Reporting hebdo + reco"] },
    ],
    note: "*Le prix mensuel est hors budget Ads.",
  },
];

export default function MonthlyPacks() {
  return (
    <section className="border-y bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold tracking-tight">Packs mensuels</h2>
        <p className="mt-2 max-w-2xl text-gray-600">
          SEO, réseaux sociaux et publicité — selon vos objectifs.
        </p>

        <div className="mt-10 space-y-10">
          {monthly.map((cat) => (
            <div key={cat.title}>
              <h3 className="text-xl font-semibold">{cat.title}</h3>

              <div className="mt-4 grid gap-6 md:grid-cols-3">
                {cat.packs.map((p) => (
                  <div key={p.name} className="rounded-3xl border bg-white p-6">
                    <div className="font-semibold">{p.name}</div>
                    <div className="mt-2 text-2xl font-bold">{p.price}</div>
                    {p.old && <div className="text-sm text-gray-500 line-through">{p.old}</div>}
                    <ul className="mt-4 space-y-2 text-sm text-gray-700">
                      {p.items.map((it) => (
                        <li key={it} className="flex gap-2">
                          <span className="mt-1 h-2 w-2 rounded-full bg-black" />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                    <a href="#contact" className="mt-5 inline-block text-sm underline underline-offset-4 hover:opacity-80">
                      Demander un devis
                    </a>
                  </div>
                ))}
              </div>

              {"note" in cat && (cat as any).note ? (
                <p className="mt-3 text-xs text-gray-500">{(cat as any).note}</p>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
