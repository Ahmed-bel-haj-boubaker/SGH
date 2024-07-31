/* eslint-disable react/no-unescaped-entities */
import Logo from "../../public/images/Logo.png";
import image from "../../public/images/desinsectisation.png";
import AnimatedBanner from "../Shared-components/AnimatedBanner";
import Contact from "../Shared-components/Contact";
import SliderAnimated from "../Shared-components/SliderAnimated";

const GoodPoints = () => {
  return (
    <div className="py-20 px-5">
      <AnimatedBanner title={"Nos Points Forts"} />

      <section className="container mx-auto my-10">
        <div className="flex flex-col md:flex-row items-center">
          <img src={Logo} alt="Logo" className="md:w-56 lg:w-80" />
          <div className="md:ml-10 mt-5 md:mt-0 font-poppins">
            <p className="text-gray-700 text-3xl mb-2">
              Nos points forts et nos valeurs:
              <ul className="list-disc list-inside mt-4 text-xl">
                <li className="flex flex-row items-center">
                  <svg
                    className="w-6 h-6 text-teal-500 mr-2"
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
                  </svg>{" "}
                  Une qualité de produits constante, avec des fiches techniques
                  et des FDS.
                </li>
                <li className="flex flex-row items-center">
                  <svg
                    className="w-6 h-6 text-teal-500 mr-2"
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
                  </svg>{" "}
                  Le respect des normes en vigueur et une stricte application
                  des réglementations.
                </li>
                <li className="flex flex-row items-center">
                  <svg
                    className="w-8 h-8 text-teal-500 mr-2"
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
                  </svg>{" "}
                  Une haute technicité assortie de produits innovants pour
                  résoudre en toute sécurité les besoins en dégraissage de toute
                  nature sur tout support, de décapage ciment, rouille, bitume,
                  colle, peinture, graffiti, détartrage chaudières, bassins, la
                  lutte contre les odeurs, l'hygiène des mains, etc.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto my-10 font-poppins">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:mr-10 mt-5 md:mt-0">
            <h2 className="text-gray-700 text-3xl mb-2">Nos Valeurs</h2>
            <p className="text-gray-700 text-xl">
              <li className="flex flex-row items-center">
                <svg
                  className="w-6 h-6 text-teal-500 mr-2"
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
                Choisir SGH c'est faire confiance à une équipe de techniciens
                professionnels du nettoyage industriel.
              </li>
              <li className="flex flex-row items-center">
                <svg
                  className="w-6 h-6 text-teal-500 mr-2"
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
                La propreté est un atout pour vos entreprises.
              </li>
              <li className="flex flex-row items-center">
                <svg
                  className="w-7 h-7 text-teal-500 mr-2"
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
                La propreté inspire la confiance, le sérieux, la sécurité. Elle
                renvoie une image positive et engendre des bénéfices à tous les
                niveaux de vos entreprises.
              </li>
            </p>
          </div>
          <img
            src={image}
            alt="Valeurs Image"
            className="w-40 h-40 md:w-56 md:h-56 rounded-lg shadow-md"
          />
        </div>
      </section>
      <SliderAnimated />
    </div>
  );
};

export default GoodPoints;
