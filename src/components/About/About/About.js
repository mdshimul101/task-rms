import React, { useState } from "react";
import CountUp from "react-countup";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import ScrollTrigger from "react-scroll-trigger";
import Slider from "react-slick";
import useTitle from "../../../hooks/useTitle";
import {
  aboutShopData,
  advantageData,
  chefsData,
  reviewData,
} from "./AboutData";
import FQA from "./FQA";

const About = () => {
  const [counterOn, serCounterOn] = useState("first");
  const [open, setOpen] = useState(0);
  console.log(open);

  useTitle("About");

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
    <section className=" mx-auto pt-32">
      <div className="group inline-block my-5 px-9 md:px-24">
        <h1 className="text-2xl font-raleWay font-semibold text-gray-500">
          ABOUT US
          <div className="flex justify-start items-center">
            <span className="border-b-2 border-orange-500 w-14 group-hover:w-full ease-out duration-300  text-center mt-1"></span>
          </div>
        </h1>
      </div>
      <div className="my-4 px-9 md:px-24 bg-gray-100 w-full  flex flex-col lg:flex-row ">
        <div className="w-full lg:w-1/2">
          <img
            className="w-full h-[300px] object-cover"
            src="https://images.pexels.com/photos/2792186/pexels-photo-2792186.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
          />
        </div>
        <div className="w-full lg:w-1/2 font-poppins flex justify-center items-center">
          <div className="py-5 md:p-10 w-full md:w-10/12 ">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-32 px-9 md:px-24">
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
      <div className="bg-reviewBg bg-no-repeat bg-cover h-[480px] px-9 md:px-24">
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
      {/* awarde banner */}
      <div className="bg-fixedBg bg-no-repeat w-full h-[400px] md:h-[500px] bg-fixed relative mt-10">
        <div className="bg-black/50 w-full h-full"></div>
        <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-white ">
          <h1 className="text-xl md:text-4xl font-poppins font-medium text-center leading-10">
            We’re Awards Winning Restaurant. 5+ Years Of Experience In
            Restaurant Services
          </h1>
        </div>
      </div>
      {/* Chefs section */}
      <div className="my-20 px-9 md:px-24 bg-reviewBg">
        <div className="text-center group mb-10">
          <h className="text-4xl font-raleWay inline-block text-orange-400">
            Meet Our Experience & Master Chefs
            <div className="flex justify-center items-center mt-3">
              <span className="border-b-2 border-orange-500 w-24 group-hover:w-full ease-out duration-300  text-center mt-1"></span>
            </div>
          </h>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {chefsData.map((singleChef) => (
            <div>
              <div className="group ">
                <div className="relative w-full h-60 overflow-hidden">
                  <img
                    className="w-full h-60 group-hover:pb-8 object-cover duration-300 ease-linear"
                    src={singleChef.image}
                    alt="chefs"
                  />
                  <div className="bg-orange-300 h-0 w-full left-0 bottom-0 group-hover:h-8 px-2 group-hover:absolute duration-300 ease-linear">
                    <div className=" flex justify-between items-center pt-1 text-white">
                      <p className="font-semibold">Follow</p>
                      <div className="flex">
                        <Link className="mr-4">
                          <FaTwitter />
                        </Link>
                        <Link className="mr-4">
                          <FaFacebook />
                        </Link>
                        <Link>
                          <FaInstagram />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" lg:px-2 py-4">
                <div className="mb-4">
                  <h4 className="font-montserrat text-lg font-semibold ">
                    {singleChef.name}
                  </h4>
                  <p className="font-raleWay text-sm text-gray-400">
                    {singleChef.position}
                  </p>
                </div>

                <div>
                  <p className="text-justify text-gray-600 font-poppins ">
                    {open === singleChef.id
                      ? `${singleChef.text}`
                      : `${singleChef.text.slice(1, 150)}`}

                    {open === singleChef.id ? (
                      <button
                        onClick={() => setOpen(0)}
                        className="text-orange-400 underline ml-1"
                      >
                        see less
                      </button>
                    ) : (
                      <button
                        onClick={() => setOpen(singleChef.id)}
                        className="text-orange-400 underline ml-1"
                      >
                        see more
                      </button>
                    )}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* advantage */}
      <div className="grid gap-10 md:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-14 px-9 md:px-24 bg-gray-50">
        {advantageData.map((advantage) => (
          <div className="flex  lg:border-r-2  border-gray-200  last:border-r-0">
            <div className="flex items-center pr-4">
              <img src={advantage.image} alt="" />
            </div>
            <div className="">
              <h1 className="font-raleWay text-xl md:text-2xl font-semibold mb-1">
                {advantage.title}
              </h1>
              <p className="font-poppins text-gray-400 mt-1">
                {advantage.text}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* Future Of Tradition */}
      <div className="bg-reviewBg bg-no-repeat mt-16 lg:mt-32 mb-10 px-3 md:px-24 flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col lg:flex-row mx-5 md:mx-0">
            <div className="mx-auto lg:mx-3">
              <div className=" rounded-lg ">
                <img
                  className=" rounded-lg mt-14 lg:mt-28 hover:scale-105 lg:hover:scale-110 duration-300 ease-linear"
                  src="https://i.ibb.co/DKpw6q0/pexels-photo-1640773.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="mx-auto lg:mx-3">
              <img
                className="rounded-lg my-14  hover:scale-105 lg:hover:scale-110 duration-300 ease-linear"
                src="https://i.ibb.co/xjFXR38/pexels-photo-3070970.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="mx-5">
            <h3 className="text-2xl font-medium text-orange-400">About</h3>
            <h1 className="mt-5 text-3xl md:text-4xl">
              The Future Of Tradition{" "}
            </h1>
            <p className="mt-5 text-justify text-gray-500">
              We are dedicated to addressing food insecurity for homebound
              seniors and other vulnerable neighbors. We provide food and pantry
              items to those in need, including thousands of nutritious meals
              prepared in our onsite kitchen each week.
            </p>
            <button className="px-3 py-1 bg-orange-400 text-white mt-7">
              Learn more
            </button>
            <div className="mt-14">
              <div className="flex ">
                <img
                  className="w-[45%] h-36 md:w-44 md:h-28 rounded-lg object-cover  mx-auto md:mx-0"
                  src="https://i.ibb.co/WgVJR6z/pexels-photo-4963957.jpg"
                  alt=""
                />
                <img
                  className="w-[45%] h-36 md:w-44 md:h-28 rounded-lg object-cover mx-auto md:mx-5"
                  src="https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FQA */}
      <FQA />

      {/* need help */}
      <div className="mt-24 px-9 md:px-24 py-20 bg-orange-100/30">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold font-poppins">
              Need Help ?
            </h1>
            <p className="mt-3 text-sm md:text-base text-gray-600 font-poppins">
              Call our support 24/7 at +012 (345) 67
            </p>
          </div>
          <div className="flex items-center mt-10 md:mt-0">
            <button className="px-3 py-1 md:px-5 md:py-2 bg-orange-400 hover:bg-gray-500 ease-linear duration-100 text-white font-raleWay text-lg font-semibold rounded-3xl">
              Contact Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
