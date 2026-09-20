import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Instagram } from "lucide-react";
import { projectBySlug } from "@/lib/projects";
import { useEffect, useState } from "react";

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <main className="w-full bg-white">
      {/* Hero Section */}
      <section className={`w-full flex min-h-screen bg-white ${isMobile ? 'flex-col' : ''}`}>
        {/* Hero Image - 75% width (desktop) / 100% (mobile) */}
        <div className={`${isMobile ? 'w-full min-h-96' : 'w-3/4'} bg-gray-100 flex items-center justify-center`}>
          {/* Placeholder for hero image - 2000.539px × 2500.674px */}
          <div className="text-gray-400 text-sm text-center px-4">Hero Image (2000.539px × 2500.674px)</div>
        </div>

        {/* Hero Content - 25% width (desktop) / 100% (mobile) */}
        <div className={`${isMobile ? 'w-full py-12' : 'w-1/4 py-16'} flex flex-col items-center justify-center px-6 bg-white`}>
          <div className="text-center">
            <h2 className={`${isMobile ? 'text-xs' : 'text-sm'} uppercase tracking-wider mb-8 font-didact font-light`}>
              Brand Shoot For
            </h2>
            <div className="font-didact">
              <h1 className={`${isMobile ? 'text-3xl' : 'text-4xl'} uppercase tracking-wider font-light leading-tight`}>
                {project.title}
              </h1>
              <p className={`${isMobile ? 'text-xs' : 'text-lg'} uppercase tracking-widest font-light opacity-60 mt-3`}>
                {project.client}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Grid Section */}
      <section className={`w-full bg-white ${isMobile ? 'px-5 py-20' : 'px-[166px] py-[145px]'}`}>
        <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-0 w-full`}>
          {(project.gallery ?? []).map((src, num) => (
            <div
              key={src}
              className="w-full bg-gray-100 flex items-center justify-center relative overflow-hidden"
              style={{ paddingBottom: '125%' }}
            >
              <img
                src={src}
                alt={`${project.title} image ${num + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Credits Section */}
      <section className={`w-full bg-white flex items-center justify-center ${isMobile ? 'px-5 py-20' : 'px-[166px] py-[145px]'}`}>
        <div className="text-center max-w-3xl">
          <div className="uppercase tracking-wider font-didact leading-[103%] font-light"
            style={{
              fontSize: isMobile ? '12px' : '15px',
              color: '#4D4D4D',
              fontFamily: 'Didact Gothic, sans-serif',
            }}
          >
            {project.credits.map((credit, i) => (
              <p key={credit} style={{ margin: i === 0 ? 0 : '8px 0 0 0' }}>
                {credit}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`w-full bg-black text-white ${isMobile ? 'px-5 py-16' : 'px-[166px] py-[145px]'} text-center`}>
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col gap-4 mb-6">
            
              href="https://instagram.com/koastudio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-widest hover:text-[#BA8CFF] transition-colors"
            >
              INSTAGRAM
            </a>
            
              href="mailto:hello@koastudio.com"
              className="text-xs tracking-widest hover:text-[#BA8CFF] transition-colors"
            >
              EMAIL
            </a>
          </div>
          <div
            className="uppercase tracking-widest opacity-80 font-light"
            style={{ fontSize: isMobile ? '10px' : '12px' }}
          >
            LONDON — BERLIN — WORLD WIDE
          </div>
        </div>
      </footer>
    </main>
  );
}