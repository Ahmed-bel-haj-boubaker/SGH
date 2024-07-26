import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <button className="bg-primary text-white  px-8 py-3  max-lg:w-56 font-[poppins]" >
      {/* <FontAwesomeIcon icon={faFileAlt} className="text-lg mr-2" /> */}
      <Link to={"/demandeDevis"}> Devis gratuit</Link>
    </button>
  );
};

export default Button;
