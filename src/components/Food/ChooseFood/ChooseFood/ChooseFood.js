import React from "react";
import Slider from "react-slick";
import leftArrow from "../../../../../src/assets/Images/Icon/leftArrow.png";
import rightArrow from "../../../../../src/assets/Images/Icon/rightArrow.png";

import { chooseFoodData } from "../ChooseFood/ChooseFoodData";
import ChooseFoodCard from "./ChooseFoodCard";

const ChooseFood = () => {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img className=" w-10 bg-red-400 " src={leftArrow} alt="pre" {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src={rightArrow} alt="next" {...props} />
  );

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
        breakpoint: 700,
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
    <section className="my-10 py-10 bg-gray-100">
      <div className="text-center text-3xl text-orange-400 font-raleWay">
        <h2>Choose Your Best Menu</h2>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-11/12  ">
          <Slider {...settings} className="m-10 ">
            {chooseFoodData.map((card) => (
              <ChooseFoodCard key={card.id} card={card}></ChooseFoodCard>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ChooseFood;
