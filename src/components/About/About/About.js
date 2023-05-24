import React, { useState } from "react";
import useTitle from "../../../hooks/useTitle";

const About = () => {
  const [isClick, setClick] = useState("first");
  useTitle("About");
  return (
    <div className="my-5">
      <p className="ml-12 font-semibold text-2xl mb-5">
        Frequently Asked Questions
      </p>
      <div className="ml-10 mr-10 mb-10">
        <div className="bg-white border -mt-px first:rounded-t-lg last:rounded-b-lg">
          <button
            onClick={() => setClick("first")}
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
            Qs.1 How can i get your service ?
          </button>
          {isClick === "first" && (
            <div className="w-full overflow-hidden">
              <div className="pb-4 px-5">
                <p className="text-gray-600 font-medium">
                  Ans. You can order product for get food.
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white border -mt-px first:rounded-t-lg last:rounded-b-lg">
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
        </div>
      </div>
    </div>
  );
};

export default About;
