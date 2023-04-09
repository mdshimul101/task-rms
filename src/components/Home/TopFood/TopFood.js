import React from "react";

const TopFood = ({ topFood }) => {
  const { image, title, element, price, review } = topFood;
  return (
    <div className="min-w-80 border-2 border-gray-300 p-5 overflow-hidden">
      <div className="hover:scale-105 duration-300 ">
        <img src={image} alt="" className="w-full object-cover" />
      </div>
      <div className="flex justify-between py-3">
        <div className="text-orange-400">
          <h1 className="text-lg font-semibold">{title}</h1>
          <p>{element}</p>
        </div>
        <div>
          <h4 className="text-gray-600">Price : {price}</h4>
          <h3 className="text-yellow-500 font-semibold">Review : {review}</h3>
        </div>
      </div>
    </div>
  );
};

export default TopFood;
