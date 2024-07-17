import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Jardinage = () => {
  return (
    <section className="bg-gradient-to-r from-green-400 to-green-600 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            TRAVAUX DE JARDINAGE
          </h2>
          <p className="text-white text-lg mb-8">
            Conseil & assistance pour un jardin magnifique
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <motion.div
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ duration: 0.3 }}
            className="hover:scale-110 hover:translate-y[-5px] transition-duration-300"
          >
            <img
              src="../../../public/images/jardinage.jpg"
              alt="Jardinage Services"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <h4 className="text-xl font-bold text-white mt-4">
              Services complets
            </h4>
            <ul className="list-disc text-white mt-2">
              <li>Désherbage</li>
              <li>Scarification de votre pelouse</li>
              <li>Tonte de gazon</li>
              <li>Taille des arbustes</li>
              <li>Taille de haies</li>
              <li>Taille de petits arbres fruitiers</li>
              <li>Ramassage de feuilles</li>
              <li>Passage du nettoyeur haute pression</li>
              <li>Entretien Des espaces vertes</li>
            </ul>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ duration: 0.3 }}
            className="hover:scale-110 hover:translate-y[-5px] transition-duration-300"
          >
            <img
              src="../../../public/images/jardinage-domicile-clean-2.jpg"
              alt="Jardinage Expertise"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <h4 className="text-xl font-bold text-white mt-4">
              Expertise & professionnalisme
            </h4>
            <p className="text-white mt-2">
              Chaque jardin mérite un entretien régulier et doit être réalisé
              par des professionnels. Toutes nos équipes de SGH ont les
              formations nécessaires pour prendre les bonnes décisions au bon
              moment.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col items-center mt-8">
          <h3 className="text-3xl font-bold text-white mb-4">
            CONTRAT D'ENTRETIEN ANNUEL
          </h3>
          <p className="text-white mb-4">
            Profitez d'un jardin bien entretenu tout au long de l'année et sans
            contrainte. Nous vous proposons des entretiens réguliers (Tonte,
            taille, scarification, désherbage,…) ou encore des interventions
            ponctuelles dans le cadre de remise en état de jardin.
          </p>
          <button className="bg-white hover:bg-gray-100 text-green-600 font-bold py-2 px-4 rounded-md mt-4 shadow-md">
            <Link to="/demandeDevis">Demandez un devis gratuit</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Jardinage;
