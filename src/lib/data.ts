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
        "NOA HIFI est un listening bar confidentiel à Bastille, né de la rencontre entre la philosophie des jazz kissa japonais et l'exigence de la haute couture parisienne : amplificateurs McIntosh, vinylothèque de plus de 800 références, cocktails signature. Le lieu avait déjà son univers, ses idées et ses contenus : mon rôle a été de concevoir et réaliser le site à partir de cette matière, pas de créer la marque.",
      challenge:
        "Comment retranscrire l'atmosphère confidentielle d'un listening bar — le son, la matière, le rituel de la réservation — dans une expérience web, sans la trahir ni la diluer dans un site générique ?",
      approach: [
        "Structuration du site en cinq temps forts : Manifesto, The Space, Now Playing, Liquid Art, Reserve",
        "Un hero d'ouverture confidentiel (« Behind closed doors ») qui installe le ton de speakeasy avant même la home",
        "Une section Manifesto pour poser l'histoire et la philosophie du lieu",
        "Une section « Three rituals, one night » qui structure l'offre en trois piliers : Sound, Taste, Design",
        "Un module « Now Playing » avec platine animée et playlist Tidal pour donner à entendre l'ambiance en direct",
        "Un parcours de réservation confidentiel (« Request your invitation ») plutôt qu'un simple formulaire de contact",
      ],
      direction:
        "Une direction visuelle sombre et feutrée, sculptée par la lumière : grandes photos argentiques du bar et des amplificateurs McIntosh, typographie serif élégante, mise en page aérée pour laisser respirer l'espace et le rituel du lieu.",
      result:
        "Le site a été conçu et réalisé en environ une semaine, de la structure à la mise en ligne — en retranscrivant fidèlement l'expérience sensorielle du lieu avant même d'y entrer.",
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
