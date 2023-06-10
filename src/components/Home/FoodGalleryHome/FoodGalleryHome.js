import React from "react";

const FoodGalleryHome = () => {
  const foodGalleryHomeData = [
    {
      id: 1,
      image: "https://velikorodnov.com/html/sushifushi/images/947x472_img1.jpg",
    },
    {
      id: 2,
      image: "https://velikorodnov.com/html/sushifushi/images/470x472_img1.jpg",
    },
    {
      id: 3,
      image: "https://velikorodnov.com/html/sushifushi/images/470x472_img2.jpg",
    },
    {
      id: 4,
      image: "https://velikorodnov.com/html/sushifushi/images/470x472_img3.jpg",
    },
    {
      id: 5,
      image: "https://velikorodnov.com/html/sushifushi/images/947x472_img2.jpg",
    },
    {
      id: 6,
      image: "https://velikorodnov.com/html/sushifushi/images/470x472_img4.jpg",
    },
  ];
  return (
    <div>
      <div className="">
        <div className="flex flex-wrap py-2  ">
          <div className="relative group/item basis-full lg:basis-1/2 px-2 py-2 lg:py-0 lg:px-0 lg:pl-2">
            <div className="overflow-hidden">
              <img
                className="w-full h-[300px] object-cover group-hover/item:scale-110 duration-300"
                src="https://velikorodnov.com/html/sushifushi/images/947x472_img1.jpg"
                alt=""
              />
            </div>

            <div className="absolute top-[40%] group-hover/item:top-1/2 left-1/2 duration-200 ease-linear translate-x-[-50%] translate-y-[-50%] opacity-0 group-hover/item:opacity-100">
              <button className="text-white bg-red-400/50 px-3 py-1 font-poppins">
                See More
              </button>
            </div>
          </div>
          <div className="relative basis-1/2 lg:basis-1/4 px-2 group/item">
            <div className="overflow-hidden">
              <img
                className="w-full h-[300px] object-cover group-hover/item:scale-110 duration-300"
                src="https://velikorodnov.com/html/sushifushi/images/723x432_img1.jpg"
                alt=""
              />
            </div>

            <div className="absolute top-[40%] group-hover/item:top-1/2 left-1/2 duration-200 ease-linear translate-x-[-50%] translate-y-[-50%] opacity-0 group-hover/item:opacity-100">
              <button className="text-white bg-red-400/50 px-3 py-1 font-poppins">
                See More
              </button>
            </div>
          </div>
          <div className="basis-1/2 lg:basis-1/4 pr-2 relative group/item">
            <div className="overflow-hidden">
              <img
                className="w-full h-[300px] object-cover group-hover/item:scale-110 duration-300"
                src="https://velikorodnov.com/html/sushifushi/images/470x472_img2.jpg"
                alt=""
              />
            </div>

            <div className="absolute top-[40%] group-hover/item:top-1/2 left-1/2 duration-200 ease-linear translate-x-[-50%] translate-y-[-50%] opacity-0 group-hover/item:opacity-100">
              <button className="text-white bg-red-400/50 px-3 py-1 font-poppins">
                See More
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap pb-2">
          <div className="basis-full lg:basis-1/4 px-2 pb-2 lg:pb-0 lg:px-0 lg:pl-2 relative group/item">
            <div className="overflow-hidden">
              <img
                className="w-full h-[300px] object-cover group-hover/item:scale-110 duration-300"
                src="https://velikorodnov.com/html/sushifushi/images/470x472_img1.jpg"
                alt=""
              />
            </div>

            <div className="absolute top-[40%] group-hover/item:top-1/2 left-1/2 duration-200 ease-linear translate-x-[-50%] translate-y-[-50%] opacity-0 group-hover/item:opacity-100">
              <button className="text-white bg-red-400/50 px-3 py-1 font-poppins">
                See More
              </button>
            </div>
          </div>
          <div className="basis-1/2 px-2 relative group/item">
            <div className="overflow-hidden">
              <img
                className="w-full h-[300px] object-cover group-hover/item:scale-110 duration-300"
                src="https://images.pexels.com/photos/8983407/pexels-photo-8983407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>

            <div className="absolute top-[40%] group-hover/item:top-1/2 left-1/2 duration-200 ease-linear translate-x-[-50%] translate-y-[-50%] opacity-0 group-hover/item:opacity-100">
              <button className="text-white bg-red-400/50 px-3 py-1 font-poppins">
                See More
              </button>
            </div>
          </div>
          <div className="basis-1/2 lg:basis-1/4 pr-2 relative group/item">
            <div className="overflow-hidden">
              <img
                className="w-full h-[300px] object-cover group-hover/item:scale-110 duration-300"
                src="https://images.pexels.com/photos/2116094/pexels-photo-2116094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>

            <div className="absolute top-[40%] group-hover/item:top-1/2 left-1/2 duration-200 ease-linear translate-x-[-50%] translate-y-[-50%] opacity-0 group-hover/item:opacity-100">
              <button className="text-white bg-red-400/50 px-3 py-1 font-poppins">
                See More
              </button>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-wrap pb-2">
          <div className="basis-full md:basis-1/2 px-2 pb-2 md:pb-0">
            <img
              className="w-full h-[300px] object-cover"
              src="https://velikorodnov.com/html/sushifushi/images/947x472_img2.jpg"
              alt=""
            />
          </div>
          <div className="basis-full md:basis-1/2 px-2 md:px-0 md:pr-2">
            <img
              className="w-full h-[300px] object-cover"
              src="https://velikorodnov.com/html/sushifushi/images/470x472_img4.jpg"
              alt=""
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default FoodGalleryHome;
