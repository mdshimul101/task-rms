import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useTitle from "../../../hooks/useTitle";
import {
  addProductInCart,
  deleteProductToCart,
  removeProductToCart,
} from "../../../redux/carts/action";
import CartItem from "./CartItem";

const Cart = () => {
  useTitle("Cart");
  const cartProducts = useSelector((state) => state.addToCart);
  const dispatch = useDispatch();
  console.log("from cart page", cartProducts);

  const handleIncrease = (id) => {
    dispatch(addProductInCart(id));
  };
  const handleDecrease = (id) => {
    dispatch(removeProductToCart(id));
  };
  const handleDelete = (id, cart) => {
    dispatch(deleteProductToCart(id, cart));
  };

  const totalAmount = () => {
    return cartProducts.reduce(
      (total, product) => total + product.cart * product.price,
      0
    );
  };

  return (
    <div className="mx-5 md:mx-[90px] py-10 ">
      <h1 className="text-2xl font-poppins font-semibold text-gray-700">
        Shopping Cart
      </h1>

      {cartProducts.length ? (
        <div className="mt-10">
          <div className="hidden md:flex text-xl border-b-[2px] border-gray-600 pb-4 ">
            <h3 className="basis-1/2">product</h3>
            <h3 className="basis-1/6">Price</h3>
            <h3 className="basis-1/6">Quantity</h3>
            <h3 className="basis-1/6">Total</h3>
          </div>
        </div>
      ) : (
        <div className="mt-10 ">
          <p className="font-poppins text-xl text-red-400">
            You didn't cart any product
          </p>
        </div>
      )}
      {cartProducts.map((singleCart) =>
        singleCart.cart ? (
          <CartItem key={singleCart.id} singleCart={singleCart}></CartItem>
        ) : (
          ""
        )
      )}

      {cartProducts.length ? (
        <div className="mt-20">
          <div className="w-full md:w-1/2 mx-auto  border border-orange-500 p-5">
            <h3 className="text-xl font-poppins font-semibold my-4 border-b-2 border-gray-500 text-center p-4">
              Bill Details
            </h3>
            <div className="font-poppins text-lg mt-10">
              <div className="flex justify-between">
                <p>Sub Total</p>
                <p>$ {totalAmount()}</p>
              </div>
              <div className="flex justify-between">
                <p>Discount</p>
                <p>$ 00</p>
              </div>
              <div className="flex justify-between">
                <p>Vat</p>
                <p>$ 00</p>
              </div>
              <hr className="border border-gray-500 my-4" />
              <div className="flex justify-between">
                <p>Total</p>
                <p>$ {totalAmount()}</p>
              </div>

              <div className="flex items-center justify-center">
                <button className="px-4 py-1 bg-orange-400 text-white  rounded-md">
                  Process Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cart;
