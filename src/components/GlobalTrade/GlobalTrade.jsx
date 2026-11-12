import { useEffect, useRef, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import img from '../../assets/global.webp';
import './GlobalTrade.scss';

const regions = [
  'North America',
  'Europe',
  'Asia',
  'Africa',
  'South America',
  'Oceania',
];

const useInView = (threshold = 0.2) => {
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

const GlobalTrade = () => {
  const [ref, visible] = useInView();

  return (
    <section ref={ref} className={`global ${visible ? 'global--visible' : ''}`}>
      <img className="global__bg" src={img} alt="" />
      <div className="global__overlay" />

      <div className="global__container container">
        <div className="global__content">
          <span className="global__tag">
            <i /> Worldwide Reach
          </span>

          <h2 className="global__title">
            Global Trade <span>Without Borders</span>
          </h2>

          <p className="global__text">
            We connect markets across the globe, building stronger supply chains and creating new
            opportunities for businesses everywhere.
          </p>

          <a href="/about" className="global__btn">
            Our Global Network <FiArrowRight />
          </a>
        </div>

        <div className="global__regions">
          {regions.map((r, i) => (
            <div key={r} className="global__region" style={{ '--i': i }}>
              <span className="global__region-num">0{i + 1}</span>
              <span className="global__region-name">{r}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalTrade;