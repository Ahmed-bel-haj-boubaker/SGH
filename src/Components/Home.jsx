import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonials from "./Testimonials";
import Hero from "../Shared-components/Hero";
import Statistic from "../Shared-components/Statistic";
import Team from "../Shared-components/Team";
import HeroSection from "./HeroSection";
import Securite from "./Securite";
import Banner from "./Banner";
import deratisation from "../../public/images/nettoyage.avif";
import SliderAnimated from "../Shared-components/SliderAnimated";
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

const Home = () => {
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
        alert("Failed to send message. Please try again.");
      });
  };
  return (
    <>
      <ToastContainer />
      <div>
        <Hero />
        {/* <SliderAnimated /> */}
        <Statistic />
        <HeroSection />
      </div>
      <div className="mb-5 mt-11">
        <Banner title={"Votre partenaire en nettoyage"} image={deratisation} />
      </div>
      <FeaturesSection />
      <div className="bg-white py-10">
        <Securite />
      </div>
      <div className="bg-gray-50 py-10">
        <Team />
      </div>
      <div className="relative overflow-hidden bg-gray-50 py-10">
        <Testimonials />
      </div>
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
    </>
  );
};

export default Home;
