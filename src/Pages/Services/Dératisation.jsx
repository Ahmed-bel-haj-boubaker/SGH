import React from "react";
import deratisation2 from "../../../public/images/deratisation2.jpg";
import deratisation3 from "../../../public/images/deratisation-saint-cloud-2.jpg";
import deratisation4 from "../../../public/images/rat.jpeg";
import deratisation5 from "../../../public/images/banner_rongeurs.jpg";
import { Link } from "react-router-dom";
import Banner from "../../Components/Banner";
import Contact from "../../Shared-components/Contact";

const Deratisation = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 py-16">
      <Banner title={"Dératisation"} image={deratisation5} />

      <div className="absolute top-6 right-6">
        <Contact />
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="bg-white p-10 rounded-lg shadow-2xl">
          <div className="text-center mb-12">
            <h3 className="text-5xl font-extrabold text-gray-800 mb-4">
              Notre Processus de Dératisation
            </h3>
            <p className="text-lg text-gray-600">
              Découvrez nos étapes rigoureuses pour assurer une dératisation efficace et durable.
            </p>
          </div>

          <div className="space-y-12">
            <div className="flex flex-col lg:flex-row items-center lg:space-x-12 mb-12">
              <div className="w-full lg:w-1/2">
                <img
                  src={deratisation2}
                  alt="Diagnostic"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
                <h4 className="text-3xl font-semibold text-blue-700 mb-4">
                  Diagnostic Professionnel
                </h4>
                <p className="text-gray-700">
                  Nous réalisons un diagnostic complet pour identifier l'origine et l'étendue de l'infestation.
                </p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center lg:space-x-12 mb-12">
              <div className="w-full lg:w-1/2">
                <img
                  src={deratisation3}
                  alt="Action Curative"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
                <h4 className="text-3xl font-semibold text-blue-700 mb-4">
                  Action Curative
                </h4>
                <p className="text-gray-700">
                  Traitement intensif pour éliminer les rongeurs rapidement et efficacement.
                </p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center lg:space-x-12 mb-12">
              <div className="w-full lg:w-1/2">
                <img
                  src={deratisation4}
                  alt="Action Préventive"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
                <h4 className="text-3xl font-semibold text-blue-700 mb-4">
                  Action Préventive
                </h4>
                <p className="text-gray-700">
                  Installation de pièges et conseils pour prévenir toute réinfestation future.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h4 className="text-4xl font-bold text-gray-800 mb-8 text-center">
              Nos Zones d’Intervention
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-lg text-gray-700">
              {[
                "Particuliers & Professionnels",
                "Maison, appartement",
                "Hôtel, restaurant",
                "Immeuble",
                "Bureaux",
                "Cuisine",
                "Commerce, magasin, boutique",
                "Grandes surfaces, supermarché",
                "Cave",
                "Dépôt, entrepôt, usine",
                "Tout lieu particulier au Tunisie",
                "Tout lieu d’activité professionnelle dans tout le territoire de la Tunisie",
              ].map((zone, index) => (
                <li
                  key={index}
                  className="bg-blue-50 p-6 rounded-lg shadow-md hover:bg-blue-100 transition-colors"
                >
                  {zone}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center mt-12">
            <Link
              to="/demandeDevis"
              className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              Demandez un devis gratuit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deratisation
