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

import {
  faAward,
  faHandsHelping,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Securite = () => {
  return (
    <div className="bg-black ">
      {" "}
      <section className="container mx-auto my-10 p-7 ">
        <h2 className="text-3xl font-bold text-center mb-10 font-poppins text-white">
          Nos Points Forts en Détail
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-white">
          <div className="flex flex-col items-center text-center">
            <FontAwesomeIcon
              icon={faAward}
              className="text-6xl text-green-500 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 font-poppins">Qualité</h3>
            <p className=" font-poppins text-white">
              Nous fournissons des services de la plus haute qualité.
            </p>
          </div>
          <div className="flex flex-col items-center text-center ">
            <FontAwesomeIcon
              icon={faHandsHelping}
              className="text-6xl text-green-500 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 font-poppins text-white">
              Engagement
            </h3>
            <p className=" font-poppins text-white">
              Nous nous engageons à satisfaire nos clients.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FontAwesomeIcon
              icon={faShieldAlt}
              className="text-6xl text-green-500 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Sécurité</h3>
            <p className="text-white">
              Nous assurons la sécurité dans tous nos services.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Securite;
