import portfolioData from '../data/portfolio.json';

function Hero() {
  return (
    <section className="hero" id="about">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">{portfolioData.personal.name}</span>
            </h1>
            <h2 className="hero-subtitle">{portfolioData.personal.title}</h2>
            <p className="hero-bio">{portfolioData.personal.bio}</p>
            <div className="hero-contact">
              {portfolioData.personal.email && (
                <div className="contact-item">
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <path fill="currentColor" d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
                  </svg>
                  <span>{portfolioData.personal.email}</span>
                </div>
              )}
              {portfolioData.personal.location && (
                <div className="contact-item">
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <path fill="currentColor" d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/>
                  </svg>
                  <span>{portfolioData.personal.location}</span>
                </div>
              )}
            </div>
            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary">View Projects</a>
              <a href={portfolioData.social.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                GitHub Profile
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-wrapper">
              <img src={portfolioData.personal.avatar} alt={portfolioData.personal.name} />
              <div className="image-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
