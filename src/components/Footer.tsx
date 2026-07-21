import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-layout">
        <p>
          <span>&copy; 2016-2026 Forth Street Limited.</span>{" "}
          <span>Company no: 10487304. Registered in England.</span>{" "}
          <span>VAT no: 256 6843 69.</span>
        </p>
        <div className="social-links">
          <a
            href="https://uk.linkedin.com/in/grahamghughes"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Graham's LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/gghdev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Graham's GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </footer>
  );
}
