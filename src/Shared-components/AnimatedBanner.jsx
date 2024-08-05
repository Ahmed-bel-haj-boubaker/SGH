import { useEffect } from "react";
import image from "../../public/images/cc.png";
import Button from "./Button/Button";

const AnimatedBanner = ({ title, text }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const progressBar = document.getElementById("progress-bar");
      progressBar.style.width = "100%";
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-lg:p-0 max-lg:mt-[-22px]">
      <div
        className="relative h-[32rem] -mt-12 mb-6"
        style={{
          backgroundImage: `url('${image}')`,
          backgroundPositionY: "2px",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold mb-4 animate-slide-in">{title}</h1>
          <p className="text-xl mb-8 animate-fade-in animation-delay-200">
            {text}
          </p>
          <button className="px-8 py-3 rounded-md text-white font-semibold animate-bounce-in animation-delay-400">
            <Button />
          </button>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-300">
            <div
              id="progress-bar"
              className="h-full bg-blue-500"
              style={{ width: "0%", transition: "width 5s linear" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedBanner;
