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

import logo from "../../public/images/Logo.png";

import Team from "../Shared-components/Team";
import image from "../../public/images/cc.png";
import FeaturesSection from "../Shared-components/FeaturesSection";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import emailjs from "emailjs-com";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Banner from "./Banner";
import Securite from "./Securite";

const AboutUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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
        import.meta.env.VITE_TEMPLATE_ID_EMAIL,
        {
          user_email: formData.email,
          user_name: formData.name,
          message: formData.message,
        },
        import.meta.env.VITE_USER_ID_EMAIL
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        toast.success("Message envoyer avec avec succès!", toastOptions);

        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.log("FAILED...", err);
        toast.error("Failed to send message. Please try again.", toastOptions);
      });
  };
  return (
    <div className=" ">
      <ToastContainer />
      <Banner title={"À PROPOS DE NOUS"} image={image} />
      <div className="bg-slate-100">
        <section className="container mx-auto px-4 flex  flex-col   items-center mb-16 p-5">
          <img
            src={logo}
            alt="Logo"
            className="mb-6 md:mb-0 md:mr-6 size-80 "
          />
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold mb-4 font-poppins text-center leading-10">
              Qui nous sommes ?
            </h2>
            <p className="text-xl text-gray-700 font-poppins">
              La société “SGH ” à su s’implanter au fils du temps comme un des
              leaders du secteur de la 3D (Désinsectisation, Désinfection et
              Dératisation) . Nous intervenons également pour les professionnels
              dans tout le territoire de la Tunisie Nous vous proposons une
              large gamme de produits et services visant à préserver ou rétablir
              des conditions d’hygiène optimales dans vos locaux professionnels.
              Nous continuons à évoluer sans cesse afin de répondre à vos
              besoins.
            </p>
          </div>
        </section>
      </div>
      <FeaturesSection />
      <div className="bg-slate-400">
        {" "}
        <Team />
      </div>{" "}
      <Securite />
      <section className="container mx-auto my-10 px-5 mb-11">
        <h2 className="text-4xl font-bold mb-12 text-center font-poppins">
          CONTACTEZ <span className="text-blue-500 text-2xl">NOUS</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-2xl font-poppins">
            <h3 className="text-2xl font-semibold mb-4 ">
              Envoyez-nous un message
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Nom
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  name="name" // Add name attribute
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Votre nom"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  name="email" // Add name attribute
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Votre email"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  rows="5"
                  name="message" // Add name attribute
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Votre message"
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>

          {/* Company Details */}
          <div className="bg-white p-8 rounded-lg shadow-2xl font-poppins">
            <h3 className="text-3xl font-semibold mb-6 text-blue-600">
              Nos Coordonnées
            </h3>
            <p className="text-gray-800 mb-4 flex items-center ">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="text-blue-600 mr-3 size-7"
              />
              Adresse: Turki 8030 Grombalia GP1
            </p>
            <p className="text-gray-800 mb-4 flex items-center">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-blue-600 mr-3 size-7"
              />
              GSM: 26 26 00 74 - 58 70 49 09
            </p>
            <p className="text-gray-800 mb-4 flex items-center">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-blue-600 mr-3 size-7"
              />
              Tél/Fax: 72 21 41 52
            </p>
            <p className="text-gray-800 mb-4 flex items-center">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-blue-600 mr-3 size-7"
              />
              Email: sgh.ibtissem@gmail.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
