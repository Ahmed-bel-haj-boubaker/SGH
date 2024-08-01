import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Slider from "react-slick";
import deratisation from "../../public/images/deratisation-saint-cloud-2.jpg";
import Désinsectisation from "../../public/images/desinsectisation.png";
import Jardinage from "../../public/images/jardinage-domicile-clean-2.jpg";
import Désinfection from "../../public/images/desinfection.png";
import ServiceNetoyage from "../../public/images/Nettoyage-bureau.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
const teamMembers = [
  {
    name: "Dératisation",
    role: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam omnis cum magnam laudantium. Ducimus vero suscipit, nisi dolorem quos officiis tenetur voluptas harum, esse obcaecati natus, autem iusto totam quasi.",
    image: deratisation,
    to: "/Dératisation",
  },
  {
    name: "Désinsectisation",
    role: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam omnis cum magnam laudantium. Ducimus vero suscipit, nisi dolorem quos officiis tenetur voluptas harum, esse obcaecati natus, autem iusto totam quasi.",
    image: Désinsectisation,
    to: "/Désinsectisation",
  },
  {
    name: "Désinfection",
    role: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam omnis cum magnam laudantium. Ducimus vero suscipit, nisi dolorem quos officiis tenetur voluptas harum, esse obcaecati natus, autem iusto totam quasi.",
    image: Désinfection,
    to: "/Désinfection",
  },
  {
    name: "Jardinage",
    role: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam omnis cum magnam laudantium. Ducimus vero suscipit, nisi dolorem quos officiis tenetur voluptas harum, esse obcaecati natus, autem iusto totam quasi.",
    image: Jardinage,
    to: "/Jardinage",
  },
  {
    name: "Service de Netoyage",
    role: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam omnis cum magnam laudantium. Ducimus vero suscipit, nisi dolorem quos officiis tenetur voluptas harum, esse obcaecati natus, autem iusto totam quasi.",
    image: ServiceNetoyage,
    to: "/ServiceNetoyage",
  },
];

const Team = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="absolute -right-16 top-1/2 transform -translate-y-1/2 z-10 max-lg:hidden"
        onClick={onClick}
      >
        <button className="  p-2  shadow-lg hover:bg-blue-500  bg-blue-700 transition">
          <MdKeyboardArrowRight size={50} className="text-white " />
        </button>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="absolute -left-16 top-1/2 transform -translate-y-1/2 z-10 max-lg:hidden"
        onClick={onClick}
      >
        <button className=" p-2  shadow-lg hover:bg-blue-500  bg-blue-700 transition">
          <MdKeyboardArrowLeft size={50} className="text-white" />
        </button>
      </div>
    );
  }
  return (
    <div className="bg-gray-100 py-12">
      <section className="container mx-auto px-6 lg:px-8 flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center mb-12 font-poppins text-gray-800">
          Nos Services
        </h2>
        <Slider {...settings} className="w-full">
          {teamMembers.map((member, index) => (
            <div key={index} className="space-x-9">
              <motion.div
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 mx-2 "
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-56 sm:h-64 object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-700">
                    <Link to={member.to}>{member.name}</Link>
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{member.role}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default Team;
