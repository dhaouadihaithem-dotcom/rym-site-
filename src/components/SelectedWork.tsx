import Link from "next/link";
import Reveal from "./Reveal";
import ProjectVisual from "./ProjectVisual";
import { projects } from "@/lib/data";

export default function SelectedWork() {
  const [featured, ...rest] = projects;

  return (
    <section id="travaux" className="px-6 py-28 sm:px-10 sm:py-36 lg:px-14">
      <Reveal>
        <div className="mb-14 flex items-end justify-between sm:mb-20">
          <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">
            Selected Work
          </h2>
          <span className="hidden text-sm text-ink-soft sm:block">
            {String(projects.length).padStart(2, "0")} projets
          </span>
        </div>
      </Reveal>

      <Reveal>
        <Link href={`/travaux/${featured.slug}`} className="group block">
          <ProjectVisual project={featured} />
          <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="font-serif text-2xl tracking-tight transition-colors group-hover:text-accent sm:text-3xl">
              {featured.client}
            </h3>
            <span className="text-sm text-ink-soft">
              {featured.category} — {featured.year}
            </span>
          </div>
          <p className="mt-3 max-w-2xl text-ink-soft">{featured.summary}</p>
          <span className="mt-4 inline-flex items-center gap-2 text-sm text-ink underline decoration-accent decoration-2 underline-offset-4">
            Voir l&apos;étude de cas
          </span>
        </Link>
      </Reveal>

      <div className="mt-20 grid gap-10 sm:mt-28 sm:grid-cols-2">
        {rest.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.1}>
            <div className="group">
              <ProjectVisual project={project} />
              <div className="mt-5 flex items-baseline justify-between">
                <h3 className="font-serif text-xl tracking-tight text-ink-soft">
                  {project.client}
                </h3>
                <span className="text-sm text-ink-soft/70">
                  {project.category}
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
