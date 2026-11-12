import { FiGlobe, FiShield, FiTrendingUp } from 'react-icons/fi';
import { FaShip } from 'react-icons/fa';
import './FeaturesBar.scss';

const items = [
  { icon: <FiGlobe />, title: 'Global Network', text: 'Access to verified suppliers across 50+ countries.' },
  { icon: <FiShield />, title: 'Trusted Partners', text: 'Rigorous verification for quality and compliance.' },
  { icon: <FaShip />, title: 'End-to-End Support', text: 'Sourcing, logistics, and after-sales support.' },
  { icon: <FiTrendingUp />, title: 'Scalable Solutions', text: 'Tailored sourcing solutions for businesses of all sizes.' },
];

const FeaturesBar = () => (
  <section id="next" className="features-bar">
    <div className="container">
      <div className="features-bar__box">
        {items.map((i) => (
          <div key={i.title} className="features-bar__item">
            <span className="features-bar__icon">{i.icon}</span>
            <div className="features-bar__body">
              <h4 className="features-bar__title">{i.title}</h4>
              <p className="features-bar__text">{i.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesBar;