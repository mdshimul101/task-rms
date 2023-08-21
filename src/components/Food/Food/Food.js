import React from "react";
import useTitle from "../../../hooks/useTitle";
import ChooseFood from "../ChooseFood/ChooseFood/ChooseFood";
import DiscountBanner from "../DiscountBanner/DiscountBanner";
import FoodBanner from "../FoodBanner/FoodBanner";
import FoodTop from "../FoodTop/FoodTop";
import Gallery from "../Gallery/Gallery";
import NewFood from "../NewFood/NewFood/NewFood";

const Food = () => {
  useTitle("Food");

  return (
    <div className="pt-24">
      <FoodBanner />
      <NewFood />
      <ChooseFood />
      <DiscountBanner />
      <FoodTop />
      <Gallery />
    </div>
  );
};

export default Food;
