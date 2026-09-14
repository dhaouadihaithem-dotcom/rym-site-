import Reveal from "./Reveal";
import { site } from "@/lib/data";

export default function CtaFinal() {
  return (
    <section className="flex min-h-[80svh] flex-col items-center justify-center gap-10 bg-ink px-6 py-28 text-center text-paper sm:px-10">
      <Reveal>
        <p className="text-sm tracking-[0.2em] text-paper/50 uppercase">
          Un lieu qui mérite qu&apos;on s&apos;en souvienne ?
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="max-w-3xl font-serif text-4xl leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
          Offrons-lui une expérience digitale à la hauteur.
        </h2>
      </Reveal>
      <Reveal delay={0.15}>
        <div className="flex flex-col items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-paper px-8 py-4 text-sm text-ink transition-colors hover:bg-accent hover:text-paper"
          >
            Démarrer un projet →
          </a>
          <a
            href={`mailto:${site.email}`}
            className="text-sm text-paper/70 hover:text-paper"
          >
            {site.email}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
