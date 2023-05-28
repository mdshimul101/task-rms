import React from "react";

const NewFood = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-5 lg:px-0">
      <div className="flex-none lg:flex w-full justify-between ">
        <div className="w-1/2">
          <div className="group">
            <h1 className="text-2xl font-montserrat font-semibold text-gray-900">
              New Food
              <div className="flex justify-start items-center ">
                <span className="border-b-2 border-orange-500 w-14 group-hover:w-[122px] ease-out duration-300  text-center mt-1"></span>
              </div>
            </h1>
          </div>
        </div>
        <div className="w-1/2 mt-4 lg:mt-0  text-gray-400 font-raleWay py-2 flex justify-between">
          <div>
            <button className=" text-left ml-4">All</button>
          </div>
          <div>
            <button className=" text-left">Fast Food</button>
          </div>
          <div>
            <button className=" text-left">Dessert</button>
          </div>
          <div>
            <button className=" text-left">Drink</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewFood;
