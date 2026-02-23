export type Project = {
  title: string;
  category: "Site vitrine" | "E-commerce" | "SEO" | "Publicité" | "Automatisation";
  city: string;
  objective: string;
  result?: string;
  image: string; // chemin dans /public
  link?: string; // optionnel
};

export const projects: Project[] = [
  {
    title: "Revoltution Galaxy",
    category: "E-commerce",
    city: "Casablanca",
    objective: "Présenter les produits de la marque Revolution Galaxy",
    result: "Résultats en cours",
    image: "/projects/revolutiongala.jpg",
    link: "revolutiongalaxy.com",
  },
  {
    title: "Akonzas",
    category: "Site vitrine",
    city: "Rabat",
    objective: "Site web + Seo + Automatisation IA Email",
    result: "Résultats en cours",
    image: "/projects/akonzas.jpg",
    link: "Akonzas.com",
  },
  {
    title: "Electro Kadi",
    category: "E-commerce",
    city: "Casablanca",
    objective: "site web + Automatiser WhatsApp : réponse + qualification + relance.",
    result: "Réduction du temps de réponse (en cours)",
    image: "/projects/electrokadi.jpg",
    link: "electrokadi.com",
  },
];
