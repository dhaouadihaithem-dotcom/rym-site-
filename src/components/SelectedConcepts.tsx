import Reveal from "./Reveal";
import ConceptVisual from "./ConceptVisual";
import { concepts } from "@/lib/data";

export default function SelectedConcepts() {
  return (
    <section className="px-6 py-24 sm:px-10 sm:py-32 lg:px-14">
      <Reveal>
        <div className="flex items-end justify-between border-b border-ink/10 pb-6">
          <span className="text-xs tracking-[0.25em] text-ink-soft uppercase">
            Concepts
          </span>
          <span className="text-xs tracking-[0.25em] text-ink-soft uppercase">
            Direction artistique indépendante
          </span>
        </div>
      </Reveal>

      <div className="mt-16 flex flex-col gap-20 sm:mt-24 sm:gap-28">
        {concepts.map((concept, i) => {
          const reversed = i % 2 === 1;
          return (
            <div
              key={concept.slug}
              className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-10"
            >
              <div
                className={`lg:col-span-7 ${reversed ? "lg:order-2" : "lg:order-1"}`}
              >
                <Reveal y={28}>
                  <ConceptVisual concept={concept} />
                </Reveal>
              </div>
              <div
                className={`lg:col-span-5 ${reversed ? "lg:order-1" : "lg:order-2"}`}
              >
                <Reveal delay={0.1}>
                  <p className="text-xs tracking-[0.25em] text-accent uppercase">
                    Concept 0{i + 1}
                  </p>
                  <h3 className="mt-4 font-serif text-4xl leading-[0.95] tracking-tight sm:text-5xl">
                    {concept.name}
                  </h3>
                  <p className="mt-2 text-xs tracking-[0.15em] text-ink-soft uppercase">
                    {concept.category}
                  </p>
                  <p className="mt-6 max-w-sm text-ink-soft">
                    {concept.description}
                  </p>
                </Reveal>
              </div>
            </div>
          );
        })}
      </div>

      <Reveal delay={0.1}>
        <p className="mt-16 max-w-xl text-sm text-ink-soft sm:mt-24">
          Ces trois directions sont des explorations personnelles, pensées
          pour montrer l&apos;étendue créative du studio — jamais des projets
          clients réels.
        </p>
      </Reveal>
    </section>
  );
}
