import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { RiMessage3Line } from "react-icons/ri";

const FQA = () => {
  const [isClick, setClick] = useState(0);
  const fqaData = [
    {
      id: 1,
      question: "Does Food Gallery offer delivery ?",
      answer:
        "To help our restaurants manage their sittings we ask our diners to give at least 24 hours' notice of any cancellations. You can do this by calling your restaurant direct.",
    },
    {
      id: 2,
      question: "How do I cancel a booking?",
      answer:
        "Food Gallery offers take out by phone and through our website shop. Food Gallery recommends Dine In Marin to order  food delivered to your door. Please call the restaurant to ensure you have placed your order with the right amount of food, the best level of spiciness for your palate, and that you get the best satisfaction out of your order.",
    },
    {
      id: 3,
      question: "How much do I have to pay for my booking?",
      answer:
        "Absolutely nothing! All bookings made through Restaurant Hub are free to the consumer.",
    },
  ];
  return (
    <div className="px-9 md:px-24 mt-16">
      <div className="w-full lg:w-10/12 mx-auto">
        <p className="font-semibold text-2xl mb-5">
          Frequently Asked Questions
        </p>
        {fqaData.map((singleFqa, index) => (
          <div className="bg-white border -mt-px first:rounded-t-lg last:rounded-b-lg">
            {isClick === singleFqa.id ? (
              <button
                onClick={() => setClick(0)}
                className="inline-flex text-lg items-center gap-x-3 w-full font-semibold text-left text-gray-700 py-4 px-5 hover:text-gray-900"
              >
                {isClick === singleFqa.id && (
                  <FaMinus className="text-gray-500 text-sm md:text-xl"></FaMinus>
                )}
                {singleFqa.id}. {singleFqa.question}
              </button>
            ) : (
              <button
                onClick={() => setClick(singleFqa.id)}
                className="inline-flex text-lg items-center gap-x-3 w-full font-semibold text-left text-gray-700 py-4 px-5 hover:text-gray-900"
              >
                <FaPlus className="text-orange-500 text-sm md:text-xl"></FaPlus>{" "}
                {singleFqa.id}. {singleFqa.question}
              </button>
            )}
            {isClick === singleFqa.id && (
              <div className="w-full overflow-hidden  ">
                <div className="pb-4 px-5">
                  <RiMessage3Line className="text-xl mr-5 text-red-500"></RiMessage3Line>{" "}
                  <p className="text-gray-600 font-medium text-justify ">
                    {singleFqa.answer}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* <div className="bg-white border -mt-px first:rounded-t-lg last:rounded-b-lg">
          <button
            onClick={() => setClick("second")}
            className="inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-700 py-4 px-5 hover:text-gray-900"
          >
            <svg
              className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 8.85999L14.5 8.85998"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M8 15.36L8 2.35999"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            <svg
              className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 8.85999L14.5 8.85998"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            Qs.2 What is your name?
          </button>
          {isClick === "second" && (
            <div className="w-full overflow-hidden">
              <div className="pb-4 px-5">
                <p className="text-gray-600 font-medium">
                  Ans. My name is souvik.
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white border -mt-px first:rounded-t-lg last:rounded-b-lg">
          <button
            onClick={() => setClick("third")}
            className="inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-700 py-4 px-5 hover:text-gray-900"
          >
            <svg
              className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 8.85999L14.5 8.85998"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M8 15.36L8 2.35999"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            <svg
              className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 8.85999L14.5 8.85998"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            Qs.3 usto odio dignissimos ducimus qui blanditiis praesentium
            voluptatum deleniti atque
          </button>
          {isClick === "third" && (
            <div className="w-full overflow-hidden">
              <div className="pb-4 px-5">
                <p className="text-gray-600 font-medium">
                  Ans. corrupti quos dolores et quas molestias excepturi sint
                  occaecati cupiditate non
                </p>
              </div>
            </div>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default FQA;
