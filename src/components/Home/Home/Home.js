import React from "react";
import Contact from "../Contact/Contact";
import FeatureProducts from "../FeatureProducts/FeatureProducts";
import Slider from "../Slider/Slider";
import SpecialMenu from "../SpecialMenu/SpecialMenu";
import SpecialService from "../SpecialService/SpecialService";
import TopCards from "../TopCardFood/TopCards";
import TopFoods from "../TopFood/TopFoods";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <TopCards></TopCards>
      <TopFoods></TopFoods>
      <SpecialMenu></SpecialMenu>
      <FeatureProducts></FeatureProducts>
      <SpecialService></SpecialService>
      <Contact></Contact>
    </div>
  );
};

export default Home;
