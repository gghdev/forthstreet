import {
  faArrowLeft,
  faEnvelope,
  faGlobe,
  faMapPin,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function TextGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <section>
        <Image
          src="/img/graham-g-hughes.png"
          width="100"
          height="100"
          alt="Graham G. Hughes"
          className="rounded-full inline border-blue-400 dark:border-blue-500 border-2
            bg-black bg-opacity-50 dark:bg-white dark:bg-opacity-30
            float-left mr-3 mb-3"
        />
        <h3>
          <FontAwesomeIcon icon={faArrowLeft} className="-rotate-45 mr-2" />
          This is Graham
        </h3>
        That&apos;s me, this is Forth Street, and I build custom web applications for SMEs. I&apos;m
        a business analyst and full-stack software developer, and I&apos;ve worked <i>
          with
        </i> and <i>for</i> some recognisable brands in the cinema industry.
        <br />
        <br />
        Check out my{" "}
        <a
          href="https://uk.linkedin.com/in/grahamghughes"
          target="_blank"
          rel="noreferrer noopener"
        >
          LinkedIn
        </a>{" "}
        for details or my{" "}
        <a href="https://grahamghughes.com" target="_blank" rel="noopener noreferrer">
          personal site
        </a>{" "}
        for more about me. Also, please do check out{" "}
        <a href="https://uplift.ltd" target="_blank" rel="noopener noreferrer">
          Uplift
        </a>{" "}
        which is a Colorado-based software agency that I work with.
      </section>

      <section className="bg-background-secondary">
        <h3>Who can...</h3>
        Solve that workflow problem! Sometimes you can buy an off-the-shelf package but sometimes
        you just need something that fits around your business.
        <br />
        <br />
        <ul className="list-disc pl-5">
          <li>organise your data</li>
          <li>produce new insights, and</li>
          <li>create efficiencies</li>
        </ul>
      </section>

      <section className="md:bg-background-secondary">
        <h3>Because...</h3>
        If you&apos;re a growing company, innovation is key. Work with Forth Street and together
        we&apos;ll create something new. My work is:
        <br />
        <br />
        <ul className="list-disc pl-5">
          <li>Agile &mdash; the flexible approach to development</li>
          <li>Reliable &mdash; software that just works</li>
          <li>User-friendly &mdash; clean and simple interfaces</li>
        </ul>
      </section>

      <section className="bg-background-secondary md:bg-background">
        <h3>So, let&apos;s chat!</h3>
        <FontAwesomeIcon icon={faPhone} className="w-5 text-center mr-2" />
        <a href="tel:+447890080780">+44 789 008 0780</a>
        <br />
        <FontAwesomeIcon icon={faEnvelope} className="w-5 text-center mr-2" />
        <a href="ma&#105;lto&#58;c%6Fn%7&#52;act&#64;&#102;o%&#55;2th&#115;t&#114;e%65t&#46;c%6Fm">
          contact&#64;forths&#116;reet&#46;com
        </a>
        <br />
        <br />
        <FontAwesomeIcon icon={faMapPin} className="w-5 text-center mr-2" />
        London, England
        <br />
        <FontAwesomeIcon icon={faGlobe} className="w-5 text-center mr-2" />
        Available remotely
      </section>
    </div>
  );
}
