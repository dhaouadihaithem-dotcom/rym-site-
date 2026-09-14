export const site = {
  name: "Rym Dhaouadi",
  role: "Webdesign & UX/UI Design",
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

export type GalleryItem = {
  src: string;
  caption: string;
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
  // Visuels supplémentaires (desktop) pour la case study — voir README pour
  // comment les ajouter.
  gallery?: GalleryItem[];
  mobileImage?: string;
  mobileGallery?: GalleryItem[];
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
      "Un listening bar confidentiel à Paris. L'enjeu : faire ressentir l'atmosphère du lieu en ligne, avant même d'y entrer.",
    liveUrl: "https://www.noahifi.com/",
    caseStudy: {
      tagline: "Hi-Fi Speakeasy — Paris",
      context:
        "NOA HIFI est un listening bar confidentiel à Bastille : amplificateurs McIntosh, vinylothèque de plus de 800 références, cocktails signature. Le lieu avait déjà son univers et ses contenus — j'ai conçu et réalisé le site à partir de cette matière, pas la marque.",
      challenge:
        "Retranscrire l'atmosphère confidentielle d'un listening bar dans une expérience web, sans la diluer dans un site générique.",
      approach: [
        "Site structuré en cinq temps forts : Manifesto, The Space, Now Playing, Liquid Art, Reserve",
        "Hero d'ouverture confidentiel (« Behind closed doors ») qui installe le ton dès l'arrivée",
        "Module « Now Playing » avec platine animée et playlist en direct",
        "Parcours de réservation confidentiel plutôt qu'un simple formulaire de contact",
      ],
      direction:
        "Sombre et feutrée, sculptée par la lumière : grandes photos argentiques, typographie serif élégante, mise en page aérée.",
      result:
        "Conçu et réalisé en environ une semaine, de la structure à la mise en ligne.",
    },
  },
];

export type ConceptTone = "ink" | "accent" | "paper-dim";

export type Concept = {
  slug: string;
  name: string;
  category: string;
  description: string;
  tone: ConceptTone;
  mockup: "restaurant" | "bar" | "hotel";
};

export const concepts: Concept[] = [
  {
    slug: "meridian",
    name: "Meridian",
    category: "Restaurant contemporain",
    description:
      "Typographie éditoriale, grands aplats, menu mis en scène comme une collection.",
    tone: "paper-dim",
    mockup: "restaurant",
  },
  {
    slug: "noir-cabinet",
    name: "Noir Cabinet",
    category: "Cocktail bar",
    description:
      "Univers sombre et confidentiel, typographie ciselée, carte pensée comme une invitation.",
    tone: "ink",
    mockup: "bar",
  },
  {
    slug: "cala",
    name: "Cala",
    category: "Boutique hôtel",
    description:
      "Identité chaleureuse pour un boutique hôtel méditerranéen : matières, lumière, saisons.",
    tone: "accent",
    mockup: "hotel",
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
