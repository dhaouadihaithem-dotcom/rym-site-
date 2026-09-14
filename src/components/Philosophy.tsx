import Reveal from "./Reveal";

const tags = [
  "Direction artistique",
  "UX / UI",
  "Identité visuelle digitale",
  "Sur-mesure",
  "Exécution rapide",
];

export default function Philosophy() {
  return (
    <section className="border-y border-ink/10 px-6 py-24 sm:px-10 sm:py-36 lg:px-14">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="text-xs tracking-[0.25em] text-ink-soft uppercase">
            Pourquoi moi
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-8 font-serif text-4xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Je ne conçois pas des sites isolément.
            <br />
            <span className="text-accent italic">
              Je conçois la version digitale d&apos;un lieu.
            </span>
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-10 max-w-xl text-ink-soft sm:text-lg">
            Je travaille avec des restaurants, bars, hôtels et lieux
            lifestyle qui ont déjà une ambiance, une histoire et une
            expérience physique à transmettre — je traduis cette identité en
            direction artistique, en UX/UI et en site fini.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs tracking-[0.15em] text-ink-soft uppercase"
              >
                {tag}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
