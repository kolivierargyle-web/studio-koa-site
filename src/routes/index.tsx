import { createFileRoute, Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import React from "react";

import heroPoster from "@/assets/hero-poster.jpg";
import headerFallback from "@/assets/01.Header_fallback_up.jpg";
import graphicFaster from "@/assets/graphic-faster.jpg";
import graphicNeon from "@/assets/graphic-neon.jpg";
import graphicRetro from "@/assets/graphic-retro.jpg";
import koaLogoWhite from "@/assets/koa_studio_-white.png";
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
  { kind: "image", slug: "shyla-london" },
  { kind: "image", slug: "terrace-hours" },
  { kind: "graphic", slug: "faster-than-you", src: graphicFaster, alt: "Faster than you." },
  { kind: "image", slug: "retire-rich" },

  { kind: "image", slug: "second-season" },
  { kind: "image", slug: "matchday" },
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
  { kind: "image", slug: "rider-in-style" },
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
  const [showIntroModal, setShowIntroModal] = React.useState(true);

  const closeModal = () => setShowIntroModal(false);

  return (
    <main className="bg-paper">
      {/* Title bar */}
      <header className="w-full bg-ink">
        <div className="flex h-[100px] items-center justify-center px-4">
          <img
            src={koaLogoWhite}
            alt="Koa Studio"
            style={{
              maxHeight: "40px",
              width: "auto"
            }}
          />
        </div>
      </header>

      {/* Hero */}
      <section className="relative w-full overflow-hidden bg-ink">
        <div className="relative aspect-video w-full">
          <img
            src={headerFallback}
            alt="Koa Studio"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <iframe
            src="https://player.vimeo.com/video/1223954801?background=1&autoplay=1&loop=1&muted=1&autopause=0&dnt=1"
            title="Koa Studio showreel"
            allow="autoplay; fullscreen; picture-in-picture"
            className="absolute inset-0 h-full w-full border-0"
          />
        </div>
      </section>

      {/* Nav bar */}
      <nav className="w-full bg-paper">
        <div className="flex items-center justify-between text-[24px] text-ink uppercase px-[33px] py-8" 
          style={{ fontFamily: "Didact Gothic, sans-serif", fontWeight: 400 }}>
          <div className="flex items-center gap-[40px]">
            <a href="#about" onClick={closeModal} className="transition-opacity hover:opacity-60">
              About
            </a>
            <a href="#services" onClick={closeModal} className="transition-opacity hover:opacity-60">
              Services
            </a>
          </div>
          <a href="#work" onClick={closeModal} className="transition-opacity hover:opacity-60 absolute left-1/2 transform -translate-x-1/2">
            Work
          </a>
          <div className="flex items-center gap-8">
            <a href="#contact" onClick={closeModal} className="transition-opacity hover:opacity-60">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Intro Modal */}
      {showIntroModal && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div 
            className="relative"
            style={{
              width: "1441px",
              height: "645px",
              backgroundColor: "rgba(255, 255, 255, 0.4)",
              backdropFilter: "blur(14px)",
              borderRadius: "57px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0",
              border: "1px solid rgba(255, 255, 255, 0.5)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute hover:opacity-60 transition-opacity"
              aria-label="Close modal"
              style={{ 
                top: "80px",
                right: "80px",
                background: "none", 
                border: "none", 
                cursor: "pointer",
                padding: "0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <svg 
                width="18" 
                height="17" 
                viewBox="0 0 30 27" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="1.41421" y1="1.41391" x2="28.5858" y2="26.5858" stroke="#C4FF4D" strokeWidth="4" strokeLinecap="round"/>
                <line x1="28.5858" y1="1.41391" x2="1.41421" y2="26.5858" stroke="#C4FF4D" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </button>
            <div style={{
              fontFamily: "Besley, serif",
              fontSize: "58px",
              lineHeight: "58px",
              textAlign: "center",
              fontWeight: 400,
              color: "#000",
              maxWidth: "90%",
              margin: "0",
            }}>
              <p style={{ margin: 0 }}>
                <span style={{ fontStyle: "italic" }}>Koa studio is a compact full-service</span><br />
                <span style={{ fontStyle: "italic" }}>creative direction & production studio.</span><br />
                Photography, video, motion & identity.<br />
                We build the right team for every project,<br />
                delivering impactful work without the<br />
                cost or complexity of a large agency.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Work grid */}
      <section id="work" aria-label="Selected work">
        <h2 className="sr-only">Selected work</h2>
        <div className="grid grid-cols-2 gap-0 sm:grid-cols-3 lg:grid-cols-4">
          {tiles.map((tile, i) => (
            <GridTile key={i} tile={tile} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-ink text-paper" style={{ width: "100%", height: "273px" }}>
        <div>
          <div className="flex items-end justify-between px-[40px] py-11">
            <a 
              href="https://www.instagram.com/_koa_studio/" 
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
                fontFamily: "Didact Gothic, sans-serif", 
                fontSize: "20px", 
                fontWeight: 400, 
                lineHeight: "normal", 
                color: "#FFF" 
              }}
            >
              kat@studio-koa.com
            </a>
          </div>
          <div 
            className="flex items-center justify-between border-t-2 border-paper px-[45px] uppercase" 
            style={{ 
              fontFamily: "Didact Gothic, sans-serif", 
              fontSize: "20px", 
              fontWeight: 400, 
              lineHeight: "normal", 
              color: "#FFF",
              paddingTop: "62px",
              paddingBottom: "11px"
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
