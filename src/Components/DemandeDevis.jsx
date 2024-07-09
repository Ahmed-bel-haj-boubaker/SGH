const DemandeDevis = () => {
  return (
    <div className="flex items-center justify-center min-h-screen  -mt-32 -mb-10 max-lg:m-2 max-lg:mb-3 max-lg:mt-2  ">
      <div className="bg-white rounded-lg shadow-lg p-8 md:w-2/3 lg:w-1/2 xl:w-1/3 border border-primary">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Demande de devis
        </h2>
        <form className="space-y-6 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <div className="relative">
              <label htmlFor="prenom" className="text-gray-700 font-medium">
                Prénom:
              </label>
              <input
                type="text"
                id="prenom"
                name="prenom"
                className="w-full mt-2 px-4 py-3 border-b-2 border-primary focus:outline-none transition duration-300 placeholder-gray-400 transform hover:scale-105 "
                placeholder="Entrez votre prénom"
                required
              />
            </div>
            <div className="relative">
              <label htmlFor="nom" className="text-gray-700 font-medium">
                Nom:
              </label>
              <input
                type="text"
                id="nom"
                name="nom"
                className="w-full mt-2 px-4 py-3 border-b-2 border-primary focus:outline-none  transition duration-300 placeholder-gray-400 transform hover:scale-105"
                placeholder="Entrez votre nom"
                required
              />
            </div>
            <div className="relative ">
              <label htmlFor="email" className="text-gray-700 font-medium">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full mt-2 px-4 py-3 border-b-2 border-primary focus:outline-none  transition duration-300 placeholder-gray-400 transform hover:scale-105"
                placeholder="Entrez votre email"
                required
              />
            </div>
            <div className="relative ">
              <label htmlFor="adresse" className="text-gray-700 font-medium">
                Adresse:
              </label>
              <input
                type="text"
                id="adresse"
                name="adresse"
                className="w-full mt-2 px-4 py-3 border-b-2 border-primary focus:outline-none  transition duration-300 placeholder-gray-400 transform hover:scale-105"
                placeholder="Entrez votre adresse"
                required
              />
            </div>
            <div className="relative">
              <label htmlFor="ville" className="text-gray-700 font-medium">
                Ville:
              </label>
              <input
                type="text"
                id="ville"
                name="ville"
                className="w-full mt-2 px-4 py-3 border-b-2 border-primary focus:outline-none  transition duration-300 placeholder-gray-400 transform hover:scale-105"
                placeholder="Entrez votre ville"
                required
              />
            </div>
            <div className="relative">
              <label htmlFor="codePostal" className="text-gray-700 font-medium">
                Code Postal:
              </label>
              <input
                type="text"
                id="codePostal"
                name="codePostal"
                className="w-full mt-2 px-4 py-3 border-b-2 border-primary focus:outline-none focus:border-primary transition duration-300 placeholder-gray-400 transform hover:scale-105"
                placeholder="Entrez votre code postal"
                required
              />
            </div>
            <div className="relative ">
              <label htmlFor="telephone" className="text-gray-700 font-medium">
                Téléphone:
              </label>
              <input
                type="tel"
                id="telephone"
                name="telephone"
                className="w-full mt-2 px-4 py-3 border-b-2 border-primary focus:outline-none  transition duration-300 transform hover:scale-105 placeholder-gray-400 "
                placeholder="Entrez votre numéro de téléphone"
                required
              />
            </div>
          </div>
          <div className="relative ">
            <label htmlFor="service" className="text-gray-700 font-medium">
              Service:
            </label>
            <select
              id="Service"
              name="Service"
              className="w-full mt-2 px-4 py-3 border-b-2  border-primary focus:outline-none   transition duration-300 transform hover:scale-105 placeholder-gray-400"
              required
            >
              <option value="Dératisation" disabled selected>
                Sélectionnez le(s) Service(s)
              </option>
              <option value="Dératisation">Dératisation</option>
              <option value="Désinsectisation">Désinsectisation</option>
              <option value="Désinfection">Désinfection</option>
              <option value="Travaux de jardinage">Travaux de jardinage</option>
              <option value="Service de nettoyage">Service de nettoyage</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary text-white font-bold py-3 px-6 rounded-full shadow-md transition duration-300 transform hover:scale-105 mt-6"
          >
           Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default DemandeDevis;
