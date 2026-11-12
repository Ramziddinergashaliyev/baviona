import { useEffect, useRef, useState } from 'react';
import { FaHandshake } from 'react-icons/fa';
import { FiAward, FiSettings, FiGlobe } from 'react-icons/fi';
import './Approach.scss';

const items = [
  { icon: <FaHandshake />, title: 'Reliability', text: 'Dependable partners delivering consistent results.' },
  { icon: <FiAward />, title: 'Quality', text: 'Highest standards in every shipment.' },
  { icon: <FiSettings />, title: 'Flexibility', text: 'Tailored solutions for your unique needs.' },
  { icon: <FiGlobe />, title: 'Global Vision', text: 'Connecting markets to create lasting opportunities.' },
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

const Approach = () => {
  const [ref, visible] = useInView();

  return (
    <section ref={ref} className={`approach ${visible ? 'approach--visible' : ''}`}>
      <span className="approach__blob approach__blob--1" />
      <span className="approach__blob approach__blob--2" />

      <div className="approach__container container">
        <div className="approach__grid">
          {items.map((i, idx) => (
            <div key={i.title} className="approach__item" style={{ '--i': idx }}>
              <span className="approach__icon">{i.icon}</span>
              <h4 className="approach__item-title">{i.title}</h4>
              <p className="approach__item-text">{i.text}</p>
              <span className="approach__line" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;