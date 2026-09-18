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

      {/* Black banner divider */}
      <div className="w-full bg-black h-[0.05rem]"></div>

      {/* Nav bar */}
      <nav className="w-full bg-paper">
        <div className="flex items-center justify-between text-[24px] text-ink uppercase" 
          style={{ fontFamily: "Didact Gothic, sans-serif", fontWeight: 400, paddingLeft: "33px", paddingRight: "33px", paddingTop: "2rem", paddingBottom: "2rem" }}>
          <div className="flex items-center gap-8">
            <a href="#about" onClick={closeModal} className="transition-opacity hover:opacity-60">
              About
            </a>
            <a href="#services" onClick={closeModal} className="transition-opacity hover:opacity-60">
              Services
            </a>
            <a href="#work" onClick={closeModal} className="transition-opacity hover:opacity-60">
              Work
            </a>
          </div>
          <div className="flex items-center gap-8">
            <a href="#work" onClick={closeModal} className="transition-opacity hover:opacity-60">
              Creative spotlight
            </a>
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
            className="bg-paper p-12 max-w-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-ink hover:opacity-60 transition-opacity"
              aria-label="Close modal"
              style={{ fontSize: "28px", fontWeight: "bold" }}
            >
              ×
            </button>
            <div style={{
              fontFamily: "Besley, serif",
              fontSize: "75px",
              lineHeight: "1.056",
              textAlign: "center",
              fontWeight: 400,
            }}>
              <p style={{ margin: 0 }}>
                <span style={{ fontStyle: "italic" }}>
                  Koa studio is a compact full-service<br />creative direction & production studio.
                </span>
                {" "}Photography, video, motion & identity.<br />We build the right team for every project,<br />delivering impactful work without the<br />cost or complexity of a large agency.
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