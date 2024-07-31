import { useState } from "react";
import emailjs from "emailjs-com";
import {
  DEMANDE_DEVIS_SERVICE,
  DEMANDE_DEVIS_TEMPLATE,
  EMAIL_USER_ID,
} from "../Config";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bg from "../../public/images/bgContact.jpg";
const DemandeDevis = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    adresse: "",
    ville: "",
    codePostal: "",
    telephone: "",
    service: "",
  });

  const toastOptions = {
    position: "bottom-right",
    autoClose: 2000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        DEMANDE_DEVIS_SERVICE,
        DEMANDE_DEVIS_TEMPLATE,
        {
          nom: formData.nom,
          prenom: formData.prenom,
          email: formData.email,
          adresse: formData.adresse,
          ville: formData.ville,
          codePostal: formData.codePostal,
          telephone: formData.telephone,
          service: formData.service,
          from_name: `${formData.nom} ${formData.prenom}`,
        },
        EMAIL_USER_ID
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);

        toast.success("Message envoyer avec avec succès!", toastOptions);
        setFormData({
          nom: "",
          prenom: "",
          email: "",
          adresse: "",
          ville: "",
          codePostal: "",
          telephone: "",
          service: "",
        });
      })
      .catch((err) => {
        console.log("FAILED...", err);
        toast.error(
          "Échec de l'envoi du message. Veuillez réessayer.",
          toastOptions
        );
      });
  };

  return (
    <div>
      <div
        className="flex items-center justify-center bg-gradient-to-r  p-4  mt-5 "
        style={{ backgroundImage: `url('${bg}')` }}
      >
        <ToastContainer />

        <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-lg border border-primary">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
            Demande de devis
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { id: "prenom", label: "Prénom", type: "text" },
                { id: "nom", label: "Nom", type: "text" },
                { id: "email", label: "Email", type: "email" },
                { id: "adresse", label: "Adresse", type: "text" },
                { id: "ville", label: "Ville", type: "text" },
                { id: "codePostal", label: "Code Postal", type: "text" },
                { id: "telephone", label: "Téléphone", type: "tel" },
              ].map(({ id, label, type }) => (
                <div key={id} className="relative">
                  <label htmlFor={id} className="text-gray-700 font-poppins">
                    {label}:
                  </label>
                  <input
                    type={type}
                    id={id}
                    name={id}
                    className="w-full mt-2 px-4 py-3 border-2 rounded-lg font-poppins border-gray-300 focus:border-primary focus:outline-none transition duration-300 placeholder-gray-400"
                    placeholder={`Entrez votre ${label.toLowerCase()}`}
                    value={formData[id]}
                    onChange={handleChange}
                    required
                  />
                </div>
              ))}
            </div>
            <div className="relative">
              <label
                htmlFor="service"
                className="text-gray-700 font-medium font-poppins"
              >
                Service:
              </label>
              <select
                id="service"
                name="service"
                className="w-full mt-2 font-poppins px-4 py-3 border-2 rounded-lg border-gray-300 focus:border-primary focus:outline-none transition duration-300 placeholder-gray-400"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Sélectionnez le(s) Service(s)
                </option>
                <option value="Dératisation">Dératisation</option>
                <option value="Désinsectisation">Désinsectisation</option>
                <option value="Désinfection">Désinfection</option>
                <option value="Travaux de jardinage">
                  Travaux de jardinage
                </option>
                <option value="Service de nettoyage">
                  Service de nettoyage
                </option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-primary font-poppins hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 transform hover:scale-105 mt-6"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DemandeDevis;
