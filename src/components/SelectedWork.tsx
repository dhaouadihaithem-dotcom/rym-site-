import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { projects } from "@/lib/data";

export default function SelectedWork() {
  const [featured] = projects;
  const mainVisual = featured.gallery?.[3] ?? null; // "The Space" — distinct from the Hero visual
  const thumbnails = featured.gallery?.slice(0, 3) ?? [];

  return (
    <section id="travaux" className="px-6 pt-28 sm:px-10 sm:pt-40 lg:px-14">
      <Reveal>
        <div className="flex items-end justify-between border-b border-ink/10 pb-6">
          <span className="text-xs tracking-[0.25em] text-ink-soft uppercase">
            Travaux
          </span>
          <span className="text-xs tracking-[0.25em] text-ink-soft uppercase">
            01 / 01
          </span>
        </div>
      </Reveal>

      <div className="grid gap-10 pt-14 lg:grid-cols-12 lg:gap-6 lg:pt-20">
        <Reveal className="lg:col-span-5">
          <p className="text-xs tracking-[0.25em] text-accent uppercase">
            Étude de cas
          </p>
          <h2 className="mt-4 font-serif text-5xl leading-[0.95] tracking-tight sm:text-7xl lg:text-[5.5rem]">
            NOA
            <br />
            HIFI
          </h2>
          <p className="mt-6 max-w-sm text-ink-soft">{featured.summary}</p>
          <p className="mt-4 text-xs tracking-[0.15em] text-ink-soft uppercase">
            {featured.category} — {featured.year}
          </p>
          <Link
            href={`/travaux/${featured.slug}`}
            className="mt-8 inline-flex items-center gap-2 text-sm text-ink underline decoration-accent decoration-2 underline-offset-4"
          >
            Voir l&apos;étude de cas complète →
          </Link>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7">
          <Link href={`/travaux/${featured.slug}`} className="group block">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink sm:aspect-[16/10]">
              {mainVisual ? (
                <Image
                  src={mainVisual.src}
                  alt={mainVisual.caption}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 800px, 100vw"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <p className="font-serif text-3xl italic text-paper/80">
                    {featured.client}
                  </p>
                </div>
              )}
            </div>
          </Link>
        </Reveal>
      </div>

      {thumbnails.length > 0 && (
        <Reveal delay={0.15}>
          <div className="mt-6 grid grid-cols-3 gap-3 sm:mt-8 sm:gap-4">
            {thumbnails.map((item) => (
              <div
                key={item.src}
                className="relative aspect-[16/11] overflow-hidden bg-ink"
              >
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 380px, 33vw"
                />
              </div>
            ))}
          </div>
        </Reveal>
      )}
    </section>
  );
}
