import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CtaFinal from "@/components/CtaFinal";
import Contact from "@/components/Contact";
import Reveal from "@/components/Reveal";
import { projects, type GalleryItem } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.client,
    description: project.summary,
    alternates: { canonical: `/travaux/${project.slug}` },
    openGraph: {
      title: `${project.client} — Étude de cas`,
      description: project.summary,
    },
  };
}

function Eyebrow({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-baseline gap-3 text-xs tracking-[0.25em] text-ink-soft uppercase">
      <span className="text-accent">{index}</span>
      <span>{label}</span>
    </div>
  );
}

function Frame({
  item,
  fallback,
  className = "aspect-[16/10]",
}: {
  item?: GalleryItem;
  fallback: string;
  className?: string;
}) {
  return (
    <div className={`relative w-full overflow-hidden bg-ink ${className}`}>
      {item ? (
        <Image
          src={item.src}
          alt={item.caption}
          fill
          className="object-cover"
          sizes="100vw"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <p className="font-serif text-3xl italic text-paper/80">
            {fallback}
          </p>
        </div>
      )}
    </div>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  if (!project.caseStudy) {
    return (
      <>
        <Nav />
        <main className="flex min-h-svh flex-col items-center justify-center gap-6 px-6 text-center">
          <h1 className="font-serif text-3xl">Étude de cas à venir</h1>
          <Link href="/#travaux" className="text-sm underline underline-offset-4">
            Retour aux projets
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  const { caseStudy } = project;
  const [manifesto, rituals, music, space, nowPlaying, liquidArt, reserve] =
    project.gallery ?? [];

  return (
    <>
      <Nav />
      <main>
        {/* Intro */}
        <section className="px-6 pt-32 pb-14 sm:px-10 sm:pt-40 lg:px-14">
          <Reveal>
            <p className="text-xs tracking-[0.25em] text-ink-soft uppercase">
              {caseStudy.tagline}
            </p>
            <h1 className="mt-5 font-serif text-6xl leading-[0.92] tracking-tight sm:text-8xl lg:text-9xl">
              {project.client}
            </h1>
            <p className="mt-6 text-sm text-ink-soft">{project.category}</p>
          </Reveal>
        </section>

        {/* 01 — Cover, full bleed */}
        <Reveal y={32}>
          <Frame item={{ src: project.image ?? "", caption: project.client }} fallback={project.client} className="aspect-[4/3] sm:aspect-[16/9]" />
        </Reveal>

        {/* 02 — The Idea */}
        <section className="px-6 py-24 sm:px-10 sm:py-32 lg:px-14">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <Eyebrow index="02" label="The Idea" />
            </Reveal>
            <div className="mt-10 grid gap-10 sm:grid-cols-3">
              <Reveal>
                <h2 className="mb-3 font-serif text-2xl tracking-tight text-accent">
                  Contexte
                </h2>
                <p className="text-ink-soft">{caseStudy.context}</p>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="mb-3 font-serif text-2xl tracking-tight text-accent">
                  Le défi
                </h2>
                <p className="text-ink-soft">{caseStudy.challenge}</p>
              </Reveal>
              <Reveal delay={0.12}>
                <h2 className="mb-3 font-serif text-2xl tracking-tight text-accent">
                  Mon approche
                </h2>
                <ul className="flex flex-col gap-2">
                  {caseStudy.approach.map((item) => (
                    <li
                      key={item}
                      className="border-l-2 border-accent/30 pl-3 text-sm text-ink-soft"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 03 — Manifesto, full bleed */}
        <section className="pb-24 sm:pb-32">
          <div className="mb-8 px-6 sm:px-10 lg:px-14">
            <Reveal>
              <Eyebrow index="03" label="Manifesto" />
            </Reveal>
          </div>
          <Reveal y={32}>
            <Frame item={manifesto} fallback={project.client} className="aspect-[4/3] sm:aspect-[16/9]" />
          </Reveal>
        </section>

        {/* 04 — Three Rituals, asymmetric with text */}
        <section className="px-6 pb-24 sm:px-10 sm:pb-32 lg:px-14">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-6">
            <div className="lg:col-span-7">
              <Reveal y={32}>
                <Frame item={rituals} fallback={project.client} />
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={0.1}>
                <Eyebrow index="04" label="Three Rituals" />
                <p className="mt-6 font-serif text-2xl leading-snug tracking-tight sm:text-3xl">
                  Sound, Taste, Design — trois piliers pour structurer
                  l&apos;offre du lieu en une seule respiration.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 05 — The Music, bleeding left */}
        <section className="pb-24 sm:pb-32">
          <div className="mb-8 px-6 sm:px-10 lg:px-14">
            <Reveal>
              <Eyebrow index="05" label="The Music" />
            </Reveal>
          </div>
          <div className="pr-6 sm:pr-10 lg:pr-14">
            <Reveal y={32}>
              <div className="w-[92%] sm:w-[80%] lg:w-[70%]">
                <Frame item={music} fallback={project.client} />
              </div>
            </Reveal>
          </div>
          <div className="mt-4 px-6 text-right text-xs text-ink-soft sm:px-10 lg:px-14">
            McIntosh MA352 — vinylothèque de plus de 800 références
          </div>
        </section>

        {/* 06 — The Space, full bleed, large */}
        <section className="pb-24 sm:pb-32">
          <div className="mb-8 px-6 sm:px-10 lg:px-14">
            <Reveal>
              <Eyebrow index="06" label="The Space" />
            </Reveal>
          </div>
          <Reveal y={32}>
            <Frame item={space} fallback={project.client} className="aspect-[3/4] sm:aspect-[16/9]" />
          </Reveal>
        </section>

        {/* 07 — Now Playing, text + contained image */}
        <section className="px-6 py-24 sm:px-10 sm:py-32 lg:px-14">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-6">
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow index="07" label="Now Playing" />
                <p className="mt-6 font-serif text-2xl leading-snug tracking-tight sm:text-3xl">
                  Une platine animée, une playlist en direct — le site
                  s&apos;écoute autant qu&apos;il se regarde.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={0.1} y={32}>
                <Frame item={nowPlaying} fallback={project.client} />
              </Reveal>
            </div>
          </div>
        </section>

        {/* 08 — Liquid Art, bleeding right */}
        <section className="pb-24 sm:pb-32">
          <div className="mb-8 px-6 sm:px-10 lg:px-14">
            <Reveal>
              <Eyebrow index="08" label="Liquid Art" />
            </Reveal>
          </div>
          <div className="pl-6 sm:pl-10 lg:pl-14">
            <Reveal y={32}>
              <div className="ml-auto w-[92%] sm:w-[80%] lg:w-[70%]">
                <Frame item={liquidArt} fallback={project.client} />
              </div>
            </Reveal>
          </div>
        </section>

        {/* 09 — Reserve + Result */}
        <section className="px-6 pb-24 sm:px-10 sm:pb-32 lg:px-14">
          <Reveal>
            <Eyebrow index="09" label="Reserve" />
          </Reveal>
          <Reveal delay={0.08} y={32} className="mt-8">
            <Frame item={reserve} fallback={project.client} />
          </Reveal>
          <div className="mx-auto mt-16 max-w-2xl text-center">
            <Reveal>
              <p className="text-sm tracking-[0.2em] text-ink-soft uppercase">
                Résultat
              </p>
              <p className="mt-4 text-lg text-ink-soft">{caseStudy.result}</p>
            </Reveal>
            {project.liveUrl && (
              <Reveal delay={0.1}>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-lg underline decoration-accent decoration-2 underline-offset-4"
                >
                  Visiter {project.client} →
                </a>
              </Reveal>
            )}
          </div>
        </section>
      </main>
      <CtaFinal />
      <Contact />
      <Footer />
    </>
  );
}
