import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Instagram } from "lucide-react";

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
        meta: [
          { title: "Project unavailable — Koa Studio" },
          { name: "robots", content: "noindex" },
        ],
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
          <Link
            to="/"
            className="flex items-center gap-2 transition-opacity hover:opacity-60"
          >
            <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2} />
            All work
          </Link>
          
            href="mailto:kat@studio-koa.com"
            className="transition-opacity hover:opacity-60"
          >
            Contact
          </a>
        </div>
      </nav>

      <article>
        <div className="flex flex-col items-center px-[clamp(1rem,7vw,350px)] pt-[clamp(3rem,10vw,148px)]">
          {(project.heroes ?? [project.image]).map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`${project.title} — ${project.client}`}
              className="aspect-[4/5] w-full max-w-[795px] object-cover mb-4 last:mb-0"
              loading={i === 0 ? "eager" : "lazy"}
            />
          ))}
        </div>

        <header className="px-6 pt-14 sm:pt-20">
          <h1 className="text-center font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-[50px]">
            {project.title}
          </h1>
        </header>

        <section className="mx-auto max-w-[829px] px-6 pt-[25px] pb-[89px]">
          <p className="whitespace-pre-line text-center text-[25px] font-normal leading-[140%] text-ink">
            {project.summary}
          </p>
        </section>

        {project.gallery && project.gallery.length > 0 && (
          <section className="grid grid-cols-2 gap-2 px-2 sm:gap-3 sm:px-3 lg:grid-cols-3">
            {project.gallery.map((src) => (
              <img
                key={src}
                src={src}
                alt={`${project.title} — ${project.client}`}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            ))}
          </section>
        )}

        <section className="mx-auto max-w-2xl px-6 py-16 sm:py-20">
          <ul className="space-y-2 text-center text-xs uppercase tracking-[0.08em] text-ink/50">
            {project.credits.map((credit) => (
              <li key={credit}>{credit}</li>
            ))}
          </ul>
        </section>
      </article>

      <footer className="bg-ink text-paper">
        <div className="px-6 pb-[27px] pt-[100px] text-center">
          <p className="font-display text-[50px] font-bold leading-normal text-paper">
            Koa Studio
          </p>
        </div>
        <div>
          <div className="flex items-end justify-between px-[45px] py-11">
            
              href="https://www.instagram.com/_koa_studio/"
              target="_blank"
              rel="noreferrer"
              aria-label="Koa Studio on Instagram"
              className="transition-opacity hover:opacity-60"
            >
              <Instagram className="h-[34px] w-[34px]" strokeWidth={1.5} />
            </a>
            
              href="mailto:kat@studio-koa.com"
              className="text-[20px] font-medium leading-normal transition-opacity hover:opacity-60"
            >
              kat@studio-koa.com
            </a>
          </div>
          <div className="flex items-center justify-between border-t-2 border-paper px-[45px] py-11 text-[24px] font-normal uppercase leading-[36px]">
            <span>London</span>
            <span>Berlin</span>
            <span>World Wide</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
