import React from "react";
import icon from "../../../../src/assets/Images/food_gallery.png";
const DiscountBanner = () => {
  return (
    <div className="mb-10 md:bg-discountBanner lg:bg-discountBanner w-full h-[300px] md:h-[400px] lg:h-[500px] bg-cover bg-no-repeat ">
      <div className="flex pt-9  ml-8 lg:ml-20 md:ml-14">
        <img className="w-12 h-12 mr-4" src={icon} alt="" />
        <div className="flex justify-center items-center ">
          <h3 className="text-2xl font-semibold text-orange-400">
            Food Gallery
          </h3>
        </div>
      </div>

      <div className="mt-8 lg:mt-16 md:mt-12 ml-8 lg:ml-20 md:ml-14">
        <p className="text-orange-500 hover:text-white hover:bg-yellow-400 ease-linear duration-100 border border-yellow-400 px-4 py-1 inline font-semibold font-poppins">
          Sale
        </p>
        <p className="mt-5 text-xl md:text-2xl lg:text-3xl font-bold font-poppins">
          30 % Discount
        </p>
        <p className="mt-5 font-poppins w-10/12 md:w-1/2 text-justify ">
          Upto 30% discount on all fast food, this offer is limited time so...
          <br />
          <button className="mt-10 px-4 py-1 bg-orange-500 font-poppins text-white rounded-3xl">
            order now
          </button>
        </p>
      </div>
    </div>
  );
};

export default DiscountBanner;
