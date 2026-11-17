import projects from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p className="section-label">PORTFOLIO</p>
          <h2 className="section-title">
            Featured <span className="accent">projects</span>
          </h2>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <button key={project.id} className="project-card" aria-label={`View ${project.title}`}>
              {/* Gradient placeholder image */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: getProjectGradient(project.id),
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "4rem",
                  color: "rgba(255,255,255,0.08)",
                  fontWeight: 900,
                }}
              >
                {String(project.id).padStart(2, "0")}
              </div>
              <div className="gradient-overlay" />
              <div className="info">
                <p className="category">{project.categoryLabel}</p>
                <h3 className="title">{project.title}</h3>
              </div>
              <div className="arrow">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function getProjectGradient(id: number): string {
  const gradients = [
    "linear-gradient(135deg, #0f3460 0%, #1a1a2e 50%, #16213e 100%)",
    "linear-gradient(135deg, #1a1a2e 0%, #0f3460 50%, #533483 100%)",
    "linear-gradient(135deg, #16213e 0%, #1a1a2e 50%, #0f3460 100%)",
    "linear-gradient(135deg, #0f3460 0%, #533483 50%, #1a1a2e 100%)",
    "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #533483 100%)",
    "linear-gradient(135deg, #533483 0%, #0f3460 50%, #16213e 100%)",
  ];
  return gradients[(id - 1) % gradients.length];
}
