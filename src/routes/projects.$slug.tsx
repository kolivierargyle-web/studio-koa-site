import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import { projectBySlug, projects } from "@/lib/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projectBySlug(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Project unavailable — Koa Studio" }, { name: "robots", content: "noindex" }],
      };
    }
    const { project } = loaderData;
    const title = `${project.title} — Koa Studio`;
    return {
      meta: [
        { title },
        { name: "description", content: project.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: project.summary },
      ],
    };
  },
  component: ProjectPage,
});

function ProjectPage() {
  const { project } = Route.useLoaderData();
  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length]!;

  return (
    <main className="bg-paper text-ink">
      <nav className="sticky top-0 z-30 bg-ink">
        <div className="flex items-center justify-between px-4 py-3 text-[11px] uppercase tracking-[0.08em] text-paper sm:px-6 sm:text-xs">
          <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-60">
            <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2} />
            All work
          </Link>
          <a href="mailto:kat@studio-koa.com" className="transition-opacity hover:opacity-60">
            Contact
          </a>
        </div>
      </nav>

      <article>
        <img
          src={project.image}
          alt={`${project.title} — ${project.client}`}
          width={768}
          height={768}
          className="h-[52vh] min-h-[320px] w-full object-cover sm:h-[74vh]"
        />

        <header className="px-6 pt-14 sm:pt-20">
          <p className="text-center text-[11px] uppercase tracking-[0.18em] text-ink/50">
            {project.client} · {project.year}
          </p>
          <h1 className="mt-4 text-center font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>
          <p className="mt-4 text-center text-sm text-ink/60">{project.discipline}</p>
        </header>

        <section className="mx-auto max-w-2xl px-6 py-16 sm:py-20">
          <p className="text-center text-[15px] leading-relaxed sm:text-base">{project.summary}</p>
          <ul className="mt-12 space-y-2 text-center text-xs uppercase tracking-[0.08em] text-ink/50">
            {project.credits.map((credit) => (
              <li key={credit}>{credit}</li>
            ))}
          </ul>
        </section>
      </article>

      <footer className="bg-ink text-paper">
        <Link
          to="/projects/$slug"
          params={{ slug: next.slug }}
          className="group block px-6 py-20 text-center sm:py-28"
        >
          <span className="text-[11px] uppercase tracking-[0.18em] text-paper/50">Next project</span>
          <span className="mt-4 block font-display text-4xl font-bold tracking-tight transition-opacity group-hover:opacity-60 sm:text-5xl lg:text-6xl">
            {next.title}
          </span>
        </Link>
        <div className="grid grid-cols-3 border-t border-paper/15 px-4 py-4 text-[11px] uppercase tracking-[0.08em] sm:px-6">
          <span className="text-left">London</span>
          <span className="text-center">Berlin</span>
          <span className="text-right">World wide</span>
        </div>
      </footer>
    </main>
  );
}
