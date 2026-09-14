import type { Concept } from "@/lib/data";

const toneClasses: Record<Concept["tone"], string> = {
  ink: "bg-ink text-paper",
  accent: "bg-accent text-paper",
  "paper-dim": "bg-paper-dim text-ink border border-ink/10",
};

export default function ConceptVisual({ concept }: { concept: Concept }) {
  return (
    <div
      className={`relative flex aspect-[4/3] w-full flex-col justify-between overflow-hidden p-6 sm:aspect-[3/4] ${toneClasses[concept.tone]}`}
    >
      <span className="w-fit rounded-full border border-current/30 px-3 py-1 text-[0.65rem] tracking-[0.15em] uppercase opacity-70">
        Concept
      </span>
      <p className="font-serif text-3xl italic tracking-tight sm:text-4xl">
        {concept.name}
      </p>
    </div>
  );
}
