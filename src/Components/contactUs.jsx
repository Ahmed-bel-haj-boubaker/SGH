import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import emailjs from "emailjs-com";
import Banner from "./Banner";
import bg from "../../public/images/pexels-photo-1097930.jpeg";
import bg2 from "../../public/images/bgContact.jpg";
import SliderAnimated from "../Shared-components/SliderAnimated";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ContactUs = () => {
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
    // Send email to sender (auto-reply)
    // emailjs.send(
    //   "service_a18f886", // Replace with your EmailJS service ID
    //   "template_nzpezdl", // Replace with your auto-reply template ID
    //   {
    //     to_email: formData.email,
    //     from_name: "SGH",
    //     user_name: formData.name,
    //   },
    //   "dso5aheejXGFbLnws" // Replace with your EmailJS user ID
    // );

    emailjs
      .send(
        "service_a18f886", // Replace with your EmailJS service ID
        "template_rtho1yb", // Replace with your EmailJS template ID
        {
          user_email: formData.email,
          user_name: formData.name,
          message: formData.message,
        },
        "dso5aheejXGFbLnws" // Replace with your EmailJS user ID
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
    <div>
      <ToastContainer />
      <div
        className="bg-gray-100 py-10"
        style={{ backgroundImage: `url('${bg2}')` }}
      >
        <Banner title={"Contactez-nous"} image={bg} />
        <section className="container mx-auto my-10 px-5">
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

        {/* Map Section */}
        <section className="container mx-auto my-10 px-5 font-poppins">
          <div className="bg-white p-8 rounded-lg shadow-2xl">
            <h3 className="text-2xl font-semibold mb-4 text-center">
              Notre Localisation
            </h3>
            <div className="w-full h-96">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2694.3578947299948!2d10.515598878517908!3d36.57461311378425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd5c0815e24cc7%3A0x54fe1271fa583ea3!2sHGF8%2B9RW%2C%20Turki!5e0!3m2!1sfr!2stn!4v1720494889796!5m2!1sfr!2stn"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
      <div className="">
        <SliderAnimated />
      </div>
    </div>
  );
};

export default ContactUs;
