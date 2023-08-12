import {
  ADD_PRODUCT_IN_CART,
  ADD_TO_CART,
  DELETE_PRODUCT_TO_CART,
  REMOVE_PRODUCT_TO_CART,
} from "./actionTypes";

const initialState = [
  // {
  //   cart: 1,
  //   id: 1,
  //   name: "Spring and summershoes",
  //   category: "Mens shoes",
  //   imageUrl:
  //     "https://static-01.daraz.com.bd/p/ec1118c4251ffc10025065289e3a6aa8.jpg",
  //   price: 400,
  //   quantity: 10,
  // },
];

// const nextBookingId = (products) => {
//   const maxId = products.reduce(
//     (maxId, product) => Math.max(product.id, maxId),
//     -1
//   );
//   return maxId + 1;
// };

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log(state);
  switch (type) {
    case ADD_TO_CART:
      const { productId, productData } = payload;
      const productInCart = state.find((product) => product.id === productId);
      const productOutCart = state.filter(
        (product) => product.id !== productId
      );
      if (productInCart) {
        // return [
        //   ...productOutCart,
        //   {
        //     ...productInCart,
        //     quantity: productInCart.quantity - 1,
        //     cart: productInCart.cart + 1,
        //     top: "ok",
        //   },
        // ];
        if (productInCart.quantity > 0) {
          return [
            ...productOutCart,
            {
              ...productInCart,
              quantity: productInCart.quantity - 1,
              cart: productInCart.cart + 1,
              top: "ok",
            },
          ];
        } else {
          return [
            ...productOutCart,
            {
              ...productInCart,
              quantity: productInCart.quantity,
              cart: productInCart.cart,
              topIn: "ok",
            },
          ];
        }
      } else {
        return [
          ...state,
          {
            ...productData,
            quantity: productData.quantity - 1,
            cart: productData.cart + 1,
            bot: "ok",
          },
        ];
      }

    case ADD_PRODUCT_IN_CART:
      return state.map((product) => {
        if (product.id === payload) {
          if (product.quantity > 0) {
            return {
              ...product,
              quantity: product.quantity - 1,
              cart: product.cart + 1,
            };
          } else {
            return product;
          }
        } else {
          return product;
        }
      });
    case REMOVE_PRODUCT_TO_CART:
      const newRemoveState = state.map((product) => {
        if (product.id === payload) {
          if (product.cart > 0) {
            return {
              ...product,
              quantity: product.quantity + 1,
              cart: product.cart - 1,
            };
          } else {
            return product;
          }
        } else {
          return product;
        }
      });
      return newRemoveState.filter((product) => product.cart !== 0);
    // return state.map((product) => {
    //   if (product.id === payload) {
    //     if (product.cart > 0) {
    //       return {
    //         ...product,
    //         quantity: product.quantity + 1,
    //         cart: product.cart - 1,
    //       };
    //     } else {
    //       return product;
    //     }
    //   } else {
    //     return product;
    //   }
    // });
    case DELETE_PRODUCT_TO_CART:
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

export default cartReducer;
