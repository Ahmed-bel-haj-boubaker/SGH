import { motion } from "framer-motion";
import Statistic from "../Shared-components/Statistic";
import logo from "../../public/images/Logo.png";
import image2 from "../../public/images/desinsectisation.png";
import Team from "../Shared-components/Team";

const AboutUs = () => {
  return (
    <div className=" py-20">
      {/* Section 1: Logo and Text */}
      <section className="container mx-auto px-4 flex flex-col md:flex-row items-center mb-16 ">
        <img
          src={logo}
          alt="Logo"
          className="w-64 h-64  mb-6 md:mb-0 md:mr-6"
        />
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4">Qui nous sommes ? </h2>
          <p className="text-lg text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam odio
            harum exercitationem, corporis doloremque ea! Necessitatibus
            blanditiis dolorem, molestias vitae nam quisquam sit est ab ullam
            perspiciatis iste molestiae harum!
          </p>
        </motion.div>
      </section>
      <div className="p-1">
        <div className="black-line-horizontal my-5 w-screen"></div>
      </div>
      {/* Section 2: Image and Text */}
      <section className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center mb-16 ">
        <motion.div
          className="text-center md:text-right md:mr-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4">Notre vision</h2>
          <p className="text-lg text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            qui ipsam sit est. Laudantium eos maxime sapiente asperiores,
            dolores fugiat recusandae culpa architecto commodi natus! Impedit
            atque omnis eaque nisi.
          </p>
        </motion.div>
        <img
          src={image2}
          alt="Vision"
          className="w-full md:w-1/2 mb-6 md:mb-0 md:ml-6"
        />
      </section>

      <Statistic />

      <Team />
    </div>
  );
};

export default AboutUs;
