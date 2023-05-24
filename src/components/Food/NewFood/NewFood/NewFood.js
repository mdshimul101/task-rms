import React from "react";

const NewFood = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-5 lg:px-0">
      <div className="flex w-full justify-between ">
        <div className="w-1/2">
          <div>
            <h1 className="text-2xl font-montserrat font-semibold text-gray-900">
              New Food
            </h1>
          </div>
        </div>
        <div className="w-1/2 bg-orange-300 p-2 flex justify-end">
          <div>
            <h1 className="bg-green-200 text-left">right1</h1>
          </div>
          <div>
            <h1 className="bg-green-200 text-left">right2</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewFood;
