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

import PartnerSlider from "./PartnerSlider";
import { Link } from "react-router-dom";

const SliderAnimated = () => {
  return (
    <div className="mt-10 px-5 shadow-lg rounded-lg bg-white">
      <div className="flex justify-between items-center mb-4 max-lg:flex-col-reverse lg:flex-row-reverse md:flex-row-reverse">
        <div className="group">
          <button className="relative bg-blue-500 text-white px-8 py-3 max-lg:w-56 font-[poppins] overflow-hidden max-lg:-ml-32 md:w-48">
            <Link className="relative z-10" to={"/demandeDevis"}>
              Devis gratuit ➔
            </Link>
            <div className="absolute inset-0 bg-blue-700 transition-transform duration-500 ease-out scale-x-0 group-hover:scale-x-100 origin-left"></div>
          </button>
        </div>
        <h2 className="text-2xl font-extrabold text-gray-800">
          <span className="bg-black text-white px-2 text-3xl" >ILS NOUS ONT FAIT</span>{" "}
          CONFIANCE
        </h2>
      </div>
      <hr className="border-t-2 border-blue-500 mb-4" />
      <PartnerSlider />
    </div>
  );
};

export default SliderAnimated;
