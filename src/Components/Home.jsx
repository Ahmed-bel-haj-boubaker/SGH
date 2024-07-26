import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonials from "./Testimonials";
import InstagramPost from "./InstagramPost";
import Hero from "../Shared-components/Hero";
import Statistic from "../Shared-components/Statistic";
import Team from "../Shared-components/Team";
import HeroSection from "./HeroSection";
import Securite from "./Securite";
import PartnerSlider from "../Shared-components/PartnerSlider";
import Banner from "./Banner";
import deratisation from "../../public/images/nettoyage.avif";
const Home = () => {
  return (
    <>
      <div>
        <Hero />
        <Statistic />

        <HeroSection />
      </div>

      <div className="relative overflow-hidden bg-gray-50 py-10">
        <Testimonials />
      </div>
      <div className="-mt-9 px-5  shadow-lg rounded-lg bg-slate-200  ">
        <PartnerSlider />
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
