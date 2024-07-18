import deratisation2 from "../../../public/images/deratisation2.jpg";
import deratisation3 from "../../../public/images/deratisation-saint-cloud-2.jpg";

import deratisation4 from "../../../public/images/rat.jpeg";
import deratisation5 from "../../../public/images/banner_rongeurs.jpg";
import { Link } from "react-router-dom";

const Deratisation = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center mb-12">
          <img
            src={deratisation5}
            alt="Dératisation"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-gray-800">
            Dératisation
          </h2>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-4xl font-bold text-gray-800 mb-6">
            TROIS ÉTAPES POUR UNE DÉRATISATION EFFICACE
          </h3>
          <div className="space-y-6 text-lg text-gray-700">
            <div className="flex items-start space-x-4">
              <img
                src={deratisation2}
                alt="Diagnostic"
                className="w-32 h-32 object-cover rounded-lg shadow-md"
              />
              <div>
                <strong className="text-xl text-primary">
                  • DIAGNOSTIC PROFESSIONNEL:
                </strong>
                <p className="mt-2">
                  Diagnostic poussé pour juger de manière rapide et précise de
                  l’origine et du degré de l’infestation par les rongeurs.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <img
                src={deratisation3}
                alt="Action Curative"
                className="w-32 h-32 object-cover rounded-lg shadow-md"
              />
              <div>
                <strong className="text-xl text-primary">
                  • ACTION CURATIVE:
                </strong>
                <p className="mt-2">
                  Traitement de choc en 2 temps pour éradiquer rapidement et
                  massivement la nuisance liée aux rats ou souris.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <img
                src={deratisation4}
                alt="Action Préventive"
                className="w-32 h-32 object-cover rounded-lg shadow-md"
              />
              <div>
                <strong className="text-xl text-primary">
                  • ACTION PRÉVENTIVE:
                </strong>
                <p className="mt-2">
                  Pose de pièges pour compléter le traitement de choc et
                  s’assurer de sa bonne efficacité. Plus conseils pour prévenir
                  la réinfestation en agissant sur la source du problème.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h4 className="text-3xl font-bold text-gray-800 mb-4">
              Nos zones d’intervention :
            </h4>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-lg text-gray-700">
              <li>Particuliers & Professionnels</li>
              <li>Maison, appartement</li>
              <li>Hôtel, restaurant</li>
              <li>Immeuble</li>
              <li>Bureaux</li>
              <li>Cuisine</li>
              <li>Commerce, magasin, boutique</li>
              <li>Grandes surfaces, supermarché</li>
              <li>Cave</li>
              <li>Dépôt, entrepôt, usine</li>
              <li>Tout lieu particulier au Tunisie</li>
              <li>
                Tout lieu d’activité professionnelle dans tout le territoire de
                la Tunisie
              </li>
            </ul>
          </div>
          <div className="flex justify-center mt-8">
            <Link
              to="/demandeDevis"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md shadow-md"
            >
              Demandez un devis gratuit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deratisation;
