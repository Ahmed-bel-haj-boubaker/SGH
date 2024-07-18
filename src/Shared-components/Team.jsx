import image from "../../public/images/testimonial/girl.png";
import { motion } from "framer-motion";

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
];

const Team = () => {
  return (
    <div className="bg-gray-50 mb-6">
      <section className="container mx-auto px-4 mb-16 flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center mb-12 mt-5">
          Notre équipe
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 w-full">
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
                className="w-full h-56 sm:h-64 object-cover transition-transform ease-in-out hover:scale-90"
              />
              <div className="p-6">
                <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                  {member.name}
                </h2>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Team;
