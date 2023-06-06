import React from "react";

const SingleGallery = ({ foodRight }) => {
  const { image } = foodRight;
  return (
    <div className="">
      <div className="relative  group/item ">
        <div className="absolute opacity-0 group-hover/item:opacity-100 duration-300 ease-linear w-full h-[300px] md:w-full md:h-full bg-black/40">
          <div className=" text-white  absolute group-hover/item:top-[50%] top-[45%] duration-300 left-1/2 translate-y-[-50%] translate-x-[-50%]">
            <button className="text-orange-400 bg-gray-700/40 px-2 py-1 font-montserrat font-semibold group ">
              See More
              <div className="flex justify-center items-center ">
                <span className="border-b-2 border-gray-300 w-14 group-hover:w-full ease-out duration-300  text-center mt-1"></span>
              </div>
            </button>
          </div>
        </div>

        <img
          className="w-full h-[300px] md:w-full md:h-[228px] lg:min-w-[150px] lg:h-[228px] object-cover"
          src={image}
          alt="food"
        />
      </div>
    </div>
  );
};

export default SingleGallery;
