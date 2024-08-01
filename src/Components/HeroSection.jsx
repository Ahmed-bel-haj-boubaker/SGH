import { Link } from "react-router-dom";
import image from "../../public/images/jardinage.jpg";
import image2 from "../../public/images/nettoyage.jpg";
import image3 from "../../public/images/entreprise-societe-nettoyage-tunisie.jpg";

const HeroSection = () => {
  return (
    <section className="dark:text-gray-800 bg-slate-200  p-9">
      <div className="container flex flex-col justify-center mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex items-center justify-center   mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <div className="relative">
            <img
              src={image2}
              alt="desinfection"
              className="sm:w-80 sm:h-80 lg:h-[50vh] lg:w-[50vh] animate-float rounded-xl "
            />
            <img
              src={image}
              alt="desinfection"
              className="absolute top-[-50px] left-[35vh] w-40 h-40 sm:w-40 sm:h-40 lg:h-[30vh] lg:w-[30vh]  rounded-xl animate-pulse max-lg:hidden"
            />
            <img
              src={image3}
              alt="desinfection"
              className="absolute bottom-[-10vh] right-[30vh] w-40 h-40 sm:w-40 sm:h-40 lg:h-[30vh] lg:w-[30vh]  rounded-xl animate-pulse max-lg:hidden"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold leading-none">
            Nos Points
            <span className="text-green-600"> Forts</span>
          </h1>
          <ul className="mt-6 mb-8 text-base sm:text-lg sm:mb-12 list-disc list-inside space-y-2 font-poppins lowercase">
            <li className="flex items-center text-base sm:text-lg lg:text-xl">
              <svg
                className="w-5 h-5 text-teal-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              LA COMPÉTENCE PROFESSIONNELLE
            </li>
            <li className="flex items-center text-base sm:text-lg lg:text-xl">
              <svg
                className="w-5 h-5 text-teal-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              LA MAÎTRISE DES PRODUIS ET DES PROCESS
            </li>
            <li className="flex items-center text-base sm:text-lg lg:text-xl">
              <svg
                className="w-5 h-5 text-teal-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              ACCÈS AUX MEILLEURS PRODUITS DU MARCHÉ
            </li>
            <li className="flex items-center text-base sm:text-lg lg:text-xl">
              <svg
                className="w-5 h-5 text-teal-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              TRAÇABILITÉ ET TRANSPARENCE ADMINISTRATIVE
            </li>
          </ul>

          <div className="flex flex-col space-y-4 items-center justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <button
              type="button"
              className="py-3 px-8 sm:py-4 sm:px-10 bg-teal-500 hover:bg-teal-600 rounded text-white font-[poppins]"
            >
              <Link to="/demandeDevis">Demande de devis</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
