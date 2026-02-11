import portfolioData from '../data/portfolio.json';

function Education() {
  return (
    <section className="education" id="education">
      <div className="container">
        <h2 className="section-title">
          <span className="title-number">02.</span> Education
        </h2>
        <div className="education-timeline">
          {portfolioData.education.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="education-marker"></div>
              <div className="education-content">
                <div className="education-header">
                  <div>
                    <h3 className="education-degree">{edu.degree}</h3>
                    <p className="education-institution">{edu.institution}</p>
                  </div>
                  <span className="education-period">{edu.period}</span>
                </div>
                <p className="education-location">{edu.location}</p>
                <p className="education-description">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
