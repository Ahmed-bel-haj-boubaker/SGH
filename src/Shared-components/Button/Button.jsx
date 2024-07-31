import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <div className="group">
      <button className="relative bg-blue-500 text-white px-8 py-3 max-lg:w-56 font-[poppins] overflow-hidden ">
        <Link to={"/demandeDevis"} className="relative z-10">
          Devis gratuit
        </Link>
        <div className="absolute inset-0 bg-blue-700 transition-transform duration-500 ease-out scale-x-0 group-hover:scale-x-100 origin-left"></div>
      </button>
    </div>
  );
};

export default Button;
