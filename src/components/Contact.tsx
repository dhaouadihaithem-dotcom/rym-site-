import Reveal from "./Reveal";
import { site } from "@/lib/data";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center gap-8 px-6 py-28 text-center sm:px-10 sm:py-36"
    >
      <Reveal>
        <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">
          Travaillons ensemble.
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <a
          href={`mailto:${site.email}`}
          className="font-serif text-2xl tracking-tight text-accent underline decoration-accent/40 decoration-2 underline-offset-4 transition-colors hover:decoration-accent sm:text-3xl"
        >
          {site.email}
        </a>
      </Reveal>
      <Reveal delay={0.15}>
        <div className="flex gap-6 text-sm text-ink-soft">
          <a href={site.instagram.href} target="_blank" rel="noreferrer" className="hover:text-ink">
            {site.instagram.label}
          </a>
          <a href={site.linkedin.href} target="_blank" rel="noreferrer" className="hover:text-ink">
            {site.linkedin.label}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
