import { useState, useEffect } from "react";

import jardinage from "../../../public/CATALOGUE jardinage.pdf";
import threeD from "../../../public/SGH-3D.pdf";
import netoyage from "../../../public/SGH-NETTOYAGE.pdf";
import bot from "../../../public/images/bot.png";
const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const storedMessages = localStorage.getItem("chatMessages");
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
  }, []);

  const saveMessagesToStorage = (messages) => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      if (messages.length === 0) {
        setMessages([
          { type: "bot", content: "Salut je suis le chatbot de SGH 🙂" },
        ]);
        saveMessagesToStorage([
          { type: "bot", content: "Salut je suis le chatbot de SGH 🙂" },
        ]);
      }
    }
  };

  const handleMessageSend = (message) => {
    const newMessage = { type: "user", content: message };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    saveMessagesToStorage([...messages, newMessage]);

    const lowercaseMessage = message.toLowerCase();
    if (
      [
        "salut",
        "bnj",
        "bonjour",
        "salem",
        "hi",
        "hello",
        "bonsoir",
        "slm",
        "",
      ].includes(lowercaseMessage)
    ) {
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { type: "bot", content: "3aslema m3ak SGH chatBot 🙂" },
        ]);
        saveMessagesToStorage([
          ...messages,
          { type: "bot", content: "3aslema m3ak SGH chatBot 🙂" },
        ]);
      }, 1000);
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { type: "bot", content: "Connaissez-vous SGH? (oui/non) 😊" },
        ]);
        saveMessagesToStorage([
          ...messages,
          { type: "bot", content: "Connaissez-vous SGH? (oui/non) 😊" },
        ]);
      }, 2000);
    }
    if (["merci", "thx", "thanks", "aychk"].includes(lowercaseMessage)) {
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { type: "bot", content: "Derien 😊" },
        ]);
        saveMessagesToStorage([
          ...messages,
          { type: "bot", content: "Derien 😊" },
        ]);
      }, 1000);
    }
    if (
      messages.some(
        (msg) => msg.content === "Connaissez-vous SGH? (oui/non) 😊"
      )
    ) {
      if (lowercaseMessage === "oui") {
        setTimeout(() => {
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              type: "bot",
              content: "C'est super ! Merci de nous connaître ! 😊",
            },
          ]);
          saveMessagesToStorage([
            ...messages,
            {
              type: "bot",
              content: "C'est super ! Merci de nous connaître ! 😊",
            },
          ]);
        }, 1000);

        setTimeout(() => {
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              type: "bot",
              content: "Voici quelques services que nous offrons:",
            },
          ]);
          saveMessagesToStorage([
            ...messages,
            {
              type: "bot",
              content: "Voici quelques services que nous offrons:",
            },
          ]);
        }, 2000);

        setTimeout(() => {
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              type: "bot",
              content: "- DÉRATISATION , DÉSINSECTISATION ,DÉSINFECTION 😄",
            },
          ]);
          saveMessagesToStorage([
            ...messages,
            {
              type: "bot",
              content: "- DÉRATISATION , DÉSINSECTISATION ,DÉSINFECTION 😄",
            },
          ]);
        }, 3000);

        setTimeout(() => {
          setMessages((prevMessages) => [
            ...prevMessages,
            { type: "bot", content: "- TRAVAUX DE JARDINAGE 🌿" },
          ]);
          saveMessagesToStorage([
            ...messages,
            { type: "bot", content: "- TRAVAUX DE JARDINAGE 🌿" },
          ]);
        }, 4000);

        setTimeout(() => {
          setMessages((prevMessages) => [
            ...prevMessages,
            { type: "bot", content: "- SERVICE DE NETTOYAGE 🧹" },
          ]);
          saveMessagesToStorage([
            ...messages,
            { type: "bot", content: "- SERVICE DE NETTOYAGE 🧹" },
          ]);
        }, 5000);

        setTimeout(() => {
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              type: "bot",
              content: "Quel service souhaitez-vous découvrir? 😉",
            },
          ]);
          saveMessagesToStorage([
            ...messages,
            {
              type: "bot",
              content: "Quel service souhaitez-vous découvrir? 😉",
            },
          ]);
        }, 6000);
      }
    }
    if (lowercaseMessage === "travaux de jardinage") {
      const description = "TRAVAUX DE JARDINAGE est un service de...";
      const pdfUrl = jardinage;

      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { type: "bot", content: description },
          {
            type: "bot",
            content: "Voici le catalogue de TRAVAUX DE JARDINAGE:",
          },
          {
            type: "bot",
            content: (
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Télécharger le catalogue 📄
              </a>
            ),
          },
        ]);
        saveMessagesToStorage([
          ...messages,
          { type: "bot", content: description },
          {
            type: "bot",
            content: "Voici le catalogue de TRAVAUX DE JARDINAGE:",
          },
          {
            type: "bot",
            content: pdfUrl, // Store only URL here
          },
        ]);
      }, 1000);
    }
    if (
      lowercaseMessage.includes("dératisation") ||
      lowercaseMessage.includes("désinsectisation") ||
      lowercaseMessage.includes("désinfection")
    ) {
      const description =
        "Le 3D (DÉRATISATION , DÉSINSECTISATION ,DÉSINFECTION) est un service de...";
      const pdfUrl = threeD;

      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { type: "bot", content: description },
          {
            type: "bot",
            content:
              "Voici le catalogue de 3D (DÉRATISATION , DÉSINSECTISATION ,DÉSINFECTION ):",
          },
          {
            type: "bot",
            content: (
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Télécharger le catalogue 📄
              </a>
            ),
          },
        ]);
        saveMessagesToStorage([
          ...messages,
          { type: "bot", content: description },
          {
            type: "bot",
            content: "Voici le catalogue de 3D:",
          },
          {
            type: "bot",
            content: pdfUrl,
          },
        ]);
      }, 1000);
    }
    if (lowercaseMessage === "service de nettoyage") {
      const description = "SERVICE DE NETTOYAGE est un service de...";
      const pdfUrl = netoyage;

      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { type: "bot", content: description },
          {
            type: "bot",
            content: "Voici le catalogue de SERVICE DE NETTOYAGEE:",
          },
          {
            type: "bot",
            content: (
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Télécharger le catalogue 📄
              </a>
            ),
          },
        ]);
        saveMessagesToStorage([
          ...messages,
          { type: "bot", content: description },
          {
            type: "bot",
            content: "Voici le catalogue de TRAVAUX DE JARDINAGE:",
          },
          {
            type: "bot",
            content: pdfUrl, // Store only URL here
          },
        ]);
      }, 1000);
    }
  };

  const clearChat = () => {
    localStorage.removeItem("chatMessages");
    setMessages([]);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <div
        className="bg-white text-white rounded-full p-4 shadow-lg cursor-pointer transition"
        onClick={toggleChat}
      >
        <img src={bot} alt="" className="size-8" />
      </div>

      <div
        className={`fixed bottom-10 right-10 bg-white p-4 rounded-lg shadow-lg transform transition overflow-hidden ${
          isOpen ? "scale-100" : "scale-0"
        }`}
        style={{ maxWidth: "400px", maxHeight: "400px" }}
      >
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <img src={bot} alt="" className="size-8" />
          <h2 className="text-xl font-bold">SGH ChatBot</h2>
          <button
            onClick={() => {
              toggleChat();
              clearChat();
            }}
            className="text-gray-500 hover:text-gray-700 transition"
          >
            &times;
          </button>
        </div>
        <div
          className="chat-content overflow-y-auto h-64"
          style={{ maxHeight: "calc(100% - 80px)" }}
        >
          {messages.map((message, index) => (
            <div
              key={index}
              className={`my-2 ${
                message.type === "user" ? "text-right" : "text-left"
              }`}
            >
              <p
                className={`text-gray-700 ${
                  message.type === "bot" ? "italic" : ""
                }`}
              >
                <strong>{message.type === "user" ? "You:" : "Bot:"}</strong>{" "}
                {message.content}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <input
            type="text"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Type your message..."
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleMessageSend(e.target.value);
                e.target.value = "";
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
