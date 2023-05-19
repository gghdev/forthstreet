import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer
      className="p-4 md:p-6 mt-4 grid grid-cols-1 md:grid-cols-2 gap-4
    bg-header-secondary  text-white dark:text-stone-300 text-sm"
    >
      <div className="flex items-center">
        <div>
          <span className="whitespace-nowrap">&copy; 2021-2023 Forth Street Limited.</span>{" "}
          <span className="whitespace-nowrap">Company no: 10487304. Registered in England.</span>{" "}
          <span className="whitespace-nowrap">VAT no: 256 6843 69.</span>
        </div>
      </div>
      <div className="md:text-right text-3xl">
        <a
          href="https://uk.linkedin.com/in/grahamghughes"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-6"
          title="Graham's LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://github.com/gghdev"
          target="_blank"
          rel="noopener noreferrer"
          title="Graham's GitHub"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </footer>
  );
}
