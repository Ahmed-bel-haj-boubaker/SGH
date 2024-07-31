import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonials from "./Testimonials";
import Hero from "../Shared-components/Hero";
import Statistic from "../Shared-components/Statistic";
import Team from "../Shared-components/Team";
import HeroSection from "./HeroSection";
import Securite from "./Securite";
import Banner from "./Banner";
import deratisation from "../../public/images/nettoyage.avif";
import SliderAnimated from "../Shared-components/SliderAnimated";

const Home = () => {
  return (
    <>
      <div>
        <Hero />
        <SliderAnimated />
        <Statistic />
        <HeroSection />
      </div>

      <div className="relative overflow-hidden bg-gray-50 py-10">
        <Testimonials />
      </div>

      <div className="bg-white py-10">
        <Securite />
      </div>

      <div className="bg-gray-50 py-10">
        <Team />
      </div>

      <Banner
        text={"hfosfoseofiseofihs"}
        title={"Votre partenaire en nettoyage"}
        image={deratisation}
      />
    </>
  );
};

export default Home;
