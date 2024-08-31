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
              <span className="text-gray-800 font-semibold">{link.name}</span>
              <span className="text-xl md:hidden inline">
                <ion-icon
                  name={heading === link.name ? "chevron-up" : "chevron-down"}
                ></ion-icon>
              </span>
              <span className="text-xl hidden md:block transition-transform duration-800 ease-in-out group-hover:rotate-180">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
            </h1>
            {link.submenu && (
              <div className="group phone:hidden ">
                <div className="absolute top-full left-0 hidden  group-hover:block bg-white border border-gray-200  ">
                  <div className="py-3">
                    <div className="w-4 h-4 left-3 absolute -top-2 bg-white rotate-45 border-t border-l border-gray-200 md:ml-36"></div>
                  </div>
                  <div className="p-5 grid gap-4">
                    {link.sublinks.map((sublink, index) => (
                      <Link
                        key={index}
                        to={sublink.to}
                        className="flex items-center py-2 px-4 rounded-lg hover:bg-gray-100 transition duration-300 ease-in-out md:w-[20vh] lg:w-[30vh]  "
                      >
                        <h1 className="text-lg text-gray-800 font-[Poppins] flex-grow">
                          {sublink.Head}
                        </h1>
                        <IoChevronForward className="text-gray-500" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className={`${heading === link.name ? "md:hidden" : "hidden"}`}>
            {link.sublinks.map((sublink, index) => (
              <div key={index}>
                <div className="bg-gray-100 w-full">
                  <h1
                    onClick={() =>
                      subHeading !== sublink.Head
                        ? setSubHeading(sublink.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 md:pr-0 flex justify-between items-center pr-5"
                  >
                    <Link
                      to={sublink.to}
                      className="block px-7 py-2"
                      onClick={onClick}
                    >
                      {sublink.Head}
                    </Link>
                    <span className="text-xl md:hidden inline">
                      <ion-icon
                        name={
                          subHeading === sublink.Head
                            ? "chevron-up"
                            : "chevron-down"
                        }
                      ></ion-icon>
                    </span>
                  </h1>
                  <div
                    className={`${
                      subHeading === sublink.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {/* Mobile sublinks can be added here if needed */}
                  </div>
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
