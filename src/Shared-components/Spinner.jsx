import Logo from "../../public/images/Logo.png";

const Spinner = () => {
  return (
    <div className="items-center justify-center flex h-screen">
      <div className=" flex justify-center items-center">
        <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
        <img src={Logo} className="rounded-full h-28 w-28 "></img>
      </div>
    </div>
  );
};

export default Spinner;
