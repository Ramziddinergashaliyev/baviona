import { useState, useEffect, useRef } from 'react';
import { CONTENT } from '../../static/index';
import img1 from "../../assets/seo1.jfif";
import img2 from "../../assets/seo2.png";
import img3 from "../../assets/seo3.png";
import './about.scss';

const TEAM = [
    {
        img: img1,
        name: 'Guzal Mannaeva',
        role: 'Руководитель направления экспортных операций',
        email: 'gmannaeva@baviona.com',
        phone: '+998 90 912 93 83',
    },
    {
        img: img2,
        name: 'Makhsud Otajonov',
        role: 'Руководитель по взаимодействию с европейскими компаниями',
        email: 'motajonov@baviona.com',
        phone: '+998 97 712 03 39',
    },
    {
        img: img3,
        name: 'Ibragimov Ibragim',
        role: 'Менеджер по взаимодействию с азиатскими странами',
        email: 'ibragimov@baviona.com',
        phone: '+7 707 158 0601',
    }
];

const MailIcon = () => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="m4 7 8 6 8-6" />
    </svg>
);

const PhoneIcon = () => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
        <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </svg>
);

const About = ({ lang: initialLang = 'ru' }) => {
    const [lang] = useState(CONTENT[initialLang] ? initialLang : 'ru');
    const t = CONTENT[lang];
    const teamRef = useRef(null);

    useEffect(() => {
        const items = teamRef.current?.querySelectorAll('.about__seo-member');
        if (!items || !items.length) return;

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        io.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        items.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, []);

    return (
        <main className="about" lang={lang}>
            <section className="about__hero">
                <div className="container about__hero-inner">
                    <p className="about__brand">BAVIONA GROUP</p>
                    <p className="about__group">{t.group}</p>
                    <h1 className="about__hero-title">{t.heroTitle}</h1>
                    <p className="about__tagline">{t.tagline}</p>
                </div>
            </section>

            <section className="about__section about__intro">
                <div className="container about__intro-grid">
                    <h2 className="about__title">{t.aboutTitle}</h2>

                    <div className="about__intro-body">
                        <p className="about__lead">{t.lead}</p>

                        {t.paragraphs.map((text) => (
                            <p key={text} className="about__text">
                                {text}
                            </p>
                        ))}

                        <div className="about__geo">
                            <p className="about__text">{t.geoIntro}</p>
                            <ul className="about__regions">
                                {t.regions.map((region) => (
                                    <li key={region} className="about__region">
                                        {region}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p className="about__text">{t.closing}</p>

                        <blockquote className="about__highlight">{t.highlight}</blockquote>
                    </div>
                </div>
            </section>

            <section className="about__section about__trade">
                <div className="container about__trade-grid">
                    <div>
                        <h2 className="about__title">{t.tradeTitle}</h2>
                        {t.tradeText.map((text) => (
                            <p key={text} className="about__text">
                                {text}
                            </p>
                        ))}
                    </div>

                    <ol className="about__steps">
                        {t.steps.map((step) => (
                            <li key={step} className="about__step">
                                {step}
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            <section className="about__section about__sectors">
                <div className="container">
                    <h2 className="about__title">{t.sectorsTitle}</h2>

                    <ul className="about__sector-list">
                        {t.sectors.map((sector) => (
                            <li key={sector.name} className="about__sector">
                                <h3 className="about__sector-name">{sector.name}</h3>
                                <p className="about__sector-text">{sector.text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="about__section about__values">
                <div className="container">
                    <h2 className="about__title">{t.valuesTitle}</h2>
                    {t.valuesIntro && (
                        <p className="about__text about__values-intro">{t.valuesIntro}</p>
                    )}

                    <ul className="about__value-list">
                        {t.values.map((value) => (
                            <li key={value.name} className="about__value">
                                <h3 className="about__value-name">{value.name}</h3>
                                <p className="about__value-text">{value.text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="about__mv">
                <div className="container about__mv-grid">
                    <article className="about__mv-block">
                        <h2 className="about__mv-title">{t.missionTitle}</h2>
                        <p className="about__mv-text">{t.mission}</p>
                    </article>
                    <article className="about__mv-block">
                        <h2 className="about__mv-title">{t.visionTitle}</h2>
                        <p className="about__mv-text">{t.vision}</p>
                    </article>
                </div>
            </section>

            <section className="about__section about__seo">
                <div className="container">
                    <h2 className="about__title about__seo-title">Управление</h2>

                    <div className="about__seo-grid" ref={teamRef}>
                        {TEAM.map((member, i) => (
                            <article
                                key={member.email}
                                className="about__seo-member"
                                style={{ '--i': i }}
                            >
                                <div className="about__seo-photo">
                                    <span className="about__seo-glow" aria-hidden="true" />
                                    <img src={member.img} alt={member.name} />
                                </div>


                                <h3 className="about__seo-name">{member.name}</h3>
                                <p className="about__seo-role">{member.role}</p>

                                <div className="about__seo-contacts">
                                    <a href={`mailto:${member.email}`}>{member.email}</a>
                                    <a href={`tel:${member.phone.replace(/\s/g, '')}`}>{member.phone}</a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;