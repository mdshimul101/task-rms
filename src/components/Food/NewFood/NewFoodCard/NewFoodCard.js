import React from "react";
import { toast } from "react-hot-toast";
import { MdOutlineFavoriteBorder, MdOutlineShoppingCart } from "react-icons/md";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { useDispatch, useSelector } from "react-redux";
import { addProductToFavorite } from "../../../../redux/Favorites/action";
import { addToCart } from "../../../../redux/carts/action";

const NewFoodCard = ({ foodData }) => {
  const { name, image, price, id } = foodData;
  const cartProducts = useSelector((state) => state.addToCart);

  const dispatch = useDispatch();

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

  const handleAddProductToFavorite = (productId, productData) => {
    dispatch(addProductToFavorite(productId, { ...productData, favorite: 1 }));
    toast.success(`${productData.name} is added to cart successfully`);
  };

  return (
    <div className="">
      <div className="relative overflow-hidden h-[450px] lg:h-96 group ">
        <div className="w-full h-full duration-300 ease-linear">
          <div className="flex justify-start items-center top-[120%] group-hover:top-[87%] duration-500 p-3 absolute bottom-[-4%] left-[35%]  translate-x-[-50%] translate-y-[-50%]">
            <button className=" text-gray-800 hover:text-white bg-white hover:bg-orange-400 p-3 rounded-full duration-[400ms] hover:rotate-[360deg]">
              <MdOutlineFavoriteBorder
                onClick={() => handleAddProductToFavorite(id, foodData)}
                className=" text-[24px] rotate-0 "
              />
            </button>
          </div>
          <div className="flex justify-start items-center top-[120%] group-hover:top-[87%] duration-500 p-3 absolute bottom-[-4%] left-[65%]  translate-x-[-50%] translate-y-[-50%]">
            <button className="text-gray-800 hover:text-white bg-white hover:bg-orange-400 p-3 rounded-full duration-[400ms] hover:rotate-[360deg]">
              <MdOutlineShoppingCart
                onClick={() => handleAddToCart(id, foodData)}
                className=" text-[24px] rotate-0 "
              />
            </button>
          </div>
          <PhotoProvider>
            <PhotoView src={image}>
              <img src={image} alt="" className="w-full h-full object-cover" />
            </PhotoView>
          </PhotoProvider>
        </div>
      </div>

      <div className="text-center border-x-[1px] border-b-[1px] py-3">
        <h1 className="text-gray-600 font-montserrat">{name}</h1>
        <p className="text-lg text-orange-500 font-poppins">
          Price : <span className="ml-1"></span> $ {price}
        </p>
      </div>
    </div>
  );
};

export default NewFoodCard;
