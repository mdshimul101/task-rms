import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuItems = (
    <>
      <div className="text-orange-500  py-4 group px-2 ">
        <Link>Home</Link>
        <div className="flex justify-center items-center">
          <div className=" mt-1 w-0 h-[2px] bg-orange-400  group-hover:w-full ease-out duration-300"></div>
        </div>
      </div>
      <div className="text-orange-500  py-4 group px-2 ">
        <Link>Food</Link>
        <div className="flex justify-center items-center">
          <div className=" mt-1 w-0 h-[2px] bg-orange-400  group-hover:w-full ease-out duration-300"></div>
        </div>
      </div>
      <li className="" tabIndex={0}>
        {/* <Link>
          Category
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
          </svg>
        </Link> */}

        <div className="flex lg:justify-center items-center text-orange-500 mt-[-5px]  group pl-2">
          <Link className="">Category</Link>
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
          </svg>
          <div className="flex justify-center items-center">
            <div className=" mt-1 w-0 h-[2px] bg-orange-400  group-hover:w-full ease-out duration-300"></div>
          </div>
        </div>

        <ul className="p-2 z-10">
          <div className="text-orange-500 pt-2 group px-2 text-center bg-red-100 mt-2 rounded-md">
            <Link>Category 1</Link>
            <div className="flex justify-center items-center">
              <div className=" mt-4 w-0 h-[2px] bg-orange-500  group-hover:w-full ease-out duration-300"></div>
            </div>
          </div>
          <div className="text-orange-500 pt-2 group px-2 text-center bg-red-100 mt-2 rounded-md">
            <Link>Category 2</Link>
            <div className="flex justify-center items-center">
              <div className=" mt-4 w-0 h-[2px] bg-orange-500  group-hover:w-full ease-out duration-300"></div>
            </div>
          </div>
        </ul>
      </li>
      <div className="text-orange-500  py-4 group px-0 ">
        <Link>About Us</Link>
        <div className="flex justify-center items-center">
          <div className=" mt-1 w-0 h-[2px] bg-orange-400  group-hover:w-full ease-out duration-300"></div>
        </div>
      </div>
      <div className="text-orange-500  py-4 group px-4 ">
        <Link>Cart</Link>
        <div className="flex justify-center items-center">
          <div className=" mt-1 w-0 h-[2px] bg-orange-400  group-hover:w-full ease-out duration-300"></div>
        </div>
      </div>
    </>
  );

  return (
    <div className="bg-orange-100">
      <div className="max-w-7xl mx-auto">
        <div className="navbar py-5">
          <div className="navbar">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {menuItems}
              </ul>
            </div>
            <Link className="btn btn-primary text-white normal-case text-xl">
              Food Gallery
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{menuItems}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
