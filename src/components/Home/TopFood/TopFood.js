import React from "react";

const TopFood = ({ topFood }) => {
  const { image, title, element, price } = topFood;
  return (
    <div className="min-w-80 border-[1px] border-orange-400 p-4">
      <div className="overflow-hidden">
        <div className="hover:scale-110 duration-500 ">
          <img src={image} alt="" className="w-full object-cover" />
        </div>
      </div>
      <div className="flex justify-between py-3">
        <div className="text-gray-600">
          <h1 className="text-lg font-raleWay font-semibold">{title}</h1>
          <p>{element}</p>
        </div>
        <div className="text-red-500 font-raleWay flex flex-col justify-center items-center font-semibold">
          <h4 className="">Price : {price}</h4>
          {/* <h3 className="">Review : {review}</h3> */}
          <button className="font-montserrat border hover:border-orange-500 bg-white hover:bg-orange-500 duration-150 ease-linear text-orange-400 hover:text-white mt-2 px-3 py-1 ">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopFood;
