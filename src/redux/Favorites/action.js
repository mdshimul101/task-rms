import {
  ADD_PRODUCT_TO_FAVORITE,
  REMOVE_PRODUCT_TO_FAVORITE,
} from "./actionTypes";

export const addProductToFavorite = (productId, productData) => {
  return {
    type: ADD_PRODUCT_TO_FAVORITE,
    payload: {
      productId,
      productData,
    },
  };
};

export const removeProductToFavorite = (productId) => {
  return {
    type: REMOVE_PRODUCT_TO_FAVORITE,
    payload: productId,
  };
};
