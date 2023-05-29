import React from "react";

const TopFood = ({ topFood }) => {
  const { image, title, element, price, review } = topFood;
  return (
    <div className="min-w-80 border-[1px] border-gray-300 p-5">
      <div className="overflow-hidden">
        <div className="hover:scale-125 duration-500 ">
          <img src={image} alt="" className="w-full object-cover" />
        </div>
      </div>
      <div className="flex justify-between py-3">
        <div className="text-gray-600">
          <h1 className="text-lg font-raleWay font-semibold">{title}</h1>
          <p>{element}</p>
        </div>
        <div className="text-red-500 font-raleWay font-semibold">
          <h4 className="">Price : {price}</h4>
          {/* <h3 className="">Review : {review}</h3> */}
          <button className="border-gray-400 bg-orange-300 hover:bg-orange-400 text-white mt-2 px-2 py-1 rounded-2xl">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopFood;
