import GitHubIcon from '../assets/headerGitHub.svg';
import LinkedInIcon from '../assets/headerLinkedin.svg';
import '../index.css';

export function Header() {
  return (
    <header className="header">
      {/* Center nav */}
      <nav className="header-center">
        <ul className="nav-list">
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#tecnologias">Tecnologias</a></li>
          <li><a href="#sobre">Sobre mim</a></li>
        </ul>
      </nav>

      {/* Social links aligned right */}
      <div className="header-right">
        <a href="https://github.com/DieAllPies" target="_blank" rel="noreferrer">
          <img src={GitHubIcon} alt="GitHub" className="icon" />
        </a>
        <a href="https://linkedin.com/in/dennis-alves-pedersen-30086b262" target="_blank" rel="noreferrer">
          <img src={LinkedInIcon} alt="LinkedIn" className="icon" />
        </a>
      </div>
    </header>
  );
}
