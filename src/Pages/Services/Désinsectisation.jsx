/* eslint-disable react/no-unescaped-entities */

import image2 from "../../../public/images/jardinage-domicile-clean-2.jpg";
import image1 from "../../../public/images/deratisation.jpg";

import Ramassage from "../../../public/images/traitement-des-nuisibles-entreprise-marseille.png";
import PRÉVENTION from "../../../public/images/2-2.jpg";

import ba9a from "../../../public/images/punaise-de-lit.jpg";
import diagno from "../../../public/images/decontamination-1024x768.jpg";
import traitement from "../../../public/images/Désinsectisation3.jpg";
import { useState } from "react";
import { FaPlus, FaMinus, FaCheck, FaHome, FaBuilding } from "react-icons/fa";
import Contact from "../../Shared-components/Contact";

import { Link } from "react-router-dom";
import SliderAnimated from "../../Shared-components/SliderAnimated";
import Team from "../../Shared-components/Team";
const Désinsectisation = () => {
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
        <div className="relative z-10 px-6 py-8 mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Votre Partenaire en Désinsectisation
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Experts en Désinsectisation à travers toute la Tunisie
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
        <div className="flex">
          {/* Contact Component */}
          <div className="max-lg:hidden ml-20  max-md:hidden ipad-pro:hidden  ">
            <Contact />
          </div>{" "}
          {/* Information Section */}
          <section className=" bg-white shadow-md rounded-lg py-8 px-6  lg:mr-20  ipad-pro:ml-32  max-lg:w-full">
            <div className=" mx-auto">
              <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 ">
                SGH - Votre Expert en Désinsectisation
              </h2>
              <div className="flex flex-row-reverse  gap-4 max-lg:flex-col justify-center items-center -mt-5 mb-5 p-3 ">
                <img
                  src={Ramassage}
                  alt=""
                  className="rounded-3xl size-52  max-lg:w-60"
                />
                <p className="text-lg md:text-xl text-gray-700 mb-6 ">
                  La désinsectisation est un processus de lutte contre les
                  insectes nuisibles dans un environnement donné, que ce soit
                  une habitation, un lieu de travail, ou un espace public. Ce
                  processus vise à éliminer ou à contrôler les populations
                  d'insectes tels que les cafards, les fourmis, les puces, les
                  punaises de lit, les mites, et autres insectes qui peuvent
                  causer des nuisances ou des dommages.
                </p>
              </div>
              <p className="text-lg md:text-xl text-gray-700 mb-6 p-3">
                ACTION CONTRE LES INSECTES VOLANTS ET LES INSECTES RAMPANTS
                TRAITEMENT CONTRE LES CAFARDS, PUCES, PUNAISES ET TOUT TYPE
                D'INSECTES:
              </p>{" "}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    Cafards
                  </li>{" "}
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    Mouches
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    Puces
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    Fourmis
                  </li>{" "}
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    Moustiques
                  </li>
                </ul>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    Guêpes
                  </li>{" "}
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    Mites
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    Punaises{" "}
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    Araignées
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    Insectes volants
                  </li>{" "}
                </ul>

                <ul className="pl-6 mb-6 space-y-2">
                  <li className="flex items-center">
                    <img src={ba9a} alt="" className="rounded-3xl size-56  " />
                  </li>
                </ul>
              </div>{" "}
              <section className="bg-gray-100 py-12 px-6 mb-6">
                <div className="container mx-auto text-center">
                  <h2 className="text-4xl font-bold mb-8">
                    Notre zone d’intervention
                  </h2>
                  <div className="grid gap-8 md:grid-cols-2 max-lg:flex max-lg:flex-col">
                    <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center ">
                      <FaHome className="text-5xl text-teal-500 mb-4" />
                      <h3 className="text-2xl font-semibold mb-2">
                        PARTICULIERS
                      </h3>
                      <p className="text-gray-700">
                        Désinsectisation d’immeubles ou maisons dans toute la
                        région Tunisienne.
                      </p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center">
                      <FaBuilding className="text-5xl text-teal-500 mb-4" />
                      <h3 className="text-2xl font-semibold mb-2">
                        PROFESSIONNELS
                      </h3>
                      <p className="text-gray-700">
                        Plan de désinsectisation et contrat d’entretien de tous
                        types de locaux ou surface.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <p className="text-xl md:text-xl text-gray-700 mb-6 lowercase">
                TRAITEMENT CURATIF ET PRÉVENTIF CONTRE LES INSECTES LA
                DÉSINSECTISATION PROFESSIONNELLE EN 3 ÉTAPES :{" "}
              </p>
              <div className="mb-8 bg-white shadow-lg rounded-lg overflow-hidden">
                <h3
                  className="text-2xl md:text-3xl font-bold  text-gray-800 mb-4 flex items-center cursor-pointer bg-gray-200 p-4 rounded-t-lg hover:bg-gray-300 transition-colors duration-300"
                  onClick={() => toggleSection("DIAGNOSTIC")}
                >
                  <span className="mr-2 text-yellow-500 ">
                    {openSection === "DIAGNOSTIC" ? <FaMinus /> : <FaPlus />}
                  </span>
                  Diagnostic
                </h3>
                <div
                  className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                    openSection === "DIAGNOSTIC"
                      ? "max-h-screen p-4"
                      : "max-h-0"
                  }`}
                >
                  {openSection === "DIAGNOSTIC" && (
                    <div className="flex flex-col lg:flex-row gap-9 items-center max-lg:flex-col-reverse  lg:justify-between font-bold text-2xl max-lg:text-xl max-lg:text-center">
                      Identification rapide et précise de la nature et du degré
                      de l'infestation
                      <div className="flex justify-center items-center   ">
                        <img
                          src={diagno}
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
                  className="text-2xl md:text-3xl font-bold  text-gray-800 mb-4 flex items-center cursor-pointer bg-gray-200 p-4 rounded-t-lg hover:bg-gray-300 transition-colors duration-300"
                  onClick={() => toggleSection("TRAITEMENT")}
                >
                  <span className="mr-2 text-yellow-500 ">
                    {openSection === "TRAITEMENT" ? <FaMinus /> : <FaPlus />}
                  </span>
                  Traitement
                </h3>
                <div
                  className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                    openSection === "TRAITEMENT"
                      ? "max-h-screen p-4"
                      : "max-h-0"
                  }`}
                >
                  {openSection === "TRAITEMENT" && (
                    <div className="flex flex-col lg:flex-row gap-9 items-center max-lg:flex-col-reverse  lg:justify-between font-bold text-2xl max-lg:text-xl max-lg:text-center">
                      Traitement de choc ciblé pour se débarrasser de la
                      nuisance
                      <div className="flex justify-center items-center   ">
                        <img
                          src={traitement}
                          className="max-w-xs  rounded-xl"
                          alt=""
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="mb-8 bg-white shadow-lg rounded-lg overflow-hidden">
                <h3
                  className="text-2xl md:text-3xl font-bold  text-gray-800 mb-4 flex items-center cursor-pointer bg-gray-200 p-4 rounded-t-lg hover:bg-gray-300 transition-colors duration-300"
                  onClick={() => toggleSection("PRÉVENTION")}
                >
                  <span className="mr-2 text-yellow-500 ">
                    {openSection === "PRÉVENTION" ? <FaMinus /> : <FaPlus />}
                  </span>
                  PRÉVENTION
                </h3>
                <div
                  className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                    openSection === "PRÉVENTION"
                      ? "max-h-screen p-4"
                      : "max-h-0"
                  }`}
                >
                  {openSection === "PRÉVENTION" && (
                    <div className="flex flex-col lg:flex-row gap-9 items-center max-lg:flex-col-reverse  lg:justify-between font-bold text-2xl max-lg:text-xl max-lg:text-center">
                      Traitement, action et conseils pour prévenir la
                      réinfestation en agissant sur la source du problème
                      <div className="flex justify-center items-center   ">
                        <img
                          src={PRÉVENTION}
                          className="max-w-xs  rounded-xl"
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

export default Désinsectisation;
