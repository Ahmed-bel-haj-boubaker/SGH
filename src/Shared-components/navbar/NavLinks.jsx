import { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./Mylinks";
import { IoChevronForward } from "react-icons/io5";

const NavLinks = ({ onClick }) => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      {links.map((link, index) => (
        <div key={index}>
          <div className="px-3 text-left md:cursor-pointer relative group">
            <h1
              className="py-7 flex justify-between items-center md:pr-0 pr-5 group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              <span className="absolute top-0 bottom-0 w-full h-[5px] bg-[#8CC53F] scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>

              {link.name}

              {/* Chevron Icon */}
              <span className="text-xl md:hidden inline">
                <ion-icon
                  name={heading === link.name ? "chevron-up" : "chevron-down"}
                ></ion-icon>
              </span>
              <span className="text-xl hidden md:block transition-transform duration-300 ease-in-out group-hover:rotate-180">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
            </h1>
            {link.submenu && (
              <div className="relative w-full">
                <div className="absolute top-full left-0 mt-1 hidden group-hover:block bg-[#F9F9F9] border border-[#E5E7EB] shadow-lg rounded-lg">
                  <div className="py-3">
                    <div className="w-4 h-4 left-3 absolute -top-2 bg-[#F9F9F9] rotate-45 border-t border-l border-[#E5E7EB]"></div>
                  </div>
                  <div className="p-5 grid gap-4">
                    {link.sublinks.map((sublink, index) => (
                      <Link
                        key={index}
                        to={sublink.to}
                        className="flex items-center py-2 px-4 rounded-lg hover:bg-[#E5E7EB] transition duration-300 ease-in-out w-96"
                      >
                        <h1 className="text-lg text-gray-800 font-[Poppins] flex-grow">
                          {sublink.Head}
                        </h1>
                        <IoChevronForward className="text-[#4B5563]" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div className={`${heading === link.name ? "md:hidden" : "hidden"}`}>
            {/* sublinks */}
            {link.sublinks.map((sublink, index) => (
              <div key={index}>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== sublink.Head
                        ? setSubHeading(sublink.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7  md:pr-0 pr-5 flex justify-between items-center md:pr-0 pr-5"
                  >
                    <Link
                      to={sublink.to}
                      className="block px-7 py-2"
                      onClick={onClick}
                    >
                      {sublink.Head}
                    </Link>
                  </h1>
                  <div
                    className={`${
                      subHeading === sublink.Head ? "md:hidden" : "hidden"
                    }`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
