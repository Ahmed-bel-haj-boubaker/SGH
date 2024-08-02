/* eslint-disable react/no-unescaped-entities */
const Banner = ({ image, title }) => {
  return (
    <div
      className="relative bg-cover bg-center h-96 -mt-10"
      style={{ backgroundImage: `url('${image}')` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-2xl md:text-5xl lg:text-5xl font-extrabold mb-4 drop-shadow-lg ">
          {title}
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl mb-6 drop-shadow-lg font-poppins">
          n'hesitez pas de nous contacter
        </p>
        <button className="font-poppins border p-4 border-slate-500 hover:bg-slate-500 hover:text-white transition duration-300 ">
          <a href="tel:+21672214152">Appelez le + (216) 72 21 41 52</a>
        </button>
      </div>
    </div>
  );
};

export default Banner;
