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

import { useState, useEffect } from "react";

const Statistic = () => {
  const [projects, setProjects] = useState(0); // Initialize with 0
  const [satisfaction, setSatisfaction] = useState(0); // Initialize with 0
  const [clients, setClients] = useState(0); // Initialize with 0

  useEffect(() => {
    // Function to animate numbers
    const incrementNumber = (start, end, duration, setValue) => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setValue(Math.floor(progress * (end - start) + start));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };

    // Animate values
    incrementNumber(0, 10, 2000, setProjects); // 10 years of experience
    incrementNumber(0, 85, 2000, setSatisfaction); // 85% satisfaction
    incrementNumber(0, 5, 2000, setClients); // 5 services proposed
  }, []);

  return (
    <div>
      <div className="bg-white py-16 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              SGH - Société Générale d'Hygiène
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4 font-poppins">
              SGH offre des services de nettoyage professionnels et de haute
              qualité sur tout le territoire tunisien.
            </p>
          </div>
        </div>
        <div className="mt-10 pb-1">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-white"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                  <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r font-poppins">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                      10 ans d'expérience
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-gray-700">
                      {projects} ans
                    </dd>
                  </div>
                  <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l font-poppins">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                      Services proposés
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-gray-700">
                      {clients}
                    </dd>
                  </div>{" "}
                  <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r font-poppins">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                      Taux de satisfaction
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-gray-700">
                      {satisfaction}%
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
