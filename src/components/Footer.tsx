// src/components/Footer.tsx
import GitHubIcon from '../assets/footerGitHub.svg';
import LinkedInIcon from '../assets/footerLinkedin.svg';
import SubtractIcon from '../assets/footerSubtract.svg';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-contact">
        <div>
            <p>Meu contato:</p>
            <p>19 99970 8314</p>
        </div>
        <div>
            <p>Email:</p>
            <p id="long-email">dennisfamiliapedersen@gmail.com</p>
        </div>
      </div>
      <div className="footer-icons">
        <a href="https://github.com/DieAllPies" target="_blank" rel="noreferrer">
          <img src={GitHubIcon} alt="GitHub" className="icon" />
        </a>
        <a href="https://linkedin.com/in/dennis-alves-pedersen-30086b262" target="_blank" rel="noreferrer">
          <img src={LinkedInIcon} alt="LinkedIn" className="icon" />
        </a>
          <img src={SubtractIcon} alt="" id="subtract-icon" />
      </div>
    </footer>
  );
}
