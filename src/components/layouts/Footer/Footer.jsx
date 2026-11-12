import { useEffect, useRef, useState } from 'react';
import { FiLinkedin, FiYoutube, FiMail, FiArrowUp, FiArrowUpRight } from 'react-icons/fi';
import logo from '../../../assets/white.png';
import './Footer.scss';

const links = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Services', href: '/services' },
  { label: 'Sourcing Solutions', href: '/sourcing' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact Us', href: '/contact' },
];

const socials = [
  { icon: <FiLinkedin />, href: 'https://linkedin.com', label: 'LinkedIn', external: true },
  { icon: <FiYoutube />, href: 'https://youtube.com', label: 'YouTube', external: true },
  { icon: <FiMail />, href: 'mailto:info@baviona.com', label: 'Email', external: false },
];

const useInView = (threshold = 0.15) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
};

const Footer = () => {
  const [ref, visible] = useInView();

  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer ref={ref} className={`footer ${visible ? 'footer--visible' : ''}`}>
      <span className="footer__glow footer__glow--1" />
      <span className="footer__glow footer__glow--2" />

      <div className="footer__container container">
        <div className="footer__top">
          <div className="footer__brand" style={{ '--i': 0 }}>
            <a href="/" className="footer__logo">
              <img src={logo} alt="Baviona Group" />
            </a>
            <p className="footer__about">
              Your global sourcing and trade partner for a stronger, more connected tomorrow.
            </p>
          </div>

          <nav className="footer__col" style={{ '--i': 1 }}>
            <h5 className="footer__heading">Quick Links</h5>
            <ul className="footer__list">
              {links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="footer__link">
                    <span>{l.label}</span>
                    <FiArrowUpRight />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__col" style={{ '--i': 2 }}>
            <h5 className="footer__heading">Connect With Us</h5>
            <div className="footer__social">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="footer__social-btn"
                  {...(s.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <a href="mailto:info@baviona.com" className="footer__mail">
              info@baviona.com
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Baviona Group. All rights reserved.</p>

          <p className="footer__legal">
            <a href="/privacy" className="footer__bottom-link">Privacy Policy</a>
            <span className="footer__divider" />
            <a href="/terms" className="footer__bottom-link">Terms of Service</a>
          </p>

          <button className="footer__top-btn" onClick={toTop} aria-label="Back to top">
            <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;