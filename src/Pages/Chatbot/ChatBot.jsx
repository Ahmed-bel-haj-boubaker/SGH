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
