import { useState } from "react";
import { FaPlus, FaMinus, FaCheck } from "react-icons/fa";
import deratisation from "../../../public/images/nettoyage.avif";
import Contact from "../../Shared-components/Contact";
import image from "../../../public/images/Nettoyage-bureau.jpg";
import image2 from "../../../public/images/entreprise-societe-nettoyage-tunisie.jpg";
import image3 from "../../../public/images/administratifs.jpg";

import { Link } from "react-router-dom";
import SliderAnimated from "../../Shared-components/SliderAnimated";
import Team from "../../Shared-components/Team";

const ServiceNetoyage = () => {
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
            Votre Partenaire en Nettoyage
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Experts en nettoyage industriel à travers toute la Tunisie
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
                SGH - Votre Expert en Nettoyage Industriel
              </h2>

              <div className="flex flex-row-reverse  gap-4 max-lg:flex-col ">
                <img
                  src={image}
                  alt=""
                  className="rounded-3xl size-56  max-lg:w-full"
                />
                <p className="text-lg md:text-xl text-gray-700 mb-6">
                  SGH est une Société de Nettoyage Industriel qui propose ses
                  services de nettoyage professionnels à tout le territoire de
                  la Tunisie. Pour vous aider à vous faire une meilleure idée
                  des prestations de nettoyage que nous proposons, voici une
                  liste des différentes opérations que nous réalisons pour nos
                  clients.
                  <br />
                  Notre société de nettoyage attache une grande importance à
                  l’image de vos locaux et un vrai savoir-faire dans le secteur
                  du nettoyage et le ménage. Pour cela, nous vous offrons des
                  services de qualité et des prix attractifs, par un nombre de
                  sites partout en Tunisie. Nous vous proposons un contrat de
                  nettoyage annuel et d’intervention aux besoins, comme :
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    Nettoyage et décapage à haute pression
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    Nettoyage à la monobrosse
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    Nettoyage à l'autolaveuse
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    Nettoyage avec machine vapeur
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    Nettoyage après déménagement
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    Nettoyage d’usines
                  </li>
                </ul>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    Nettoyage d’entrepôts
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    Nettoyage des sols
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    Nettoyage de locaux commerciaux
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    Nettoyage de bureaux
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    Nettoyage de lieux publics
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    Nettoyage de moquettes
                  </li>
                </ul>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    Nettoyage de vitres
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    Nettoyage de façades
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    Nettoyage d'immeubles
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    Protection et brillance des sols
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    Nettoyage d’espaces urbains
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    Nettoyage d'établissements hôteliers
                  </li>
                </ul>
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
                  onClick={() => toggleSection("finDeChantier")}
                >
                  <span className="mr-2 text-yellow-500">
                    {openSection === "finDeChantier" ? <FaMinus /> : <FaPlus />}
                  </span>
                  Nettoyage de Fin de Chantier
                </h3>
                <div
                  className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                    openSection === "finDeChantier"
                      ? "max-h-screen p-4"
                      : "max-h-0"
                  }`}
                >
                  {openSection === "finDeChantier" && (
                    <div className="flex gap-9 space-x-4 max-lg:flex-col-reverse ">
                      <p className="text-lg md:text-xl text-gray-700 mb-6">
                        Le nettoyage de fin de chantier : une étape essentielle
                        pour clôturer des travaux de construction ou de
                        rénovation. Cette opération de dépoussiérage, de lavage
                        et d’évacuation des déchets et gravats garantit aux
                        entreprises en charge des travaux la livraison de locaux
                        propres, sains et sûrs. Le nettoyage de fin de chantier
                        ou après travaux nécessite l’intervention d’un
                        professionnel du nettoyage. Notre société de nettoyage
                        SGH vous propose ses prestations de nettoyage de fin de
                        chantier dans toute la région de Tunisie.
                      </p>

                      <div className="flex justify-center items-center">
                        <img
                          src={image2}
                          className=" size-66 max-lg:size-56"
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
                  onClick={() => toggleSection("Nettoyagedebureaux")}
                >
                  <span className="mr-2 text-yellow-500">
                    {openSection === "Nettoyagedebureaux" ? (
                      <FaMinus />
                    ) : (
                      <FaPlus />
                    )}
                  </span>
                  Nettoyage de bureaux
                </h3>
                <div
                  className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                    openSection === "Nettoyagedebureaux"
                      ? "max-h-screen p-4"
                      : "max-h-0"
                  }`}
                >
                  {openSection === "Nettoyagedebureaux" && (
                    <div className="flex flex-col lg:flex-row gap-9 space-x-4">
                      <p className="text-lg md:text-xl text-gray-700 mb-6">
                        Un nettoyage ponctuel et progressif de bureaux Open
                        Space procure le bienêtre de vos employés qui souhaitent
                        travailler dans une atmosphère saine et propre. C’est un
                        avantage pour votre entreprise aussi lorsque vous
                        recevez des partenaires, des candidats ou des
                        fournisseurs. Nous mettons un ensemble de processus afin
                        d’assurer une prestation de haute qualité et une formule
                        tarifaire adaptable. Nous réalisons aussi le nettoyage
                        des boutiques et des centres commerciaux, nettoyage de
                        bureaux Open Space par le biais d’un service rapide et
                        simple par un technicien d’entretien expérimenté qui
                        assure cette mission de début à la fin. Le ménage
                        comporte aussi le nettoyage centre d’appel.
                      </p>
                      <img src={image} className="lg:size-48" alt="" />
                    </div>
                  )}
                </div>
              </div>

              <div className="mb-8 bg-white shadow-lg rounded-lg overflow-hidden">
                <h3
                  className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 flex items-center cursor-pointer bg-gray-200 p-4 rounded-t-lg hover:bg-gray-300 transition-colors duration-300"
                  onClick={() =>
                    toggleSection("Nettoyagedeslocauxadministratifs")
                  }
                >
                  <span className="mr-2 text-yellow-500">
                    {openSection === "Nettoyagedeslocauxadministratifs" ? (
                      <FaMinus />
                    ) : (
                      <FaPlus />
                    )}
                  </span>
                  Nettoyage des locaux administratifs
                </h3>
                <div
                  className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                    openSection === "Nettoyagedeslocauxadministratifs"
                      ? "max-h-screen p-4"
                      : "max-h-0"
                  }`}
                >
                  {openSection === "Nettoyagedeslocauxadministratifs" && (
                    <div className="flex gap-9 space-x-4 max-lg:flex-col-reverse ">
                      <p className="text-lg md:text-xl text-gray-700 mb-6">
                        L’entretien des locaux administratifs, commerciaux,
                        résidentiels et Hôtel sera réussi grâce à un travail
                        bien équipé, un sens de l’organisation, procédure
                        détaillé et un devis précis et gratuit. Au début, nous
                        cernons vos besoins en saisissant un cahier de charge.
                        Ensuite, notre commercial propose une prestation qui
                        s’adapte à vos demandes et vos balances. Puis, vous
                        signez votre devis et enfin l’équipe est présente pour
                        accomplir un entretien de locaux administratifs par
                        exemple dans les plus brefs délais
                      </p>{" "}
                      <div className="flex justify-center items-center">
                        <img
                          src={image3}
                          className=" size-66 max-lg:size-56"
                          alt=""
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <p className="text-xl md:text-xl text-gray-700 mb-6 ">
                Les outils d’un agent de nettoyage industriel comprennent :
              </p>
              <ul className=" list-disc pl-6 mb-6 flex flex-col space-y-2 ">
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" /> Un chariot de
                  ménage contenant le matériel et les produits de nettoyage
                  nécessaires à l’intervention
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" /> Un aspirateur
                  professionnel dédié à l’aspiration de tout type de déchets et
                  poussières (eau, sciures, cendres, produits chimiques, etc...)
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" /> Une balayeuse pour
                  l’aspiration des poussières et déchets sur tout type de sols
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" /> Une monobrosse
                  pour décaper, lessiver et lustrer les sols
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" /> Une autolaveuse
                  destinée à l’aspiration, au lessivage et au lustrage des sols
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  Un nettoyeur vapeur pour procéder au nettoyage et à la
                  désinfection des surfaces sans utiliser de produits chimiques
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" /> Un générateur de
                  vapeur sèche pour réaliser un nettoyage sans eau des surfaces
                  sensibles à l’humidité
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" /> Un nettoyeur
                  haute-pression pour le nettoyage et le décapage
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>{" "}
      <Team />
      <SliderAnimated />
    </div>
  );
};

export default ServiceNetoyage;
