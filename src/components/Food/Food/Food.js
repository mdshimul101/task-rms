import React from "react";
import useTitle from "../../../hooks/useTitle";

const Food = () => {
  useTitle("Food");
  const leftBgImg =
    "https://giardino.axiomthemes.com/wp-content/uploads/2017/12/bg-16-copyright-1520x834.jpg";
  return (
    <div className="">
      <div className="lg:flex ">
        {/* <div className="w-1/2">
          <div className="rounded-xl relative ">
            
            <div className="absolute w-full h-full bg-black/50 rounded-xl text-white   ">
              <p className="font-bold text-2xl px-2 pt-4">image food</p>
              <p className="px-2">hello</p>
              <button className="border-white bg-orange-400 text-white ml-3 px-2 py-1 rounded-2xl absolute bottom-4">
                Order Now
              </button>
            </div>
            <img
              className="max-h-[160px] md:max-h-[200px] w-full  rounded-xl object-cover"
              src={leftBgImg}
              alt="/"
            />
          </div>
        </div> */}
        <div className="w-full lg:w-1/2 p-2 ">
          <div className=" relative ">
            <div className="absolute w-full h-full bg-black/50">
              <div className="text-white  absolute mx-10 bg-red-300 top-1/2 left-[5%]  translate-y-[-50%] text-left">
                <h2 className="text-2xl mb-3 font-montserrat font-semibold">
                  Vegetable pasta
                </h2>

                <p className="font-montserrat text-justify">
                  It’s a vegetarian pasta loaded with a whole head of broccoli,
                  corn, zucchinis, capsicum/peppers and onion, and smothered in
                  a garlic herb tomato sauce.
                </p>

                <button className="text-orange-400 mt-5 font-montserrat font-semibold  border-b-2 border-red-400">
                  Order Now
                </button>
              </div>
            </div>
            <img className="w-full h-full" src={leftBgImg} alt="" />
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <h1>right</h1>
        </div>
      </div>
    </div>
  );
};

export default Food;
