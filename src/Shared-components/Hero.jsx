import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import image1 from "../../public/images/dd.jpg";
import image3 from "../../public/images/ee.jpg"; // Add more images if needed

const Hero = () => {
  const images = [image1, image3]; // Array of images
  const fullText =
    "SGH est une société de nettoyage industriel offrant des services professionnels partout en Tunisie.";
  const [displayedText, setDisplayedText] = useState("");
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [fullText]);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(imageInterval);
  }, [images.length]);

  return (
    <section
      className="     opacity-100 -mt-16 md:pt-40 max-lg:-mt-[26px] max-lg:py-6 transition-all duration-1000 hero-section lg:h-[80vh] max-lg:bg-cover  bg-center "
      style={{
        backgroundImage: `url('${images[currentImage]}')`,
        backgroundPositionX: " 20px",
      }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row p-6 md:p-12 ">
        <div className="text-center lg:text-left lg:w-1/2 p-5">
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold font-poppins leading-none text-white ">
            Société Générale d'Hygiène
          </h1>
          <p className="text-lg sm:text-xl mt-4 sm:mt-6 text-white font-poppins">
            {displayedText}
          </p>
          <p className="mt-6 sm:mt-8 md:mt-12">
            <button
              type="button"
              className="py-3 px-8 sm:py-4 sm:px-12 bg-teal-500 hover:bg-teal-600 rounded text-white font-[poppins]"
            >
              <Link to="/demandeDevis">Demande de devis</Link>
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
