import { useEffect, useState } from "react";

const Hero = () => {
  const fullText =
    "SGH est une société de nettoyage industriel offrant des services professionnels partout en Tunisie.";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 10); // Adjust the interval time to speed up or slow down the animation

    return () => clearInterval(interval);
  }, [fullText]);
  console.log(displayedText);
  return (
    <section className="-mt-16 md:pt-40 max-lg:-mt-1 ">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Société Générale d'Hygiène
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">{displayedText}</p>
          <p className="mt-8 md:mt-12">
            <button
              type="button"
              className="
        py-4 px-12
        
        bg-teal-500
        hover:bg-teal-600
        rounded
        text-white
         font-[poppins]
        "
            >
              Service
            </button>
          </p>
        </div>
        <div className="lg:w-1/2 -mt-20 max-lg:-mt-1">
          <img src="../../public/images/desinsectisation.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
