import React from "react";
import useTitle from "../../../hooks/useTitle";
import FeatureProducts from "../FeatureProducts/FeatureProducts";
import HomeBanner from "../HomeBanner/HomeBanner";
import Slider from "../Slider/Slider";
import SpecialMenu from "../SpecialMenu/SpecialMenu";
import SpecialService from "../SpecialService/SpecialService";
import TopCards from "../TopCardFood/TopCards";
import TopFoods from "../TopFood/TopFoods";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Slider />
      <TopCards />
      <TopFoods />
      <SpecialMenu />
      <FeatureProducts />
      <SpecialService />
      <HomeBanner />
    </div>
  );
};

export default Home;
