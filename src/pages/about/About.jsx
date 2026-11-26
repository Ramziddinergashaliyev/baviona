// import { useState } from 'react';

// import { CONTENT, LANGS } from '../../static/index';
// import img1 from "../../assets/seo1.jfif"
// import img2 from "../../assets/seo2.PNG"
// import './about.scss';

// const Globe = () => (
//     <svg
//         className="about__globe"
//         viewBox="0 0 600 600"
//         fill="none"
//         stroke="currentColor"
//         aria-hidden="true"
//         focusable="false"
//     >
//         <circle cx="300" cy="300" r="260" />
//         <ellipse cx="300" cy="300" rx="130" ry="260" />
//         <ellipse cx="300" cy="300" rx="210" ry="260" />
//         <line x1="300" y1="40" x2="300" y2="560" />
//         <line x1="40" y1="300" x2="560" y2="300" />
//         <path d="M62 190 Q300 150 538 190" />
//         <path d="M62 410 Q300 450 538 410" />
//         <path className="about__route" d="M170 230 Q260 120 380 200" />
//         <path className="about__route" d="M380 200 Q470 280 400 380" />
//         <path className="about__route" d="M400 380 Q300 470 200 400" />
//         <circle className="about__node" cx="170" cy="230" r="6" />
//         <circle className="about__node" cx="380" cy="200" r="6" />
//         <circle className="about__node" cx="400" cy="380" r="6" />
//         <circle className="about__node" cx="200" cy="400" r="6" />
//     </svg>
// );

// const About = ({ lang: initialLang = 'ru' }) => {
//     const [lang, setLang] = useState(
//         CONTENT[initialLang] ? initialLang : 'ru'
//     );
//     const t = CONTENT[lang];

//     return (
//         <main className="about" lang={lang}>
//             <section className="about__hero">
//                 <div className="container about__hero-inner container">
//                     <div className="about__lang" role="group" aria-label="Language">

//                     </div>

//                     <p className="about__brand">BAVIONA GROUP</p>
//                     <p className="about__group">{t.group}</p>
//                     <h1 className="about__hero-title">{t.heroTitle}</h1>
//                     <p className="about__tagline">{t.tagline}</p>
//                 </div>
//             </section>

//             <section className="about__section about__intro">
//                 <div className="container about__intro-grid">
//                     <h2 className="about__title">{t.aboutTitle}</h2>

//                     <div className="about__intro-body">
//                         <p className="about__lead">{t.lead}</p>

//                         {t.paragraphs.map((text) => (
//                             <p key={text} className="about__text">
//                                 {text}
//                             </p>
//                         ))}

//                         <div className="about__geo">
//                             <p className="about__text">{t.geoIntro}</p>
//                             <ul className="about__regions">
//                                 {t.regions.map((region) => (
//                                     <li key={region} className="about__region">
//                                         {region}
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>

//                         <p className="about__text">{t.closing}</p>

//                         <blockquote className="about__highlight">{t.highlight}</blockquote>
//                     </div>
//                 </div>
//             </section>

//             <section className="about__section about__trade">
//                 <div className="container about__trade-grid">
//                     <div>
//                         <h2 className="about__title">{t.tradeTitle}</h2>
//                         {t.tradeText.map((text) => (
//                             <p key={text} className="about__text">
//                                 {text}
//                             </p>
//                         ))}
//                     </div>

//                     <ol className="about__steps">
//                         {t.steps.map((step) => (
//                             <li key={step} className="about__step">
//                                 {step}
//                             </li>
//                         ))}
//                     </ol>
//                 </div>
//             </section>

//             <section className="about__section about__sectors">
//                 <div className="container">
//                     <h2 className="about__title">{t.sectorsTitle}</h2>

//                     <ul className="about__sector-list">
//                         {t.sectors.map((sector) => (
//                             <li key={sector.name} className="about__sector">
//                                 <h3 className="about__sector-name">{sector.name}</h3>
//                                 <p className="about__sector-text">{sector.text}</p>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </section>

//             <section className="about__section about__values">
//                 <div className="container">
//                     <h2 className="about__title">{t.valuesTitle}</h2>
//                     {t.valuesIntro && (
//                         <p className="about__text about__values-intro">{t.valuesIntro}</p>
//                     )}

//                     <ul className="about__value-list">
//                         {t.values.map((value) => (
//                             <li key={value.name} className="about__value">
//                                 <h3 className="about__value-name">{value.name}</h3>
//                                 <p className="about__value-text">{value.text}</p>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </section>

//             <section className="about__mv">
//                 <div className="container about__mv-grid">
//                     <article className="about__mv-block">
//                         <h2 className="about__mv-title">{t.missionTitle}</h2>
//                         <p className="about__mv-text">{t.mission}</p>
//                     </article>
//                     <article className="about__mv-block">
//                         <h2 className="about__mv-title">{t.visionTitle}</h2>
//                         <p className="about__mv-text">{t.vision}</p>
//                     </article>
//                 </div>
//             </section>

//             <section className='about__seo'>
//                 <div className="about__seo-left">
//                     <div className="about__seo-left-img">
//                         <img src={img1} alt="" />
//                     </div>
//                     <h3>Руководитель направления экспортных операций</h3>
//                 </div>
//                 <div className="about__seo-right">
//                     <div className="about__seo-right-img">
//                         <img src={img1} alt="" />
//                     </div>
//                     <h3>Руководитель по взаимодействию с европейскими компаниями</h3>
//                 </div>
//             </section>

//         </main>
//     );
// };

// export default About;

import { useState, useEffect, useRef } from 'react';
import { CONTENT } from '../../static/index';
import img1 from "../../assets/seo1.jfif";
import img2 from "../../assets/seo2.PNG";
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
                    <h2 className="about__title about__seo-title">Руководство</h2>

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

// import { useState } from 'react';
// import { CONTENT } from '../../static/index';
// import img1 from "../../assets/seo1.jfif";
// import img2 from "../../assets/seo2.PNG";
// import './about.scss';

// const TEAM = [
//     {
//         img: img1,
//         name: 'Имя Фамилия',
//         role: 'Руководитель направления экспортных операций',
//     },
//     {
//         img: img2,
//         name: 'Имя Фамилия',
//         role: 'Руководитель по взаимодействию с европейскими компаниями',
//     },
// ];

// const About = ({ lang: initialLang = 'ru' }) => {
//     const [lang] = useState(CONTENT[initialLang] ? initialLang : 'ru');
//     const t = CONTENT[lang];

//     return (
//         <main className="about" lang={lang}>
//             <section className="about__hero">
//                 <div className="container about__hero-inner">
//                     <p className="about__brand">BAVIONA GROUP</p>
//                     <p className="about__group">{t.group}</p>
//                     <h1 className="about__hero-title">{t.heroTitle}</h1>
//                     <p className="about__tagline">{t.tagline}</p>
//                 </div>
//             </section>

//             <section className="about__section about__intro">
//                 <div className="container about__intro-grid">
//                     <h2 className="about__title">{t.aboutTitle}</h2>

//                     <div className="about__intro-body">
//                         <p className="about__lead">{t.lead}</p>

//                         {t.paragraphs.map((text) => (
//                             <p key={text} className="about__text">
//                                 {text}
//                             </p>
//                         ))}

//                         <div className="about__geo">
//                             <p className="about__text">{t.geoIntro}</p>
//                             <ul className="about__regions">
//                                 {t.regions.map((region) => (
//                                     <li key={region} className="about__region">
//                                         {region}
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>

//                         <p className="about__text">{t.closing}</p>

//                         <blockquote className="about__highlight">{t.highlight}</blockquote>
//                     </div>
//                 </div>
//             </section>

//             <section className="about__section about__trade">
//                 <div className="container about__trade-grid">
//                     <div>
//                         <h2 className="about__title">{t.tradeTitle}</h2>
//                         {t.tradeText.map((text) => (
//                             <p key={text} className="about__text">
//                                 {text}
//                             </p>
//                         ))}
//                     </div>

//                     <ol className="about__steps">
//                         {t.steps.map((step) => (
//                             <li key={step} className="about__step">
//                                 {step}
//                             </li>
//                         ))}
//                     </ol>
//                 </div>
//             </section>

//             <section className="about__section about__sectors">
//                 <div className="container">
//                     <h2 className="about__title">{t.sectorsTitle}</h2>

//                     <ul className="about__sector-list">
//                         {t.sectors.map((sector) => (
//                             <li key={sector.name} className="about__sector">
//                                 <h3 className="about__sector-name">{sector.name}</h3>
//                                 <p className="about__sector-text">{sector.text}</p>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </section>

//             <section className="about__section about__values">
//                 <div className="container">
//                     <h2 className="about__title">{t.valuesTitle}</h2>
//                     {t.valuesIntro && (
//                         <p className="about__text about__values-intro">{t.valuesIntro}</p>
//                     )}

//                     <ul className="about__value-list">
//                         {t.values.map((value) => (
//                             <li key={value.name} className="about__value">
//                                 <h3 className="about__value-name">{value.name}</h3>
//                                 <p className="about__value-text">{value.text}</p>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </section>

//             <section className="about__mv">
//                 <div className="container about__mv-grid">
//                     <article className="about__mv-block">
//                         <h2 className="about__mv-title">{t.missionTitle}</h2>
//                         <p className="about__mv-text">{t.mission}</p>
//                     </article>
//                     <article className="about__mv-block">
//                         <h2 className="about__mv-title">{t.visionTitle}</h2>
//                         <p className="about__mv-text">{t.vision}</p>
//                     </article>
//                 </div>
//             </section>

//             <section className="about__section about__seo">
//                 <div className="container">
//                     <h2 className="about__title about__seo-title">Наша команда</h2>

//                     <div className="about__seo-grid">
//                         {TEAM.map((member) => (
//                             <article key={member.role} className="about__seo-member">
//                                 <div className="about__seo-photo">
//                                     <span className="about__seo-shape" aria-hidden="true" />
//                                     <span className="about__seo-dot" aria-hidden="true" />
//                                     <img src={member.img} alt={member.name} />
//                                 </div>

//                                 <h3 className="about__seo-name">{member.name}</h3>
//                                 <span className="about__seo-line" aria-hidden="true" />
//                                 <p className="about__seo-role">{member.role}</p>
//                             </article>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//         </main>
//     );
// };

// export default About;