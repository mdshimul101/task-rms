import React, { useState } from "react";
import NewFoodCard from "../NewFoodCard/NewFoodCard";
import { newFoodData } from "../NewFoodData";
const NewFood = () => {
  const [foodType, setFoodType] = useState("All");
  return (
    <div className="max-w-7xl mx-auto py-10 px-5 lg:px-0">
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
              <span className="border-b-2 border-orange-400 w-0 group-hover:w-full ease-out duration-300  text-center mt-1"></span>
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
              <span className="border-b-2 border-orange-400 w-0 group-hover:w-full ease-out duration-300  text-center mt-1"></span>
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
              <span className="border-b-2 border-orange-400 w-0 group-hover:w-full ease-out duration-300  text-center mt-1"></span>
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
              <span className="border-b-2 border-orange-400 w-0 group-hover:w-full ease-out duration-300  text-center mt-1"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10">
        <p>Product Type - {foodType}</p>
        <div>
          {newFoodData
            .filter(
              (foodData) => foodData.category === foodType || foodType === "All"
            )
            .map((foodData) => (
              <>
                <p>{foodData.name}</p>
                {/* <NewFoodCard></NewFoodCard> */}
              </>
            ))}
        </div>
      </div>

      <NewFoodCard></NewFoodCard>
    </div>
  );
};

export default NewFood;