// import { FiArrowRight } from 'react-icons/fi';
// import './CtaBanner.scss';

// const CtaBanner = () => (
//   <section className="cta">
//     <img className="cta__bg" src="/images/cta-bg.jpg" alt="" />
//     <div className="cta__overlay" />

//     <div className="cta__container">
//       <div>
//         <h3 className="cta__title">Become Our Trade Partner</h3>
//         <p className="cta__text">Let's create new opportunities together.</p>
//       </div>
//       <a href="/contact" className="cta__btn">
//         Get a Quote <FiArrowRight />
//       </a>
//     </div>
//   </section>
// );

// export default CtaBanner;


import { useEffect, useRef, useState } from 'react';
import { FiArrowRight, FiPhone } from 'react-icons/fi';
import './CtaBanner.scss';

const useInView = (threshold = 0.25) => {
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

const CtaBanner = () => {
  const [ref, visible] = useInView();

  return (
    <section ref={ref} className={`cta ${visible ? 'cta--visible' : ''}`}>
      <div className="cta__overlay" />
      <span className="cta__orb cta__orb--1" />
      <span className="cta__orb cta__orb--2" />

      <div className="cta__container container">
        <div className="cta__panel">
          <div className="cta__content">
            <span className="cta__tag">
              <i /> Let's Work Together
            </span>
            <h3 className="cta__title">Become Our Trade Partner</h3>
            <p className="cta__text">Let's create new opportunities together.</p>
          </div>

          <div className="cta__actions">
            <a href="/contact" className="cta__btn">
              Get a Quote <FiArrowRight />
            </a>
            <a href="/contact" className="cta__btn cta__btn--ghost">
              <FiPhone /> Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;