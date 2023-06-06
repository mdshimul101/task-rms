import React from "react";
import TopFood from "./TopFood";

const TopFoods = () => {
  const allTopFoods = [
    {
      id: 1,
      image:
        "https://max-themes.net/demos/capella/upload/Pasta-Ebi-Tempura-To-Gomatare-490x314.jpg",
      title: "Spicy Crab Ramen",
      element: " Crab / Veggie / Soup",
      price: "$ 20",
      review: "4.8/5",
    },
    {
      id: 2,
      image:
        "https://max-themes.net/demos/capella/upload/9636932271_f178f5bc2e_o-490x314.jpg",
      title: "Fresh Crab With Lemon",
      element: "Crab / Lemon / Garlic",
      price: "$ 24.5",
      review: "4.6/5",
    },
    {
      id: 3,
      image:
        "https://max-themes.net/demos/capella/upload/3723771474_b2e8636d45_o-490x314.jpg",
      title: "Spicy Crab Ramen",
      element: " Crab / Veggie / Soup",
      price: "$ 15",
      review: "4.7/5",
    },
    {
      id: 4,
      image:
        "https://max-themes.net/demos/capella/upload/7623705344_3567630aa8_o-490x314.jpg",
      title: "Fried Chicken Salad",
      element: "Chicken / Butter / Veggie",
      price: "$ 12",
      review: "4.4/5",
    },
    {
      id: 5,
      image:
        "https://max-themes.net/demos/capella/upload/4435938839_0e86fdba04_o1-490x314.jpg",
      title: "Italian Source Mushroom",
      element: "Mushroom / Garlic / Veggies",
      price: "$ 30",
      review: "4.3/5",
    },
    {
      id: 6,
      image:
        "https://max-themes.net/demos/capella/upload/6235831243_ba46458d17_o-490x314.jpg",
      title: "Fried Potatoes With Garlic",
      element: "Potatoes / Olive Oil / Garlic",
      price: "$ 10",
      review: "4.5/5",
    },
  ];
  return (
    <div className="">
      <div className="lg:bg-red-50 py-10 lg:h-[1050px] px-10">
        <div className="">
          <h1 className="text-4xl text-orange-400 text-center font-poppins font-semibold ">
            Top Food
          </h1>
          <p className="text-center font-poppins text-xl mt-5 leading-7 text-gray-500">
            The following dishes are among the best selling dishes in our
            restaurant . <br /> The taste of these dishes is very unique.These
            dishes are the most requested by customer from us.
          </p>
        </div>

        <div className="mx-auto max-w-7xl mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {allTopFoods.map((topFood) => (
            <TopFood key={topFood.id} topFood={topFood}></TopFood>
          ))}
        </div>
        <h3 className="text-center text-2xl font-medium font-serif text-gray-500 mt-10">
          We are waiting for you
        </h3>
      </div>
    </div>
  );
};

export default TopFoods;
