import React, { useState } from "react";
import CountUp from "react-countup";
import { FiStar } from "react-icons/fi";
import { Link } from "react-router-dom";
import ScrollTrigger from "react-scroll-trigger";
import Slider from "react-slick";
import useTitle from "../../../hooks/useTitle";
import { aboutShopData } from "./AboutData";

const About = () => {
  const [isClick, setClick] = useState("first");
  const [counterOn, serCounterOn] = useState("first");

  useTitle("About");

  const reviewData = [
    {
      id: 1,
      text: (
        <>
          “I was so impressed with my breakfast this morning! I tried the Fried
          Green Tomato Benedict and my boyfriend got the Crab Cakes Benedict. We
          both finished our whole plates and were so impressed with the quality
          of the food and the short amount of time it took to receive it. I will
          definitely be back!” – Alina Monce.
        </>
      ),
      image:
        "https://ithemeslab.com/tempkits/foodkit/wp-content/uploads/2020/03/user-img.jpg",
      name: "Alina Monce",
      rating: (
        <>
          <div className="flex">
            <FiStar className="text-yellow-400 mr-1" />
            <FiStar className="text-yellow-400 mr-1" />
            <FiStar className="text-yellow-400 mr-1" />
            <FiStar className="text-yellow-400 mr-1" />
          </div>
        </>
      ),
    },
    {
      id: 2,
      text: (
        <>
          “This is always our breakfast stop before heading home from vacation.
          Always delicious. Always great service. Always worth the stop.” –
          Kristine Jasi.
        </>
      ),
      image:
        "https://images.pexels.com/photos/1008000/pexels-photo-1008000.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Kristine Jasi",
      rating: (
        <>
          <div className="flex">
            <FiStar className="text-yellow-400 mr-1" />
            <FiStar className="text-yellow-400 mr-1" />
            <FiStar className="text-yellow-400 mr-1" />
            <FiStar className="text-yellow-400 mr-1" />
            <FiStar className="text-yellow-400 mr-1" />
          </div>
        </>
      ),
    },
    {
      id: 3,
      text: (
        <>
          “Breakfast was delicious. Like a good homestyle country savory
          breakfast (and Im from the south, thats saying a lot)… Enjoyed the
          whole experience and definitely recommend this place for a place to
          eat on the cape.” – Ronnie Eli
        </>
      ),
      image:
        "https://images.pexels.com/photos/837306/pexels-photo-837306.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Ronnie Eli",
      rating: (
        <>
          <div className="flex">
            <FiStar className="text-yellow-400 mr-1" />
            <FiStar className="text-yellow-400 mr-1" />
            <FiStar className="text-yellow-400 mr-1" />
            <FiStar className="text-yellow-400 mr-1" />
          </div>
        </>
      ),
    },
    {
      id: 4,
      text: (
        <>
          “The absolute best red sauce. Weather on Pizza or Pasta, it’s honestly
          delicious. Portions are huge and the staff is extremely friendly and
          courteous.” – Rick Heri.
        </>
      ),
      image:
        "https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: " Rick Heri",
      rating: (
        <>
          <div className="flex">
            <FiStar className="text-yellow-400 mr-1" />
            <FiStar className="text-yellow-400 mr-1" />
            <FiStar className="text-yellow-400 mr-1" />
            <FiStar className="text-yellow-400 mr-1" />
          </div>
        </>
      ),
    },
  ];

  // slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 3000,
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

  const rattingStar = (
    <>
      <div className="flex">
        <FiStar className="text-yellow-400" />
        <FiStar className="text-yellow-400" />
        <FiStar className="text-yellow-400" />
        <FiStar className="text-yellow-400" />
      </div>
    </>
  );

  return (
    <section className="max-w-7xl mx-auto py-6 px-10">
      <div className="group inline-block my-5">
        <h1 className="text-2xl font-raleWay font-semibold text-gray-500">
          ABOUT US
          <div className="flex justify-start items-center">
            <span className="border-b-2 border-orange-500 w-14 group-hover:w-full ease-out duration-300  text-center mt-1"></span>
          </div>
        </h1>
      </div>

      <div className="my-4 bg-gray-100 w-full  flex flex-col lg:flex-row ">
        <div className="w-full lg:w-1/2">
          <img
            className="w-full h-[300px] object-cover"
            src="https://images.pexels.com/photos/2792186/pexels-photo-2792186.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
          />
        </div>
        <div className="w-full lg:w-1/2 font-poppins flex justify-center items-center">
          <div className="p-5  md:p-10 w-10/12 ">
            <h1 className="text-2xl font-medium">
              New Food Collection for you
            </h1>
            <p className="text-gray-500 mt-4 mb-6">
              Buy your favourite food from our wide variety of food items and
              enjoy our food.
            </p>
            <Link to="/food">
              <button className="text-orange-400 border border-orange-400 hover:bg-orange-400 hover:text-white duration-100 ease-linear mt-5 px-2 py-1 font-raleWay font-semibold">
                Order now
              </button>
            </Link>
          </div>
        </div>
      </div>

      <ScrollTrigger
        onEnter={() => serCounterOn(true)}
        onExit={() => serCounterOn(false)}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-32">
          {aboutShopData.map((item) => (
            <div className="w-full h-48 bg-white rounded-md shadow-md hover:shadow-inner flex justify-center items-center">
              <div className="text-center">
                <h1 className="text-5xl font-bold text-orange-400">
                  {counterOn && (
                    <CountUp
                      start={item.start}
                      end={item.end}
                      duration={2}
                      delay={0}
                    />
                  )}
                  +
                </h1>
                <p className="text-gray-400 font-poppins py-5"> {item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollTrigger>

      <div className="bg-reviewBg bg-no-repeat bg-cover h-[450px] my-32 ">
        <Slider {...settings}>
          {reviewData.map((singleReview) => (
            <div>
              <div className="shadow-md p-8 m-4 bg-red-50 h-[400px] md:h-[455px] lg:h-72 flex flex-col justify-between">
                <div className="mb-5">
                  <p className="text-justify font-poppins text-gray-400 ">
                    {singleReview.text}
                  </p>
                </div>
                <div className="flex">
                  <div>
                    <img
                      className="w-16 h-16 rounded-md mr-4 object-cover"
                      src={singleReview.image}
                      alt=""
                    />
                  </div>
                  <div className="flex justify-center items-center">
                    <div className="text-left font-poppins">
                      <h3>{singleReview.name}</h3>
                      <p className="text-gray-400 flex my-1">
                        {singleReview.rating}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default About;
