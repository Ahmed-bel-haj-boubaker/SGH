/* eslint-disable react/no-unescaped-entities */

import Ramassage from "../../../public/images/traitement-des-nuisibles-entreprise-marseille.png";
import Désinfections from "../../../public/images/Désinfection.jpg";
import DésinfectionBg from "../../../public/images/bgDef.jpg";

import { FaCheck, FaHome, FaBuilding } from "react-icons/fa";
import Contact from "../../Shared-components/Contact";

import { Link } from "react-router-dom";
import SliderAnimated from "../../Shared-components/SliderAnimated";
import Team from "../../Shared-components/Team";
import InstagramPost from "../../Components/InstagramPost";
const Desinfection = () => {
  return (
    <div>
      <section
        className="relative bg-cover bg-center h-[500px] flex items-center justify-center text-center text-white"
        style={{ backgroundImage: `url(${DésinfectionBg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 px-6 py-8 mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Votre Partenaire en Désinfection
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Experts en Désinfection à travers toute la Tunisie
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
                SGH - Votre Expert en Désinfection
              </h2>
              <div className="flex flex-row-reverse  gap-4 max-lg:flex-col justify-center items-center -mt-5 mb-5 p-3 ">
                <img
                  src={Ramassage}
                  alt=""
                  className="rounded-3xl size-52  max-lg:w-60"
                />
                <p className="text-lg md:text-xl text-gray-700 mb-6 ">
                  <span className="font-bold">SGH</span> assure toute
                  intervention de désinfection professionnelle exigeant une
                  élimination des contaminants biologiques : bactéries, y
                  compris les légionelloses, virus, parasites, moisissures, …
                </p>
              </div>
              <p className="text-lg md:text-xl text-gray-700 mb-6 p-3">
                Notre nettoyage des lieux et notre action bactéricide, virucide
                et fongicide permettent de désinfecter efficacement les locaux
                infectés.
              </p>{" "}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    Désinfection des locaux insalubres
                  </li>{" "}
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    Désinfection des habitations
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    Désinfection après maladie
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    Désinfection vide-sanitaire, vide-ordures, local poubelle
                  </li>{" "}
                </ul>

                <ul className="pl-6 mb-6 space-y-2">
                  <li className="flex items-center">
                    <img
                      src={Désinfections}
                      alt=""
                      className="rounded-3xl size-56  "
                    />
                  </li>
                </ul>
              </div>{" "}
              <div className="bg-gray-100 py-12 px-6 mb-6">
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
                        DÉSINFECTION d’immeubles ou maisons dans toute la région
                        Tunisienne.
                      </p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center">
                      <FaBuilding className="text-5xl text-teal-500 mb-4" />
                      <h3 className="text-2xl font-semibold mb-2">
                        PROFESSIONNELS
                      </h3>
                      <p className="text-gray-700">
                        Toute intervention ponctuelle est possible avec une
                        efficacité 100% garantie. Pour les professionnels
                        (entreprises, magasins, syndics, administrations,…) SGH
                        propose également des plans de désinfection et contrats
                        d’entretien annuels de tous types de locaux ou surfaces.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>{" "}
      <div>
        <div className=" mt-3 text-4xl font-bold text-center mb-12 font-poppins text-gray-800">
          <h2>Gallerie</h2>
        </div>
        <hr className="border-t-2 border-gray-300 my-8 w-3/4 mx-auto" />
        <div>
          <InstagramPost />
        </div>
      </div>
      <br />
      <div>
        <hr className="border-t-2 border-gray-300 my-8 w-3/4 mx-auto" />
        <Team />
      </div>
    </div>
  );
};

export default Desinfection;
