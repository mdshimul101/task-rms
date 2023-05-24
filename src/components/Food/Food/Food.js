import React from "react";
import useTitle from "../../../hooks/useTitle";
import FoodBanner from "../FoodBanner/FoodBanner";
import NewFood from "../NewFood/NewFood/NewFood";

const Food = () => {
  useTitle("Food");

  return (
    <div className="">
      <FoodBanner></FoodBanner>
      <NewFood></NewFood>
    </div>
  );
};

export default Food;
