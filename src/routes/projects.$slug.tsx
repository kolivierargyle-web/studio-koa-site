import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { useParams } from '@tanstack/react-router';
import { Instagram } from 'lucide-react';
import shylaHeader from "@/assets/0-shyla-header.png";
import shylaLondonLogo from "@/assets/Shyla-london-logo.jpeg";
import shylaGrid1 from "@/assets/shyla-grid-1.png";
import shylaGrid2 from "@/assets/shyla-grid-2.png";
import shylaGrid3 from "@/assets/shyla-grid-3.png";
import shylaGrid4 from "@/assets/shyla-grid-4.png";
import shylaGrid5 from "@/assets/shyla-grid-5.png";
import shylaGrid6 from "@/assets/shyla-grid-6.png";

const gridImages = [shylaGrid1, shylaGrid2, shylaGrid3, shylaGrid4, shylaGrid5, shylaGrid6];

function ProjectPage() {
  const { slug } = useParams({ from: '/projects/$slug' });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (slug === 'shyla-london' || slug === 'shyla') {
    return (
      <main className="w-full bg-white">
        <section className={`w-full flex min-h-screen bg-white ${isMobile ? 'flex-col' : ''}`}>
          <div className={`${isMobile ? 'w-full' : 'w-3/4'} bg-white flex items-center justify-center overflow-hidden`}>
            <img
              src={shylaHeader}
              alt="Shyla London Hero"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>

          <div className={`${isMobile ? 'w-full py-12' : 'w-1/4 py-16'} flex flex-col items-center justify-center px-6 bg-white`}>
            <div className="text-center flex flex-col items-center gap-6">
              <h2 className={`${isMobile ? 'text-sm' : 'text-lg'} uppercase tracking-wider font-light`} style={{ fontFamily: 'Didact Gothic, sans-serif', color: '#000000' }}>
                Brand Shoot For
              </h2>
              <img
                src={shylaLondonLogo}
                alt="Shyla London Logo"
                className={`${isMobile ? 'h-48' : 'h-64'} object-contain`}
              />
            </div>
          </div>
        </section>

        <section className={`w-full bg-white ${isMobile ? 'px-5 py-20' : 'px-12 py-20'}`}>
          <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'}`} style={{ gap: '50px', justifyContent: 'start' }}>
            {gridImages.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Shyla Product ${idx + 1}`}
                className="object-cover"
                style={{ width: '1227.36px', height: '1534.2px' }}
                loading="lazy"
              />
            ))}
          </div>
        </section>

        <section className={`w-full bg-white flex items-center justify-center ${isMobile ? 'px-5 py-20' : 'px-12 py-20'}`}>
          <div className="text-center max-w-3xl">
            <p className="uppercase tracking-wider font-light" style={{ fontSize: isMobile ? '12px' : '15px', color: '#4D4D4D', fontFamily: 'Didact Gothic, sans-serif' }}>
              CREATIVE PRODUCTION: KOA STUDIO<br />
              PHOTOGRAPHY: SOFIA FARNESI
            </p>
          </div>
        </section>

        <footer id="contact" className="bg-ink text-paper" style={{ width: "100%", height: "273px" }}>
          <div>
            <div className="flex items-end justify-between px-[40px] py-11">
              <a href="https://www.instagram.com/_koa_studio/" target="_blank" rel="noreferrer" aria-label="Koa Studio on Instagram" className="transition-opacity hover:opacity-60">
                <Instagram className="h-[34px] w-[34px]" strokeWidth={1.5} />
              </a>
              <a href="mailto:kat@studio-koa.com" className="transition-opacity hover:opacity-60" style={{ fontFamily: "Didact Gothic, sans-serif", fontSize: "clamp(15px, 4vw, 20px)", fontWeight: 400, lineHeight: "normal", color: "#FFF" }}>
                kat@studio-koa.com
              </a>
            </div>
            <div className="flex items-center justify-between border-t-2 border-paper px-[45px] uppercase" style={{ fontFamily: "Didact Gothic, sans-serif", fontSize: "clamp(15px, 4vw, 20px)", fontWeight: 400, lineHeight: "normal", color: "#FFF", paddingTop: "62px", paddingBottom: "11px" }}>
              <span>London</span>
              <span>Berlin</span>
              <span>World Wide</span>
            </div>
          </div>
        </footer>
      </main>
    );
  }

  return (
    <main className="w-full h-screen flex items-center justify-center bg-white">
      <p className="text-gray-400">Project "{slug}" not yet implemented</p>
    </main>
  );
}

export const Route = createFileRoute('/projects/$slug')({
  component: ProjectPage,
});