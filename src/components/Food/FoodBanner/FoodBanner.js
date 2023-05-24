import React from "react";
import useTitle from "../../../hooks/useTitle";

const FoodBanner = () => {
  useTitle("Food");
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
  return (
    <div className="">
      <div className="lg:flex ">
        <div className="w-full  lg:w-1/2 p-2 ">
          <div className=" relative ">
            <div className="absolute w-full h-full bg-black/40">
              <div className="text-white  absolute mx-10  top-1/2 left-[5%]  translate-y-[-50%] text-left">
                <h2 className="text-xl lg:text-2xl mb-3 font-montserrat font-semibold">
                  Vegetable pasta
                </h2>

                <p className="font-montserrat text-justify">
                  It’s a vegetarian pasta loaded with a whole head of broccoli,
                  corn, zucchinis, capsicum/peppers and onion, and smothered in
                  a garlic herb tomato sauce.
                </p>

                <button className="text-orange-400 mt-5 lg:text-xl font-montserrat font-semibold  border-b-2 border-red-500">
                  Order Now
                </button>
              </div>
            </div>
            <img className="w-full " src={leftBgImg} alt="" />
          </div>
        </div>

        <div className="w-full lg:w-1/2 px-2 lg:px-0 py-0 lg:py-2 grid grid-cols-1 content-between">
          <div className=" md:flex lg:flex mb-2 ">
            <div className=" relative mr-0 lg:mr-1 grow">
              <div className="absolute w-full h-[310px]  md:w-full md:h-full lg:min-w-[350px] lg:h-[228px] bg-black/40">
                <div className="text-white  absolute mx-10  top-1/2 left-[5%]  translate-y-[-50%] text-left">
                  <h2 className="text-xl lg:text-2xl mb-3 font-montserrat font-semibold">
                    Chocolate Coffee
                  </h2>

                  <p className="font-montserrat font-medium text-justify">
                    35 items
                  </p>

                  <button className="text-orange-400 bg-gray-500/40 mt-5 px-2 py-1  font-montserrat font-semibold group ">
                    See More
                    <div className="flex justify-center items-center ">
                      <span className="border-b-2 border-gray-300 w-14 group-hover:w-[75px] ease-out duration-300  text-center mt-1"></span>
                    </div>
                  </button>
                </div>
              </div>
              <img
                className="w-full h-[310px] md:w-full md:h-full lg:min-w-[350px] lg:h-[228px] object-cover"
                src={topLeftImg}
                alt=""
              />
            </div>
            <div className=" relative mt-2 lg:ml-1 lg:mt-0 grow">
              <div className="absolute w-full h-[300px]  md:w-full md:h-full lg:min-w-[350px] lg:h-[228px] bg-black/40">
                <div className="text-white  absolute mx-10  top-1/2 left-[5%]  translate-y-[-50%] text-left">
                  <h2 className="text-xl lg:text-2xl mb-3 font-montserrat font-semibold">
                    Dessert
                  </h2>

                  <p className="font-montserrat font-medium text-justify">
                    25 Dessert's items
                  </p>

                  <button className="text-orange-400 bg-gray-500/40 mt-5 px-2 py-1  font-montserrat font-semibold group ">
                    See More
                    <div className="flex justify-center items-center ">
                      <span className="border-b-2 border-gray-300 w-14 group-hover:w-[75px] ease-out duration-300  text-center mt-1"></span>
                    </div>
                  </button>
                </div>
              </div>
              <img
                className="w-full h-[300px] md:w-full md:h-full lg:min-w-[350px] lg:h-[228px] object-cover"
                src={topRightImg}
                alt=""
              />
            </div>
          </div>
          <div className=" md:flex lg:flex">
            <div className=" relative mr-0 lg:mr-1 grow">
              <div className="absolute w-full h-[300px]  md:w-full md:h-full lg:min-w-[350px] lg:h-[228px] bg-black/40">
                <div className="text-white  absolute mx-10  top-1/2 left-[5%]  translate-y-[-50%] text-left">
                  <h2 className="text-xl lg:text-2xl mb-3 font-montserrat font-semibold">
                    Fast Food
                  </h2>

                  <p className="font-montserrat font-medium text-justify">
                    65 Fast Food items
                  </p>

                  <button className="text-orange-400 bg-gray-500/40 mt-5 px-2 py-1  font-montserrat font-semibold group ">
                    See More
                    <div className="flex justify-center items-center ">
                      <span className="border-b-2 border-gray-300 w-14 group-hover:w-[75px] ease-out duration-300  text-center mt-1"></span>
                    </div>
                  </button>
                </div>
              </div>
              <img
                className="w-full h-[300px] md:w-full md:h-full lg:min-w-[350px] lg:h-[228px] object-cover"
                src={bottomLeftImg}
                alt=""
              />
            </div>
            <div className=" relative my-2 lg:ml-1 lg:my-0 grow">
              <div className="absolute w-full h-[300px]  md:w-full md:h-full lg:min-w-[350px] lg:h-[228px] bg-black/40">
                <div className="text-white  absolute mx-10  top-1/2 left-[5%]  translate-y-[-50%] text-left">
                  <h2 className="text-xl lg:text-2xl mb-3 font-montserrat font-semibold">
                    Drink
                  </h2>

                  <p className="font-montserrat font-medium text-justify">
                    12 items of Drink
                  </p>

                  <button className="text-orange-400 bg-gray-500/40 mt-5 px-2 py-1  font-montserrat font-semibold group ">
                    See More
                    <div className="flex justify-center items-center ">
                      <span className="border-b-2 border-gray-300 w-14 group-hover:w-[75px] ease-out duration-300  text-center mt-1"></span>
                    </div>
                  </button>
                </div>
              </div>
              <img
                className="w-full h-[300px] md:w-full md:h-full lg:min-w-[350px] lg:h-[228px] object-cover"
                src={bottomRightImg}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodBanner;
