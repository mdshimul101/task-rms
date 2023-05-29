import React from "react";
import { MdOutlineFavoriteBorder, MdOutlineShoppingCart } from "react-icons/md";

const NewFoodCard = ({ foodData }) => {
  const { name, image, price } = foodData;
  const foodImg =
    "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const foodImg2 =
    "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=600";
  const foodImg3 =
    "https://images.pexels.com/photos/2689419/pexels-photo-2689419.jpeg?auto=compress&cs=tinysrgb&w=600";
  const foodImg4 =
    "https://images.pexels.com/photos/1055270/pexels-photo-1055270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  return (
    <div className="">
      <div className="relative overflow-hidden h-[450px] lg:h-96 group bg-orange-300">
        <div className="w-full h-full absolute group-hover:bg-black/30 duration-300 ease-linear">
          <div className="flex justify-start items-center top-[110%] group-hover:top-[87%] duration-300 p-3 absolute bottom-[-4%] left-[40%]  translate-x-[-50%] translate-y-[-50%]">
            <button className=" mr-4 text-gray-800 hover:text-white bg-white hover:bg-orange-400 p-3 rounded-full duration-[400ms] hover:rotate-[360deg]">
              {" "}
              <MdOutlineFavoriteBorder className=" text-[24px] rotate-0 " />
            </button>
          </div>
          <div className="flex justify-start items-center top-[120%] group-hover:top-[87%] duration-500 p-3 absolute bottom-[-4%] left-[60%]  translate-x-[-50%] translate-y-[-50%]">
            <button className="text-gray-800 hover:text-white bg-white hover:bg-orange-400 p-3 rounded-full duration-[400ms] hover:rotate-[360deg]">
              {" "}
              <MdOutlineShoppingCart className=" text-[24px] rotate-0 " />
            </button>
          </div>
        </div>
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="text-center border-x-[1px] border-b-[1px] py-3">
        <h1 className="text-gray-600 font-montserrat">{name}</h1>
        <p className="text-lg text-orange-500 font-poppins">
          Price : <span className="ml-1"></span> $ {price}
        </p>
      </div>
    </div>
  );
};

export default NewFoodCard;
