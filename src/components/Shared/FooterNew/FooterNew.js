import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BiHappyHeartEyes } from "react-icons/bi";
import {
  FaDribbble,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMediumM,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { MdOutlineFastfood } from "react-icons/md";
import { Link } from "react-router-dom";
import food_gallery from "../../../../src/assets/Images/food_gallery.png";
const FooterNew = () => {
  const [up, setUp] = useState(true);
  const productData = [
    "Features Food",
    "Top Food",
    "Most Selling",
    "New Food",
    "Special Food",
    "Offer",
  ];
  const productBottomData = [
    {
      id: 1,
      title: "HOW IT WORKS",
      items: ["Customer order", "FAQ", "Reviews"],
    },
    {
      id: 2,
      title: "PRICING",
      items: ["Plans & Pricing", "For Event", "Discount"],
    },
    {
      id: 3,
      title: "COMPANY",
      items: ["About", "Contact Us"],
    },
    {
      id: 4,
      title: "BLOG",
      items: [
        "Articles",
        "Interviews",
        "Health blog",
        "Questions & Answers",
        "Food Video",
        "Food-book",
      ],
    },
  ];
  return (
    <div>
      <div className="py-5 md:py-10 px-8 md:px-16 bg-slate-800 grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* left side */}
        <div className="text-gray-300 col-span-3 md:col-span-1  py-6">
          <div className="flex">
            <img className="w-10 h-10 " src={food_gallery} alt="" />
            <div className="ml-5 flex items-center">
              <p>Food Gallery</p>
            </div>
          </div>
          <p className="mt-5 w-10/12 text-justify">
            Food Gallery is waiting for you with the most beautifully prepared
            delectable food, Food Gallery always serves healthy Food, always
            keeping customers in mind and offering food at the lowest cost.
          </p>
          <div className="border-b mt-10 w-24 border-gray-600">
            <span></span>
          </div>

          <div className="mt-10">
            <div className="flex items-center">
              <BiHappyHeartEyes className="text-white  text-2xl "></BiHappyHeartEyes>

              <div className="flex  items-center">
                <p className="ml-4">5</p>
                <AiFillStar className="mx-1"></AiFillStar>
                <p>Review Form Customer</p>
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <MdOutlineFastfood className="text-white  text-2xl " />

              <div className="flex  items-center">
                {/* <p className="ml-4">5</p>
                <AiFillStar className="mx-1"></AiFillStar> */}
                <p className="ml-5">Good Food , Good Health.</p>
              </div>
            </div>
          </div>
        </div>
        {/* right side top */}
        <div className=" col-span-3 md:col-span-2">
          <div>
            <div className="mb-5">
              <h1 className="text-white font-bold  flex items-center ">
                PRODUCT{" "}
              </h1>
            </div>
            {productData.map((item) => (
              <Link
                className={`mr-4 last:mr-0 hover:text-sky-500 text-gray-300`}
              >
                {item}
              </Link>
            ))}
          </div>
          <div className="mt-7 border-b border-gray-600 w-full"></div>
          {/* right bottom */}
          <div>
            <div className="flex flex-col md:flex-row flex-wrap justify-between mt-8">
              {productBottomData.map((bottomData) => (
                <div className="">
                  <h1 className="text-white font-bold my-5">
                    {bottomData.title}
                  </h1>
                  <div className="flex flex-col ">
                    {bottomData.items.map((item) => (
                      <Link className="text-gray-300 my-1 hover:text-sky-500">
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* bottom -side */}
      <div className="p-5 md:p-10 grid grid-cols-1 md:grid-cols-3 bg-gray-600 text-gray-300">
        <div className="flex items-center">
          <p>© 2023 FLOWMAPP</p>
        </div>
        <div className="flex justify-start md:justify-center">
          <div className="border border-gray-500 rounded-full p-2 m-2 hover:border-sky-500">
            <FaFacebookF className=" "></FaFacebookF>
          </div>
          <div className="border border-gray-500 rounded-full p-2 m-2 hover:border-sky-500">
            <FaTwitter className=" "></FaTwitter>
          </div>
          <div className="border border-gray-500 rounded-full p-2 m-2 hover:border-sky-500">
            <FaInstagram className=" "></FaInstagram>
          </div>
          <div className="border border-gray-500 rounded-full p-2 m-2 hover:border-sky-500">
            <FaLinkedinIn className=" "></FaLinkedinIn>
          </div>
          <div className="border border-gray-500 rounded-full p-2 m-2 hover:border-sky-500">
            <FaMediumM className=" "></FaMediumM>
          </div>
          <div className="border border-gray-500 rounded-full p-2 m-2 hover:border-sky-500">
            <FaDribbble className=" "></FaDribbble>
          </div>
          <div className="border border-gray-500 rounded-full p-2 m-2 hover:border-sky-500">
            <FaYoutube className=" "></FaYoutube>
          </div>
        </div>
        <div className="flex items-center justify-start md:justify-end">
          <p>Terms Of Use / Security / Privacy</p>
        </div>
      </div>
    </div>
  );
};

export default FooterNew;
