import React, { useState } from "react";
import { MdOutlineFavoriteBorder, MdOutlineShoppingCart } from "react-icons/md";
import { TfiLayoutGrid3, TfiLayoutGrid4, TfiViewGrid } from "react-icons/tfi";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { featureItems } from "./FeatureProductsData";

const FeatureProducts = () => {
  const [gridCol, setGridCol] = useState("grid-cols-4");

  return (
    <div className="max-w-7xl mx-auto py-10 px-5 lg:px-0">
      <div className="group inline-block">
        <h1 className="font-raleWay text-4xl font-thin text-orange-400 ">
          Featured Product
        </h1>
        <div className="flex  items-center">
          <div className=" mt-4 w-20 h-[2px] bg-orange-400  group-hover:w-[275px] ease-out duration-300"></div>
        </div>
      </div>

      <div className="my-3 lg:flex r items-center hidden ">
        <button
          onClick={() => setGridCol("grid-cols-4")}
          className={`mr-5 text-2xl text-gray-900 border ${
            gridCol === "grid-cols-4" && "border-orange-400"
          } p-2`}
        >
          <TfiLayoutGrid4 />
        </button>
        <button
          onClick={() => setGridCol("grid-cols-3")}
          className={`mr-5 text-2xl text-gray-900 border ${
            gridCol === "grid-cols-3" && "border-orange-400"
          } p-2`}
        >
          <TfiLayoutGrid3 />
        </button>
        <button
          onClick={() => setGridCol("grid-cols-2")}
          className={`mr-5 text-2xl text-gray-900 border ${
            gridCol === "grid-cols-2" && "border-orange-400"
          } p-2`}
        >
          <TfiViewGrid />
        </button>
      </div>

      <div className="">
        <div
          className={`grid grid-cols-1  py-7  md:grid-cols-2  gap-7 lg:${gridCol}`}
        >
          {featureItems.map((item) => (
            <div className="m-w-80">
              <div className="overflow-hidden">
                <div className="hover:scale-110 duration-500">
                  <PhotoProvider>
                    <PhotoView src={item.image}>
                      <img
                        src={item.image}
                        alt=""
                        className="w-full h-full object-cover cursor-zoom-in"
                      />
                    </PhotoView>
                  </PhotoProvider>
                </div>
              </div>

              <div className="p-4 bg-orange-50">
                <h2 className="text-2xl font-raleWay text-gray-700">
                  {item.name}
                </h2>
                <p className=" font-raleWay font-thin text-gray-500">
                  {item.element}
                </p>
                <div className="flex justify-between items-center mt-5 ">
                  <p className="text-gray-500 font-poppins">{item.price}</p>

                  <div>
                    <button className="mr-5 text-gray-800 hover:text-white bg-white hover:bg-orange-400 p-3 rounded-full duration-[400ms] hover:rotate-[360deg]">
                      {" "}
                      <MdOutlineFavoriteBorder className=" text-[24px] rotate-0 " />
                    </button>

                    <button className="text-gray-800 hover:text-white bg-white hover:bg-orange-400 p-3 rounded-full duration-[400ms] hover:rotate-[360deg]">
                      {" "}
                      <MdOutlineShoppingCart className=" text-[24px] rotate-0 " />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureProducts;
