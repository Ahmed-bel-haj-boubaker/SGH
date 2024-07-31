import React from 'react';

const FeaturesSection = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 py-16 font-poppins">
      <h2 className="text-4xl font-bold mb-12">
        POURQUOI NOUS <span className="text-red-500">CHOISIR</span>
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="bg-white shadow-md rounded-lg p-8 border-2 border-red-500 flex flex-col items-center max-w-xs">
          <div className="mb-4">
            <img src="path-to-your-icon.png" alt="Fiabilité Icon" className="h-16 w-16" />
          </div>
          <h3 className="text-xl font-bold mb-4">Fiabilité</h3>
          <p className="text-center text-gray-700">
            Forte d’une expérience de 17 ans dans le domaine de lutte contre les nuisible,
            GSA met à votre disposition son savoir-faire et ses compétences humaines afin
            de répondre à vos besoins.
          </p>
        </div>
        <div className="bg-red-500 text-white shadow-md rounded-lg p-8 flex flex-col items-center max-w-xs">
          <div className="mb-4">
            <img src="path-to-your-icon.png" alt="Efficacité Icon" className="h-16 w-16" />
          </div>
          <h3 className="text-xl font-bold mb-4">Efficacité</h3>
          <p className="text-center">
            GSA est certifiée et agréée par le ministère de la santé publique et n’utilise
            que des produits homologués, respectueux de l’environnement et de vos animaux
            domestiques.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-8 border-2 border-red-500 flex flex-col items-center max-w-xs">
          <div className="mb-4">
            <img src="path-to-your-icon.png" alt="Disponibilité Icon" className="h-16 w-16" />
          </div>
          <h3 className="text-xl font-bold mb-4">Disponibilité</h3>
          <p className="text-center text-gray-700">
            GSA vous propose un service 7 jours/7, 24h/24 sur tout le territoire pour protéger
            vos établissements contre les infestations nuisibles et vous garantir la qualité
            de l’hygiène de vos locaux.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
