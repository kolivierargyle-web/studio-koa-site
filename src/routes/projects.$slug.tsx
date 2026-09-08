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
        <div className="flex flex-col items-center bg-paper px-[clamp(1rem,7vw,350px)] pt-0 mb-[72px]">
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

        <header className="bg-paper px-6 text-center mb-[56px]">
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-[50px]">
            {project.title}
          </h1>
        </header>

        <section className="mx-auto max-w-[829px] bg-paper px-6 text-center mb-[114px]">
          <p className="whitespace-pre-line text-[20px] font-normal leading-[140%] text-ink">
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

      <footer id="contact" className="bg-ink text-paper">
        <div className="px-6 pb-[27px] pt-[177px] text-center">
          <p className="font-display text-paper" style={{ fontFamily: "Poppins, sans-serif", fontSize: "40px", fontWeight: 700, lineHeight: "normal" }}>
            Koa Studio
          </p>
        </div>
        <div>
          <div className="flex items-end justify-between px-[40px] py-11">
            <a href="https://www.instagram.com/_koa_studio/" target="_blank" rel="noreferrer" aria-label="Koa Studio on Instagram" className="transition-opacity hover:opacity-60">
              <Instagram className="h-[34px] w-[34px]" strokeWidth={1.5} />
            </a>
            <a href="mailto:kat@studio-koa.com" className="transition-opacity hover:opacity-60" style={{ fontFamily: "Poppins, sans-serif", fontSize: "18px", fontWeight: 500, lineHeight: "normal" }}>
              kat@studio-koa.com
            </a>
          </div>
          <div className="flex items-center justify-between border-t-2 border-paper px-[45px] py-11 uppercase" style={{ fontFamily: "Poppins, sans-serif", fontSize: "20px", fontWeight: 400, lineHeight: "normal" }}>
            <span>London</span>
            <span>Berlin</span>
            <span>World Wide</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
