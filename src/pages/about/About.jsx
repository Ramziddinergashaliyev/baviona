import { useState } from 'react';
import { CONTENT, LANGS } from '../../static/index';
import './about.scss';

const Globe = () => (
    <svg
        className="about__globe"
        viewBox="0 0 600 600"
        fill="none"
        stroke="currentColor"
        aria-hidden="true"
        focusable="false"
    >
        <circle cx="300" cy="300" r="260" />
        <ellipse cx="300" cy="300" rx="130" ry="260" />
        <ellipse cx="300" cy="300" rx="210" ry="260" />
        <line x1="300" y1="40" x2="300" y2="560" />
        <line x1="40" y1="300" x2="560" y2="300" />
        <path d="M62 190 Q300 150 538 190" />
        <path d="M62 410 Q300 450 538 410" />
        <path className="about__route" d="M170 230 Q260 120 380 200" />
        <path className="about__route" d="M380 200 Q470 280 400 380" />
        <path className="about__route" d="M400 380 Q300 470 200 400" />
        <circle className="about__node" cx="170" cy="230" r="6" />
        <circle className="about__node" cx="380" cy="200" r="6" />
        <circle className="about__node" cx="400" cy="380" r="6" />
        <circle className="about__node" cx="200" cy="400" r="6" />
    </svg>
);

const About = ({ lang: initialLang = 'ru' }) => {
    const [lang, setLang] = useState(
        CONTENT[initialLang] ? initialLang : 'ru'
    );
    const t = CONTENT[lang];

    return (
        <main className="about" lang={lang}>
            <section className="about__hero">
                <Globe />

                <div className="container about__hero-inner">
                    <div className="about__lang" role="group" aria-label="Language">

                    </div>

                    <p className="about__brand">BAVIONA GROUP</p>
                    <p className="about__group">{t.group}</p>
                    <h1 className="about__hero-title">{t.heroTitle}</h1>
                    <p className="about__tagline">{t.tagline}</p>

                    <div className="about__stat">
                        <span className="about__stat-value">{t.stat.value}</span>
                        <span className="about__stat-label">{t.stat.label}</span>
                    </div>
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

            {/* GLOBAL TRADE */}
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

            {/* SECTORS */}
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

            {/* VALUES */}
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

            {/* MISSION & VISION */}
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

        </main>
    );
};

export default About;