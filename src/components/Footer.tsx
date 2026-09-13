import { site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-ink px-6 pb-10 pt-4 text-paper sm:px-10 lg:px-14">
      <div className="flex flex-col gap-8 border-t border-paper/15 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-serif text-xl tracking-tight">{site.name}</p>
          <p className="mt-1 text-sm text-paper/60">{site.role}</p>
        </div>

        <div className="flex flex-col gap-2 text-sm sm:items-end">
          <a href={`mailto:${site.email}`} className="text-paper/80 hover:text-paper">
            {site.email}
          </a>
          <div className="flex gap-5">
            <a
              href={site.instagram.href}
              target="_blank"
              rel="noreferrer"
              className="text-paper/80 hover:text-paper"
            >
              {site.instagram.label}
            </a>
            <a
              href={site.linkedin.href}
              target="_blank"
              rel="noreferrer"
              className="text-paper/80 hover:text-paper"
            >
              {site.linkedin.label}
            </a>
          </div>
        </div>
      </div>
      <p className="pt-2 text-xs text-paper/40">
        © {new Date().getFullYear()} {site.name}. Tous droits réservés.
      </p>
    </footer>
  );
}
