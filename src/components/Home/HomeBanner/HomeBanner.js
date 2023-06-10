import React from "react";

const HomeBanner = () => {
  return (
    <div className="my-10">
      <div className=" lg:flex">
        <div className=" w-full lg:w-1/2 bg-red-300">
          <img
            className="h-[300px] md:h-[400px] w-full object-cover"
            src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="w-full lg:w-1/2 bg-red-50 lg:pt-20 flex flex-col justify-center items-center">
          <div className="text-center relative z-10">
            <div>
              <h3 className="text-gray-500 font-poppins text-xl leading-10">
                Discount
              </h3>

              <h1 className="text-5xl lg:text-6xl font-cookie font-medium text-orange-400 ">
                Summer Offer 2023
              </h1>
              <h3 className="leading-10">
                SALE{" "}
                <span className="text-orange-400 font-semibold font-poppins">
                  50%
                </span>
              </h3>
            </div>
            <div className="absolute bg-white p-28 rounded-full top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] -z-10"></div>
          </div>

          <button className="text-orange-500 hover:bg-orange-400 mt-20 mb-10 bg-white hover:text-white ease-linear duration-200 px-3 py-1 font-poppins font-medium">
            order Now{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
