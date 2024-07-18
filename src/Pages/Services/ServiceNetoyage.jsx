/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import image1 from "../../../public/images/nettoyage-industriel-usine.jpg";
import image2 from "../../../public/images/Nettoyage-bureau.jpg";

const ServiceNetoyage = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-gray-800">
            SOCIÉTÉ DE NETTOYAGE INDUSTRIEL
          </h2>
          <p className="text-gray-600 text-xl mt-4">
            SGH est une Société de Nettoyage Industriel qui propose ses services
            de nettoyage professionnels à toute le territoire de la Tunisie.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
            <img
              src={image1}
              alt="Nettoyage Industriel Services"
              className="w-full h-56 object-cover rounded-lg shadow-md mb-4"
            />
            <h4 className="text-2xl font-bold text-gray-800 mt-4">
              Services complets
            </h4>
            <ul className="list-disc text-gray-600 mt-4 space-y-2 pl-5">
              <li>Nettoyage et décapage à haute pression</li>
              <li>Nettoyage à la monobrosse</li>
              <li>Nettoyage à l'autolaveuse</li>
              <li>Nettoyage avec machine vapeur</li>
              <li>Nettoyage après déménagement</li>
              <li>Nettoyage d'usines</li>
              <li>Nettoyage d'entrepôts</li>
              <li>Nettoyage des sols</li>
              <li>Nettoyage de locaux commerciales</li>
              <li>Nettoyage de bureaux</li>
              <li>Nettoyage de lieux publics</li>
              <li>Nettoyage de moquettes</li>
              <li>Nettoyage de vitres</li>
              <li>Nettoyage de façades</li>
              <li>Nettoyage d'immeubles</li>
              <li>Protection et brillance des sols</li>
              <li>Nettoyage d'espaces urbains</li>
              <li>Nettoyage d'établissements hôteliers</li>
            </ul>
          </div>

          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
            <img
              src={image2}
              alt="Nettoyage Expertise"
              className="w-full h-56 object-cover rounded-lg shadow-md mb-4"
            />
            <h4 className="text-2xl font-bold text-gray-800 mt-4">
              Expertise & professionnalisme
            </h4>
            <p className="text-gray-600 mt-4">
              Nous disposons d’une équipe d’agents d’entretien hautement
              qualifiés et équipés pour aérer vos locaux et évacuer les odeurs
              désagréables, vider vos poubelles et remplacer les sacs,
              épousseter votre mobilier, enlever les toiles d’araignées,
              nettoyer vos sols. Evidemment, nos prestations s’adaptent à vos
              besoins.
            </p>
            <Link
              to="/demandeDevis"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md mt-6 transition duration-300"
            >
              Demandez un devis gratuit
            </Link>
          </div>
        </div>

        <div className="text-center mt-16">
          <h3 className="text-4xl font-extrabold text-gray-800 mb-4">
            NETTOYAGE DE FIN DE CHANTIER
          </h3>
          <p className="text-gray-600 text-xl mb-4">
            Le nettoyage de fin de chantier : une étape essentielle pour
            clôturer des travaux de construction ou de rénovation
          </p>
          <p className="text-gray-600 text-xl mb-8">
            Notre société de nettoyage SGH vous propose ses prestations de
            nettoyage de fin de chantier dans toute la région de Tunisie.
          </p>
          <Link
            to="/demandeDevis"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-300"
          >
            Demandez un devis gratuit
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceNetoyage;
