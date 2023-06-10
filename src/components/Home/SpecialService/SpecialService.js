import React from "react";
import birthday from "../..//../assets/Images/BirthdayIcon.png";
import family from "../..//../assets/Images/family.png";
import privateDining from "../..//../assets/Images/private_dining.png";
import wedding from "../..//../assets/Images/wedding.png";

const SpecialService = () => {
  const services = [
    {
      icon: birthday,
      name: "Birthday Party",
      image:
        "https://images.pexels.com/photos/369267/pexels-photo-369267.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "We can provide best food for your special day.",
    },
    {
      icon: privateDining,
      name: "Private Dining",
      image:
        "https://images.pexels.com/photos/2403391/pexels-photo-2403391.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "For your any need we can give for you a Private Dining.",
    },
    {
      icon: wedding,
      name: "Wedding Party",
      image:
        "https://images.pexels.com/photos/11001410/pexels-photo-11001410.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      text: "Wedding program we can maintain very organized way.",
    },
    {
      icon: family,
      name: "Family Program",
      image:
        "https://images.pexels.com/photos/8888714/pexels-photo-8888714.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      text: "Any kind of family program we can give fresh food.",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <div className="text-center">
        <div className="flex justify-center items-center">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/004/791/679/small/plate-fork-and-knife-icon-free-vector.jpg"
            className="h-20 w-20"
            alt=""
          />
        </div>

        <div className="group">
          <h1 className="text-2xl ">
            <span className="text-red-600">Food Gallery</span>{" "}
            <span className="text-stone-500">Special Service</span>
          </h1>
          <div className="flex justify-center items-center ">
            <span className="border-b-2 border-red-600 w-16 group-hover:w-24 ease-out duration-300  text-center mt-3"></span>
          </div>
        </div>

        <div>
          <p className="mt-3 text-stone-500">
            This is what we do and we do it perfectly
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1  py-10  md:grid-cols-2 lg:grid-cols-4 gap-10">
        {services.map((service) => (
          <div>
            <div className="relative m-w-80 group group/edit">
              <div className="m-w-80  h-[400px]  border border-gray-400 ">
                <div className="absolute w-full left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] py-20">
                  <div className="w-[50%] flex justify-center items-center mx-auto">
                    <img
                      src={service.icon}
                      alt=""
                      className="max-h-48   duration-300 ease-linear"
                    />
                  </div>
                  <h3 className=" text-2xl text-gray-400 text-center font-raleWay font-thin mt-10">
                    {service.name}
                  </h3>
                </div>
              </div>
              <div className="bg-black/50 absolute  bottom-0 left-0 right-0  w-full h-full opacity-0 group-hover:opacity-100 duration-300 ease-linear overflow-hidden">
                <img
                  src={service.image}
                  alt=""
                  className=" absolute top-1/2 left-1/2 text-center translate-x-[-50%] translate-y-[-50%] "
                />
                <p className="bg-[rgba(0,0,0,0.5)] py-24 w-full text-white text-xl font-raleWay font-medium px-3 absolute group-hover/edit:top-1/2 duration-300 ease-linear  top-[40%] text-center translate-y-[-50%]">
                  {service.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialService;
