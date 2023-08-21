import React from "react";
import { toast } from "react-hot-toast";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { removeProductToFavorite } from "../../../redux/Favorites/action";
import { addToCart } from "../../../redux/carts/action";

const FavoriteItemSingle = ({ singleFavorite }) => {
  const cartProducts = useSelector((state) => state.addToCart);
  const dispatch = useDispatch();
  const handleRemoveFavoriteItem = (id) => {
    dispatch(removeProductToFavorite(id));
  };

  const handleAddToCart = (productId, productData) => {
    dispatch(addToCart(productId, { ...productData, cart: 0 }));
    if (productData.cart >= 0) {
      toast.success(`${productData.name} is added to cart successfully`);
    }
    const findCartProduct = cartProducts.find(
      (product) => product.id === productId
    );
    if (findCartProduct?.quantity === 0) {
      toast.error(`${findCartProduct.name} is not available at the moment`);
    } else {
      toast.success(`${productData.name} is added to cart successfully`);
    }
  };
  return (
    <div>
      <div className="mt-10 flex flex-col p-5 md:flex-row border  border-orange-500">
        <div className="flex basis-1/2">
          <img
            className="w-28 h-28 object-cover mr-5"
            src={singleFavorite.image}
            alt=""
          />

          <div className="flex justify-center items-center">
            <p className="text-lg font-poppins">{singleFavorite.title}</p>
          </div>
        </div>
        <div className="flex justify-start items-center font-poppins text-lg basis-1/6">
          <p className="py-5 md:py-0">
            <span className="visible  md:hidden">Price :</span> ${" "}
            {singleFavorite.price}
          </p>
        </div>

        <div className="basis-1/6 flex items-center font-poppins text-lg">
          <div className="flex border border-orange-500 px-4 py-1 hover:border-blue-400 hover:text-orange-500">
            <button
              onClick={() => handleAddToCart(singleFavorite.id, singleFavorite)}
              className=""
            >
              Add To Cart
            </button>
          </div>
        </div>

        <div className="md:flex justify-start items-center font-poppins text-lg basis-1/6">
          <div className="flex justify-center items-center ml-9 mt-5 md:mt-0 ">
            <button
              onClick={() => handleRemoveFavoriteItem(singleFavorite.id)}
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

export default FavoriteItemSingle;
