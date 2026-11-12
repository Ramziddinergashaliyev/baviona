import { useEffect, useRef, useState } from 'react';
import bg from '../../assets/stats-bg.jpg';
import './Stats.scss';

const stats = [
  { value: 10, suffix: '+', label: 'Years of Experience' },
  { value: 6, suffix: '', label: 'Continents' },
  { value: 50, suffix: '+', label: 'Countries Served' },
];

const useInView = (threshold = 0.3) => {
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

// 0 dan target gacha sanaydi
const CountUp = ({ to, suffix, start, duration = 1800 }) => {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!start) return;
    let raf;
    const t0 = performance.now();

    const tick = (now) => {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, to, duration]);

  return (
    <>
      {n}
      {suffix}
    </>
  );
};

const Stats = () => {
  const [ref, visible] = useInView();

  return (
    <section ref={ref} className={`stats ${visible ? 'stats--visible' : ''}`}>
      <img className="stats__bg" src={bg} alt="" />
      <div className="stats__overlay" />

      <div className="stats__container container">
        {stats.map((s, i) => (
          <div key={s.label} className="stats__item" style={{ '--i': i }}>
            <strong className="stats__value">
              <CountUp to={s.value} suffix={s.suffix} start={visible} />
            </strong>
            <span className="stats__label">{s.label}</span>
            <span className="stats__line" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;