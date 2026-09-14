import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import ProjectVisual from "./ProjectVisual";
import { projects } from "@/lib/data";

export default function SelectedWork() {
  const [featured] = projects;
  const thumbnails = featured.gallery?.slice(0, 3) ?? [];

  return (
    <section id="travaux" className="px-6 pt-28 sm:px-10 sm:pt-36 lg:px-14">
      <Reveal>
        <div className="mb-14 flex items-end justify-between sm:mb-20">
          <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">
            Travaux sélectionnés
          </h2>
          <span className="hidden max-w-xs text-right text-sm text-ink-soft sm:block">
            Une expérience digitale réelle, et quelques directions
            artistiques explorées à titre personnel.
          </span>
        </div>
      </Reveal>

      <Reveal>
        <Link href={`/travaux/${featured.slug}`} className="group block">
          <ProjectVisual
            project={featured}
            className="aspect-[4/3] sm:aspect-[16/9]"
          />
          <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="font-serif text-3xl tracking-tight transition-colors group-hover:text-accent sm:text-4xl">
              {featured.client}
            </h3>
            <span className="text-sm text-ink-soft">
              {featured.category} — {featured.year}
            </span>
          </div>
          <p className="mt-3 max-w-2xl text-ink-soft">{featured.summary}</p>
          <span className="mt-4 inline-flex items-center gap-2 text-sm text-ink underline decoration-accent decoration-2 underline-offset-4">
            Voir l&apos;étude de cas →
          </span>
        </Link>
      </Reveal>

      {thumbnails.length > 0 && (
        <Reveal delay={0.1}>
          <div className="mt-8 grid grid-cols-3 gap-3">
            {thumbnails.map((item) => (
              <div
                key={item.src}
                className="relative aspect-[16/10] overflow-hidden bg-ink"
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
