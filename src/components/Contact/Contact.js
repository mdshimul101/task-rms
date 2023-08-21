import React from "react";
import ContactDetails from "./ContactDetails";

import useTitle from "../../hooks/useTitle";
import email from "./../../assets/Images/Icon/contact.svg";
import contact from "./../../assets/Images/Icon/email.svg";
import location from "./../../assets/Images/Icon/location-pin.svg";
const Contact = () => {
  useTitle("Contact");
  const imageUrl =
    "https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  const contactInfo = [
    {
      id: 1,
      title: "Location",
      icon: location,
      text: "55 Main Street, 2nd Floor New York City",
    },
    {
      id: 2,
      title: "Email",
      icon: email,
      text: "support@gmail.com  contactfood.net",
    },
    {
      id: 3,
      title: "Contact",
      icon: contact,
      text: "Mobile :+000 (123) 4589  Phone :+012 (345) 67",
    },
  ];
  return (
    <>
      <div
        className="pt-16"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "650px",
        }}
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
              <div className="flex justify-center items-center mt-10 ">
                <button className="px-3 py-2 bg-orange-300 hover:bg-orange-400 text-white">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-36 lg:mt-5 py-10 ">
        <div className="border border-orange-300 p-4">
          <h2 className="text-center py-4 font-raleWay text-2xl text-red-500">
            Get In Touch For More Info
          </h2>
          <div className="grid py-3 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {contactInfo.map((singleContact) => (
              <ContactDetails
                key={singleContact.id}
                singleContact={singleContact}
              ></ContactDetails>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center py-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.1759169974302!2d-81.06430924454166!3d34.029692565605394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8a495dbb9ee59%3A0x6407e3f6f793c55a!2sFood%20Gallery!5e0!3m2!1sen!2sbd!4v1684753073396!5m2!1sen!2sbd"
          width="100%"
          height="450"
          loading="lazy"
          title="food gallery"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
