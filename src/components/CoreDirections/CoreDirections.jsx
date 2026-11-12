// import { FiArrowRight } from 'react-icons/fi';
// import img1 from "../../assets/our1.jpg"
// import img2 from "../../assets/our2.jpg"
// import img3 from "../../assets/our3.jpg"
// import img4 from "../../assets/our4.jpg"
// import './CoreDirections.scss';

// const items = [
//   { img: img1, title: 'Biological Products', text: 'Ingredients, extracts, and bio-based solutions for a healthier tomorrow.', href: '/services/biological' },
//   { img: img2, title: 'Food & Agricultural Products', text: 'Quality food and agricultural commodities from trusted sources.', href: '/services/food' },
//   { img: img3, title: 'Raw Materials & Commodities', text: 'Essential materials for industry and global supply chains.', href: '/services/raw-materials' },
//   { img: img4, title: 'General Trading & Global Supply', text: 'Flexible trading solutions across a wide range of products.', href: '/services/trading' },
// ];

// const CoreDirections = () => (
//   <section className="directions">
//     <div className="directions__container">
//       <h2 className="directions__title">Our Core Directions</h2>
//       <p className="directions__sub">
//         <span className="directions__sub-accent">Diverse lines</span> of products. Global reach. Real opportunities.
//       </p>

//       <div className="directions__grid">
//         {items.map((i) => (
//           <article key={i.title} className="directions__card">
//             <img className="directions__img" src={i.img} alt={i.title} />
//             <div className="directions__body">
//               <div>
//                 <h4 className="directions__card-title">{i.title}</h4>
//                 <p className="directions__card-text">{i.text}</p>
//               </div>
//               <a href={i.href} className="directions__arrow" aria-label={i.title}><FiArrowRight /></a>
//             </div>
//           </article>
//         ))}
//       </div>
//     </div>
//   </section>
// );

// export default CoreDirections;


import { useEffect, useRef, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import img1 from '../../assets/our1.jpg';
import img2 from '../../assets/our2.jpg';
import img3 from '../../assets/our3.jpg';
import img4 from '../../assets/our4.jpg';
import './CoreDirections.scss';

const items = [
  { img: img1, title: 'Biological Products', text: 'Ingredients, extracts, and bio-based solutions for a healthier tomorrow.', href: '/services/biological' },
  { img: img2, title: 'Food & Agricultural Products', text: 'Quality food and agricultural commodities from trusted sources.', href: '/services/food' },
  { img: img3, title: 'Raw Materials & Commodities', text: 'Essential materials for industry and global supply chains.', href: '/services/raw-materials' },
  { img: img4, title: 'General Trading & Global Supply', text: 'Flexible trading solutions across a wide range of products.', href: '/services/trading' },
];

// element ekranga kirganda true qaytaradi
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

const CoreDirections = () => {
  const [ref, visible] = useInView();

  return (
    <section ref={ref} className={`directions ${visible ? 'directions--visible' : ''}`}>
      <span className="directions__blob directions__blob--1" />
      <span className="directions__blob directions__blob--2" />

      <div className="directions__container container">
        <div className="directions__head">
          <h2 className="directions__title">
            Our Core <span>Directions</span>
          </h2>
          <p className="directions__sub">
            <span className="directions__sub-accent">Diverse lines</span> of products. Global reach. Real opportunities.
          </p>
        </div>

        <div className="directions__grid">
          {items.map((i, idx) => (
            <a key={i.title} href={i.href} className="directions__card" style={{ '--i': idx }}>
              <div className="directions__media">
                <img className="directions__img" src={i.img} alt={i.title} />
                <span className="directions__num">0{idx + 1}</span>
              </div>

              <div className="directions__body">
                <div>
                  <h4 className="directions__card-title">{i.title}</h4>
                  <p className="directions__card-text">{i.text}</p>
                </div>
                <span className="directions__arrow">
                  <FiArrowRight />
                </span>
              </div>

              <span className="directions__line" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreDirections;