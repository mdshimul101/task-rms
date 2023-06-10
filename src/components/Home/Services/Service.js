import React from "react";

const Service = ({ singleService }) => {
  const { title, text, icon } = singleService;
  return (
    <div className="bg-red-50 m-5 py-5 min-w-[100px] md:min-w-[150px]">
      <div className="flex justify-center items-center">
        <div className="px-5">
          <span className="text-3xl md:text-5xl text-orange-500">{icon}</span>
        </div>
        <div className="font-poppins ">
          <h1 className="text-lg md:text-xl mb-2 font-medium">{title}</h1>
          <p className="text-sm">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
