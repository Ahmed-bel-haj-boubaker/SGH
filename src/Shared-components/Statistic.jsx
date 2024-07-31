/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";

const Statistic = () => {
  const [projects, setProjects] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);
  const [clients, setClients] = useState(0);

  useEffect(() => {
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

    incrementNumber(0, 250, 2000, setProjects);
    incrementNumber(0, 98, 2000, setSatisfaction);
    incrementNumber(0, 30, 2000, setClients);
  }, []);

  return (
    <div>
      <div className="bg-white py-16 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl ">
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
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500 ">
                      Projets réalisés
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-gray-700">
                      {projects}+
                    </dd>
                  </div>
                  <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r font-poppins">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                      Taux de satisfaction
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-gray-700">
                      {satisfaction}%
                    </dd>
                  </div>
                  <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l font-poppins">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                      Nouveaux clients par mois
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-gray-700">
                      {clients}+
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
