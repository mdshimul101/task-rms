import React from "react";
import { MdOutlineFavoriteBorder, MdOutlineShoppingCart } from "react-icons/md";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const NewFoodCard = ({ foodData }) => {
  const { name, image, price } = foodData;

  return (
    <div className="">
      <div className="relative overflow-hidden h-[450px] lg:h-96 group ">
        <div className="w-full h-full duration-300 ease-linear">
          <div className="flex justify-start items-center top-[120%] group-hover:top-[87%] duration-500 p-3 absolute bottom-[-4%] left-[35%]  translate-x-[-50%] translate-y-[-50%]">
            <button className=" text-gray-800 hover:text-white bg-white hover:bg-orange-400 p-3 rounded-full duration-[400ms] hover:rotate-[360deg]">
              {" "}
              <MdOutlineFavoriteBorder className=" text-[24px] rotate-0 " />
            </button>
          </div>
          <div className="flex justify-start items-center top-[120%] group-hover:top-[87%] duration-500 p-3 absolute bottom-[-4%] left-[65%]  translate-x-[-50%] translate-y-[-50%]">
            <button className="text-gray-800 hover:text-white bg-white hover:bg-orange-400 p-3 rounded-full duration-[400ms] hover:rotate-[360deg]">
              {" "}
              <MdOutlineShoppingCart className=" text-[24px] rotate-0 " />
            </button>
          </div>
          <PhotoProvider>
            <PhotoView src={image}>
              <img src={image} alt="" className="w-full h-full object-cover" />
            </PhotoView>
          </PhotoProvider>
        </div>
      </div>

      <div className="text-center border-x-[1px] border-b-[1px] py-3">
        <h1 className="text-gray-600 font-montserrat">{name}</h1>
        <p className="text-lg text-orange-500 font-poppins">
          Price : <span className="ml-1"></span> $ {price}
        </p>
      </div>
    </div>
  );
};

export default NewFoodCard;
