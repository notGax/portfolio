import { useParams, Link } from 'react-router-dom';
import portfolioData from '../data/portfolio.json';

function ProjectDetail() {
  const { id } = useParams();
  const project = portfolioData.projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="container" style={{ padding: '100px 20px', textAlign: 'center' }}>
        <h1>Project Not Found</h1>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="project-detail">
      <div className="project-detail-hero">
        <img src={project.thumbnail} alt={project.title} />
        <div className="project-detail-overlay"></div>
      </div>

      <div className="container">
        <Link to="/#projects" className="back-link">
          <svg viewBox="0 0 24 24" width="20" height="20">
            <path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
          </svg>
          Back to Projects
        </Link>

        <div className="project-detail-content">
          <header className="project-detail-header">
            <h1 className="project-detail-title">{project.title}</h1>
            <div className="project-tags">
              {project.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
          </header>

          <div className="project-detail-body">
            <section className="project-section">
              <h2>Overview</h2>
              <p>{project.description}</p>
            </section>

            <section className="project-section">
              <h2>Detailed Description</h2>
              <div className="project-text">
                {project.detailedDescription.split('\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </section>

            {project.technologies && (
              <section className="project-section">
                <h2>Technologies Used</h2>
                <div className="tech-list">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-item">{tech}</span>
                  ))}
                </div>
              </section>
            )}

            {project.challenges && (
              <section className="project-section">
                <h2>Challenges</h2>
                <p>{project.challenges}</p>
              </section>
            )}

            {project.results && (
              <section className="project-section">
                <h2>Results & Impact</h2>
                <p>{project.results}</p>
              </section>
            )}

            <section className="project-section">
              <h2>Links</h2>
              <div className="project-detail-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    <svg viewBox="0 0 24 24" width="20" height="20">
                      <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View on GitHub
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                    <svg viewBox="0 0 24 24" width="20" height="20">
                      <path fill="currentColor" d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 17l-5-5 1.41-1.42 3.59 3.59 7.59-7.59 1.41 1.42-9 9z"/>
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
