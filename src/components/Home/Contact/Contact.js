import React from "react";

const Contact = () => {
  const imageUrl =
    "https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "650px",
      }}
      className="mt-10"
    >
      <div className="max-w-7xl mx-auto ">
        <div className="group text-center pt-10">
          <div className="">
            <h1 className="text-3xl text-orange-500 mb-3 font-raleWay">
              Contact Us
            </h1>
            <h1 className="text-2xl text-gray-600 font-thin">GET IN TOUCH</h1>
          </div>
          <div className="flex justify-center items-center ">
            <p className="border-b-2 border-orange-600 w-10 group-hover:w-32 ease-out duration-300  text-center mt-3"></p>
          </div>
        </div>
        {/* <div>
        <img
          src="https://images.pexels.com/photos/1552635/pexels-photo-1552635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="w-full h-[650px] object-cover"
        />
      </div> */}

        <div className="mt-10 bg-orange-50 p-10">
          <form action="">
            <div className=" lg:flex justify-between">
              <div className="w-full lg:w-[47%]">
                {/* 1 */}

                <input
                  type="text"
                  placeholder="Your Name"
                  className="pl-4 py-3 mb-4 border border-gray-200 w-full hover:border-orange-400 duration-300"
                />
                {/* 2 */}

                <input
                  type="text"
                  placeholder="Your Email"
                  className="pl-4 py-3 my-4  border border-gray-200 w-full hover:border-orange-400 duration-300 "
                />
                {/* 3 */}

                <input
                  type="text"
                  placeholder="Your Phone"
                  className="pl-4 py-3 mt-4 border border-gray-200 hover:border-orange-400 duration-300 w-full "
                />
              </div>
              <div className="w-full lg:w-[47%] mt-8 lg:mt-0">
                <textarea
                  className=" border border-gray-200 hover:border-orange-400 w-full pl-4 h-[215px]"
                  placeholder="Write Here"
                ></textarea>
              </div>
            </div>
            <div className="flex justify-center items-center mt-5 ">
              <button className="px-3 py-2 bg-red-300 hover:bg-red-400 text-white">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
