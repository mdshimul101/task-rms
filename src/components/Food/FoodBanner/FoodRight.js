import React from "react";

const FoodRight = ({ foodRight }) => {
  const { title, image, numberOfItem } = foodRight;
  return (
    <div className="relative">
      <div className="absolute w-full h-[300px]  md:w-full md:h-full bg-black/40">
        <div className="text-white  absolute mx-10  top-1/2 left-[5%] translate-y-[-50%] text-left">
          <h2 className="text-xl lg:text-2xl mb-3 font-montserrat font-semibold">
            {title}
          </h2>

          <p className="font-montserrat font-medium">{numberOfItem}</p>

          <button className="text-orange-400 bg-gray-500/40 mt-5 px-2 py-1  font-montserrat font-semibold group ">
            See More
            <div className="flex justify-center items-center ">
              <span className="border-b-2 border-gray-300 w-14 group-hover:w-full ease-out duration-300  text-center mt-1"></span>
            </div>
          </button>
        </div>
      </div>
      <img
        className="w-full h-[300px] md:w-full md:h-full lg:min-w-[250px] lg:h-[228px] object-cover"
        src={image}
        alt="food"
      />
    </div>
  );
};

export default FoodRight;
