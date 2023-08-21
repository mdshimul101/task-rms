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
      const productOutFavorite = state.filter(
        (product) => product.id !== productId
      );
      if (productInFavorite) {
        return [
          ...productOutFavorite,
          {
            ...productInFavorite,
            top: "ok",
          },
        ];
        // if (productInCart.quantity > 0) {
        //   return [
        //     ...productOutCart,
        //     {
        //       ...productInCart,
        //       quantity: productInCart.quantity - 1,
        //       cart: productInCart.cart + 1,
        //       top: "ok",
        //     },
        //   ];
        // } else {
        //   return [
        //     ...productOutCart,
        //     {
        //       ...productInCart,
        //       quantity: productInCart.quantity,
        //       cart: productInCart.cart,
        //       topIn: "ok",
        //     },
        //   ];
        // }
      } else {
        return [
          ...state,
          {
            ...productData,
            bot: "ok",
          },
        ];
      }

    //   return state.map((product) => {
    //     if (product.id === payload) {
    //       if (product.quantity > 0) {
    //         return {
    //           ...product,
    //           quantity: product.quantity - 1,
    //           cart: product.cart + 1,
    //         };
    //       } else {
    //         return product;
    //       }
    //     } else {
    //       return product;
    //     }
    //   });
    case REMOVE_PRODUCT_TO_FAVORITE:
      return state.filter((product) => product.id !== payload);

      const newState = state.map((product) => {
        if (product.id === payload.productId) {
          return {
            ...product,
            cart: 0,
            quantity: product.quantity + payload.productInCart,
          };
        } else {
          return product;
        }
      });

      return newState.filter((product) => product.id !== payload.productId);

    default:
      return state;
  }
};

export default favoriteReducer;
