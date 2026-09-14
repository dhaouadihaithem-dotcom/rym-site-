import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CtaFinal from "@/components/CtaFinal";
import Contact from "@/components/Contact";
import ProjectVisual from "@/components/ProjectVisual";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/data";

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

  return (
    <>
      <Nav />
      <main>
        {/* Intro */}
        <section className="px-6 pt-32 pb-16 sm:px-10 sm:pt-40 lg:px-14">
          <Reveal>
            <p className="text-sm tracking-[0.2em] text-ink-soft uppercase">
              {caseStudy.tagline}
            </p>
            <h1 className="mt-4 max-w-4xl font-serif text-5xl tracking-tight sm:text-7xl">
              {project.client}
            </h1>
            <p className="mt-6 text-sm text-ink-soft">{project.category}</p>
          </Reveal>
        </section>

        <Reveal>
          <div className="px-6 sm:px-10 lg:px-14">
            <ProjectVisual
              project={project}
              className="aspect-[4/3] sm:aspect-[16/9]"
            />
          </div>
        </Reveal>

        <div className="mx-auto flex max-w-3xl flex-col gap-24 px-6 py-24 sm:px-10 sm:py-32">
          {/* Context */}
          <Reveal>
            <h2 className="mb-4 font-serif text-2xl tracking-tight text-accent">
              Contexte
            </h2>
            <p className="text-lg text-ink-soft">{caseStudy.context}</p>
          </Reveal>

          {/* The challenge */}
          <Reveal>
            <h2 className="mb-4 font-serif text-2xl tracking-tight text-accent">
              Le défi
            </h2>
            <p className="text-lg text-ink-soft">{caseStudy.challenge}</p>
          </Reveal>

          {/* My approach */}
          <Reveal>
            <h2 className="mb-4 font-serif text-2xl tracking-tight text-accent">
              Mon approche
            </h2>
            <ul className="flex flex-col gap-3">
              {caseStudy.approach.map((item) => (
                <li
                  key={item}
                  className="border-l-2 border-accent/30 pl-4 text-lg text-ink-soft"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Visual direction */}
        <section className="px-6 sm:px-10 lg:px-14">
          <Reveal>
            <p className="mb-6 text-sm tracking-[0.2em] text-ink-soft uppercase">
              Direction visuelle
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mb-8 max-w-2xl text-lg text-ink-soft">
              {caseStudy.direction}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ProjectVisual
              project={project}
              className="aspect-[4/3] sm:aspect-[16/9]"
            />
          </Reveal>
        </section>

        {/* Mobile experience */}
        <section className="px-6 py-24 sm:px-10 sm:py-32 lg:px-14">
          <Reveal>
            <p className="mb-10 text-center text-sm tracking-[0.2em] text-ink-soft uppercase">
              Expérience mobile
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="mx-auto w-full max-w-[280px] overflow-hidden rounded-[2rem] border border-ink/15 bg-ink shadow-sm">
              {project.mobileImage ? (
                <div className="relative aspect-[9/19.5] w-full">
                  <Image
                    src={project.mobileImage}
                    alt={`${project.title} — version mobile`}
                    fill
                    className="object-cover"
                    sizes="280px"
                  />
                </div>
              ) : (
                <div className="flex aspect-[9/19.5] w-full items-center justify-center">
                  <p className="font-serif text-lg italic text-paper/70">
                    {project.client}
                  </p>
                </div>
              )}
            </div>
          </Reveal>
        </section>

        {/* Final result */}
        <section className="px-6 pb-24 sm:px-10 sm:pb-32 lg:px-14">
          <Reveal>
            <p className="mb-6 text-sm tracking-[0.2em] text-ink-soft uppercase">
              Résultat
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mb-8 max-w-2xl text-lg text-ink-soft">
              {caseStudy.result}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ProjectVisual
              project={project}
              className="aspect-[4/3] sm:aspect-[16/9]"
            />
          </Reveal>
          {project.liveUrl && (
            <Reveal delay={0.15}>
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
        </section>
      </main>
      <CtaFinal />
      <Contact />
      <Footer />
    </>
  );
}
