import React from "react";

const ChooseFoodCard = ({ card }) => {
  const { title, text, image, price } = card;
  return (
    <div className="rounded-xl relative mx-2 ">
      {/* Overlay */}
      <div className="absolute w-full h-full bg-black/30 rounded-xl text-white   ">
        <h1 className="font-bold text-2xl px-2 pt-4 ">
          {title}
          <div className="flex justify-start items-center ">
            <span className="border-b-2 border-orange-500 block w-14  ease-out duration-300  text-center mt-1"></span>
          </div>
        </h1>

        <p className="px-2 hidden lg:block mt-5 text-justify w-11/12">{text}</p>
        <p className="px-2 mt-2 lg:mt-5 text-base md:text-lg lg:text-lg font-bold font-poppins">
          Price : $ {price}
        </p>
        <button className="border-white bg-orange-400 text-white ml-3 px-3 py-1 rounded-2xl absolute bottom-6">
          Order Now
        </button>
      </div>
      <img
        className="max-h-[160px] md:max-h-[200px] lg:max-h-[280px] w-full  rounded-xl object-cover"
        src={image}
        alt="/"
      />
    </div>
  );
};
export default ChooseFoodCard;
