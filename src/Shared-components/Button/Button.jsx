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

import { Link } from "react-router-dom";

const Button = () => {
  return (
    <div className="group">
      <button className="relative bg-blue-500 text-white px-8 py-3 max-lg:w-56 font-[poppins] overflow-hidden ">
        <Link to={"/demandeDevis"} className="relative z-10">
          Devis gratuit
        </Link>
        <div className="absolute inset-0 bg-blue-700 transition-transform duration-500 ease-out scale-x-0 group-hover:scale-x-100 origin-left"></div>
      </button>
    </div>
  );
};

export default Button;
