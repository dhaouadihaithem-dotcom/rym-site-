export const site = {
  name: "Rym Dhaouadi",
  role: "Webdesign & UX/UI Design",
  tagline: "Digital experiences for places with an identity.",
  location: "Paris · Málaga · Remote",
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
  mobileImage?: string;
  caseStudy?: {
    tagline: string;
    context: string;
    challenge: string;
    approach: string[];
    direction: string;
    result: string;
  };
};

export const projects: Project[] = [
  {
    slug: "noa-hifi",
    client: "NOA HIFI",
    title: "NOA HIFI — Hi-Fi Speakeasy, Paris",
    category: "Webdesign · UX/UI · Expérience digitale",
    year: "2025",
    summary:
      "Un bar hi-fi et musical à Paris, pensé comme un listening bar intimiste. L'enjeu : faire ressentir l'atmosphère du lieu en ligne, avant même d'y entrer.",
    liveUrl: "https://www.noahifi.com/",
    caseStudy: {
      tagline: "Hi-Fi Speakeasy — Paris",
      context:
        "NOA HIFI est un bar parisien construit autour de la culture Hi-Fi, de la musique et de l'expérience d'écoute. Le lieu avait déjà son univers, ses idées et ses contenus : mon rôle a été de concevoir et réaliser le site à partir de cette matière, pas de créer la marque.",
      challenge:
        "Comment retranscrire l'atmosphère et l'identité d'un listening bar dans une expérience web, sans la trahir ni la diluer dans un site générique ?",
      approach: [
        "Analyse de l'univers, des contenus et des photos fournis par le client",
        "Arborescence resserrée sur l'essentiel : l'ambiance, l'offre, la localisation",
        "Hiérarchie et navigation pensées pour un rythme de lecture lent, immersif",
        "Interface et interactions sobres, au service de l'image plutôt que du texte",
        "Intégration complète des contenus et adaptation responsive (mobile, tablette, desktop)",
      ],
      direction:
        "Une direction visuelle sombre et feutrée, proche de l'esthétique d'un listening bar : grands visuels, typographie sobre, mise en page aérée pour laisser respirer les photos du lieu.",
      result:
        "Le site a été conçu et réalisé en environ une semaine, de la structure à la mise en ligne.",
    },
  },
];

export type Concept = {
  slug: string;
  name: string;
  category: string;
  description: string;
  tone: "ink" | "accent" | "paper-dim";
};

export const concepts: Concept[] = [
  {
    slug: "meridian",
    name: "MERIDIAN",
    category: "Restaurant contemporain",
    description:
      "Direction visuelle pour un restaurant gastronomique épuré : typographie éditoriale, grands aplats, mise en scène du menu comme une collection.",
    tone: "ink",
  },
  {
    slug: "noir-cabinet",
    name: "NOIR CABINET",
    category: "Cocktail bar",
    description:
      "Univers sombre et confidentiel pour un cocktail bar : ambiance feutrée, typographie ciselée, expérience pensée comme une invitation.",
    tone: "accent",
  },
  {
    slug: "cala",
    name: "CALA",
    category: "Boutique hôtel",
    description:
      "Identité digitale chaleureuse pour un boutique hôtel méditerranéen : matières, lumière naturelle, narration au rythme des saisons.",
    tone: "paper-dim",
  },
];

export const services = [
  {
    number: "01",
    title: "Webdesign",
    description:
      "Des sites pensés autour de votre identité, votre audience et l'expérience que vous voulez faire vivre.",
  },
  {
    number: "02",
    title: "UX/UI",
    description:
      "Des expériences digitales claires, intuitives et visuellement distinctives.",
  },
  {
    number: "03",
    title: "Refonte de site",
    description:
      "Transformer un site daté en une expérience moderne et immersive.",
  },
  {
    number: "04",
    title: "Expérience digitale",
    description:
      "De la structure à la direction visuelle jusqu'à la réalisation finale.",
  },
];

export const process = [
  {
    number: "01",
    title: "Discovery",
    description: "Comprendre le lieu, l'identité et les objectifs.",
  },
  {
    number: "02",
    title: "Direction",
    description: "Structure, parcours utilisateur et direction digitale.",
  },
  {
    number: "03",
    title: "Design",
    description: "UX/UI, langage visuel et mises en page responsives.",
  },
  {
    number: "04",
    title: "Développement",
    description: "Développement, interactions, optimisation et mise en ligne.",
  },
  {
    number: "05",
    title: "Finalisation",
    description: "Derniers ajustements et livraison.",
  },
];

export const nav = [
  { label: "Travaux", href: "#travaux" },
  { label: "Services", href: "#services" },
  { label: "À propos", href: "#about" },
  { label: "Contact", href: "#contact" },
];
