import {
  ADD_PRODUCT_TO_FAVORITE,
  REMOVE_PRODUCT_TO_FAVORITE,
} from "./actionTypes";

const initialState = [];

const favoriteReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_PRODUCT_TO_FAVORITE:
      const { productId, productData } = payload;
      const productInFavorite = state.find(
        (product) => product.id === productId
      );

      if (productInFavorite) {
        return state;
      } else {
        return [
          ...state,
          {
            ...productData,
          },
        ];
      }
    case REMOVE_PRODUCT_TO_FAVORITE:
      return state.filter((product) => product.id !== payload);

    default:
      return state;
  }
};

export default favoriteReducer;
