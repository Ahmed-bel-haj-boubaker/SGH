import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../public/images/Logo.png";
import Buttonn from "../Button/Button";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Function to handle link click and close mobile nav
  const handleLinkClick = () => {
    setOpen(false); // Close the mobile nav
  };

  return (
    <>
      <nav className="bg-gray-50 fixed top-0 left-0 w-full z-50 shadow-lg h-40 justify-center items-center max-lg:h-28 md:w-screen">
        <div className="bg-black max-lg:hidden text-white text-center font-poppins ">
          <h1>Société Générale d'Hygiène</h1>
        </div>
        <div className="flex items-center font-medium justify-center space-x-24 px-5 lg:px-20  lg:-mt-12 ">
          <div className="z-50 p-5 md:w-auto w-full flex justify-between">
            <img
              src={Logo}
              alt="logo"
              className="md:cursor-pointer size-48 justify-center items-center max-lg:-mt-4 max-lg:size-32"
            />
            <div
              className="text-5xl md:hidden max-lg:mt-5"
              onClick={() => setOpen(!open)}
            >
              <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
            </div>
          </div>
          <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins] ">
            <li className="relative group ">
              <span className="absolute left-0  w-full h-[5px] bg-[#8CC53F] scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>

              <Link
                to="/"
                onClick={handleLinkClick}
                className="py-7 px-3 inline-block hover:text-[#8CC53F] transition duration-300 ease-in-out transform hover:scale-105"
              >
                Accueil
              </Link>
            </li>
            <li className="relative group ">
              <span className="absolute left-0  w-full h-[5px] bg-[#8CC53F] scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>

              <Link
                to="/aboutus"
                onClick={handleLinkClick}
                className="py-7 px-3 inline-block hover:text-[#8CC53F] transition duration-300 ease-in-out transform hover:scale-105"
              >
                Présentation
              </Link>
            </li>
            <NavLinks onClick={handleLinkClick} />
            <li className="relative group ">
              <span className="absolute   w-full h-[5px] bg-[#8CC53F] scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>

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
            </li>{" "}
            <li>
              <Link
                to="/contact"
                onClick={handleLinkClick}
                className="py-7 px-3 inline-block hover:text-[#8CC53F] transition duration-300 ease-in-out transform hover:scale-105"
              >
                Contact
              </Link>
            </li>
            <NavLinks onClick={handleLinkClick} />
            <div className="py-5">
              <div className="">
                <div className="flex justify-between gap-5 flex-col max-w-52 max-lg:ml-14">
                  <Buttonn />
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
