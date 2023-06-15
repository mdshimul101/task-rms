import React from "react";

const Discount = () => {
  return (
    <div className="py-10 lg:px-[72px] px-5">
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
        <div className="h-[350px] md:h-[400px] bg-black/70 relative group overflow-hidden">
          <div className="absolute left-16 top-28 z-20">
            <h1 className="text-3xl md:text-5xl font-cookie font-semibold text-white ">
              Get Discount All Dessert Items <br />{" "}
              <span className="">25% off</span>
            </h1>
            <div className="absolute z-20">
              <button className=" hover:border-red-400 duration-150 ease-linear hover:bg-red-400  border text-white mt-7 font-poppins font-medium px-3 py-1">
                Order Now
              </button>
            </div>
          </div>
          <div className="absolute z-20">
            <button className="bg-yellow-400 text-white mt-5 font-poppins font-medium px-3 py-1 duration-300 ease-linear">
              New Offer
            </button>
          </div>

          <img
            className="w-full h-full object-cover group-hover:scale-110 duration-200 ease-linear opacity-50"
            src="https://images.pexels.com/photos/574112/pexels-photo-574112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="h-[350px] md:h-[400px] bg-black/70 relative group overflow-hidden">
          <div className="absolute left-16 top-28 z-20">
            <h1 className="text-3xl md:text-5xl font-cookie font-semibold text-white ">
              Get Discount All Drinks Items <br />{" "}
              <span className="">20% off</span>
            </h1>
            <div className="absolute z-20">
              <button className=" hover:border-red-400 duration-150 ease-linear hover:bg-red-400  border text-white mt-7 font-poppins font-medium px-3 py-1">
                Order Now
              </button>
            </div>
          </div>
          <div className="absolute z-20">
            <button className="bg-yellow-400 text-white mt-5 font-poppins font-medium px-3 py-1 duration-300 ease-linear">
              New Offer
            </button>
          </div>

          <img
            className="w-full h-full object-cover group-hover:scale-110 duration-200 ease-linear opacity-50"
            src="https://images.pexels.com/photos/4051402/pexels-photo-4051402.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Discount;
