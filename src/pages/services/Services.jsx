import { Link } from 'react-router-dom';
import './services.scss';

const SERVICES = [
    {
        name: 'Product sourcing',
        desc: 'We find producers and products that match your requirements for quality, volume and destination market.',
    },
    {
        name: 'Supplier development',
        desc: 'We build and maintain relationships with manufacturers and suppliers, so buyers get a dependable supply base.',
    },
    {
        name: 'Commercial negotiations',
        desc: 'We help both sides agree on clear commercial terms based on transparency and mutual benefit.',
    },
    {
        name: 'Export and import operations',
        desc: 'We coordinate the export-import side of each deal, from documents to the movement of goods between countries.',
    },
    {
        name: 'International logistics',
        desc: 'We coordinate transport and delivery so goods reach the buyer on the agreed terms.',
    },
    {
        name: 'Global supply chains',
        desc: 'We organise long-term supply across Europe, Asia, North and South America, Africa and Oceania.',
    }
];

const STEPS = [
    {
        name: 'Request',
        text: 'You tell us what you need: product, volume and destination.',
    },
    {
        name: 'Sourcing',
        text: 'We search for suitable producers and suppliers.',
    },
    {
        name: 'Terms',
        text: 'We help agree commercial terms between the parties.',
    },
    {
        name: 'Delivery',
        text: 'We coordinate logistics until the goods arrive.',
    },
];

const SECTORS = [
    'Biological Products',
    'Food & Agricultural Products',
    'Raw Materials & Commodities',
    'General Trading & Global Supply',
];

const Services = () => (
    <main className="page">
        <section className="page__hero">
            <div className="container">
                <h1 className="page__hero-title">Our Services</h1>
                <p className="page__hero-text">
                    Comprehensive international trading services: from finding the right
                    product to coordinating its delivery across borders.
                </p>
            </div>
        </section>

        <section className="page__section">
            <div className="container">
                <h2 className="page__title">What we do</h2>
                <p className="page__text">
                    We connect producers with global buyers and take care of the steps in
                    between.
                </p>

                <ul className="services__list">
                    {SERVICES.map((s) => (
                        <li key={s.name} className="services__item">
                            <h3 className="services__name">{s.name}</h3>
                            <p className="services__desc">{s.desc}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>

        <section className="page__section page__section--mist">
            <div className="container">
                <h2 className="page__title">How we work</h2>

                <ol className="services__steps">
                    {STEPS.map((s) => (
                        <li key={s.name} className="services__step">
                            <h3 className="services__step-name">{s.name}</h3>
                            <p className="services__step-text">{s.text}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>

        <section className="page__section">
            <div className="container">
                <h2 className="page__title">Sectors we serve</h2>
                <p className="page__text">
                    Our services cover the following product categories.
                </p>

                <ul className="services__sectors">
                    {SECTORS.map((s) => (
                        <li key={s} className="services__sector">
                            {s}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    </main>
);

export default Services;