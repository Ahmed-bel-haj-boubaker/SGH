import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";

import heroImage1 from "../../public/images/225614086_104723208567103_6153079341054169572_n.jpg"; // Adjust path as per your actual folder structure
import heroImage2 from "../../public/images/banniere-traitement-nuisibles.jpg"; // Adjust path as per your actual folder structure
import banner_rongeurs from "../../public/images/deratisation-saint-cloud-2.jpg"; // Adjust path as per your actual folder structure
import Testimonials from "./Testimonials";
import InstagramPost from "./InstagramPost";
import Hero from "../Shared-components/Hero";
import Statistic from "../Shared-components/Statistic";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: "linear",
  };

  const images = [heroImage1, heroImage2, banner_rongeurs];

  return (
    <>
      <div>
        <Hero />
        <Statistic />
        {/* <section className="h-full font-[Poppins] relative">
          <Slider {...settings} className="h-full">
            {images.map((image, index) => (
              <div key={index} className="h-full">
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </Slider>
          <div className="absolute inset-0 flex flex-col justify-center text-center items-center">
            <h1 className="md:text-5xl text-3xl text-white font-semibold py-5">
              Société Générale d'Hygiène
            </h1>
            <div className="text-xl">
              <button className="flex items-center bg-primary text-white px-6 py-3 rounded-full ml-4 shadow-md hover:bg-primary transition duration-300">
                <div className="bg-white text-primary rounded-full p-3 mr-2 flex items-center justify-center w-11">
                  <FontAwesomeIcon icon={faFileAlt} className="text-lg h-5" />
                </div>
                <span className="font-semibold">Demande de devis</span>
              </button>
            </div>
          </div>
        </section> */}
      </div>
      <div className="relative overflow-hidden">
        <Testimonials />
        <InstagramPost />
      </div>
    </>
  );
};

export default Home;
