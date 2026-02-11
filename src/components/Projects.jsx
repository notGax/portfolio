import portfolioData from '../data/portfolio.json';
import ProjectCard from './ProjectCard';

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">
          <span className="title-number">03.</span> Featured Projects
        </h2>
        <p className="section-description">
          A collection of machine learning and AI projects showcasing various techniques and applications.
        </p>
        <div className="projects-grid">
          {portfolioData.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
