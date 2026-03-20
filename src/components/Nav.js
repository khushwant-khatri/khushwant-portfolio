import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['About', 'Skills', 'Experience', 'Contact'];

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <span className="nav__logo-kk">KK</span>
        <span className="nav__logo-dot" />
      </div>

      <ul className={`nav__links ${menuOpen ? 'nav__links--open' : ''}`}>
        {links.map((link) => (
          <li key={link}>
            <button onClick={() => scrollTo(link)} className="nav__link">
              <span className="nav__link-num">0{links.indexOf(link) + 1}</span>
              {link}
            </button>
          </li>
        ))}
        <li>
          <a
            href="mailto:khatri.khush1998@gmail.com"
            className="nav__cta"
            target="_blank"
            rel="noreferrer"
          >
            Hire Me
          </a>
        </li>
      </ul>

      <button className={`nav__burger ${menuOpen ? 'nav__burger--open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span /><span /><span />
      </button>
    </nav>
  );
}

export default Nav;
