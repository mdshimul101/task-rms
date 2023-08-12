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

      {cartProducts.length > 0 ? (
        <div className="mt-10">
          <div className="hidden md:flex text-xl border-b-[2px] border-gray-600 pb-4 ">
            <h3 className="basis-1/2">product</h3>
            <h3 className="basis-1/6">Price</h3>
            <h3 className="basis-1/6">Quantity</h3>
            <h3 className="basis-1/6">Total</h3>
          </div>
        </div>
      ) : (
        <p>You don't cart any product</p>
      )}
      {cartProducts.map((singleCart) => (
        <CartItem key={singleCart.id} singleCart={singleCart}></CartItem>
        // <div className="mt-10 flex flex-col p-5 md:flex-row border  border-orange-500">
        //   <div className="flex basis-1/2">
        //     <img
        //       className="w-28 h-28 object-cover mr-5"
        //       src={singleCart.image}
        //       alt=""
        //     />

        //     <div className="flex justify-center items-center">
        //       <p className="text-lg font-poppins">{singleCart.title}</p>
        //     </div>
        //   </div>
        //   <div className="flex justify-start items-center font-poppins text-lg basis-1/6">
        //     <p className="py-5 md:py-0">
        //       <span className="visible  md:hidden">Price :</span> ${" "}
        //       {singleCart.price}
        //     </p>
        //   </div>

        //   <div className="basis-1/6 flex items-center font-poppins text-lg">
        //     <div className="flex">
        //       <span className="visible  md:hidden mr-2">Quantity :</span>
        //       <button onClick={() => handleDecrease(singleCart.id)}>
        //         <AiOutlineMinusCircle />
        //       </button>
        //       <p className="px-5 "> {singleCart.cart}</p>
        //       <button onClick={() => handleIncrease(singleCart.id)}>
        //         <AiOutlinePlusCircle />
        //       </button>
        //     </div>
        //   </div>

        //   <div className="md:flex justify-start items-center font-poppins text-lg basis-1/6">
        //     <p className="py-6 px-0 lg:px-4">
        //       <span className="visible  md:hidden">Total :</span> ${" "}
        //       {singleCart.cart * singleCart.price}
        //     </p>
        //     <div className="flex justify-center items-center ml-16 mt-5 md:mt-0 ">
        //       <button
        //         onClick={() => handleDelete(singleCart.id, singleCart.cart)}
        //         className=""
        //       >
        //         <AiOutlineDelete className="text-orange-400" />
        //       </button>
        //     </div>
        //   </div>
        // </div>
      ))}

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

      {/* <table className="w-full mt-10">
        <thead className=" text-left text-gray-500">
          <tr className="font-poppins text-xl  border-b-2">
            <th className="w-1/2 py-2">Food</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total </th>
          </tr>
        </thead>
      </table> */}

      <div>
        {/* <div>
          <img
            src="https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div> */}
      </div>
    </div>
  );
};

export default Cart;
