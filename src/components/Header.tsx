import Image from "next/image";

export default function Header() {
  return (
    <header className="site-header">
      <div className="page-shell">
        <div className="brand-bar">
          <Image
            src="/img/forth-street-logo.webp"
            width={521}
            height={176}
            alt="Forth Street"
            className="brand-logo"
            priority
          />
        </div>

        <div className="hero">
          <div className="hero-copy">
            <span className="accent-rule" aria-hidden="true" />
            <h1>
              <span>Web</span>
              <span>application</span>
              <span>development</span>
            </h1>
            <div className="hero-subtitle">
              <span className="accent-rule accent-rule-short" aria-hidden="true" />
              <p>Bespoke tools for UK SMEs</p>
              <p className="hero-kicker">Human-led, AI-assisted development</p>
            </div>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="lamp-glow" />
            <Image
              src="/img/lamp-cutout.webp"
              width={607}
              height={1080}
              alt=""
              className="hero-lamp"
              priority
            />
          </div>
        </div>
      </div>
    </header>
  );
}
