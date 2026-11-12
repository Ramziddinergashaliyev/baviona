// import { FiTarget, FiEye } from 'react-icons/fi';
// import './MissionVision.scss';

// const MissionVision = () => (
//   <section className="mv">
//     <div className="mv__container">
//       <div className="mv__item">
//         <span className="mv__icon"><FiTarget /></span>
//         <div>
//           <h3 className="mv__title">Our Mission</h3>
//           <p className="mv__text">
//             To bridge global markets by providing reliable sourcing, quality products, and seamless trade solutions
//             that create sustainable growth for our partners.
//           </p>
//         </div>
//       </div>

//       <div className="mv__item">
//         <span className="mv__icon"><FiEye /></span>
//         <div>
//           <h3 className="mv__title">Our Vision</h3>
//           <p className="mv__text">
//             To be a trusted global trade partner, recognized for connecting businesses, empowering communities, and
//             building a more prosperous world.
//           </p>
//         </div>
//       </div>
//     </div>
//   </section>
// );

// export default MissionVision;


import { useEffect, useRef, useState } from 'react';
import { FiTarget, FiEye } from 'react-icons/fi';
import './MissionVision.scss';

const items = [
  {
    icon: <FiTarget />,
    tag: 'Mission',
    title: 'Our Mission',
    text: 'To bridge global markets by providing reliable sourcing, quality products, and seamless trade solutions that create sustainable growth for our partners.',
    dark: false,
  },
  {
    icon: <FiEye />,
    tag: 'Vision',
    title: 'Our Vision',
    text: 'To be a trusted global trade partner, recognized for connecting businesses, empowering communities, and building a more prosperous world.',
    dark: true,
  },
];

// element ekranga kirganda true qaytaradi
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

const MissionVision = () => {
  const [ref, visible] = useInView();

  return (
    <section ref={ref} className={`mv ${visible ? 'mv--visible' : ''}`}>
      <span className="mv__blob mv__blob--1" />
      <span className="mv__blob mv__blob--2" />

      <div className="mv__container container">
        {items.map((it, i) => (
          <article
            key={it.title}
            className={`mv__item ${it.dark ? 'mv__item--dark' : ''}`}
            style={{ '--i': i }}
          >
            <span className="mv__bg-text">{it.tag}</span>

            <span className="mv__icon">{it.icon}</span>

            <div className="mv__body">
              <h3 className="mv__title">{it.title}</h3>
              <p className="mv__text">{it.text}</p>
            </div>

            <span className="mv__line" />
          </article>
        ))}
      </div>
    </section>
  );
};

export default MissionVision;