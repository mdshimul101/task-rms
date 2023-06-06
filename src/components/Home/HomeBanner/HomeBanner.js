import React from "react";

const HomeBanner = () => {
  return (
    <div className="my-10">
      <h1>Home Banner</h1>
      <div className=" lg:flex">
        <div className=" w-full lg:w-1/2 bg-red-300">
          <img
            src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="w-full lg:w-1/2 bg-red-100">
          <div className="flex justify-center items-center">
            <h3>25% Discount</h3>
            <h1>Summer Offer</h1>
          </div>
          <button>Order now</button>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
