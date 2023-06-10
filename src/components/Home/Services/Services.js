import React from "react";
import { servicesData } from "./ServicesData";

import Slider from "react-slick";
import rightArrow from "../../../../src/assets//Images/Icon/rightArrow.png";
import leftArrow from "../../../../src/assets/Images/Icon/leftArrow.png";
import Service from "./Service";
const Services = () => {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img className=" w-10 bg-red-400 " src={leftArrow} alt="pre" {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src={rightArrow} alt="next" {...props} />
  );

  // slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    // prevArrow: <SlickArrowLeft />,
    // nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="w-11/12 mx-auto py-10">
        <Slider {...settings} className=" flex justify-center items-center">
          {servicesData.map((singleService) => (
            <Service
              key={singleService.id}
              singleService={singleService}
            ></Service>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Services;
