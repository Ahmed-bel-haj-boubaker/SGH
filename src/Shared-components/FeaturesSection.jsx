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
import { TbHandFinger, TbZoomCheck } from "react-icons/tb";
import { BsShieldFillPlus } from "react-icons/bs";

const FeaturesSection = () => {
  return (
    <div className="flex flex-col items-center justify-center   py-16 font-poppins ">
      <h2 className="text-4xl font-bold mb-12">
        POURQUOI NOUS <span className="text-blue-500 text-2xl">CHOISIR</span>
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="bg-white shadow-md rounded-lg p-8 border-2 border-blue-500 flex flex-col items-center max-w-xs">
          <div className="mb-4">
            <TbZoomCheck className="size-16 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold mb-4">Fiabilité</h3>
          <p className="text-center text-gray-700 ">
            Nous effectuons un diagnostic afin de cibler le problème.
          </p>
        </div>
        <div className="bg-blue-500 text-white shadow-md rounded-lg p-8 flex flex-col items-center max-w-xs">
          <div className="mb-4">
            <TbHandFinger className="size-16" />
          </div>
          <h3 className="text-xl font-bold mb-4">Efficacité</h3>
          <p className="text-center">
            Nous intervenons avec une action choc pour éradiquer le problème
            rapidement.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-8 border-2 border-blue-500 flex flex-col items-center max-w-xs">
          <div className="mb-4">
            <BsShieldFillPlus className="size-16 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold mb-4">Disponibilité</h3>
          <p className="text-center text-gray-700">
            Nous vous conseillons et/ou effectuons une dernière action par
            prévention pour éviter le retour du problème rencontré. Nous vous
            proposons également des contrats d'entretien.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
