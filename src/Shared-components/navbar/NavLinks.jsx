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
          <div className="px-3 text-left md:cursor-pointer group">
            <h1
              className="py-7 flex justify-between items-center md:pr-0 pr-5 group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              <span className="text-xl md:hidden inline">
                <ion-icon
                  name={`${
                    heading === link.name ? "chevron-up" : "chevron-down"
                  }`}
                ></ion-icon>
              </span>
              <span className="text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45"></div>
                  </div>
                  <div className="bg-white p-5 grid gap-10  ">
                    {link.sublinks.map((sublink, index) => (
                      <Link
                        key={index}
                        to={sublink.to}
                        className="hover:text-green-600 flex items-center "
                      >
                        <h1 className="text-lg font-semibold justify-start ">
                          {sublink.Head}
                        </h1>
                        <IoChevronForward />
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
                    className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center md:pr-0 pr-5"
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
