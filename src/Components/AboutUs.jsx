import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Correct import

import logo from "../../public/images/Logo.png";
import image2 from "../../public/images/desinsectisation.png";
import Team from "../Shared-components/Team";
import AnimatedBanner from "../Shared-components/AnimatedBanner";
import contactImage from "../../public/images/contact-us.jpg";

import { Link } from "react-router-dom";
import Securite from "../Components/Securite";
import bg from "../../public/images/bgContact.jpg";
import SliderAnimated from "../Shared-components/SliderAnimated";
import FeaturesSection from "../Shared-components/FeaturesSection";

const AboutUs = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="py-20">
      <AnimatedBanner title={"À PROPOS DE NOUS"} />
      <div className="bg-slate-200">
        <section
          ref={ref1}
          className="container mx-auto px-4 flex flex-col md:flex-row items-center mb-16"
        >
          <img src={logo} alt="Logo" className="mb-6 md:mb-0 md:mr-6" />
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: inView1 ? 1 : 0, x: inView1 ? 0 : -50 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-4 font-poppins">
              Qui nous sommes ?
            </h2>
            <p className="text-xl text-gray-700 font-poppins">
              La société “SGH ” à su s’implanter au fils du temps comme un des
              leaders du secteur de la 3D (Désinsectisation, Désinfection et
              Dératisation) . Nous intervenons également pour les professionnels
              dans tout le territoire de la Tunisie Nous vous proposons une
              large gamme de produits et services visant à préserver ou rétablir
              des conditions d’hygiène optimales dans vos locaux professionnels.
              Nous continuons à évoluer sans cesse afin de répondre à vos
              besoins.
            </p>
          </motion.div>
        </section>
      </div>
      {/* Section 2: Image and Text */}
      <FeaturesSection />
      {/* <div style={{ backgroundImage: `url('${bg}')` }} className="max-lg:p-2">
        <section
          ref={ref2}
          className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center mb-16"
        >
          <motion.div
            className="text-center md:text-right md:mr-6 bg-slate-200 rounded-lg p-5"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: inView2 ? 1 : 0, x: inView2 ? 0 : 50 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-4 font-poppins">
              Notre vision
            </h2>
            <p className="text-xl text-gray-700 font-poppins bg-slate-200 rounded-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium qui ipsam sit est. Laudantium eos maxime sapiente
              asperiores, dolores fugiat recusandae culpa architecto commodi
              natus! Impedit atque omnis eaque nisi.
            </p>
          </motion.div>
          <div className="w-full mb-6 md:mb-0 md:ml-6">
            <img
              src={image2}
              alt="Vision"
              className="w-full bg-slate-200 rounded-full scale-75 translate-x-3 animate-slideInRight"
            />
          </div>
        </section>
      </div> */}
      <div className="bg-slate-400">
        {" "}
        <Team />
      </div>
      <section className="container mx-auto my-10 font-poppins ">
        <SliderAnimated />
      </section>
    </div>
  );
};

export default AboutUs;
