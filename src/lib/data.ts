export const site = {
  name: "Rym Dhaouadi",
  role: "Webdesign & UX/UI Design",
  tagline: "Digital experiences for places with an identity.",
  // TODO: remplacer par les vraies coordonnées avant mise en ligne.
  email: "hello@rymdhaouadi.com",
  instagram: {
    label: "Instagram",
    href: "https://instagram.com/rymdhaouadi.design",
  },
  linkedin: {
    label: "LinkedIn",
    href: "https://linkedin.com/in/rymdhaouadi",
  },
  url: "https://rymdhaouadi.com",
  // TODO: ajouter une photo (ex. "/about/rym.jpg") pour remplacer le
  // placeholder de la section About.
  photo: undefined as string | undefined,
};

export type Project = {
  slug: string;
  client: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  liveUrl?: string;
  image?: string;
  featured: boolean;
  caseStudy?: {
    context: string;
    objective: string;
    approach: string[];
    direction: string;
    ui: string[];
    result: string;
  };
};

export const projects: Project[] = [
  {
    slug: "noa-hifi",
    client: "NOA HIFI",
    title: "NOA HIFI — Listening bar, Paris",
    category: "Webdesign · UX/UI · Direction digitale",
    year: "2025",
    summary:
      "Un bar hi-fi et musical à Paris, pensé comme un listening bar intimiste. L'enjeu : faire ressentir l'atmosphère du lieu en ligne, avant même d'y entrer.",
    liveUrl: "https://www.noahifi.com/",
    featured: true,
    caseStudy: {
      context:
        "NOA HIFI est un bar parisien construit autour de la culture Hi-Fi, de la musique et de l'expérience d'écoute. Le lieu a une identité déjà forte et affirmée, portée par l'univers du client. Ma mission : la traduire en une expérience digitale qui lui soit fidèle.",
      objective:
        "Créer un site qui ne se contente pas de présenter le bar, mais qui donne à ressentir son atmosphère intimiste et premium dès l'arrivée sur la page — pour donner envie de vivre l'expérience sur place.",
      approach: [
        "Analyse de l'univers, des contenus et des photos fournis par le client",
        "Construction d'une arborescence simple, centrée sur l'essentiel : l'ambiance, l'offre, la localisation",
        "Priorité donnée à l'image et au rythme de lecture plutôt qu'au texte",
      ],
      direction:
        "Une direction visuelle sombre et feutrée, proche de l'esthétique d'un listening bar : grands visuels, typographie sobre, mise en page aérée pour laisser respirer les photos du lieu.",
      ui: [
        "Structure et mise en page du site",
        "Expérience utilisateur et hiérarchie du contenu",
        "Interface et interactions",
        "Intégration des contenus fournis par le client",
        "Adaptation responsive complète (mobile, tablette, desktop)",
      ],
      result:
        "Le site a été conçu et réalisé en environ une semaine, de la structure à la mise en ligne.",
    },
  },
  {
    slug: "prochainement-1",
    client: "Prochainement",
    title: "Un nouveau projet arrive bientôt",
    category: "Restaurant / Bar",
    year: "—",
    summary: "Cet emplacement est réservé pour une prochaine étude de cas.",
    featured: false,
  },
  {
    slug: "prochainement-2",
    client: "Prochainement",
    title: "Un nouveau projet arrive bientôt",
    category: "Hôtel / Lieu culturel",
    year: "—",
    summary: "Cet emplacement est réservé pour une prochaine étude de cas.",
    featured: false,
  },
];

export const services = [
  {
    number: "01",
    title: "Webdesign",
    description:
      "Conception visuelle complète d'un site, cohérente avec l'identité du lieu ou de la marque.",
  },
  {
    number: "02",
    title: "UX/UI Design",
    description:
      "Structure, parcours utilisateur et interfaces pensés pour convertir la visite en action.",
  },
  {
    number: "03",
    title: "Création de sites",
    description: "Réalisation de sites sur mesure, du concept à la mise en ligne.",
  },
  {
    number: "04",
    title: "Refonte de sites",
    description:
      "Modernisation d'un site existant : design, expérience et performance.",
  },
  {
    number: "05",
    title: "Direction visuelle digitale",
    description:
      "Cohérence de l'univers visuel d'une marque à travers ses supports digitaux.",
  },
];

export const process = [
  {
    number: "01",
    title: "Discovery",
    description: "Comprendre le lieu, la marque et ses objectifs.",
  },
  {
    number: "02",
    title: "Direction",
    description: "Définir l'univers visuel et la direction artistique.",
  },
  {
    number: "03",
    title: "UX/UI",
    description: "Structurer l'expérience et concevoir l'interface.",
  },
  {
    number: "04",
    title: "Development",
    description: "Développer un site propre, rapide et responsive.",
  },
  {
    number: "05",
    title: "Launch",
    description: "Mettre en ligne et accompagner le lancement.",
  },
];

export const nav = [
  { label: "Travaux", href: "#travaux" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "À propos", href: "#about" },
  { label: "Contact", href: "#contact" },
];
