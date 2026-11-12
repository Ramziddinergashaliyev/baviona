import Header from '../components/layouts/Header/Header';
import Hero from '../components/Hero/Hero';
import FeaturesBar from '../components/FeaturesBar/FeaturesBar';
import WhoWeAre from '../components/WhoWeAre/WhoWeAre';
import CoreDirections from '../components/CoreDirections/CoreDirections';
import GlobalTrade from '../components/GlobalTrade/GlobalTrade';
import Approach from '../components/Approach/Approach';
import Stats from '../components/Stats/Stats';
import MissionVision from '../components/MissionVision/MissionVision';
import CtaBanner from '../components/CtaBanner/CtaBanner';
import Footer from '../components/layouts/Footer/Footer';

const Home = () => (
  <>
    <Hero />
    <FeaturesBar />
    <WhoWeAre />
    <CoreDirections />
    <GlobalTrade />
    <Approach />
    <Stats />
    <MissionVision />
    <CtaBanner />
  </>
);

export default Home;
