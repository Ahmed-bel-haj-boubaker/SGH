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
import contactImage from "../../public/images/contact-us.jpg";

import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="container mx-auto my-10 font-poppins ">
      <div className="flex flex-col md:flex-row items-center lg:-ml-[100px]">
        <div className=" bg-blue-100 p-8 rounded-lg shadow-md mb-8 md:mb-0 lg:w-[50vh] ">
          <img
            src={contactImage}
            alt="Contact Us"
            className="w-full h-48 object-cover rounded-lg mb-4 "
          />
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Contactez-Nous
          </h3>
          <p className="text-gray-700 mb-4">
            Nous sommes disponibles pour répondre à vos questions.
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Email:</strong> contact@sgh.com
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Téléphone:</strong> +216 72 214 152
          </p>
          <Link
            to="/contact"
            className="block text-center bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-md shadow-md transition-transform transform hover:scale-105"
          >
            Contactez-nous
          </Link>
        </div>
        <div className="md:ml-10 md:flex-1"></div>
      </div>
    </section>
  );
};

export default Contact;
