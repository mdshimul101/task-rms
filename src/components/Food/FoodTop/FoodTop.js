import React from "react";
import { MdOutlineFavoriteBorder, MdOutlineShoppingCart } from "react-icons/md";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { topFeature, topSell, topTrends } from "./FoodTopData";

const FoodTop = () => {
  return (
    <div className="max-w-7xl mx-auto py-6 px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <div className="mb-10 group">
            <h1 className="text-2xl mb-[1px] font-poppins font-semibold ">
              Top Trend Food
            </h1>
            <div className="flex justify-start items-center ">
              <span className="border-b-2 border-orange-500 w-14 group-hover:w-[186px] ease-out duration-300  text-center mt-1"></span>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 ">
            {topTrends.map((trend) => (
              <div className="flex ">
                <PhotoProvider>
                  <PhotoView src={trend.image}>
                    <img
                      src={trend.image}
                      alt=""
                      className="mr-5 w-[120px] h-[120px] object-cover cursor-zoom-in hover:scale-125 duration-500"
                    />
                  </PhotoView>
                </PhotoProvider>

                <div className="grid  gap-1 justify-start">
                  <p className="font-montserrat text-gray-500 font-normal">
                    {trend.title}
                  </p>
                  <p className="text-lg font-montserrat font-medium">
                    $ {trend.price}
                  </p>
                  <div className="text-orange-400 text-xl group">
                    <button className="mr-4 text-gray-800 hover:text-orange-400  bg-white rounded-full duration-[400ms] hover:rotate-[360deg]">
                      {" "}
                      <MdOutlineFavoriteBorder className=" text-[20px] rotate-0 " />
                    </button>
                    <button className="text-gray-800 hover:text-orange-400 bg-white  rounded-full duration-[400ms] hover:rotate-[360deg]">
                      {" "}
                      <MdOutlineShoppingCart className=" text-[20px] rotate-0 " />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="mb-10 group ">
            <h1 className="text-2xl mb-[1px] font-poppins font-semibold ">
              Top Selling Food
            </h1>
            <div className="flex justify-start items-center ">
              <span className="border-b-2 border-orange-500 w-14 group-hover:w-[198px] ease-out duration-300  text-center mt-1"></span>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8">
            {topSell.map((trend) => (
              <div className="flex">
                <PhotoProvider>
                  <PhotoView src={trend.image}>
                    <img
                      src={trend.image}
                      alt=""
                      className="mr-5 w-[120px] h-[120px] object-cover hover:scale-125 duration-500 cursor-zoom-in"
                    />
                  </PhotoView>
                </PhotoProvider>

                <div className="grid  gap-1 justify-start">
                  <p className="font-montserrat text-gray-500 font-normal">
                    {trend.title}
                  </p>
                  <p className="text-lg font-montserrat font-medium">
                    $ {trend.price}
                  </p>
                  <div className="text-orange-400 text-xl group">
                    <button className="mr-4 text-gray-800 hover:text-orange-400  bg-white rounded-full duration-[400ms] hover:rotate-[360deg]">
                      {" "}
                      <MdOutlineFavoriteBorder className=" text-[20px] rotate-0 " />
                    </button>
                    <button className="text-gray-800 hover:text-orange-400 bg-white  rounded-full duration-[400ms] hover:rotate-[360deg]">
                      {" "}
                      <MdOutlineShoppingCart className=" text-[20px] rotate-0 " />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="mb-10 group ">
            <h1 className="text-2xl mb-[1px] font-poppins font-semibold ">
              Top Feature Food
            </h1>
            <div className="flex justify-start items-center ">
              <span className="border-b-2 border-orange-500 w-14 group-hover:w-[209px] ease-out duration-300  text-center mt-1"></span>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8">
            {topFeature.map((trend) => (
              <div className="flex">
                <PhotoProvider>
                  <PhotoView src={trend.image}>
                    <img
                      src={trend.image}
                      alt=""
                      className="mr-5 w-[120px] h-[120px] object-cover hover:scale-125 duration-500 cursor-zoom-in"
                    />
                  </PhotoView>
                </PhotoProvider>

                <div className="grid  gap-1 justify-start">
                  <p className="font-montserrat text-gray-500 font-normal">
                    {trend.title}
                  </p>
                  <p className="text-lg font-montserrat font-medium">
                    $ {trend.price}
                  </p>
                  <div className="text-orange-400 text-xl group">
                    <button className="mr-4 text-gray-800 hover:text-orange-400  bg-white rounded-full duration-[400ms] hover:rotate-[360deg]">
                      {" "}
                      <MdOutlineFavoriteBorder className=" text-[20px] rotate-0 " />
                    </button>
                    <button className="text-gray-800 hover:text-orange-400 bg-white  rounded-full duration-[400ms] hover:rotate-[360deg]">
                      {" "}
                      <MdOutlineShoppingCart className=" text-[20px] rotate-0 " />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodTop;
