import Image from "next/image";
import type { Project } from "@/lib/data";

/**
 * Affiche le visuel du projet. Si `image` est fourni dans les données du
 * projet, on affiche la vraie capture. Sinon, on retombe sur un panneau
 * texte en attendant les visuels réels (jamais de faux mockup inventé).
 */
export default function ProjectVisual({
  project,
  className = "aspect-[4/3] sm:aspect-[16/10]",
}: {
  project: Project;
  className?: string;
}) {
  if (project.image) {
    return (
      <div className={`relative w-full overflow-hidden bg-ink ${className}`}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 1200px, 100vw"
          priority
        />
      </div>
    );
  }

  return (
    <div
      className={`relative flex w-full items-center justify-center overflow-hidden bg-ink ${className}`}
    >
      <p className="font-serif text-4xl italic tracking-tight text-paper/80 sm:text-6xl">
        {project.client}
      </p>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.06),transparent_60%)]" />
    </div>
  );
}
