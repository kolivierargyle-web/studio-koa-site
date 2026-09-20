import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { useParams } from '@tanstack/react-router';
import { Instagram } from 'lucide-react';
import shylaHeader from "@/assets/0-shyla-header.png";
import shylaLondonLogo from "@/assets/Shyla-london-logo.png";
import shylaGrid1 from "@/assets/shyla-grid-1.png";
import shylaGrid2 from "@/assets/shyla-grid-2.png";
import shylaGrid3 from "@/assets/shyla-grid-3.png";
import shylaGrid4 from "@/assets/shyla-grid-4.png";
import shylaGrid5 from "@/assets/shyla-grid-5.png";

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
      <main className="w-full bg-white relative">
        {/* Logo Centered on Page */}
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
          <img
            src={shylaLondonLogo}
            alt="Shyla London"
            className="object-contain"
            style={{ width: '710px', height: '503px' }}
            loading="eager"
          />
        </div>

        {/* Hero Section - Full Width */}
        <section className="w-full min-h-screen bg-white flex items-center justify-center overflow-hidden">
          <img
            src={shylaHeader}
            alt="Shyla London Hero"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </section>

        {/* Image Grid Section */}
        <section className="w-full bg-white py-20">
          {/* Centered Image */}
          <div className="w-full flex justify-center mb-12">
            <img
              src={shylaGrid2}
              alt="Shyla Product 2"
              className="object-cover"
              style={{ width: '1227.36px', height: '1534.2px' }}
              loading="lazy"
            />
          </div>

          {/* Two Column Layout */}
          <div style={{ display: 'grid', gridTemplateColumns: '1227.36px 1227.36px', gap: '40px', justifyContent: 'start' }}>
            {/* Left Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <img
                src={shylaGrid4}
                alt="Shyla Product 4"
                className="object-cover"
                style={{ width: '1227.36px', height: '1534.2px' }}
                loading="lazy"
              />
              <img
                src={shylaGrid5}
                alt="Shyla Product 5"
                className="object-cover"
                style={{ width: '1227.36px', height: '1534.2px' }}
                loading="lazy"
              />
            </div>

            {/* Right Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <img
                src={shylaGrid3}
                alt="Shyla Product 3"
                className="object-cover"
                style={{ width: '1227.36px', height: '1534.2px' }}
                loading="lazy"
              />
              <img
                src={shylaGrid1}
                alt="Shyla Product 1"
                className="object-cover"
                style={{ width: '1227.36px', height: '1534.2px' }}
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Credits Section */}
        <section className={`w-full bg-white flex items-center justify-center ${isMobile ? 'px-5 py-20' : 'px-12 py-20'}`}>
          <div className="text-center max-w-3xl">
            <p className="uppercase tracking-wider font-light" style={{ fontSize: isMobile ? '12px' : '15px', color: '#4D4D4D', fontFamily: 'Didact Gothic, sans-serif' }}>
              CREATIVE PRODUCTION: KOA STUDIO<br />
              PHOTOGRAPHY: SOFIA FARNESI
            </p>
          </div>
        </section>

        {/* Footer */}
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