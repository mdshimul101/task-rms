import React, { useState } from "react";
import { TfiLayoutGrid3, TfiLayoutGrid4, TfiViewGrid } from "react-icons/tfi";
import FeatureProduct from "./FeatureProduct";
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
            <FeatureProduct item={item}></FeatureProduct>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureProducts;
