import { Link } from 'react-router-dom';
import './resources.scss';

const FILES = [
    {
        name: 'Company profile',
        text: 'An overview of BAVIONA GROUP, our sectors and our approach.',
        href: '/docs/baviona-company-profile.pdf',
    },
    {
        name: 'Product range',
        text: 'Product categories we trade: biological, food and agricultural, raw materials.',
        href: '/docs/baviona-product-range.pdf',
    },
    {
        name: 'Partner request form',
        text: 'A short form to describe the product, volume and destination you need.',
        href: '/docs/baviona-partner-request.pdf',
    },
];

const FAQ = [
    {
        q: 'What products do you supply?',
        a: 'We trade biological products, food and agricultural commodities (including fresh and processed vegetables), natural raw materials and a wide range of other goods for different industries.',
    },
    {
        q: 'Which regions do you work with?',
        a: 'Our trade interests cover Europe, Asia, North and South America, Africa and Oceania.',
    },
    {
        q: 'How do I start working with you?',
        a: 'Send us a request through the contact page. Tell us which product you need, the approximate volume and the destination. We will come back to you with the next steps.',
    },
    {
        q: 'Do you help with logistics?',
        a: 'Yes. We coordinate export-import operations and international logistics as part of the supply process.',
    },
    {
        q: 'What about quality standards and documents?',
        a: 'We pay close attention to product quality and applicable standards. Required documents and certificates depend on the product and the destination market, so please mention them in your request.',
    },
];

const Resources = () => (
    <main className="page">
        <section className="page__hero">
            <div className="container">
                <h1 className="page__hero-title">Resources</h1>
                <p className="page__hero-text">
                    Documents and answers that help you get to know BAVIONA GROUP before
                    we talk.
                </p>
            </div>
        </section>

        <section className="page__section page__section--white">
            <div className="container">
                <h2 className="page__title">Downloads</h2>
                <p className="page__text">Get the main information in one file.</p>

                <div className="resources__files">
                    {FILES.map((f) => (
                        <a
                            key={f.name}
                            className="resources__file"
                            href={f.href}
                            download
                        >
                            <span className="resources__file-name">{f.name}</span>
                            <span className="resources__file-text">{f.text}</span>
                            <span className="resources__file-link">Download PDF</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>

        <section className="page__section">
            <div className="container">
                <h2 className="page__title">Frequently asked questions</h2>

                <div className="resources__faq">
                    {FAQ.map((item) => (
                        <details key={item.q} className="resources__q">
                            <summary>{item.q}</summary>
                            <p className="resources__a">{item.a}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>

        <section className="page__cta">
            <div className="container page__cta-container">
                <h2 className="page__title">Did not find your answer?</h2>
                <Link to="/contact" className="page__btn">
                    Contact us
                </Link>
            </div>
        </section>
    </main>
);

export default Resources;