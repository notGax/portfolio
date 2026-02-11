import portfolioData from '../data/portfolio.json';

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">
          <span className="title-number">01.</span> Technical Skills
        </h2>
        <div className="skills-grid">
          {portfolioData.skills.map((skillGroup, index) => (
            <div key={index} className="skill-category">
              <h3 className="skill-category-title">{skillGroup.category}</h3>
              <div className="skill-items">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
