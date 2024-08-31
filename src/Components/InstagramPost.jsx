import React from "react";
import Slider from "react-slick";
import image1 from "../../public/images/image.jpg";
import image2 from "../../public/images/banner_outils_de_jardinage_fr_vonroc_280224.jpg";
import image3 from "../../public/images/desinfection-2.jpg";
import image4 from "../../public/images/desinsectisation.png";
import image5 from "../../public/images/desinsectisation-deratisation-deinfection-lille.jpg";
import image6 from "../../public/images/do8e9fbiu7o6-390x260-1.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const instagramPosts = [
  {
    id: 1,
    image: image1,
    caption: "Caption for post 1",
    likes: 150,
    comments: 25,
  },
  {
    id: 2,
    image: image2,
    caption: "Caption for post 2",
    likes: 200,
    comments: 30,
  },
  {
    id: 3,
    image: image3,
    caption: "Caption for post 3",
    likes: 180,
    comments: 20,
  },
  {
    id: 4,
    image: image4,
    caption: "Caption for post 4",
    likes: 250,
    comments: 40,
  },
  {
    id: 5,
    image: image5,
    caption: "Caption for post 5",
    likes: 300,
    comments: 35,
  },
  {
    id: 6,
    image: image6,
    caption: "Caption for post 6",
    likes: 190,
    comments: 15,
  },
];

const InstagramPost = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-white  ">
      <div className="mx-auto h-60 p-8 ">
        <Slider {...settings}>
          {instagramPosts.map((instagramPost, index) => (
            <div key={index} className="">
              <img
                src={instagramPost.image}
                alt=""
                className="w-full h-60 object-cover rounded-md shadow-lg transition-transform ease-in-out hover:-rotate-12 hover:scale-90 gap-16"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default InstagramPost;
