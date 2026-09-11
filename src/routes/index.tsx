import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from 'react';
import { Instagram } from "lucide-react";

import heroPoster from "@/assets/hero-poster.jpg";
import headerFallback from "@/assets/01.Header_fallback_up.jpg";
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
  const [activeNav, setActiveNav] = useState(null);

const handleNavClick = (e, section) => {
  e.preventDefault();
  setActiveNav(section);
  const element = document.getElementById(section);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
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
{/* Intro */}
<section id="about" className="px-[clamp(0.44rem,2.3vw,33px)] py-[clamp(5.52rem,16.5vw,250px)]">
  <div className="mx-auto flex min-h-[199px] max-w-full items-center justify-center">
    <div className="text-center w-full">
      <p className="text-xl sm:text-3xl md:text-[4.65rem] leading-[1.1] max-w-[750px] md:max-w-[3000px]" style={{ fontFamily: 'Laurentian Condensed, serif', fontWeight: '500' }}>
        Koa studio is a compact full-service<br className="hidden md:block" />creative direction & production studio.<br className="hidden md:block" />Photography, video, motion & identity.<br className="hidden md:block" />We build the right team for every project,<br className="hidden md:block" />delivering impactful work without the<br className="hidden md:block" />cost or complexity of a large agency.
      </p>
    </div>
  </div>
</section>
{/* Navigation Bar */}
<section className="w-full bg-black">
  <nav className="flex items-center justify-center px-[20px] sm:px-[40px] py-[16px] relative">
    <div className="flex gap-[8px] sm:gap-[32px] absolute left-[20px] sm:left-[40px]">
      <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="text-[10px] sm:text-sm md:text-[1.62rem] text-white hover:text-[#BB95FF] cursor-pointer no-underline">About</a>
      <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="text-[10px] sm:text-sm md:text-[1.62rem] text-white hover:text-[#BB95FF] cursor-pointer no-underline">Services</a>
    </div>
    <div className="flex gap-[8px] sm:gap-[32px]">
      <a href="#work" onClick={(e) => handleNavClick(e, 'work')} className="text-[10px] sm:text-sm md:text-[1.62rem] text-white hover:text-[#BB95FF] cursor-pointer no-underline">Work</a>
    </div>
    <div className="flex gap-[8px] sm:gap-[32px] absolute right-[20px] sm:right-[40px]">
      <a href="#spotlight" onClick={(e) => handleNavClick(e, 'spotlight')} className="text-[10px] sm:text-sm md:text-[1.62rem] text-white hover:text-[#BB95FF] cursor-pointer no-underline">Creative spotlight</a>
      <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="text-[10px] sm:text-sm md:text-[1.62rem] text-white hover:text-[#BB95FF] cursor-pointer no-underline">Contact</a>
    </div>
  </nav>
</section>
{/* Work grid */}
<section id="work" aria-label="Selected work" className="w-full px-0">
  <div className="w-full">
    <h2 className="sr-only">Selected work</h2>
    <div className="grid grid-cols-2 gap-0 sm:grid-cols-3 lg:grid-cols-4">
      {tiles.map((tile, i) => (
        <GridTile key={i} tile={tile} />
      ))}
    </div>
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
                fontFamily: "Poppins, sans-serif",
                fontSize: "18px",
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
              fontSize: "20px",
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
