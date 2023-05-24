import React from "react";

const SpecialMenu = () => {
  const menuItems = [
    {
      image:
        "http://themes.potenzaglobalsolutions.com/html/the-zayka/images/dish/05.png",
      name: "Brackfast snack",
      price: "$ 5",
    },
    {
      image:
        "http://themes.potenzaglobalsolutions.com/html/the-zayka/images/dish/08.png",
      name: "Vigeterian breakfast",
      price: "$ 8.5",
    },
    {
      image:
        "http://themes.potenzaglobalsolutions.com/html/the-zayka/images/dish/09.png",
      name: "Braided cheese",
      price: "$ 11",
    },
    {
      image:
        "http://themes.potenzaglobalsolutions.com/html/the-zayka/images/dish/07.png",
      name: "Suchi Fish",
      price: "$ 20",
    },
  ];
  return (
    <div className="py-10">
      <div className="text-center">
        <div className="flex justify-center items-center">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/004/791/679/small/plate-fork-and-knife-icon-free-vector.jpg"
            className="h-20 w-20"
            alt=""
          />
        </div>
        <div className="">
          <div className="group">
            <h1 className="text-2xl ">
              <span className="text-red-600">Our Today’s</span>{" "}
              <span className="text-stone-500">Special Menu</span>
            </h1>
            <div className="flex justify-center items-center ">
              <p className="border-b-2 border-red-600 w-16 group-hover:w-24 ease-out duration-300  text-center mt-3"></p>
            </div>
          </div>

          <div>
            <p className="mt-3 text-stone-500">
              We serve a daily changing menu
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 px-5 lg:px-0 py-10 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {menuItems.map((item) => (
          <div className="m-w-80  text-center  border-2 border-gray-200 hover:border-red-300 ease-out duration-200 ">
            <div className="flex justify-center items-center p-4 hover:scale-105 duration-200">
              <img src={item.image} alt="" />
            </div>
            <div className="p-4 text-lg text-gray-400 hover:text-rose-500  ease-in duration-150 font-semibold">
              <h3 className="">{item.name}</h3>
              <h3>{item.price}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialMenu;
