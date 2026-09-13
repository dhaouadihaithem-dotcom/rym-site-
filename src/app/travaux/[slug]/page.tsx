import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CtaFinal from "@/components/CtaFinal";
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

const blocks = (caseStudy: NonNullable<typeof projects[number]["caseStudy"]>) => [
  { label: "Contexte", content: caseStudy.context },
  { label: "Objectif", content: caseStudy.objective },
  { label: "Approche", content: caseStudy.approach },
  { label: "Direction visuelle", content: caseStudy.direction },
  { label: "UI & développement", content: caseStudy.ui },
  { label: "Résultat", content: caseStudy.result },
];

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
        <section className="px-6 pt-32 pb-16 sm:px-10 sm:pt-40 lg:px-14">
          <Reveal>
            <p className="text-sm tracking-[0.2em] text-ink-soft uppercase">
              {project.category} — {project.year}
            </p>
            <h1 className="mt-4 max-w-4xl font-serif text-4xl tracking-tight sm:text-6xl">
              {project.client}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink-soft">
              {project.summary}
            </p>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sm underline decoration-accent decoration-2 underline-offset-4"
              >
                Visiter le site en ligne ↗
              </a>
            )}
          </Reveal>
        </section>

        <Reveal>
          <div className="px-6 sm:px-10 lg:px-14">
            <ProjectVisual project={project} />
          </div>
        </Reveal>

        <section className="mx-auto max-w-3xl px-6 py-24 sm:px-10 sm:py-32">
          <div className="flex flex-col gap-16">
            {blocks(caseStudy).map((block) => (
              <Reveal key={block.label}>
                <h2 className="mb-4 font-serif text-2xl tracking-tight text-accent">
                  {block.label}
                </h2>
                {Array.isArray(block.content) ? (
                  <ul className="flex flex-col gap-3">
                    {block.content.map((item) => (
                      <li
                        key={item}
                        className="border-l-2 border-accent/30 pl-4 text-lg text-ink-soft"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-lg text-ink-soft">{block.content}</p>
                )}
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <CtaFinal />
      <Footer />
    </>
  );
}
