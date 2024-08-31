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

import { BsWhatsapp } from "react-icons/bs";

const ChatBot = () => {
  const phoneNumber = "+21626260074";

  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition flex items-center space-x-3"
      aria-label="Chat on WhatsApp"
    >
      <BsWhatsapp className="w-6 h-6" />
    </button>
  );
};

export default ChatBot;
