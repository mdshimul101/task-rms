import React from "react";
import { useSelector } from "react-redux";
import useTitle from "../../../hooks/useTitle";
import FavoriteItemSingle from "./FavoriteItemSingle";

const Favorite = () => {
  useTitle("Favorite");
  const favoriteProducts = useSelector((state) => state.addToFavorite);
  return (
    <div className="mx-5 md:mx-[90px] py-10 pt-32">
      <div className="group inline-block ">
        <h1 className="text-2xl font-raleWay font-semibold text-orange-400">
          Favorite Item
          <div className="flex justify-start items-center">
            <span className="border-b-2 border-sky-400 w-14 group-hover:w-full ease-out duration-300  text-center mt-1"></span>
          </div>
        </h1>
      </div>
      {favoriteProducts.length ? (
        <div className="mt-10">
          <div className="hidden md:flex text-xl border-b-[2px] border-gray-600 pb-4 ">
            <h3 className="basis-1/2">Product</h3>
            {/* <h3 className="basis-1/6">Name</h3> */}
            <h3 className="basis-1/6">Price</h3>
            <h3 className="basis-1/6">Purchase</h3>
            <h3 className="basis-1/6">Delete</h3>
          </div>
        </div>
      ) : (
        <div className="mt-10 ">
          <p className="font-poppins text-xl text-red-400">
            You don't add any product to your favorite list
          </p>
        </div>
      )}

      {favoriteProducts.map((singleFavorite) => (
        <FavoriteItemSingle
          key={singleFavorite.id}
          singleFavorite={singleFavorite}
        ></FavoriteItemSingle>
      ))}
    </div>
  );
};

export default Favorite;
