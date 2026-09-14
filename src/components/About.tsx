import Image from "next/image";
import Reveal from "./Reveal";
import { site } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="px-6 py-24 sm:px-10 sm:py-32 lg:px-14">
      <Reveal>
        <div className="flex items-end justify-between border-b border-ink/10 pb-6">
          <span className="text-xs tracking-[0.25em] text-ink-soft uppercase">
            À propos
          </span>
          <span className="text-xs tracking-[0.25em] text-ink-soft uppercase">
            {site.location}
          </span>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-10 sm:mt-20 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-5">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-accent-soft">
            {site.photo ? (
              <Image
                src={site.photo}
                alt={site.name}
                fill
                className="object-cover grayscale"
                sizes="(min-width: 1024px) 500px, 100vw"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <span className="font-serif text-[7rem] leading-none italic text-accent/50 sm:text-[9rem]">
                  RD
                </span>
              </div>
            )}
            <span className="absolute bottom-4 left-4 text-[0.65rem] tracking-[0.15em] text-ink-soft uppercase">
              {site.name}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col justify-center gap-6 lg:col-span-7">
          <p className="font-serif text-3xl leading-snug tracking-tight sm:text-4xl lg:text-5xl">
            Je suis webdesigner &amp; UX/UI designer.
          </p>
          <p className="max-w-lg text-lg text-ink-soft">
            Je travaille avec des restaurants, bars, hôtels et marques qui
            ont déjà une identité forte — pour la transformer en une
            expérience digitale à sa hauteur.
          </p>
          <p className="max-w-lg text-ink-soft">
            Chaque projet est pensé sur mesure : je m&apos;immerge dans
            l&apos;univers du lieu ou de la marque pour concevoir un site qui
            lui ressemble vraiment, plutôt qu&apos;un template générique.
          </p>
          <p className="max-w-lg text-ink-soft">
            Ce qui m&apos;intéresse : les lieux qui ont une ambiance, une
            histoire, un vrai parti pris — et où le design ne se contente pas
            d&apos;être joli, mais sert l&apos;expérience.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
