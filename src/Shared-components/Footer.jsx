import Logo from "../../public/images/Logo.png";
import { BodyOne, Caption, CustomLink, Title } from "./CustomComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFax } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="relative py-10 bg-black px-4 md:px-36 overflow-hidden">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <img src={Logo} alt="" className="h-56 w-56" />
          <div>
            <div className="flex flex-col gap-2 mt-3 font-[Poppins]">
              <Caption>
                <FaMapMarkerAlt className="inline-block mr-2" />
                Adresse: Turki 8030 grombalia GP1
              </Caption>
              <Caption>
                <FaEnvelope className="inline-block mr-2" />
                Email: sgh.ibtissem@gmail.com
              </Caption>
              <Caption>
                <FaPhone className="inline-block mr-2" />
                GSM: 26 26 00 74 - 58 70 49 09
              </Caption>
              <Caption>
                <FaFax className="inline-block mr-2" />
                Tél/Fax : 72 21 41 52
              </Caption>
            </div>
            <br />
            <BodyOne>Abonnez-vous à notre newsletter</BodyOne>
            <input
              className="p-3 w-full bg-white border border-gray-300 rounded-md outline-none font-[Poppins]"
              type="text"
              placeholder="Tapez votre adresse email"
            />
          </div>
          <div>
            <Title level={5} className="text-bold font-[Poppins] leading-10">
              À PROPOS DE NOUS
            </Title>
            <div className="flex flex-col gap-4 font-[Poppins]">
              <CustomLink href="">Qui nous somme ?</CustomLink>
              <CustomLink href="">Nos points forts et nos valeurs</CustomLink>
            </div>
          </div>
          <div>
            <Title level={5} className="text-bold font-[Poppins] leading-10">
              Nos services
            </Title>
            <div className="flex flex-col gap-4 font-[Poppins]">
              <CustomLink href="">Dératisation</CustomLink>
              <CustomLink href="">Désinsectisation</CustomLink>
              <CustomLink href="">Désinfection</CustomLink>
              <CustomLink href="">Travaux de jardinage</CustomLink>
              <CustomLink href="">Service de nettoyage</CustomLink>
            </div>
          </div>
        </div>
        <div className="p-1">
          <h1 className="text-black">Title Above Line</h1>
          <div className="white-line-horizontal my-2"></div>
          <p className="text-black">Content below the line.</p>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="https://www.facebook.com/sghibtissem/"
            className="text-white hover:text-gray-400"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a
            href="https://www.instagram.com"
            className="text-white hover:text-gray-400"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
        <div className="absolute top-0 right-3 mt-8 flex justify-center items-center gap-4 md:gap-2 md:flex-col md:items-center  max-lg:hidden">
          <a
            href="tel:+21626260074"
            className="flex items-center bg-green-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-700 transition duration-300"
          >
            <div className="bg-white text-green-600 rounded-full p-3 mr-2 flex items-center justify-center w-11">
              <FontAwesomeIcon icon={faPhone} className="text-xl" />
            </div>
            <span className="font-semibold">+216 26260074</span>
          </a>

          <button className="flex items-center bg-primary text-white px-6 py-3 rounded-full shadow-md hover:bg-primary transition duration-300 md:mt-4">
            <div className="bg-white text-primary rounded-full p-3 mr-2 flex items-center justify-center w-11">
              <FontAwesomeIcon icon={faFileAlt} className="text-lg h-5" />
            </div>
            <span className="font-semibold">Demande de devis</span>
          </button>
        </div>
      </footer>
    </>
  );
};

export default Footer;
