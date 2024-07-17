import { Link } from "react-router-dom";

const ServiceNetoyage = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            SOCIÉTÉ DE NETTOYAGE INDUSTRIEL
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            SGH est une Société de Nettoyage Industriel qui propose ses services
            de nettoyage professionnels à toute le territoire de la Tunisie.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col items-center">
            <img
              src="../../../public/images/nettoyage-industriel-usine.jpg"
              alt="Nettoyage Industriel Services"
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
            <h4 className="text-xl font-bold text-gray-800 mt-4">
              Services complets
            </h4>
            <ul className="list-disc text-gray-600 mt-2">
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

          <div className="flex flex-col items-center">
            <img
              src="../../../public/images/Nettoyage-bureau.jpg"
              alt="Nettoyage Expertise"
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
            <h4 className="text-xl font-bold text-gray-800 mt-4">
              Expertise & professionnalisme
            </h4>
            <p className="text-gray-600 mt-2">
              Nous disposons d’une équipe d’agents d’entretien hautement
              qualifiés et équipés pour aérer vos locaux et évacuer les odeurs
              désagréables, vider vos poubelles et remplacer les sacs,
              épousseter votre mobilier, enlever les toiles d’araignées,
              nettoyer vos sols. Evidemment, nos prestations s’adaptent à vos
              besoins.
            </p>
            <Link
              to="/demandeDevis"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mt-4"
            >
              Demandez un devis gratuit
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center mt-8">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            NETTOYAGE DE FIN DE CHANTIER
          </h3>
          <p className="text-gray-600 mb-4">
            Le nettoyage de fin de chantier : une étape essentielle pour
            clôturer des travaux de construction ou de rénovation
          </p>
          <p className="text-gray-600 mb-8">
            Notre société de nettoyage SGH vous propose ses prestations de
            nettoyage de fin de chantier dans toute la région de Tunisie.
          </p>
          <Link
            to="/nettoyageFinChantier"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mt-4"
          >
            Demandez un devis gratuit
          </Link>
        </div>

        {/* ... rest of the content ... */}
      </div>
    </section>
  );
};

export default ServiceNetoyage;
