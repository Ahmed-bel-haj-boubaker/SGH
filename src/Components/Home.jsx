import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonials from "./Testimonials";
import InstagramPost from "./InstagramPost";
import Hero from "../Shared-components/Hero";
import Statistic from "../Shared-components/Statistic";

const Home = () => {
  return (
    <>
      <div>
        <Hero />
        <Statistic />
      </div>
      <div className="relative overflow-hidden">
        <Testimonials />
        <InstagramPost />
      </div>
    </>
  );
};

export default Home;
