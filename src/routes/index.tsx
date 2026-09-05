import { createFileRoute, Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";

import heroPoster from "@/assets/hero-poster.jpg";
import graphicFaster from "@/assets/graphic-faster.jpg";
import graphicNeon from "@/assets/graphic-neon.jpg";
import graphicRetro from "@/assets/graphic-retro.jpg";
import { projects, projectBySlug } from "@/lib/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Koa Studio — Creative Direction & Production" },
      {
        name: "description",
        content:
          "Koa Studio is a full-service creative direction and production studio. Concept to final cut: photography, video, motion and brand identity.",
      },
      { property: "og:title", content: "Koa Studio — Creative Direction & Production" },
      {
        property: "og:description",
        content:
          "Concept to final cut. Photography, video and brand identity, without the cost or complexity of a large agency.",
      },
    ],
  }),
  component: Index,
});

type Tile =
  | { kind: "image"; slug: string }
  | { kind: "graphic"; slug: string; src: string; alt: string }
  | { kind: "blank" };

const tiles: Tile[] = [
  { kind: "image", slug: "quiet-gold" },
  { kind: "image", slug: "terrace-hours" },
  { kind: "graphic", slug: "faster-than-you", src: graphicFaster, alt: "Faster than you." },
  { kind: "image", slug: "retire-rich" },

  { kind: "image", slug: "matchday" },
  { kind: "image", slug: "second-season" },
  { kind: "image", slug: "hold-form" },
  { kind: "image", slug: "first-touch" },

  { kind: "image", slug: "night-tailoring" },
  { kind: "image", slug: "wave-print" },
  { kind: "image", slug: "chocolate-capital" },
  { kind: "image", slug: "kit-still-life" },
 

  { kind: "image", slug: "table-for-one" },
  { kind: "image", slug: "delivered-by-magic" },
  { kind: "graphic", slug: "delivered-by-magic", src: graphicNeon, alt: "Gorillas doorstep delivery" },
  { kind: "image", slug: "second-glass" },

  { kind: "graphic", slug: "faster-than-you", src: graphicRetro, alt: "Gorillas retro grid" },
  { kind: "image", slug: "faster-than-you" },
  { kind: "image", slug: "own-blend" },
  { kind: "blank" },
];


function TileLink({
  slug,
  className,
  children,
}: {
  slug: string;
  className?: string;
  children: React.ReactNode;
}) {
  const project = projectBySlug(slug);
  return (
    <Link
      to="/projects/$slug"
      params={{ slug }}
      aria-label={project ? `${project.title} — ${project.client}` : slug}
      className={`group relative block aspect-[153/191] overflow-hidden ${className ?? ""}`}
    >
      {children}
    </Link>
  );
}

function GridTile({ tile }: { tile: Tile }) {
  if (tile.kind === "blank") {
    return <div className="aspect-[153/191] bg-ink" aria-hidden="true" />;
  }

  if (tile.kind === "graphic") {
    return (
      <TileLink slug={tile.slug} className="bg-ink">
        <img
          src={tile.src}
          alt={tile.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <span className="pointer-events-none absolute inset-0 bg-paper/0 transition-colors duration-500 group-hover:bg-paper/10" />
      </TileLink>
    );
  }

  const project = projectBySlug(tile.slug)!;

  return (
    <TileLink slug={tile.slug}>
      <img
        src={project.image}
        alt={`${project.title} — ${project.client}`}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />
      <span className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/20" />
    </TileLink>
  );
}

function Index() {
  return (
    <main className="bg-paper">
      {/* Title bar */}
      <header className="w-full bg-ink">
        <div className="flex h-[100px] items-center justify-center px-4">
          <h1
            className="text-center text-paper"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "clamp(1.5rem, 5vw, 40px)",
              fontWeight: 700,
              lineHeight: "normal",
            }}
          >
            Koa Studio
          </h1>
        </div>
      </header>

      {/* Hero */}
      <section className="relative w-full overflow-hidden bg-ink">
        <div className="relative aspect-video w-full">
          <iframe
            src="https://player.vimeo.com/video/1223954801?background=1&autoplay=1&loop=1&muted=1&autopause=0&dnt=1"
            title="Koa Studio showreel"
            allow="autoplay; fullscreen; picture-in-picture"
            className="absolute inset-0 h-full w-full border-0"
          />
        </div>
      </section>

      {/* Nav bar */}
      <nav className="sticky top-0 z-30 bg-ink">
        <div className="flex items-center justify-between px-4 py-[15px] text-[18px] font-medium text-paper sm:px-6">
          <div className="flex items-center">
            <a href="#about" className="transition-opacity hover:opacity-60">
              About
            </a>
            <span className="w-[45px] h-[22px]" aria-hidden="true" />
            <a href="#services" className="transition-opacity hover:opacity-60">
              Services
            </a>
          </div>
          <div className="flex items-center">
            <a href="#work" className="transition-opacity hover:opacity-60">
              Creative spotlight
            </a>
            <span className="w-[45px] h-[22px]" aria-hidden="true" />
            <a href="#contact" className="transition-opacity hover:opacity-60">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Intro */}
      <section id="about" className="px-[clamp(1.5rem,5.2vw,75px)] py-[clamp(5rem,14.8vw,213px)]">
        <h2 className="sr-only">About Koa Studio</h2>
        <div className="mx-auto flex min-h-[306px] max-w-[1296px] items-center justify-center">
          <p
            id="services"
            className="text-center text-ink"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "clamp(1.25rem, 3.5vw, 40px)",
              fontWeight: 400,
              lineHeight: "1.02",
            }}
          >
            Koa studio is a full-service creative direction
            <br />
            &amp; production studio. From concept to final cut.
            <br />
            Photography, video, motion and brand identity.
            <br />
            We build the right team for every project,
            <br />
            delivering impactful work without the cost
            <br />
            or complexity of a large agency.
          </p>
        </div>
      </section>

      {/* Work grid */}
      <section id="work" aria-label="Selected work">
        <h2 className="sr-only">Selected work</h2>
        <div className="grid grid-cols-2 gap-1s m:grid-cols-3 lg:grid-cols-4">
          {tiles.map((tile, i) => (
            <GridTile key={i} tile={tile} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-ink text-paper">
        <div className="px-6 pb-[27px] pt-[177px] text-center">
          <p
            className="font-display text-paper"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "40px",
              fontWeight: 700,
              lineHeight: "normal",
            }}
          >
            Koa Studio
          </p>
        </div>
        <div>
          <div
            className="flex items-end justify-between px-[40px] py-11"
          >
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Koa Studio on Instagram"
              className="transition-opacity hover:opacity-60"
            >
              <Instagram className="h-[34px] w-[34px]" strokeWidth={1.5} />
            </a>
            <a
              href="mailto:kat@studio-koa.com"
              className="transition-opacity hover:opacity-60"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "20px",
                fontWeight: 500,
                lineHeight: "normal",
              }}
            >
              kat@studio-koa.com
            </a>
          </div>
          <div
            className="flex items-center justify-between border-t-2 border-paper px-[45px] py-11 uppercase"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "24px",
              fontWeight: 400,
              lineHeight: "normal",
            }}
          >
            <span>London</span>
            <span>Berlin</span>
            <span>World Wide</span>
          </div>
        </div>
      </footer>
      <p className="sr-only">{projects.length} projects</p>
    </main>
  );
}
