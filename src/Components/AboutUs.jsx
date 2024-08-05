import { motion } from "framer-motion";

import logo from "../../public/images/Logo.png";

import Team from "../Shared-components/Team";
import AnimatedBanner from "../Shared-components/AnimatedBanner";

import SliderAnimated from "../Shared-components/SliderAnimated";
import FeaturesSection from "../Shared-components/FeaturesSection";

const AboutUs = () => {
  return (
    <div className="py-20">
      <AnimatedBanner title={"À PROPOS DE NOUS"} />
      <div className="bg-slate-100">
        <section className="container mx-auto px-4 flex  flex-col   items-center mb-16 p-5">
          <img src={logo} alt="Logo" className="mb-6 md:mb-0 md:mr-6 size-80 " />
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold mb-4 font-poppins text-center leading-10">
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
          </div>
        </section>
      </div>

      <FeaturesSection />

      <div className="bg-slate-400">
        {" "}
        <Team />
      </div>
      <section className=" mx-auto my-10 font-poppins ">
        <SliderAnimated />
      </section>
    </div>
  );
};

export default AboutUs;
