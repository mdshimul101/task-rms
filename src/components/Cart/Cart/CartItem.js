import React from "react";
import {
  AiOutlineDelete,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { useDispatch } from "react-redux";

import { toast } from "react-hot-toast";
import {
  addProductInCart,
  deleteProductToCart,
  removeProductToCart,
} from "../../../redux/carts/action";

const CartItem = ({ singleCart }) => {
  const dispatch = useDispatch();

  const handleIncrease = (id, quantity) => {
    dispatch(addProductInCart(id));
    if (quantity === 0) {
      toast.error(`${singleCart.name} is not available at the moment`);
    }
  };
  const handleDecrease = (id) => {
    dispatch(removeProductToCart(id));
  };
  const handleDelete = (id, cart) => {
    dispatch(deleteProductToCart(id, cart));
  };
  return (
    <div>
      <div className="mt-10 flex flex-col p-5 md:flex-row border  border-orange-500">
        <div className="flex basis-1/2">
          <img
            className="w-28 h-28 object-cover mr-5"
            src={singleCart.image}
            alt=""
          />

          <div className="flex justify-center items-center">
            <p className="text-lg font-poppins">{singleCart.title}</p>
          </div>
        </div>
        <div className="flex justify-start items-center font-poppins text-lg basis-1/6">
          <p className="py-5 md:py-0">
            <span className="visible  md:hidden">Price :</span> ${" "}
            {singleCart.price}
          </p>
        </div>

        <div className="basis-1/6 flex items-center font-poppins text-lg">
          <div className="flex">
            <span className="visible  md:hidden mr-2">Quantity :</span>
            <button onClick={() => handleDecrease(singleCart.id)}>
              <AiOutlineMinusCircle />
            </button>
            <p className="px-5 "> {singleCart.cart}</p>

            <button
              onClick={() => handleIncrease(singleCart.id, singleCart.quantity)}
              disabled={singleCart.quantity < 0}
            >
              <AiOutlinePlusCircle />
            </button>
          </div>
        </div>

        <div className="md:flex justify-start items-center font-poppins text-lg basis-1/6">
          <p className="py-6 px-0 lg:px-4">
            <span className="visible  md:hidden">Total :</span> ${" "}
            {singleCart.cart * singleCart.price}
          </p>
          <div className="flex justify-center items-center ml-16 mt-5 md:mt-0 ">
            <button
              onClick={() => handleDelete(singleCart.id, singleCart.cart)}
              className=""
            >
              <AiOutlineDelete className="text-orange-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
