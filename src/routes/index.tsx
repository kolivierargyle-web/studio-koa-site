import React from "react";
import { useNavigate } from "@tanstack/react-router";
import koaLogoWhite from "@/assets/koa_studio_-white.png";
import headerFallback from "@/assets/header-fallback.jpg";
import { Instagram } from "lucide-react";

export function Index() {
  const [showIntroModal, setShowIntroModal] = React.useState(true);
  const navigate = useNavigate();

  const closeModal = () => {
    setShowIntroModal(false);
  };

  return (
    <main className="bg-paper relative">
      {/* Intro Modal */}
      {showIntroModal && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div 
            className="relative w-full max-w-[1441px]"
            style={{
              aspectRatio: "1441/645",
              backgroundColor: "rgba(255, 255, 255, 0.4)",
              backdropFilter: "blur(14px)",
              borderRadius: "57px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(255, 255, 255, 0.5)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile close button only */}
            <button
              onClick={closeModal}
              className="md:hidden absolute hover:opacity-60 transition-opacity"
              aria-label="Close modal"
              style={{ 
                top: "20px",
                right: "20px",
                background: "none", 
                border: "none", 
                cursor: "pointer",
                padding: "0",
              }}
            >
              <svg 
                width="9" 
                height="8" 
                viewBox="0 0 30 27" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="1.41421" y1="1.41391" x2="28.5858" y2="26.5858" stroke="#C4FF4D" strokeWidth="4" strokeLinecap="round"/>
                <line x1="28.5858" y1="1.41391" x2="1.41421" y2="26.5858" stroke="#C4FF4D" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </button>

            {/* Desktop close button only */}
            <button
              onClick={closeModal}
              className="hidden md:flex absolute hover:opacity-60 transition-opacity"
              aria-label="Close modal"
              style={{ 
                top: "50px",
                right: "50px",
                background: "none", 
                border: "none", 
                cursor: "pointer",
                padding: "0",
              }}
            >
              <svg 
                width="27" 
                height="26" 
                viewBox="0 0 30 27" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="1.41421" y1="1.41391" x2="28.5858" y2="26.5858" stroke="#C4FF4D" strokeWidth="4" strokeLinecap="round"/>
                <line x1="28.5858" y1="1.41391" x2="1.41421" y2="26.5858" stroke="#C4FF4D" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </button>

            <div className="px-6 sm:px-12" style={{
              fontFamily: "Besley, serif",
              fontSize: "clamp(12px, 2.5vw, 58px)",
              lineHeight: "clamp(14px, 3vw, 62px)",
              textAlign: "center",
              fontWeight: 400,
              color: "#000",
              maxWidth: "90%",
              margin: "0",
            }}>
              <p style={{ margin: 0 }}>
                <span style={{ fontStyle: "italic" }}>Koa studio is a compact full-service<br />creative direction & production studio.</span><br />
                Photography, video, motion & identity.<br />
                We build the right team for every project,<br />
                delivering impactful work without the<br />
                cost or complexity of a large agency.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Header and Hero - Fixed */}
      <div className="fixed top-0 left-0 right-0 z-0 h-screen w-full flex flex-col">
        {/* Title bar */}
        <header className="w-full bg-ink h-[100px] flex items-center justify-center px-4">
          <img
            src={koaLogoWhite}
            alt="Koa Studio"
            style={{
              maxHeight: "clamp(14px, 5vw, 28px)",
              width: "auto"
            }}
          />
        </header>

        {/* Hero */}
        <section className="relative flex-1 w-full overflow-hidden bg-ink">
          <div className="relative w-full h-full">
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
      </div>

      {/* Content - Scrolls over fixed hero */}
      <div className="relative z-10" style={{ paddingTop: "100vh" }}>
        {/* Black banner divider */}
        <div className="w-full bg-black h-[0.05rem]"></div>

        {/* Nav bar */}
        <nav className="w-full bg-paper sticky top-0 z-40">
          <div className="flex items-center justify-between text-ink uppercase px-4 sm:px-[33px] py-4 sm:py-8" 
            style={{ fontFamily: "Didact Gothic, sans-serif", fontWeight: 400, fontSize: "clamp(10px, 2.5vw, 24px)" }}>
            <div className="flex items-center gap-2 sm:gap-[40px]">
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
            <div className="flex items-center gap-2 sm:gap-8">
              <a href="#contact" onClick={closeModal} className="transition-opacity hover:opacity-60">
                Contact
              </a>
            </div>
          </div>
        </nav>

        {/* Work grid */}
        <section id="work" aria-label="Selected work" className="bg-paper px-[40px] py-[100px]">
          {/* Work grid content goes here */}
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
      </div>
    </main>
  );
}
