import { Link } from "react-router-dom";
import image from "../../public/images/disinfectant_hygiene.png";

const HeroSection = () => {
  return (
    <section className="dark:text-gray-800 bg-slate-200">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={image}
            alt="desinfection"
            className="object-contain  sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="lg:text-4xl max-lg:text-4xl font-bold leading-none">
            Nos Points
            <span className="dark:text-green-600"> Forts</span>
          </h1>
          <ul className="mt-6 mb-8 text-lg sm:mb-12 list-disc list-inside space-y-2 ">
            <li className="flex items-center text-2xl">
              <svg
                className="size-24 text-teal-500 mr-2"
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
              Une qualité de produits constante, avec des fiches techniques et
              des FDS.
            </li>
            <li className="flex items-center  text-2xl">
              <svg
                className="size-24 text-teal-500 mr-2"
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
              Le respect des normes en vigueur et une stricte application des
              réglementations.
            </li>
          </ul>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <button
              type="button"
              className="
                py-4 px-10
                bg-teal-500
                hover:bg-teal-600
                rounded
                text-white
                font-[poppins]
              "
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
