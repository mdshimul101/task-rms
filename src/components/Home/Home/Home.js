import React from "react";
import useTitle from "../../../hooks/useTitle";
import Discount from "../Discount/Discount";
import FeatureProducts from "../FeatureProducts/FeatureProducts";
import FoodGalleryHome from "../FoodGalleryHome/FoodGalleryHome";
import HomeBanner from "../HomeBanner/HomeBanner";
import Services from "../Services/Services";
import Slider from "../Slider/Slider";
import SpecialMenu from "../SpecialMenu/SpecialMenu";
import SpecialService from "../SpecialService/SpecialService";
import TopCards from "../TopCardFood/TopCards";
import TopFoods from "../TopFood/TopFoods";

const Home = () => {
  useTitle("Home");
  return (
    <div className="pt-20">
      <Slider />
      <TopCards />
      <TopFoods />
      <Discount />
      <SpecialMenu />
      <FeatureProducts />
      <SpecialService />
      <HomeBanner />
      <Services />
      <FoodGalleryHome />
      {/* <Reviews /> */}
    </div>
  );
};

export default Home;
