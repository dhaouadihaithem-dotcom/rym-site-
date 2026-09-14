import Reveal from "./Reveal";
import ConceptVisual from "./ConceptVisual";
import { concepts } from "@/lib/data";

export default function SelectedConcepts() {
  return (
    <section className="px-6 py-28 sm:px-10 sm:py-36 lg:px-14">
      <Reveal>
        <div className="mb-4 flex items-baseline gap-3">
          <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">
            Concepts sélectionnés
          </h2>
        </div>
        <p className="mb-14 max-w-xl text-ink-soft sm:mb-20">
          Des directions artistiques indépendantes, pensées pour explorer
          différents univers — présentées comme des concepts, jamais comme
          des projets clients.
        </p>
      </Reveal>

      <div className="grid gap-10 sm:grid-cols-3">
        {concepts.map((concept, i) => (
          <Reveal key={concept.slug} delay={i * 0.08}>
            <ConceptVisual concept={concept} />
            <div className="mt-5">
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="font-serif text-lg tracking-tight">
                  {concept.name}
                </h3>
                <span className="text-xs text-ink-soft">
                  {concept.category}
                </span>
              </div>
              <p className="mt-2 text-sm text-ink-soft">
                {concept.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
