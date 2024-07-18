import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonials from "./Testimonials";
import InstagramPost from "./InstagramPost";
import Hero from "../Shared-components/Hero";
import Statistic from "../Shared-components/Statistic";
import Team from "../Shared-components/Team";
import HeroSection from "./HeroSection";
import Securite from "./Securite";

const Home = () => {
  return (
    <>
      <div>
        <Hero />
        <Statistic />
        <HeroSection />
      </div>
    
      <div className="relative overflow-hidden">
        <Testimonials />
      </div>
      <div className="bg-white">
        <Securite />
      </div>
      <Team />
      <InstagramPost />
    </>
  );
};

export default Home;
