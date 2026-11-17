export default function HeroSection() {
  return (
    <section id="home" className="section">
      <div className="container">
        <div className="hero">
          {/* ─── Name Card ─── */}
          <div className="hero-name-card animate-fade-in-up">
            <span className="watermark" aria-hidden="true">
              P
            </span>
            <div style={{ position: "relative", zIndex: 1 }}>
              <span className="hero-badge">
                <span className="dot" />
                Full-Stack Developer
              </span>
              <h1 className="hero-name">
                YOUR
                <br />
                <span className="last-name">NAME</span>
              </h1>
            </div>
            <div className="hero-divider" />
          </div>

          {/* ─── Profile Image ─── */}
          <div className="hero-profile animate-fade-in-up stagger-1">
            <div
              style={{
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "6rem",
                fontWeight: 900,
                color: "rgba(16, 185, 129, 0.15)",
                letterSpacing: "-0.05em",
              }}
            >
              &lt;/&gt;
            </div>
            <div className="overlay" />
          </div>

          {/* ─── About Card ─── */}
          <div className="hero-about-card animate-fade-in-up stagger-2">
            <div>
              <h3>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                  <rect x="9" y="9" width="6" height="6" />
                  <path d="M15 2v2" />
                  <path d="M15 20v2" />
                  <path d="M2 15h2" />
                  <path d="M2 9h2" />
                  <path d="M20 15h2" />
                  <path d="M20 9h2" />
                  <path d="M9 2v2" />
                  <path d="M9 20v2" />
                </svg>
                CRAFT
              </h3>
              <p>
                Demonstrated expertise in{" "}
                <strong>
                  full-stack development, UI/UX design, and cloud architecture
                </strong>
                , with{" "}
                <strong>3+ years of professional experience</strong> building
                innovative digital products.
              </p>
            </div>
            <div className="hero-tags">
              <span className="hero-tag">React</span>
              <span className="hero-tag">TypeScript</span>
              <span className="hero-tag">Node.js</span>
              <span className="hero-tag">AWS</span>
            </div>
          </div>

          {/* ─── Mindset Card ─── */}
          <div className="hero-mindset-card animate-fade-in-up stagger-3">
            <div>
              <h3>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
                  <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
                  <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
                </svg>
                MINDSET
              </h3>
              <p>
                I believe great software is built at the intersection of{" "}
                <em>creativity</em> and <em>engineering discipline</em>. Every
                project is an opportunity to push boundaries and deliver
                excellence.
              </p>
            </div>
            <div className="hero-mindset-image">
              <div
                style={{
                  width: "100%",
                  height: "280px",
                  background:
                    "linear-gradient(135deg, #0f3460 0%, #1a1a2e 50%, #16213e 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "3rem",
                  color: "rgba(16, 185, 129, 0.2)",
                }}
              >
                ✦
              </div>
            </div>
          </div>

          {/* ─── Quote Card ─── */}
          <div className="hero-quote-card animate-fade-in-up stagger-4">
            <div className="hero-quote-icon">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
              </svg>
            </div>
            <p className="hero-quote-text">
              &ldquo;Build with purpose. Ship with pride.&rdquo;
            </p>
          </div>

          {/* ─── Location Card ─── */}
          <div className="hero-location-card animate-fade-in-up stagger-5">
            <div className="bg-glow" />
            <div className="hero-location-label">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Location</span>
            </div>
            <h3 className="hero-location-name">Your City</h3>
            <p className="hero-location-coords">XX.XXXX°N, XX.XXXX°E</p>
          </div>
        </div>
      </div>
    </section>
  );
}
