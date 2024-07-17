import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../public/images/Logo.png";
import Buttonn from "../Button/Button";
import NavLinks from "./NavLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Function to handle link click and close mobile nav
  const handleLinkClick = () => {
    setOpen(false); // Close the mobile nav
  };

  return (
    <>
      <nav className="bg-white fixed top-0 left-0 w-full z-50 shadow-md h-32 justify-center items-center max-lg:h-28 md:w-screen">
        <div className="flex items-center font-medium justify-around">
          <div className="z-50 p-5 md:w-auto w-full flex justify-between">
            <img
              src={Logo}
              alt="logo"
              className="md:cursor-pointer h-28 w-32 justify-center items-center max-lg:-mt-4"
            />
            <div className="text-4xl md:hidden" onClick={() => setOpen(!open)}>
              <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
            </div>
          </div>
          <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
            <li>
              <Link
                to="/"
                onClick={handleLinkClick} // Close mobile nav on link click
                className="py-7 px-3 inline-block hover:text-green-600 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Home
              </Link>
            </li>
            <NavLinks onClick={handleLinkClick} />{" "}
            {/* Pass handleLinkClick to NavLinks */}
            <li>
              <Link
                to="/contact"
                onClick={handleLinkClick} // Close mobile nav on link click
                className="py-7 px-3 inline-block hover:text-green-600 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="lg:block hidden">
            <div className="flex justify-between gap-5">
              <Buttonn />
              <button>
                <a
                  href="tel:+21626260074"
                  className="flex items-center bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition duration-300"
                >
                  <FontAwesomeIcon icon={faPhone} className="text-xl mr-2" />
                  <span className="font-semibold">+216 26260074</span>
                </a>
              </button>
            </div>
          </div>
          {/* Mobile nav */}
          <ul
            className={`
              md:hidden bg-white fixed w-full top-24 overflow-y-auto bottom-0 py-24 pl-4 font-[Poppins] 
              duration-500 ${open ? "left-0" : "left-[-100%]"}
            `}
          >
            <li>
              <Link
                to="/"
                onClick={handleLinkClick} // Close mobile nav on link click
                className="py-7 px-3 inline-block hover:text-green-600 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={handleLinkClick} // Close mobile nav on link click
                className="py-7 px-3 inline-block hover:text-green-600 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Contact
              </Link>
            </li>
            <NavLinks onClick={handleLinkClick} />{" "}
            {/* Pass handleLinkClick to NavLinks */}
            <div className="py-5">
              <div className="">
                <div className="flex justify-between gap-5 flex-col max-w-52">
                  <Buttonn />
                  <button>
                    <a
                      href="tel:+21626260074"
                      className="flex items-center bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition duration-300"
                    >
                      <FontAwesomeIcon
                        icon={faPhone}
                        className="text-xl mr-2"
                      />
                      <span className="font-semibold">+216 26260074</span>
                    </a>
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
