import {
  ADD_PRODUCT_IN_CART,
  ADD_TO_CART,
  DELETE_PRODUCT_TO_CART,
  REMOVE_PRODUCT_TO_CART,
} from "./actionTypes.js";

export const addToCart = (productId, productData) => {
  return {
    type: ADD_TO_CART,
    payload: {
      productId,
      productData,
    },
  };
};
export const addProductInCart = (productId) => {
  return {
    type: ADD_PRODUCT_IN_CART,
    payload: productId,
  };
};
export const removeProductToCart = (productId) => {
  return {
    type: REMOVE_PRODUCT_TO_CART,
    payload: productId,
  };
};
export const deleteProductToCart = (productId, productInCart) => {
  return {
    type: DELETE_PRODUCT_TO_CART,
    payload: {
      productId,
      productInCart,
    },
  };
};
