import React from "react";
import FoodLeft from "./FoodLeft";
import FoodRight from "./FoodRight";

const FoodBanner = () => {
  const leftBgImg =
    "https://giardino.axiomthemes.com/wp-content/uploads/2017/12/blog-4-copyright-1520x1013.jpg";
  const topLeftImg =
    "https://giardino.axiomthemes.com/wp-content/uploads/2020/09/image-copyright-10-scaled-370x370.jpg";
  const topRightImg =
    "https://images.pexels.com/photos/2928377/pexels-photo-2928377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const bottomLeftImg =
    " https://images.pexels.com/photos/2122280/pexels-photo-2122280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const bottomRightImg =
    "https://starbelly.bslthemes.com/wp-content/uploads/2022/05/menu-6-600x600.jpg";

  const commonFoodData = {
    title: "Vegetable pasta",
    text: "It’s a vegetarian pasta loaded with a whole head of broccoli, corn, zucchinis, capsicum/peppers and onion, and smothered in a garlic herb tomato sauce.",
    image: leftBgImg,
  };

  const rightData = [
    {
      id: 1,
      title: "Chocolate Coffee",
      numberOfItem: "35 Item",
      image: topLeftImg,
    },
    {
      id: 2,
      title: "Dessert",
      numberOfItem: "25 items",
      image: topRightImg,
    },
    {
      id: 3,
      title: "Fast Food",
      numberOfItem: "65 Fast Food items",
      image: bottomLeftImg,
    },
    {
      id: 4,
      title: "Drink",
      numberOfItem: "12 items of Drink",
      image: bottomRightImg,
    },
  ];
  return (
    <div className="">
      <div className="lg:flex ">
        <div className="w-full  lg:w-1/2 p-2 ">
          <FoodLeft commonData={commonFoodData} />
        </div>

        <div className="w-full lg:w-1/2 px-2 lg:px-0 py-0 lg:py-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {rightData.map((item) => (
              <FoodRight key={item.id} foodRight={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodBanner;
