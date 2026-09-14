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
  const gallery = project.gallery ?? [];
  const mobileShots = project.mobileGallery ?? (
    project.mobileImage ? [{ src: project.mobileImage, caption: project.client }] : []
  );

  return (
    <>
      <Nav />
      <main>
        {/* Intro */}
        <section className="px-6 pt-32 pb-12 sm:px-10 sm:pt-40 lg:px-14">
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

        {/* Hero visual */}
        <Reveal>
          <div className="px-6 sm:px-10 lg:px-14">
            <ProjectVisual
              project={project}
              className="aspect-[4/3] sm:aspect-[16/9]"
            />
          </div>
        </Reveal>

        {/* Visual direction — gallery */}
        <section className="px-6 py-16 sm:px-10 sm:py-24 lg:px-14">
          <Reveal>
            <p className="mb-8 text-sm tracking-[0.2em] text-ink-soft uppercase">
              Direction visuelle
            </p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {(gallery.length > 0
              ? gallery
              : [0, 1].map((i) => ({ src: "", caption: `${project.client} ${i + 1}` }))
            ).map((item, i) => (
              <Reveal key={item.src || item.caption} delay={i * 0.06}>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-ink">
                  {item.src ? (
                    <Image
                      src={item.src}
                      alt={item.caption}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 600px, 100vw"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <p className="font-serif text-2xl italic text-paper/70">
                        {project.client}
                      </p>
                    </div>
                  )}
                </div>
                <p className="mt-2 text-xs text-ink-soft">{item.caption}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Mobile experience */}
        <section className="px-6 py-16 sm:px-10 sm:py-24 lg:px-14">
          <Reveal>
            <p className="mb-10 text-center text-sm tracking-[0.2em] text-ink-soft uppercase">
              Expérience mobile
            </p>
          </Reveal>
          <div className="flex flex-wrap justify-center gap-6">
            {(mobileShots.length > 0
              ? mobileShots
              : [{ src: "", caption: project.client }]
            ).map((shot, i) => (
              <Reveal key={shot.src || i} delay={i * 0.08}>
                <div className="w-[220px] overflow-hidden rounded-[1.75rem] border border-ink/15 bg-ink shadow-sm">
                  {shot.src ? (
                    <div className="relative aspect-[9/19.5] w-full">
                      <Image
                        src={shot.src}
                        alt={shot.caption}
                        fill
                        className="object-cover"
                        sizes="220px"
                      />
                    </div>
                  ) : (
                    <div className="flex aspect-[9/19.5] w-full items-center justify-center">
                      <p className="font-serif text-base italic text-paper/70">
                        {project.client}
                      </p>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Short explanations */}
        <section className="mx-auto max-w-5xl px-6 py-16 sm:px-10 sm:py-24">
          <div className="grid gap-10 sm:grid-cols-3">
            <Reveal>
              <h2 className="mb-3 font-serif text-xl tracking-tight text-accent">
                Contexte
              </h2>
              <p className="text-ink-soft">{caseStudy.context}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mb-3 font-serif text-xl tracking-tight text-accent">
                Le défi
              </h2>
              <p className="text-ink-soft">{caseStudy.challenge}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mb-3 font-serif text-xl tracking-tight text-accent">
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
