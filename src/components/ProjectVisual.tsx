import Image from "next/image";
import type { Project } from "@/lib/data";

/**
 * Affiche le visuel du projet. Si `image` est fourni dans les données du
 * projet, on affiche la vraie capture. Sinon, on retombe sur un panneau
 * texte en attendant les visuels réels (jamais de faux mockup inventé).
 */
export default function ProjectVisual({ project }: { project: Project }) {
  if (project.image) {
    return (
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink sm:aspect-[16/10]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 1200px, 100vw"
        />
      </div>
    );
  }

  return (
    <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden bg-ink sm:aspect-[16/10]">
      <p className="font-serif text-3xl italic tracking-tight text-paper/80 sm:text-5xl">
        {project.client}
      </p>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.06),transparent_60%)]" />
    </div>
  );
}
