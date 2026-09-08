import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Instagram } from "lucide-react";
import { projectBySlug } from "@/lib/projects";

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
        <div
          className="flex flex-col items-center bg-paper px-[clamp(1rem,7vw,350px)] pt-0"
          style={{ marginBottom: "72px" }}
        >
          {(project.heroes ?? [project.image]).map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`${project.title} — ${project.client}`}
              className="aspect-[4/5] w-full max-w-[795px] object-cover"
              loading={i === 0 ? "eager" : "lazy"}
            />
          ))}
        </div>

        <header className="bg-paper px-6 text-center" style={{ marginBottom: "46px" }}>
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-[50px]">
            {project.title}
          </h1>
        </header>

        <section
          className="mx-auto max-w-[829px] bg-paper px-6 text-center"
          style={{ marginBottom: "114px" }}
        >
          <p className="whitespace-pre-line text-[25px] font-normal leading-[140%] text-ink">
            {project.summary}
          </p>
        </section>

        {project.gallery && project.gallery.length > 0 && (
          <section className="bg-paper px-2 sm:px-3 lg:px-0">
            <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-[10px] sm:gap-[15px] lg:grid-cols-3">
              {project.gallery.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt={`${project.title} — ${project.client}`}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
              ))}
            </div>
          </section>
        )}

        <section className="mx-auto max-w-2xl bg-paper px-6 py-16 text-center sm:py-20">
          <ul className="space-y-2 text-xs uppercase tracking-[0.08em] text-ink/50">
            {project.credits.map((credit) => (
              <li key={credit}>{credit}</li>
            ))}
          </ul>
        </section>
      </article>

      <footer className="bg-ink text-paper">
        <div className="px-[38px]" style={{ paddingTop: "188px", paddingBottom: "26px" }}>
          <p
            className="font-display text-[32px] font-bold leading-normal text-paper"
            style={{ marginBottom: "110px", textAlign: "center" }}
          >
            Koa Studio
          </p>

          <div
            className="flex items-center justify-between border-b border-t border-paper"
            style={{ padding: "49px 0", marginBottom: "52px" }}
          >
            
              href="https://www.instagram.com/_koa_studio/"
              target="_blank"
              rel="noreferrer"
              aria-label="Koa Studio on Instagram"
              className="transition-opacity hover:opacity-60"
            >
              <Instagram className="h-[20px] w-[20px]" strokeWidth={1.5} />
            </a>
            
              href="mailto:kat@studio-koa.com"
              className="text-[14px] font-normal leading-normal transition-opacity hover:opacity-60"
            >
              kat@studio-koa.com
            </a>
          </div>

          <div className="flex items-center justify-between text-[12px] font-[600] uppercase leading-[18px] tracking-[0.08em]">
            <span>London</span>
            <span>Berlin</span>
            <span>World Wide</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
