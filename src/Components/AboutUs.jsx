import { motion } from "framer-motion";
import Statistic from "../Shared-components/Statistic";
import logo from "../../public/images/Logo.png";
import image from "../../public/images/testimonial/girl.png";
import image2 from "../../public/images/desinsectisation.png";
const teamMembers = [
  {
    name: "John Doe",
    role: "CEO",
    image: image,
  },
  {
    name: "Jane Smith",
    role: "CTO",
    image: image,
  },
  {
    name: "Alice Johnson",
    role: "Designer",
    image: image,
  },
  {
    name: "Bob Brown",
    role: "Developer",
    image: image,
  },
];

const AboutUs = () => {
  return (
    <div className="bg-white py-20">
      {/* Section 1: Logo and Text */}
      <section className="container mx-auto px-4 flex flex-col md:flex-row items-center mb-16">
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
      {/* Section 4: Our Team */}
      <section className="container mx-auto px-4 mb-16">
        <h2 className="text-4xl font-bold text-center mb-12 mt-5">
          Notre équipe
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{member.name}</h2>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
