/* eslint-disable react/no-unescaped-entities */
import Logo from "../../public/images/Logo.png";
import image from "../../public/images/desinsectisation.png";
import Securite from "./Securite";
const GoodPoints = () => {
  return (
    <div className=" py-10 px-5">
      <section className="container mx-auto my-10 ">
        <div className="flex flex-col md:flex-row items-center ">
          <img src={Logo} alt="Logo" className="w-56 h-56 md:w-56 md:h-56" />
          <div className="md:ml-10 mt-5 md:mt-0">
            <h2 className="text-3xl font-bold mb-4">Nos Points Forts</h2>
            <p className="text-gray-700">
              Nos points forts et nos valeurs:
              <ul className="list-disc list-inside mt-4">
                <li>
                  Une qualité de produits constante, avec des fiches techniques
                  et des FDS.
                </li>
                <li>
                  Le respect des normes en vigueur et une stricte application
                  des réglementations.
                </li>
                <li>
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

      <section className="container mx-auto my-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:mr-10 mt-5 md:mt-0">
            <h2 className="text-3xl font-bold mb-4">Nos Valeurs</h2>
            <p className="text-gray-700">
              <li>
                Choisir SGH c'est faire confiance à une équipe de techniciens
                professionnels du nettoyage industriel.
              </li>
              <li>La propreté est un atout pour vos entreprises.</li>
              <li>
                La propreté inspire la confiance, le sérieux, la sécurité. Elle
                renvoie une image positive et engendre des bénéfices à tous les
                niveaux de vos entreprises.
              </li>
            </p>
          </div>
          <img
            src={image}
            alt="Valeurs Image"
            className="w-40 h-40 md:w-56 md:h-56"
          />
        </div>
      </section>

      <Securite />
    </div>
  );
};

export default GoodPoints;
