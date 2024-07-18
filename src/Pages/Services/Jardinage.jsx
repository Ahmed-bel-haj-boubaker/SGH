/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import image1 from "../../../public/images/jardinage.jpg";
import image2 from "../../../public/images/jardinage-domicile-clean-2.jpg";

const Jardinage = () => {
  return (
    <section className="bg-gradient-to-r from-green-500 to-green-700 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-white">
            TRAVAUX DE JARDINAGE
          </h2>
          <p className="text-white text-xl mt-4">
            Conseil & assistance pour un jardin magnifique
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300"
          >
            <img
              src={image1}
              alt="Jardinage Services"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h4 className="text-2xl font-bold text-gray-800 mt-4">
              Services complets
            </h4>
            <ul className="list-disc text-gray-700 mt-4 space-y-2 pl-5">
              <li>Désherbage</li>
              <li>Scarification de votre pelouse</li>
              <li>Tonte de gazon</li>
              <li>Taille des arbustes</li>
              <li>Taille de haies</li>
              <li>Taille de petits arbres fruitiers</li>
              <li>Ramassage de feuilles</li>
              <li>Passage du nettoyeur haute pression</li>
              <li>Entretien des espaces verts</li>
            </ul>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300"
          >
            <img
              src={image2}
              alt="Jardinage Expertise"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h4 className="text-2xl font-bold text-gray-800 mt-4">
              Expertise & professionnalisme
            </h4>
            <p className="text-gray-700 mt-4">
              Chaque jardin mérite un entretien régulier et doit être réalisé
              par des professionnels. Toutes nos équipes de SGH ont les
              formations nécessaires pour prendre les bonnes décisions au bon
              moment.
            </p>
          </motion.div>
        </div>

        <div className="text-center mt-16">
          <h3 className="text-4xl font-extrabold text-white mb-4">
            CONTRAT D'ENTRETIEN ANNUEL
          </h3>
          <p className="text-white text-xl mb-4">
            Profitez d'un jardin bien entretenu tout au long de l'année et sans
            contrainte. Nous vous proposons des entretiens réguliers (Tonte,
            taille, scarification, désherbage,…) ou encore des interventions
            ponctuelles dans le cadre de remise en état de jardin.
          </p>
          <Link
            to="/demandeDevis"
            className="bg-white hover:bg-gray-100 text-green-700 font-bold py-3 px-6 rounded-md shadow-md transition duration-300"
          >
            Demandez un devis gratuit
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Jardinage;
