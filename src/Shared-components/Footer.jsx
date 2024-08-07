import React, { useState, useEffect, useRef } from "react";
import Logo from "../../public/images/Logo.png";
import { BodyOne, Caption, CustomLink, Title } from "./CustomComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFax } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(true);
  const footerRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (footerRef.current && buttonRef.current) {
        const footerRect = footerRef.current.getBoundingClientRect();
        const buttonRect = buttonRef.current.getBoundingClientRect();

        // Check if the footer is within the viewport
        const isFooterVisible = footerRect.top < window.innerHeight;

        // Set button visibility based on footer visibility
        setIsVisible(
          !isFooterVisible || buttonRect.bottom < window.innerHeight
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <footer className="relative bg-black overflow-hidden pt-2">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <img src={Logo} alt="Logo" className="h-56 w-56" />
          <div>
            <div className="flex flex-col gap-2 mt-3 font-[Poppins]">
              <Caption>
                <FaMapMarkerAlt className="inline-block mr-2" />
                Adresse: Turki 8030 Grombalia GP1
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
              <CustomLink href="#">Qui nous sommes ?</CustomLink>
              <CustomLink href="#">Nos points forts et nos valeurs</CustomLink>
            </div>
          </div>
          <div>
            <Title level={5} className="text-bold font-[Poppins] leading-10">
              Nos services
            </Title>
            <div className="flex flex-col gap-4 font-[Poppins]">
              <CustomLink href="#">Dératisation</CustomLink>
              <CustomLink href="#">Désinsectisation</CustomLink>
              <CustomLink href="#">Désinfection</CustomLink>
              <CustomLink href="#">Travaux de jardinage</CustomLink>
              <CustomLink href="#">Service de nettoyage</CustomLink>
            </div>
          </div>
        </div>
        <div className="p-1">
          <h1 className="text-black">Title Above Line</h1>
          <div className="white-line-horizontal my-2"></div>
          <p className="text-black">Content below the line.</p>
        </div>
        {isVisible && (
          <div
            ref={buttonRef}
            className="fixed bottom-4 left-4 md:hidden lg:hidden flex justify-center items-center gap-4"
          >
            <a
              href="tel:+21626260074"
              className="flex items-center bg-green-600 text-white px-6 py-3 shadow-md hover:bg-green-700 transition duration-300"
            >
              <div className="bg-white text-green-600 rounded-full p-3 mr-2 flex items-center justify-center w-11">
                <FontAwesomeIcon icon={faPhone} className="text-xl" />
              </div>
              <span className="font-semibold">+216 26260074</span>
            </a>
          </div>
        )}
        <div ref={footerRef} className="bg-white py-3 mt-1">
          <div className="font-poppins flex justify-between px-6 max-lg:flex-col max-lg:items-center max-lg:text-center">
            <div className="flex items-start">
              © Copyright SGH: Société Générale d'Hygiène
            </div>
            <div className="flex items-end max-lg:flex-col max-lg:items-center">
              Création & référencement site web par
              <a
                href="https://www.linkedin.com/in/ahmed-belhaj-boubaker-2174701a4/"
                className="ml-1 text-blue-500 hover:underline"
              >
                Ahmed Bel Haj Boubaker
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
