import { useState } from 'react';
import './contact.scss';

const CONTACT = {
    email: 'info@baviona.com',
    phone: '+000 00 000 00 00',
    address: 'Your office address',
};

const FORM_ENDPOINT = '';

const INTERESTS = [
    'Biological Products',
    'Food & Agricultural Products',
    'Raw Materials & Commodities',
    'General Trading & Global Supply',
    'Other',
];

const Contact = () => {
    const [status, setStatus] = useState('idle'); // idle | sending | ok | error

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = Object.fromEntries(new FormData(form).entries());

        setStatus('sending');
        try {
            if (FORM_ENDPOINT) {
                const res = await fetch(FORM_ENDPOINT, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data),
                });
                if (!res.ok) throw new Error('Request failed');
            }
            setStatus('ok');
            form.reset();
        } catch {
            setStatus('error');
        }
    };

    return (
        <main className="page">
            <section className="page__hero">
                <div className="container">
                    <h1 className="page__hero-title">Contact Us</h1>
                    <p className="page__hero-text">
                        Tell us which product you need, the volume and the destination. We
                        will reply with the next steps.
                    </p>
                </div>
            </section>

            <section className="page__section">
                <div className="container contact__grid">
                    <div className="contact__details">
                        <div>
                            <p className="contact__label">Email</p>
                            <p className="contact__value">
                                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                            </p>
                        </div>
                        <div>
                            <p className="contact__label">Phone</p>
                            <p className="contact__value">
                                <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}>
                                    {CONTACT.phone}
                                </a>
                            </p>
                        </div>
                        <div>
                            <p className="contact__label">Address</p>
                            <p className="contact__value">{CONTACT.address}</p>
                        </div>
                    </div>

                    <form className="contact__form" onSubmit={handleSubmit}>
                        <div className="contact__field">
                            <label htmlFor="name">Name</label>
                            <input id="name" name="name" type="text" required autoComplete="name" />
                        </div>

                        <div className="contact__field">
                            <label htmlFor="company">Company</label>
                            <input id="company" name="company" type="text" autoComplete="organization" />
                        </div>

                        <div className="contact__field">
                            <label htmlFor="email">Email</label>
                            <input id="email" name="email" type="email" required autoComplete="email" />
                        </div>

                        <div className="contact__field">
                            <label htmlFor="phone">Phone</label>
                            <input id="phone" name="phone" type="tel" autoComplete="tel" />
                        </div>

                        <div className="contact__field contact__field--full">
                            <label htmlFor="interest">I am interested in</label>
                            <select id="interest" name="interest" defaultValue={INTERESTS[0]}>
                                {INTERESTS.map((item) => (
                                    <option key={item} value={item}>
                                        {item}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="contact__field contact__field--full">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" required />
                        </div>

                        {status === 'ok' && (
                            <p className="contact__status contact__status--ok" role="status">
                                Thank you! Your message has been sent. We will contact you soon.
                            </p>
                        )}
                        {status === 'error' && (
                            <p className="contact__status contact__status--error" role="alert">
                                Something went wrong. Please try again or write to us by email.
                            </p>
                        )}

                        <div className="contact__submit">
                            <button
                                type="submit"
                                className="page__btn"
                                disabled={status === 'sending'}
                            >
                                {status === 'sending' ? 'Sending…' : 'Send message'}
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default Contact;