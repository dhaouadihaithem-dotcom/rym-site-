import type { Concept } from "@/lib/data";

const toneClasses: Record<Concept["tone"], string> = {
  ink: "bg-ink text-paper",
  accent: "bg-accent text-paper",
  "paper-dim": "bg-paper-dim text-ink",
};

const chromeDot = "h-1.5 w-1.5 rounded-full bg-current/25";

function RestaurantMockup() {
  return (
    <div className="flex h-full flex-col justify-between p-6 sm:p-8">
      <div className="flex items-center justify-between text-[0.6rem] tracking-[0.2em] uppercase opacity-50">
        <span>Menu</span>
        <span>Réserver</span>
      </div>
      <div className="text-center">
        <p className="font-serif text-2xl italic tracking-tight sm:text-3xl">
          Meridian
        </p>
        <div className="mx-auto mt-3 h-px w-10 bg-current/30" />
      </div>
      <ul className="mx-auto flex w-full max-w-[220px] flex-col gap-1.5 text-[0.65rem] tracking-wide opacity-70">
        <li className="flex justify-between">
          <span>Ceviche d&apos;agrumes</span>
          <span>18</span>
        </li>
        <li className="flex justify-between">
          <span>Tartare de bœuf</span>
          <span>24</span>
        </li>
        <li className="flex justify-between">
          <span>Risotto aux morilles</span>
          <span>26</span>
        </li>
      </ul>
    </div>
  );
}

function BarMockup() {
  return (
    <div className="flex h-full flex-col justify-between p-6 sm:p-8">
      <div className="flex items-center justify-between text-[0.6rem] tracking-[0.2em] uppercase opacity-50">
        <span>Noir Cabinet</span>
        <span>19h — 2h</span>
      </div>
      <div className="text-center">
        <p className="font-serif text-3xl italic tracking-tight text-accent sm:text-4xl">
          La carte
        </p>
      </div>
      <ul className="mx-auto flex w-full max-w-[220px] flex-col gap-1.5 text-[0.65rem] tracking-wide opacity-70">
        <li className="flex justify-between">
          <span>Fumée &amp; Cuir</span>
          <span>16€</span>
        </li>
        <li className="flex justify-between">
          <span>Nuit Blanche</span>
          <span>15€</span>
        </li>
      </ul>
    </div>
  );
}

function HotelMockup() {
  return (
    <div className="flex h-full flex-col p-4 sm:p-5">
      <div className="mb-3 flex items-center justify-between text-[0.6rem] tracking-[0.2em] uppercase opacity-60">
        <span>Cala</span>
        <span>Chambres</span>
      </div>
      <div className="relative flex-1 overflow-hidden rounded-sm bg-[linear-gradient(155deg,rgba(0,0,0,0.12),transparent_60%)]">
        <div className="absolute inset-0 bg-ink/5" />
      </div>
      <div className="mt-3 flex items-center justify-between text-[0.65rem] tracking-wide">
        <span className="opacity-70">à partir de 180€ / nuit</span>
        <span className="rounded-full border border-current/30 px-3 py-1 text-[0.6rem] uppercase tracking-[0.15em]">
          Réserver
        </span>
      </div>
    </div>
  );
}

const mockups: Record<Concept["mockup"], () => React.JSX.Element> = {
  restaurant: RestaurantMockup,
  bar: BarMockup,
  hotel: HotelMockup,
};

export default function ConceptVisual({ concept }: { concept: Concept }) {
  const Mockup = mockups[concept.mockup];

  return (
    <div
      className={`relative flex aspect-[16/11] w-full flex-col overflow-hidden rounded-sm ${toneClasses[concept.tone]}`}
    >
      <div className="flex items-center justify-between border-b border-current/10 px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className={chromeDot} />
          <span className={chromeDot} />
          <span className={chromeDot} />
        </div>
        <span className="rounded-full border border-current/20 px-2.5 py-0.5 text-[0.6rem] uppercase tracking-[0.15em] opacity-60">
          Concept
        </span>
      </div>
      <div className="flex-1">
        <Mockup />
      </div>
    </div>
  );
}
