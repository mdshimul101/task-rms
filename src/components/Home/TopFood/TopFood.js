import React from "react";

const TopFood = ({ topFood }) => {
  const { image, title, element, price, review } = topFood;
  return (
    <div className="min-w-80 border-[1px] border-gray-300 p-5 overflow-hidden">
      <div className="hover:scale-105 duration-300 ">
        <img src={image} alt="" className="w-full object-cover" />
      </div>
      <div className="flex justify-between py-3">
        <div className="text-gray-500">
          <h1 className="text-lg font-raleWay font-semibold">{title}</h1>
          <p>{element}</p>
        </div>
        <div className="text-red-400 font-raleWay font-semibold">
          <h4 className="">Price : {price}</h4>
          <h3 className="">Review : {review}</h3>
        </div>
      </div>
    </div>
  );
};

export default TopFood;
