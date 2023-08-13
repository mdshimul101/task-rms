import React from "react";
import { toast } from "react-hot-toast";
import { MdOutlineFavoriteBorder, MdOutlineShoppingCart } from "react-icons/md";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../redux/carts/action";

const FeatureProduct = ({ item }) => {
  const { id, name, image, price } = item;
  const cartProducts = useSelector((state) => state.addToCart);
  console.log("from home page", cartProducts);
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
  return (
    <div>
      <div className="m-w-80">
        <div className="overflow-hidden">
          <div className="hover:scale-110 duration-500">
            <PhotoProvider>
              <PhotoView src={image}>
                <img
                  src={image}
                  alt=""
                  className="w-full h-full object-cover cursor-zoom-in"
                />
              </PhotoView>
            </PhotoProvider>
          </div>
        </div>

        <div className="p-4 bg-orange-50">
          <h2 className="text-2xl font-raleWay text-gray-700">{name}</h2>
          <p className=" font-raleWay font-thin text-gray-500">
            {item.element}
          </p>
          <div className="flex justify-between items-center mt-5 ">
            <p className="text-gray-500 font-poppins"> $ {price}</p>

            <div>
              <button className="mr-5 text-gray-800 hover:text-white bg-white hover:bg-orange-400 p-3 rounded-full duration-[400ms] hover:rotate-[360deg]">
                {" "}
                <MdOutlineFavoriteBorder className=" text-[24px] rotate-0 " />
              </button>

              <button
                onClick={() => handleAddToCart(id, item)}
                className="text-gray-800 hover:text-white bg-white hover:bg-orange-400 p-3 rounded-full duration-[400ms] hover:rotate-[360deg]"
              >
                {" "}
                <MdOutlineShoppingCart className=" text-[24px] rotate-0 " />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureProduct;
