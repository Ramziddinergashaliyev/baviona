// import './WhoWeAre.scss';
// import img1 from "../../assets/who1.jpg"
// import img2 from "../../assets/who2.jpg"
// import img3 from "../../assets/who3.jpg"

// const cards = [
//   { img: img1, title: 'Sourcing Excellence', text: 'We identify the right suppliers to match your exact requirements.' },
//   { img: img2, title: 'Quality Assurance', text: 'Strict quality control and inspections to ensure global standards.' },
//   { img: img3, title: 'Reliable Logistics', text: 'Efficient shipping and delivery to keep your business moving.' },
// ];

// const WhoWeAre = () => (
//   <section className="who">
//     <div className="who__container">
//       <div className="who__info">
//         <h2 className="who__title">Who We Are</h2>
//         <p className="who__text">
//           Baviona Group is a global sourcing and trade partner dedicated to connecting businesses with trusted
//           suppliers, high-quality products, and reliable logistics solutions. We simplify international trade,
//           create value across borders, and help our partners grow with confidence.
//         </p>
//         <a href="/about" className="who__btn">Learn More</a>
//       </div>

//       {cards.map((c) => (
//         <article key={c.title} className="who__card">
//           <img className="who__card-img" src={c.img} alt={c.title} />
//           <h4 className="who__card-title">{c.title}</h4>
//           <p className="who__card-text">{c.text}</p>
//         </article>
//       ))}
//     </div>
//   </section>
// );

// export default WhoWeAre;


import { useEffect, useRef, useState } from 'react';
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi';
import img1 from '../../assets/who1.jpg';
import img2 from '../../assets/who2.jpg';
import img3 from '../../assets/who3.jpg';
import './WhoWeAre.scss';

const cards = [
  { img: img1, title: 'Sourcing Excellence', text: 'We identify the right suppliers to match your exact requirements.' },
  { img: img2, title: 'Quality Assurance', text: 'Strict quality control and inspections to ensure global standards.' },
  { img: img3, title: 'Reliable Logistics', text: 'Efficient shipping and delivery to keep your business moving.' },
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

const WhoWeAre = () => {
  const [ref, visible] = useInView();

  return (
    <section ref={ref} className={`who ${visible ? 'who--visible' : ''}`}>
      <span className="who__blob who__blob--1" />
      <span className="who__blob who__blob--2" />

      <div className="who__container container">
        <div className="who__info">
          <span className="who__tag">About Baviona</span>
          <h2 className="who__title">
            Who <span>We Are</span>
          </h2>
          <p className="who__text">
            Baviona Group is a global sourcing and trade partner dedicated to connecting businesses with trusted
            suppliers, high-quality products, and reliable logistics solutions. We simplify international trade,
            create value across borders, and help our partners grow with confidence.
          </p>
          <a href="/about" className="who__btn">
            Learn More <FiArrowRight />
          </a>
        </div>

        {cards.map((c, i) => (
          <article key={c.title} className="who__card" style={{ '--i': i }}>
            <div className="who__card-media">
              <img className="who__card-img" src={c.img} alt={c.title} />
              <span className="who__card-num">0{i + 1}</span>
              <span className="who__card-arrow">
                <FiArrowUpRight />
              </span>
            </div>
            <div className="who__card-body">
              <h4 className="who__card-title">{c.title}</h4>
              <p className="who__card-text">{c.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default WhoWeAre;