import { useState, useEffect, useRef } from 'react';
import logoW from '../../../assets/white.webp';
import './Header.scss';

const links = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Services', href: '/services' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact Us', href: '/contact' },
];

const languages = [
  { code: 'en', short: 'EN', label: 'English' },
  { code: 'ru', short: 'RU', label: 'Русский' },
  { code: 'de', short: 'DE', label: 'Deutsch' },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [lang, setLang] = useState(languages[0]);
  const [scrolled, setScrolled] = useState(false);
  const langRef = useRef(null);

  const currentPath = window.location.pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  const selectLang = (l) => {
    setLang(l);
    setLangOpen(false);
  };

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__container container">
        <a href="/" className="header__logo">
          <img src={logoW} alt="Baviona Group" />
        </a>

        <nav className={`header__nav ${open ? 'header__nav--open' : ''}`}>
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`header__link ${currentPath === l.href ? 'header__link--active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a href="/contact" className="header__btn header__btn--mobile">
            Get a Quote
          </a>
        </nav>

        <div className="header__actions">
          <div className="lang" ref={langRef}>
            <button
              className="lang__current"
              onClick={() => setLangOpen(!langOpen)}
              aria-haspopup="listbox"
              aria-expanded={langOpen}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
              </svg>
              <span>{lang.short}</span>
              <svg className={`lang__arrow ${langOpen ? 'lang__arrow--up' : ''}`} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {langOpen && (
              <ul className="lang__menu" role="listbox">
                {languages.map((l) => (
                  <li key={l.code}>
                    <button
                      className={`lang__item ${l.code === lang.code ? 'lang__item--active' : ''}`}
                      onClick={() => selectLang(l)}
                      role="option"
                      aria-selected={l.code === lang.code}
                    >
                      <span className="lang__code">{l.short}</span>
                      <span>{l.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <a href="/contact" className="header__btn header__btn--desktop">
            Get a Quote
          </a>

          <button
            className={`header__burger ${open ? 'header__burger--open' : ''}`}
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;