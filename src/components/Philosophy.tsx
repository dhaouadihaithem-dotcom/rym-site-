import Reveal from "./Reveal";

export default function Philosophy() {
  return (
    <section className="border-y border-ink/10 px-6 py-28 sm:px-10 sm:py-36 lg:px-14">
      <div className="mx-auto flex max-w-3xl flex-col gap-8">
        <Reveal>
          <p className="text-sm tracking-[0.2em] text-ink-soft uppercase">
            Pourquoi moi
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="font-serif text-3xl leading-snug tracking-tight sm:text-4xl">
            Je ne conçois pas des sites isolément. Je conçois la version
            digitale d&apos;un lieu.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-xl text-ink-soft sm:text-lg">
            Je travaille particulièrement avec des lieux qui ont une
            ambiance, une histoire et une expérience physique à
            transmettre — restaurants, bars, hôtels, cafés, lieux culturels
            et marques lifestyle.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
