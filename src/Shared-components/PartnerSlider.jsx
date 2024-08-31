/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo1 from "../../public/images/fb.png";
import logo2 from "../../public/images/aziza.png";
import logo3 from "../../public/images/google.png";
import logo4 from "../../public/images/gmail.png";
import logo5 from "../../public/images/bot.png";
import logo6 from "../../public/images/carrefour.png";
import logo7 from "../../public/images/microsoft.png";
const PartnerSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  const partners = [
    { id: 1, logo: logo1 },
    { id: 2, logo: logo2 },
    { id: 3, logo: logo3 },
    { id: 4, logo: logo4 },
    { id: 5, logo: logo5 },
    { id: 6, logo: logo6 },
    { id: 7, logo: logo7 },
  ];

  return (
    <div className="container mx-auto my-8 px-4 flex justify-center items-center h-24 ">
      <Slider {...settings} className="w-full">
        {partners.map((partner) => (
          <div
            key={partner.id}
            className="flex justify-center items-center p-4"
          >
            <img
              src={partner.logo}
              alt={`Partner ${partner.id}`}
              className="h-16 mx-auto"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PartnerSlider;
