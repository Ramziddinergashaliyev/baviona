// import { FiArrowRight, FiMail } from 'react-icons/fi';
// import vd from '../../assets/video/bg-vd.mp4';
// import './Hero.scss';

// const Hero = () => (
//   <section className="hero">
//     <video
//       className="hero__bg"
//       src={vd}
//       autoPlay
//       muted
//       loop
//       playsInline
//       preload="auto"
//     />
//     <div className="hero__overlay" />

//     <div className="hero__container container">
//       <span className="hero__badge">
//         <i /> Global Sourcing &amp; Trade Partner
//       </span>

//       <h1 className="hero__title">
//         Connecting Markets.
//         <span className="hero__title-accent">Creating Opportunities.</span>
//       </h1>

//       <p className="hero__text">
//         Your global sourcing and trade partner for a stronger, more connected tomorrow.
//       </p>

//       <div className="hero__actions">
//         <a href="/services" className="hero__btn">
//           Explore Solutions <FiArrowRight />
//         </a>
//         <a href="/contact" className="hero__btn hero__btn--ghost">
//           <FiMail /> Contact Us
//         </a>
//       </div>
//     </div>
//   </section>
// );

// export default Hero;

import { useEffect, useRef, useState } from 'react';
import { FiArrowRight, FiMail } from 'react-icons/fi';
import vd from '../../assets/video/bg-vd.mp4';
import './Hero.scss';

const Hero = () => {
  const videoRef = useRef(null);
  const [ready, setReady] = useState(false);

  // Video keshdan tez yuklanib bo'lgan bo'lsa ham ishlashi uchun
  useEffect(() => {
    if (videoRef.current && videoRef.current.readyState >= 2) {
      setReady(true);
    }
  }, []);

  return (
    <section className="hero">
      <video
        ref={videoRef}
        className={`hero__bg${ready ? ' hero__bg--ready' : ''}`}
        src={vd}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onLoadedData={() => setReady(true)}
      />
      <div className="hero__overlay" />

      <div className="hero__container container">
        <span className="hero__badge">
          <i /> Global Sourcing &amp; Trade Partner
        </span>

        <h1 className="hero__title">
          Connecting Markets.
          <span className="hero__title-accent">Creating Opportunities.</span>
        </h1>

        <p className="hero__text">
          Your global sourcing and trade partner for a stronger, more connected tomorrow.
        </p>

        <div className="hero__actions">
          <a href="/services" className="hero__btn">
            Explore Solutions <FiArrowRight />
          </a>
          <a href="/contact" className="hero__btn hero__btn--ghost">
            <FiMail /> Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;