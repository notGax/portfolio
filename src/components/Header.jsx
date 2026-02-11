import { Link } from 'react-router-dom';
import portfolioData from '../data/portfolio.json';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <span className="logo-bracket">{'<'}</span>
          {portfolioData.personal.name.split(' ')[0]}
          <span className="logo-bracket">{'/>'}</span>
        </Link>
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <a href="#about" className="nav-link">About</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#education" className="nav-link">Education</a>
          <a href="#projects" className="nav-link">Projects</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
