/* eslint-disable react/no-unescaped-entities */

import image2 from "../../../public/images/jardinage-domicile-clean-2.jpg";
import image1 from "../../../public/images/jardinage.jpg";
import Pelouse from "../../../public/images/Pelouse.jpg";
import Ramassage from "../../../public/images/Ramassage.jpg";

import { useState } from "react";
import { FaPlus, FaMinus, FaCheck } from "react-icons/fa";
import Contact from "../../Shared-components/Contact";

import { Link } from "react-router-dom";
import SliderAnimated from "../../Shared-components/SliderAnimated";
import Team from "../../Shared-components/Team";
const Jardinage = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[500px] flex items-center justify-center text-center text-white"
        style={{ backgroundImage: `url(${image1})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 px-6 py-8 max-w-lg mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Votre Partenaire en Jardinage
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Experts en Jardinage à travers toute la Tunisie
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
          {/* Contact Component */}
          <div className="max-lg:hidden ml-20  max-md:hidden ipad-pro:hidden  ">
            <Contact />
          </div>{" "}
          {/* Information Section */}
          <section className=" bg-white shadow-md rounded-lg py-8 px-6  lg:mr-20  ipad-pro:ml-32">
            <div className=" mx-auto">
              <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
                SGH - Votre Expert en Jardinage
              </h2>

              <div className="flex flex-row-reverse  gap-4 max-lg:flex-col ">
                <img
                  src={image1}
                  alt=""
                  className="rounded-3xl size-56  max-lg:w-full"
                />
                <p className="text-lg md:text-xl text-gray-700 mb-6">
                  Chaque jardin mérite un entretien régulier et doit être
                  réalisé par des professionnels. Toutes nos équipes de SGH ont
                  les formations nécessaires pour prendre les bonnes décisions
                  au bon moment. <br />
                  Nous disposons d’un éventail de matériel complet de la très
                  grosse tendeuse à la simple bêche. En fonction des besoins du
                  jardin nous avons les moyens humains et matériels de réagir
                  vite et dans de bonnes conditions.
                </p>
              </div>

              <p className="text-lg md:text-xl text-gray-700 mb-6">
                Nous disposons d’une équipe d’agents d’entretien hautement
                qualifiés et équipés pour aérer vos locaux, évacuer les odeurs
                désagréables, vider vos poubelles, remplacer les sacs,
                épousseter votre mobilier, enlever les toiles d’araignées, et
                nettoyer vos sols. Évidemment, nos prestations s’adaptent à vos
                besoins.
              </p>
              <div className="mb-8 bg-white shadow-lg rounded-lg overflow-hidden">
                <h3
                  className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 flex items-center cursor-pointer bg-gray-200 p-4 rounded-t-lg hover:bg-gray-300 transition-colors duration-300"
                  onClick={() => toggleSection("Pelouse")}
                >
                  <span className="mr-2 text-yellow-500">
                    {openSection === "Pelouse" ? <FaMinus /> : <FaPlus />}
                  </span>
                  Pelouse
                </h3>
                <div
                  className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                    openSection === "Pelouse" ? "max-h-screen p-4" : "max-h-0"
                  }`}
                >
                  {openSection === "Pelouse" && (
                    <div className="flex flex-col lg:flex-row gap-9 items-center max-lg:flex-col-reverse  lg:justify-between">
                      <ul className="flex flex-col pl-6 mb-6 space-y-2 text-xl max-lg:text-lg leading-relaxed">
                        <li className="flex items-center">
                          <FaCheck className="text-green-500 mr-2" />
                          Tonte de pelouse et entretien du gazon
                        </li>
                        <li className="flex items-center">
                          <FaCheck className="text-green-500 mr-2" />
                          Regarnissage de Gazon
                        </li>
                        <li className="flex items-center">
                          <FaCheck className="text-green-500 mr-2" />
                          Scarification et traitement des pelouses
                        </li>
                      </ul>

                      <div className="flex justify-center items-center   ">
                        <img
                          src={Pelouse}
                          className="max-w-xs  rounded-xl"
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
                  onClick={() => toggleSection("Entretien")}
                >
                  <span className="mr-2 text-yellow-500">
                    {openSection === "Entretien" ? <FaMinus /> : <FaPlus />}
                  </span>
                  Entretien de jardin
                </h3>
                <div
                  className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                    openSection === "Entretien" ? "max-h-screen p-4" : "max-h-0"
                  }`}
                >
                  {openSection === "Entretien" && (
                    <div className="flex flex-col lg:flex-row gap-9 items-center max-lg:flex-col-reverse lg:justify-between">
                      <ul className="flex flex-col pl-6 mb-6 space-y-2 text-xl max-lg:text-lg leading-relaxed">
                        <li className="flex items-center">
                          <FaCheck className="text-green-500 mr-2   " />
                          Débroussaillage léger
                        </li>
                        <li className="flex items-center  ">
                          <FaCheck className="text-green-500 mr-2" />
                          Bêchage, binage et griffage{" "}
                        </li>
                        <li className="flex items-center">
                          <FaCheck className="text-green-500 mr-2" />
                          Conseils et plantation de plants et fleurs
                        </li>
                        <li className="flex items-center">
                          <FaCheck className="text-green-500 mr-2" />
                          Désherbage
                        </li>
                        <li className="flex items-center">
                          <FaCheck className="text-green-500 mr-2" />
                          Entretien des massifs
                        </li>
                        <li className="flex items-center">
                          <FaCheck className="text-green-500 mr-2" />
                          Arrosage manuel des végétaux
                        </li>
                      </ul>

                      <div className="flex justify-center items-center">
                        <img
                          src={image2}
                          className="rounded-xl max-w-xs  "
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
                  onClick={() => toggleSection("Ramassage")}
                >
                  <span className="mr-2 text-yellow-500">
                    {openSection === "Ramassage" ? <FaMinus /> : <FaPlus />}
                  </span>
                  Ramassage des feuilles
                </h3>
                <div
                  className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                    openSection === "Ramassage" ? "max-h-screen p-4" : "max-h-0"
                  }`}
                >
                  {openSection === "Ramassage" && (
                    <div className="flex flex-col lg:flex-row gap-9 items-center max-lg:flex-col-reverse lg:justify-between">
                      <ul className="flex flex-col pl-6 mb-6 space-y-2 text-xl max-lg:text-lg leading-relaxed">
                        <li className="flex items-center">
                          <FaCheck className="text-green-500 mr-2   " />
                          Entretien des balcons
                        </li>
                        <li className="flex items-center  ">
                          <FaCheck className="text-green-500 mr-2" />
                          Entretien et démoussage des allées et des terrasses
                        </li>
                        <li className="flex items-center">
                          <FaCheck className="text-green-500 mr-2" />
                          Enlèvement des déchets et des végétaux
                        </li>
                      </ul>

                      <div className="flex justify-center items-center">
                        <img
                          src={Ramassage}
                          className="rounded-xl  max-w-xs  "
                          alt=""
                        />
                      </div>
                    </div>
                  )}
                </div>
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

export default Jardinage;
