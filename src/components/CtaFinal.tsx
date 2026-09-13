import Reveal from "./Reveal";
import { site } from "@/lib/data";

export default function CtaFinal() {
  return (
    <section
      id="contact"
      className="flex min-h-[80svh] flex-col items-center justify-center gap-10 bg-ink px-6 py-28 text-center text-paper sm:px-10"
    >
      <Reveal>
        <h2 className="max-w-3xl font-serif text-4xl leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
          Your next digital experience starts here.
        </h2>
      </Reveal>
      <Reveal delay={0.15}>
        <a
          href={`mailto:${site.email}`}
          className="inline-flex items-center justify-center rounded-full bg-paper px-8 py-4 text-sm text-ink transition-colors hover:bg-accent hover:text-paper"
        >
          Parler de mon projet
        </a>
      </Reveal>
    </section>
  );
}
