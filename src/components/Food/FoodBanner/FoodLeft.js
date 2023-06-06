import React from "react";

const FoodLeft = ({ commonData }) => {
  console.log(commonData);
  const { title, text, image } = commonData;
  return (
    <div className="relative">
      <div className="absolute w-full h-full bg-black/40">
        <div className="text-white  absolute mx-10  top-1/2 left-[5%]  translate-y-[-50%] text-left">
          <h2 className="text-xl lg:text-2xl mb-3 font-montserrat font-semibold">
            {title}
          </h2>

          <p className="font-montserrat text-justify">{text}</p>

          <button className="text-orange-400 mt-5 lg:text-xl font-montserrat font-semibold  border-b-2 border-red-500">
            Order Now
          </button>
        </div>
      </div>
      <img className="w-full min-h-[465px] object-cover" src={image} alt="" />
    </div>
  );
};

export default FoodLeft;
