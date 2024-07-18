import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonials from "./Testimonials";
import InstagramPost from "./InstagramPost";
import Hero from "../Shared-components/Hero";
import Statistic from "../Shared-components/Statistic";
import Team from "../Shared-components/Team";

const Home = () => {
  return (
    <>
      <div>
        <Hero />
        <Statistic />
      </div>
      <div className="relative overflow-hidden">
        <Testimonials />
        <Team />
        <InstagramPost />
      </div>
    </>
  );
};

export default Home;
