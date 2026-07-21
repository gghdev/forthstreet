import { faEnvelope, faGlobe, faMapPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

function SectionMarker({ number }: { number: string }) {
  return (
    <div className="section-marker" aria-hidden="true">
      <span>{number}</span>
      <span className="section-marker-rule" />
    </div>
  );
}

export default function TextGrid() {
  return (
    <div className="editorial-grid">
      <section className="editorial-panel profile-panel" aria-labelledby="about-heading">
        <SectionMarker number="01" />
        <div className="profile-layout">
          <Image
            src="/img/graham-g-hughes.webp"
            width={800}
            height={800}
            alt="Graham G. Hughes"
            className="profile-image"
          />
          <div>
            <h2 id="about-heading">This is Graham</h2>
            <p>
              That&apos;s me, this is Forth Street, and I design and build custom web applications
              for UK SMEs. I&apos;m a business analyst and full-stack software developer, and
              I&apos;ve worked <em>with</em> and <em>for</em> some recognisable brands in the cinema
              industry.
            </p>
            <p>
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
            </p>
          </div>
        </div>
      </section>

      <section className="editorial-panel" aria-labelledby="services-heading">
        <SectionMarker number="02" />
        <h2 id="services-heading">Software that fits</h2>
        <p>
          I build bespoke web applications around the way a business actually works, with a focus on
          internal tools, reporting, and legacy rebuilds. Projects can range beyond those areas when
          a less conventional solution is the right fit.
        </p>
        <ul>
          <li>internal tools that support existing workflows</li>
          <li>reporting that turns business data into useful insight</li>
          <li>modern replacements for ageing or hard-to-maintain systems</li>
        </ul>
      </section>

      <section className="editorial-panel" aria-labelledby="approach-heading">
        <SectionMarker number="03" />
        <h2 id="approach-heading">A practical approach</h2>
        <p>
          If you&apos;re a growing company, innovation is key. Work with Forth Street and together
          we&apos;ll create something new.
        </p>
        <p>
          I use AI-assisted development to move from idea to working software efficiently, while
          experience and judgement guide the architecture, implementation, and final result. My work
          is:
        </p>
        <ul>
          <li>Agile &mdash; the flexible approach to development</li>
          <li>Reliable &mdash; software that just works</li>
          <li>User-friendly &mdash; clean and simple interfaces</li>
        </ul>
      </section>

      <section className="editorial-panel contact-panel" aria-labelledby="contact-heading">
        <SectionMarker number="04" />
        <h2 id="contact-heading">So, let&apos;s chat!</h2>
        <address className="contact-list">
          <div>
            <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
            <a href="ma&#105;lto&#58;c%6Fn%7&#52;act&#64;&#102;o%&#55;2th&#115;t&#114;e%65t&#46;c%6Fm">
              contact&#64;forths&#116;reet&#46;com
            </a>
          </div>
          <div>
            <FontAwesomeIcon icon={faMapPin} aria-hidden="true" />
            <span>Bangkok, Thailand</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faGlobe} aria-hidden="true" />
            <span>Available remotely</span>
          </div>
        </address>
      </section>
    </div>
  );
}
