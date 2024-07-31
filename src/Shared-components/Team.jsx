import { Link } from "react-router-dom";
import image from "../../public/images/testimonial/girl.png";
import { motion } from "framer-motion";
import deratisation from "../../public/images/deratisation-saint-cloud-2.jpg";
import Désinsectisation from "../../public/images/desinsectisation.png";
import Jardinage from "../../public/images/jardinage-domicile-clean-2.jpg";
import Désinfection from "../../public/images/desinfection.png";
import ServiceNetoyage from "../../public/images/Nettoyage-bureau.jpg";
import { useState } from "react";

const teamMembers = [
  {
    name: "Dératisation",
    role: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam omnis cum magnam laudantium. Ducimus vero suscipit, nisi dolorem quos officiis tenetur voluptas harum, esse obcaecati natus, autem iusto totam quasi.",
    image: deratisation,
    to: "/Dératisation",
  },
  {
    name: "Désinsectisation",
    role: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam omnis cum magnam laudantium. Ducimus vero suscipit, nisi dolorem quos officiis tenetur voluptas harum, esse obcaecati natus, autem iusto totam quasi.",
    image: Désinsectisation,
    to: "/Désinsectisation",
  },
  {
    name: "Désinfection",
    role: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam omnis cum magnam laudantium. Ducimus vero suscipit, nisi dolorem quos officiis tenetur voluptas harum, esse obcaecati natus, autem iusto totam quasi.",
    image: Désinfection,
    to: "/Désinfection",
  },
  {
    name: "Jardinage",
    role: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam omnis cum magnam laudantium. Ducimus vero suscipit, nisi dolorem quos officiis tenetur voluptas harum, esse obcaecati natus, autem iusto totam quasi.",
    image: Jardinage,
    to: "/Jardinage",
  },

  {
    name: "Service de Netoyage",
    role: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam omnis cum magnam laudantium. Ducimus vero suscipit, nisi dolorem quos officiis tenetur voluptas harum, esse obcaecati natus, autem iusto totam quasi.",
    image: ServiceNetoyage,
    to: "/ServiceNetoyage",
  },
];

const Team = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedMembers = showAll ? teamMembers : teamMembers.slice(0, 3);
  return (
    <div className="bg-gray-50 mb-6 pb-1 ">
      <section className="container mx-auto px-4 mb-16 flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center mb-12 mt-5">
          Nos Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 w-full">
          {displayedMembers.map((member, index) => (
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
                className="w-full h-56 sm:h-64 object-cover transition-transform ease-in-out hover:scale-90"
              />
              <div className="p-6">
                <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                  <Link to={member.to}>{member.name}</Link>
                </h2>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
        {teamMembers.length > 3 && (
          <button
            className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Voir moins" : "Voir plus"}
          </button>
        )}
      </section>
    </div>
  );
};

export default Team;
