/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Logo from "../../public/images/Logo.png";
import { BodyOne, Caption, CustomLink, Title } from "./CustomComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFax } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="relative  bg-black  overflow-hidden pt-2 ">
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
              <CustomLink href="/aboutus">Qui nous somme ?</CustomLink>
              <CustomLink href="/aboutus">Nos points forts et nos valeurs</CustomLink>
            </div>
          </div>
          <div>
            <Title level={5} className="text-bold font-[Poppins] leading-10">
              Nos services
            </Title>
            <div className="flex flex-col gap-4 font-[Poppins]">
              <CustomLink href="/Dératisation">Dératisation</CustomLink>
              <CustomLink href="/Désinsectisation">Désinsectisation</CustomLink>
              <CustomLink href="/Désinfection">Désinfection</CustomLink>
              <CustomLink href="/Jardinage">Travaux de jardinage</CustomLink>
              <CustomLink href="/ServiceNetoyage">Service de nettoyage</CustomLink>
            </div>
          </div>
        </div>
        <div className="p-1">
          <h1 className="text-black">Title Above Line</h1>
          <div className="white-line-horizontal my-2"></div>
          <p className="text-black">Content below the line.</p>
        </div>
        <div className="mt-3 flex justify-center gap-4">
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

        <div className="bg-white py-3 mt-1  ">
          <div className="font-poppins flex justify-between px-6 max-lg:flex-col max-lg:items-center max-lg:text-center">
            <div className="flex items-start">
              © Copyright SGH: Société Générale d'Hygiène
            </div>
            <div className="flex items-end max-lg:flex-col max-lg:items-center">
              Création & référencement site web par
              <a
                href="https://www.linkedin.com/in/ahmed-belhaj-boubaker-2174701a4/"
                className="ml-1 text-blue-500 hover:underline   "
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
