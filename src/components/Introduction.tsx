import Reveal from "./Reveal";

export default function Introduction() {
  return (
    <section className="px-6 py-28 sm:px-10 sm:py-36 lg:px-14">
      <Reveal>
        <p className="mx-auto max-w-3xl text-center font-serif text-3xl leading-snug tracking-tight text-ink sm:text-4xl lg:text-5xl">
          Votre site devrait ressembler à votre lieu.
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mx-auto mt-8 max-w-xl text-center text-ink-soft sm:text-lg">
          Je ne crée pas simplement un site esthétique. Je traduis
          l&apos;atmosphère, l&apos;identité et l&apos;expérience d&apos;un
          lieu dans son expérience digitale.
        </p>
      </Reveal>
    </section>
  );
}
