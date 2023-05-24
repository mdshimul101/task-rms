import React from "react";

const FeatureProducts = () => {
  const featureItems = [
    {
      image:
        "https://images.pexels.com/photos/1552641/pexels-photo-1552641.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Beef Burger",
      element: "Beef, cheese, potato, onion, fries",
      price: "$ 12",
    },
    {
      image:
        "https://images.pexels.com/photos/842519/pexels-photo-842519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Chicken Pizza",
      element: "Chicken, cheese, Tomato, onion, Sos",
      price: "$ 15",
    },
    {
      image:
        "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Italian Pasta",
      element: "Chili, cheese, onion, Vegetable",
      price: "$ 6",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto py-10 px-5 lg:px-0">
      <div className="group inline-block">
        <h1 className="font-raleWay text-4xl font-thin text-orange-400 ">
          Featured Products
        </h1>
        <div className="flex justify-center items-center">
          <div className=" mt-4 w-0 h-[2px] bg-orange-400  group-hover:w-[275px] ease-out duration-300"></div>
        </div>
      </div>

      <div className="mt-4">
        <div className="grid grid-cols-1  py-10  md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featureItems.map((item) => (
            <div className="m-w-80">
              <div className="overflow-hidden">
                <div className="hover:scale-125 duration-500">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full object-cover  "
                  />
                </div>
              </div>

              <div className="p-4 bg-orange-50">
                <h2 className="text-2xl font-raleWay font-thin">{item.name}</h2>
                <p className=" font-raleWay font-thin text-gray-500">
                  {item.element}
                </p>
                <div className="flex justify-between items-center mt-5 ">
                  <p className="text-gray-500">Price:{item.price}</p>

                  <div className="text-orange-400 px-4 py-2 border-[1px] border-orange-400  hover:bg-orange-500  hover:text-white ease-linear duration-300">
                    ADD TO CART
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureProducts;
