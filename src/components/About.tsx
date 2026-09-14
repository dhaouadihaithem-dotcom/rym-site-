import Image from "next/image";
import Reveal from "./Reveal";
import { site } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="px-6 py-28 sm:px-10 sm:py-36 lg:px-14">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-accent-soft">
            {site.photo ? (
              <Image
                src={site.photo}
                alt={site.name}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 600px, 100vw"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <span className="font-serif text-6xl italic text-accent/60">
                  RD
                </span>
              </div>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col justify-center gap-6">
          <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">
            À propos
          </h2>
          <p className="max-w-lg text-lg text-ink-soft">
            Je m&apos;appelle Rym Dhaouadi. Je suis webdesigner &amp; UX/UI
            designer, et je travaille avec des restaurants, bars, hôtels et
            marques qui ont déjà une identité forte — pour la transformer en
            une expérience digitale à sa hauteur.
          </p>
          <p className="max-w-lg text-lg text-ink-soft">
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
