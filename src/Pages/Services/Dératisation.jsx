import { useState } from "react";
import { FaPlus, FaMinus, FaCheck } from "react-icons/fa";
import Contact from "../../Shared-components/Contact";
import image from "../../../public/images/Nettoyage-bureau.jpg";
import imagerat from "../../../public/images/image (1).jpg";

import image2 from "../../../public/images/entreprise-societe-nettoyage-tunisie.jpg";
import image3 from "../../../public/images/administratifs.jpg";
import rat from "../../../public/images/infestation-rat.jpg";

import deratisation from "../../../public/images/deratisation-saint-cloud-2.jpg";

import { Link } from "react-router-dom";
import SliderAnimated from "../../Shared-components/SliderAnimated";
import Team from "../../Shared-components/Team";

const Dératisation = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[500px] flex items-center justify-center text-center text-white"
        style={{ backgroundImage: `url(${deratisation})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 px-6 py-8 max-w-lg mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Votre Partenaire en Dératisation
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Experts en Dératisation à travers toute la Tunisie
          </p>
          <a
            href="#services"
            className="bg-yellow-400 text-gray-800 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-yellow-500 transition duration-300"
          >
            <Link to={"/demandeDevis"}> Devis gratuit</Link>
          </a>
        </div>
      </section>
      <div className="flex min-h-screen items-center justify-center bg-gray-100 py-16 font-poppins ">
        <div className="flex ">
          {/* Information Section */}
          <section className=" bg-white shadow-md rounded-lg py-8 px-6  lg:mr-20  ipad-pro:ml-32">
            <div className=" mx-auto">
              <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
                SGH - Votre Expert en Dératisation
              </h2>

              <div className="flex flex-row-reverse  gap-4 max-lg:flex-col justify-center items-center -mt-5 mb-5 p-3">
                <img
                  src={deratisation}
                  alt=""
                  className="rounded-3xl size-52  max-lg:w-60"
                />
                <p className="text-lg md:text-xl text-gray-700 mb-6">
                  La dératisation est un processus de contrôle et d'élimination
                  des rats et autres rongeurs nuisibles dans un environnement
                  donné. Cette pratique vise à protéger les espaces domestiques,
                  commerciaux et industriels des dommages causés par ces
                  animaux, qui peuvent être vecteurs de maladies, contaminer les
                  aliments et provoquer des dégâts matériels.
                  <br />
                  <br />
                  Les méthodes de dératisation incluent l'utilisation de pièges
                  mécaniques, de produits rodenticides (toxiques pour les
                  rongeurs), ainsi que de dispositifs de prévention pour
                  empêcher l'entrée et la prolifération des rongeurs. La
                  dératisation est souvent effectuée par des professionnels
                  qualifiés pour garantir une élimination efficace et sécurisée,
                  en conformité avec les réglementations sanitaires et
                  environnementales.
                </p>
              </div>

              <p className="text-lg md:text-xl text-gray-700 mb-6 lowercase">
                Trois étapes pour une dératisation efficace :
              </p>
              <div className="mb-8 bg-white shadow-lg rounded-lg overflow-hidden">
                <h3
                  className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 flex items-center cursor-pointer bg-gray-200 p-4 rounded-t-lg hover:bg-gray-300 transition-colors duration-300"
                  onClick={() => toggleSection("DIAGNOSTIC")}
                >
                  <span className="mr-2 text-yellow-500">
                    {openSection === "DIAGNOSTIC" ? <FaMinus /> : <FaPlus />}
                  </span>
                  DIAGNOSTIC PROFESSIONNEL
                </h3>
                <div
                  className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                    openSection === "DIAGNOSTIC"
                      ? "max-h-screen p-4"
                      : "max-h-0"
                  }`}
                >
                  {openSection === "DIAGNOSTIC" && (
                    <div className="flex gap-9 space-x-4 max-lg:flex-col-reverse ">
                      <p className="text-lg md:text-xl text-gray-700 mb-6">
                        Diagnostic poussé pour juger de manière rapide et
                        précise de l’origine et du degré de l’infestation par
                        les rongeurs.
                      </p>

                      <div className="flex justify-center items-center">
                        <img
                          src={rat}
                          className=" size-48 max-lg:size-56 rounded-xl"
                          alt=""
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Moyens Matériels et Outils Section */}
              <div className="mb-8 bg-white shadow-lg rounded-lg overflow-hidden">
                <h3
                  className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 flex items-center cursor-pointer bg-gray-200 p-4 rounded-t-lg hover:bg-gray-300 transition-colors duration-300"
                  onClick={() => toggleSection("ACTION")}
                >
                  <span className="mr-2 text-yellow-500">
                    {openSection === "ACTION" ? <FaMinus /> : <FaPlus />}
                  </span>
                  ACTION CURATIVE
                </h3>
                <div
                  className={`transition-max-height duration-500 ease-in-out overflow-hidden   ${
                    openSection === "ACTION" ? "max-h-screen p-4" : "max-h-0"
                  }`}
                >
                  {openSection === "ACTION" && (
                    <div className="flex flex-col lg:flex-row gap-9 space-x-4">
                      <p className="text-lg md:text-xl text-gray-700 mb-6">
                        Traitement de choc en 2 temps pour éradiquer rapidement
                        et massivement la nuisance liée aux rats ou souris.
                      </p>
                      <div className="flex justify-center items-center">
                        <img
                          src={imagerat}
                          className=" size-48 max-lg:size-56 rounded-xl"
                          alt=""
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="mb-8 bg-white shadow-lg rounded-lg overflow-hidden">
                <h3
                  className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 flex items-center cursor-pointer bg-gray-200 p-4 rounded-t-lg hover:bg-gray-300 transition-colors duration-300"
                  onClick={() => toggleSection("PRÉVENTIVE")}
                >
                  <span className="mr-2 text-yellow-500">
                    {openSection === "PRÉVENTIVE" ? <FaMinus /> : <FaPlus />}
                  </span>
                  ACTION PRÉVENTIVE{" "}
                </h3>
                <div
                  className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                    openSection === "PRÉVENTIVE"
                      ? "max-h-screen p-4"
                      : "max-h-0"
                  }`}
                >
                  {openSection === "PRÉVENTIVE" && (
                    <div className="flex gap-9 space-x-4 max-lg:flex-col-reverse ">
                      <p className="text-lg md:text-xl text-gray-700 mb-6">
                        Pose de pièges pour compléter le traitement de choc et
                        s’assurer de sa bonne efficacité. Plus conseils pour
                        prévenir la réinfestation en agissant sur la source du
                        problème.
                      </p>{" "}
                      <div className="flex justify-center items-center">
                        <img
                          src={rat}
                          className=" size-48 max-lg:size-56 rounded-xl"
                          alt=""
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <p className="text-xl md:text-xl text-gray-700 mb-6 ">
                Nos zones d’intervention :
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    Maison, appartement
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    Particuliers & Professionnels{" "}
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    Hôtel, restaurant
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    Immeuble
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    Bureaux
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    Cuisine
                  </li>
                </ul>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    Commerce, magasin, boutique{" "}
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    Grandes surfaces, supermarché
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    Nettoyage de locaux commerciaux
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    Cave
                  </li>
                </ul>{" "}
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  {" "}
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    Dépôt, entrepôt, usine
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    Nettoyage de moquettes
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    Tout lieu particulier au Tunisie
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    Tout lieu d’activité professionnelle dans tout le territoire
                    de la Tunisie.
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>{" "}
      <div>
        <hr className="border-t-2 border-gray-300 my-8 w-3/4 mx-auto" />
        <Team />
      </div>
       
    </div>
  );
};

export default Dératisation;
