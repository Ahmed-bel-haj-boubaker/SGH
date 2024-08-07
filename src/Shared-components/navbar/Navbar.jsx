import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../public/images/Logo.png";
import Buttonn from "../Button/Button";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"; // Import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // For desktop dropdown menu

  // Function to handle link click and close mobile nav
  const handleLinkClick = () => {
    setOpen(false); // Close the mobile nav
  };

  return (
    <>
      <nav className="bg-gray-50 fixed top-0 left-0 w-full z-50 shadow-xl h-40 justify-center items-center max-lg:h-28 md:w-screen">
        <div className="bg-black max-lg:hidden text-white text-center font-poppins">
          <h1>Société Générale d'Hygiène</h1>
        </div>
        <div className="flex items-center font-medium justify-center space-x-24 px-5 lg:px-20 lg:-mt-12">
          <div className="z-50 p-5 md:w-auto w-full flex justify-between items-center ">
            <img
              src={Logo}
              alt="logo"
              className="md:cursor-pointer size-48 justify-center items-center max-lg:-mt-4 max-lg:size-32"
            />
            <div className="flex items-center md:hidden gap-4">
              <a href="tel:+21626260074">
                <div className="bg-green-600 text-white rounded-full p-3 flex items-center justify-center w-11">
                  <FontAwesomeIcon icon={faPhone} className="text-xl" />
                </div>
              </a>
              <div className="text-5xl" onClick={() => setOpen(!open)}>
                <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
              </div>
            </div>
          </div>

          <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
            <li className="relative group">
              <span className="absolute left-0 w-full h-[5px] bg-[#8CC53F] scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
              <Link
                to="/"
                onClick={handleLinkClick}
                className="py-7 px-3 inline-block hover:text-[#8CC53F] transition duration-300 ease-in-out transform hover:scale-105"
              >
                Accueil
              </Link>
            </li>
            <li className="relative group">
              <span className="absolute left-0 w-full h-[5px] bg-[#8CC53F] scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
              <Link
                to="/aboutus"
                onClick={handleLinkClick}
                className="py-7 px-3 inline-block hover:text-[#8CC53F] transition duration-300 ease-in-out transform hover:scale-105"
              >
                Présentation
              </Link>
            </li>
            {/* Dropdown for Services */}
            <li className="relative group">
              <span className="absolute left-0 w-full h-[5px] bg-[#8CC53F] scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
              <button
                onMouseEnter={() => setDropdownOpen(!dropdownOpen)}
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="py-7 px-3 inline-block flex items-center hover:text-[#8CC53F] transition duration-300 ease-in-out transform hover:scale-105"
              >
                SERVICES
                <span className="ml-2 text-xl">
                  {dropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </button>
              {dropdownOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-gray-800 text-white shadow-lg rounded-lg overflow-hidden z-40 font-[Poppins]">
                  <li className="group">
                    <Link
                      to="/Dératisation"
                      onClick={handleLinkClick}
                      className="block px-4 py-2 transition duration-300 ease-in-out transform hover:bg-gray-700 hover:scale-105"
                    >
                      Dératisation
                    </Link>
                  </li>
                  <li className="group">
                    <Link
                      to="/Désinfection"
                      onClick={handleLinkClick}
                      className="block px-4 py-2 transition duration-300 ease-in-out transform hover:bg-gray-700 hover:scale-105"
                    >
                      Désinfection
                    </Link>
                  </li>
                  <li className="group">
                    <Link
                      to="/Désinsectisation"
                      onClick={handleLinkClick}
                      className="block px-4 py-2 transition duration-300 ease-in-out transform hover:bg-gray-700 hover:scale-105"
                    >
                      Désinsectisation
                    </Link>
                  </li>
                  <li className="group">
                    <Link
                      to="/Jardinage"
                      onClick={handleLinkClick}
                      className="block px-4 py-2 transition duration-300 ease-in-out transform hover:bg-gray-700 hover:scale-105"
                    >
                      Jardinage
                    </Link>
                  </li>
                  <li className="group">
                    <Link
                      to="/ServiceNetoyage"
                      onClick={handleLinkClick}
                      className="block px-4 py-2 transition duration-300 ease-in-out transform hover:bg-gray-700 hover:scale-105"
                    >
                      Service de Nettoyage
                    </Link>
                  </li>
                </ul>
              )}
            </li>{" "}
            <li className="relative group">
              <span className="absolute left-0 w-full h-[5px] bg-[#8CC53F] scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
              <Link
                to="/contact"
                onClick={handleLinkClick}
                className="py-7 px-3 inline-block hover:text-[#8CC53F] transition duration-300 ease-in-out transform hover:scale-105"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="lg:block hidden">
            <div className="flex justify-between gap-5">
              <Buttonn />
            </div>
          </div>
          {/* Mobile nav */}
          <ul
            className={`
              md:hidden bg-gray-100 fixed w-full top-28 overflow-y-auto bottom-0 py-5 pl-4 font-[Poppins] 
              duration-500 ${open ? "-left-24" : "left-[-150%]"} 
            `}
          >
            <li>
              <Link
                to="/"
                onClick={handleLinkClick}
                className="py-7 px-3 inline-block hover:text-[#8CC53F] transition duration-300 ease-in-out transform hover:scale-105"
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                to="/aboutus"
                onClick={handleLinkClick}
                className="py-7 px-3 inline-block hover:text-[#8CC53F] transition duration-300 ease-in-out transform hover:scale-105"
              >
                Présentation
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={handleLinkClick}
                className="py-7 px-3 inline-block hover:text-[#8CC53F] transition duration-300 ease-in-out transform hover:scale-105"
              >
                Contact
              </Link>
            </li>
            {/* Mobile dropdown for Services */}
            <li>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="py-7 px-3 inline-block flex items-center hover:text-[#8CC53F] transition duration-300 ease-in-out transform hover:scale-105"
              >
                Services
                <span className="ml-2 text-xl">
                  {dropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </button>
              {dropdownOpen && (
                <ul className="bg-gray-100 text-black shadow-lg rounded-md font-[Poppins]">
                  <li>
                    <Link
                      to="/Dératisation"
                      onClick={handleLinkClick}
                      className="block px-4 py-2 hover:bg-gray-200 transition duration-300"
                    >
                      Dératisation
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Désinfection"
                      onClick={handleLinkClick}
                      className="block px-4 py-2 hover:bg-gray-200 transition duration-300"
                    >
                      Désinfection
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Désinsectisation"
                      onClick={handleLinkClick}
                      className="block px-4 py-2 hover:bg-gray-200 transition duration-300"
                    >
                      Désinsectisation
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Jardinage"
                      onClick={handleLinkClick}
                      className="block px-4 py-2 hover:bg-gray-200 transition duration-300"
                    >
                      Jardinage
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/ServiceNetoyage"
                      onClick={handleLinkClick}
                      className="block px-4 py-2 hover:bg-gray-200 transition duration-300"
                    >
                      Service de Nettoyage
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <div className="py-5">
              <div className="">
                <div className="flex   gap-5 flex-col max-w-52 max-lg:ml-14 pr-16">
                  <button onClick={handleLinkClick}>
                    <Buttonn />
                  </button>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
