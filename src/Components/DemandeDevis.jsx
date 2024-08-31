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
import emailjs from "emailjs-com";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        import.meta.env.VITE_API_EMAIL,
        import.meta.env.VITE_DEMANDE_DEVIS_TEMPLATE,
        {
          nom: formData.nom,
          prenom: formData.prenom,
          email: formData.email,
          adresse: formData.adresse,
          ville: formData.ville,
          codePostal: formData.codePostal,
          telephone: formData.telephone,
          message: formData.message,
          service: formData.service,
          from_name: `${formData.nom} ${formData.prenom}`,
        },
        import.meta.env.VITE_USER_ID_EMAIL
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
          message: "",
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
      {" "}
      <div className="flex justify-center items-center    max-lg:flex-col-reverse mt-2 bg-blue-500 ">
        <div className="flex items-center justify-center  p-4  mt-5  mb-6 ">
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
                <div className="relative md:col-span-2">
                  <label
                    htmlFor="message"
                    className="text-gray-700 font-medium font-poppins"
                  >
                    Message:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full mt-2 px-4 py-3 border-2 rounded-lg font-poppins border-gray-300 focus:border-primary focus:outline-none transition duration-300 placeholder-gray-400"
                    placeholder="Entrez votre message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
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
    </div>
  );
};

export default DemandeDevis;
