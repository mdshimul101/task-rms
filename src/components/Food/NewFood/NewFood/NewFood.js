import React, { useState } from "react";
import { TfiLayoutGrid3, TfiLayoutGrid4, TfiViewGrid } from "react-icons/tfi";
import NewFoodCard from "../NewFoodCard/NewFoodCard";
import { newFoodData } from "../NewFoodData";
const NewFood = () => {
  const [foodType, setFoodType] = useState("FastFood");
  const [gridCol, setGridCol] = useState("grid-cols-4");
  return (
    <div className="max-w-7xl mx-auto py-6 px-10 ">
      <div className="flex-none lg:flex w-full justify-between ">
        <div className="w-full lg:w-1/2">
          <div className="group">
            <h1 className="text-2xl font-montserrat font-semibold text-gray-900">
              New Food
              <div className="flex justify-start items-center ">
                <span className="border-b-2 border-orange-500 w-14 group-hover:w-[122px] ease-out duration-300  text-center mt-1"></span>
              </div>
            </h1>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mt-4 lg:mt-0 text-gray-400 font-raleWay py-2 flex justify-start lg:justify-end">
          <div className="group mr-8">
            <button
              onClick={() => {
                setFoodType("All");
              }}
              className=""
            >
              All
            </button>
            <div className="flex justify-center items-center ">
              <span
                className={`border-b-2 border-orange-400 ${
                  foodType === "All" && "w-full"
                } w-0 group-hover:w-full ease-out duration-300  text-center mt-1`}
              ></span>
            </div>
          </div>
          <div className="group mr-8">
            <button
              onClick={() => {
                setFoodType("FastFood");
              }}
              className=""
            >
              Fast Food
            </button>
            <div className="flex justify-center items-center ">
              <span
                className={`border-b-2 border-orange-400 ${
                  foodType === "FastFood" && "w-full"
                } w-0 group-hover:w-full ease-out duration-300  text-center mt-1`}
              ></span>
            </div>
          </div>
          <div className="group mr-8">
            <button
              onClick={() => {
                setFoodType("Dessert");
              }}
              className=""
            >
              Dessert
            </button>
            <div className="flex justify-center items-center ">
              <span
                className={`border-b-2 border-orange-400 ${
                  foodType === "Dessert" && "w-full"
                } w-0 group-hover:w-full ease-out duration-300  text-center mt-1`}
              ></span>
            </div>
          </div>
          <div className="group mr-8">
            <button
              onClick={() => {
                setFoodType("Drink");
              }}
              className=""
            >
              Drink
            </button>
            <div className="flex justify-center items-center ">
              <span
                className={`border-b-2 border-orange-400 ${
                  foodType === "Drink" && "w-full"
                } w-0 group-hover:w-full ease-out duration-300  text-center mt-1`}
              ></span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 hidden lg:flex items-center">
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

      <div className="py-10">
        <p className="text-orange-400 my-5 text-lg font-montserrat">
          {foodType}
        </p>
        <div className={` grid gap-8 grid-cols-1 md:grid-cols-2 lg:${gridCol}`}>
          {newFoodData
            .filter(
              (foodData) => foodData.category === foodType || foodType === "All"
            )
            .map((foodData) => (
              <>
                <NewFoodCard
                  key={foodData.id}
                  foodData={foodData}
                ></NewFoodCard>
              </>
            ))}
        </div>
      </div>
    </div>
  );
};

export default NewFood;
