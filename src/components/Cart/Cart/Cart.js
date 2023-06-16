import React from "react";
import useTitle from "../../../hooks/useTitle";

const Cart = () => {
  useTitle("Cart");
  return (
    <div className="mx-5 md:mx-[90px] py-10 ">
      <h1 className="text-2xl font-poppins font-semibold text-gray-500">
        Shopping Cart
      </h1>

      <table className="border-collapse">
        <thead>
          <tr>
            <th>Food</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total </th>
          </tr>
        </thead>
      </table>

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
