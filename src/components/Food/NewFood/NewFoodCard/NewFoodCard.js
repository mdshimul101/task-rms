import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";

const NewFoodCard = () => {
  const foodImg =
    "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const foodImg2 =
    "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=600";
  const foodImg3 =
    "https://images.pexels.com/photos/2689419/pexels-photo-2689419.jpeg?auto=compress&cs=tinysrgb&w=600";
  return (
    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <div className="bg-red-300">
        <h1>Food Card</h1>
        <div className="h-[450px] lg:h-96">
          <img className="object-cover w-full h-full" src={foodImg} alt="" />
        </div>
      </div>
      <div className="bg-red-300">
        <h1>Food Card</h1>
        <div className="h-[450px] lg:h-96">
          <img className="object-cover w-full h-full" src={foodImg2} alt="" />
        </div>
      </div>
      <div className="bg-red-300">
        <h1>Food Card</h1>
        <div className="h-[450px]  lg:h-96  group">
          <img className="object-cover w-full h-full" src={foodImg3} alt="" />
        </div>
      </div>
      <div className="bg-red-300">
        <div className="relative overflow-hidden h-[450px] lg:h-96 group bg-orange-300">
          <div className="w-full h-full absolute group-hover:bg-black/30 duration-300 ease-linear">
            <div className="duration-300 ease-linear  ">
              <div className="flex justify-start items-center top-[120%] group-hover:top-[90%] duration-300 p-3 absolute bottom-[-4%] left-[40%]  translate-x-[-50%] translate-y-[-50%]">
                <button className=" mr-4 text-gray-800 hover:text-white bg-white hover:bg-orange-400 p-3 rounded-full  duration-500 hover:rotate-[360deg]">
                  {" "}
                  <MdOutlineShoppingCart className=" text-[24px] rotate-0 " />
                </button>

                {/* <button className="absolute hover:left-10 bottom-0  hover:bottom-8  text-gray-800 hover:text-white bg-white hover:bg-orange-400 p-3 rounded-full  duration-500 hover:rotate-[360deg]">
                  {" "}
                  <MdOutlineShoppingCart className=" text-[24px] rotate-0 " />
                </button> */}
              </div>
              <div className="flex justify-start items-center top-[140%] group-hover:top-[90%] duration-500 p-3 absolute bottom-[-4%] left-[60%]  translate-x-[-50%] translate-y-[-50%]">
                <button className="text-gray-800 hover:text-white bg-white hover:bg-orange-400 p-3 rounded-full  duration-500 hover:rotate-[360deg]">
                  {" "}
                  <MdOutlineShoppingCart className=" text-[24px] rotate-0 " />
                </button>

                {/* <button className="absolute hover:left-10 bottom-0  hover:bottom-8  text-gray-800 hover:text-white bg-white hover:bg-orange-400 p-3 rounded-full  duration-500 hover:rotate-[360deg]">
                  {" "}
                  <MdOutlineShoppingCart className=" text-[24px] rotate-0 " />
                </button> */}
              </div>
            </div>
          </div>
          <img src={foodImg3} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default NewFoodCard;
