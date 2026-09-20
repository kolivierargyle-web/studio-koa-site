import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Instagram } from "lucide-react";
import { projectBySlug } from "@/lib/projects";
import creditTextShyla from "@/assets/credit_text_shyla.png";
import creditTextTR from "../assets/tr-urban-lifestyle/credit_text_TR-Urban-LS.png";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import carouselImage1 from "@/assets/tr-urban-lifestyle/TR-urban-LS-carousel image 1.png";
import carouselImage2 from "@/assets/tr-urban-lifestyle/TR-urban-LS-carousel image 2.png";
import carouselImage3 from "@/assets/tr-urban-lifestyle/TR-urban-LS-carousel image 3.png";
import carouselImage4 from "@/assets/tr-urban-lifestyle/TR-urban-LS-carousel image 4.png";
import carouselImage5 from "@/assets/tr-urban-lifestyle/TR-urban-LS-carousel image 5.png";
import carouselImage6 from "@/assets/tr-urban-lifestyle/TR-urban-LS-carousel image 6.png";
import carouselImage7 from "@/assets/tr-urban-lifestyle/TR-urban-LS-carousel image 7.png";
import carouselImage8 from "@/assets/tr-urban-lifestyle/TR-urban-LS-carousel image 8.png";
import carouselImage9 from "@/assets/tr-urban-lifestyle/TR-urban-LS-carousel image 9.png";
import carouselImage10 from "@/assets/tr-urban-lifestyle/TR-urban-LS-carousel image 10.png";


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

{project.slug === "tr-urban-lifestyle" ? (
  <div className="flex flex-col items-center bg-paper mb-[72px]">
    <div className="w-full">
      <iframe
        src="https://player.vimeo.com/video/1194035603"
        width="100%"
        height="600"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        className="w-full"
        style={{
          aspectRatio: "16 / 9",
          height: "auto",
        }}
      />
    </div>
  </div>
) : (
  <div className="flex flex-col items-center bg-paper px-[clamp(1rem,7vw,350px)] pt-0 mb-[72px]">
    {(project.heroes ?? [project.image]).map((src, i) => (
      <img ... />
    ))}
  </div>
)}
{project.slug === "tr-urban-lifestyle" && (
  <div className="w-full bg-paper py-16">
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      className="w-full"
      style={{
        maxWidth: "100%",
      }}
    >
      <SwiperSlide>
        <img src={carouselImage1} alt="Carousel 1" style={{ width: "100%", height: "auto" }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={carouselImage2} alt="Carousel 2" style={{ width: "100%", height: "auto" }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={carouselImage3} alt="Carousel 3" style={{ width: "100%", height: "auto" }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={carouselImage4} alt="Carousel 4" style={{ width: "100%", height: "auto" }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={carouselImage5} alt="Carousel 5" style={{ width: "100%", height: "auto" }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={carouselImage6} alt="Carousel 6" style={{ width: "100%", height: "auto" }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={carouselImage7} alt="Carousel 7" style={{ width: "100%", height: "auto" }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={carouselImage8} alt="Carousel 8" style={{ width: "100%", height: "auto" }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={carouselImage9} alt="Carousel 9" style={{ width: "100%", height: "auto" }} />
      </SwiperSlide>
      <SwiperSlide>
       <img src={carouselImage10} alt="Carousel 10" style={{ width: "100%", height: "auto" }} />
      </SwiperSlide>
    </Swiper>
  </div>
)}
{project.slug === "tr-urban-lifestyle" && (
  <div className="bg-paper py-10 text-center w-full" style={{ marginTop: "150px" }}>
    <img 
      src={creditTextTR} 
      alt="Trade Republic Urban Lifestyle Credits" 
      style={{ maxWidth: "100%", height: "auto", width: "100%" }}
    />
  </div>
)}
        {project.slug === "shyla-london" && project.gallery && project.gallery.length > 0 && (
          <section className="bg-paper flex justify-center px-4 sm:px-6" style={{ marginBottom: "220px" }}>
            <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "40px",
            }}>
              {/* Grid 2 - centered */}
              <img
                src={project.gallery[1]}
                alt={`${project.title} gallery`}
                loading="lazy"
                style={{
                  width: "1227.36px",
                  height: "1534.2px",
                  objectFit: "cover",
                  maxWidth: "100%",
                  height: "auto",
                }}
              />

              {/* Grid 4 & 3 row */}
              <div style={{
                display: "flex",
                gap: "40px",
                justifyContent: "flex-start",
                width: "100%",
                maxWidth: "2494.72px",
              }}>
                {/* Grid 4 - left */}
                <img
                  src={project.gallery[3]}
                  alt={`${project.title} gallery`}
                  loading="lazy"
                  style={{
                    width: "1227.36px",
                    height: "1534.2px",
                    objectFit: "cover",
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />

                {/* Grid 3 - right */}
                <img
                  src={project.gallery[2]}
                  alt={`${project.title} gallery`}
                  loading="lazy"
                  style={{
                    width: "1227.36px",
                    height: "1534.2px",
                    objectFit: "cover",
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </div>

              {/* Grid 5 & 1 row */}
              <div style={{
                display: "flex",
                gap: "40px",
                justifyContent: "flex-start",
                width: "100%",
                maxWidth: "2494.72px",
              }}>
                {/* Grid 5 - left */}
                <img
                  src={project.gallery[4]}
                  alt={`${project.title} gallery`}
                  loading="lazy"
                  style={{
                    width: "1227.36px",
                    height: "1534.2px",
                    objectFit: "cover",
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />

                {/* Grid 1 - right */}
                <img
                  src={project.gallery[0]}
                  alt={`${project.title} gallery`}
                  loading="lazy"
                  style={{
                    width: "1227.36px",
                    height: "1534.2px",
                    objectFit: "cover",
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </div>
            </div>
          </section>
        )}

        {project.slug !== "shyla-london" && project.gallery && project.gallery.length > 0 && (
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
<section className="bg-paper py-4 text-center" style={{ marginTop: "50px", width: "100%" }}>
  <img
    src={creditTextShyla}
    alt="Credits"
    style={{
      maxWidth: "100%",
      height: "auto",
      width: "100%",
    }}
  />
</section>
      </article>

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
                fontSize: "clamp(15px, 4vw, 20px)", 
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
              fontSize: "clamp(15px, 4vw, 20px)", 
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
    </main>
  );
}