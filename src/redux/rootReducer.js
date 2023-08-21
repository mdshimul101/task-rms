import { combineReducers } from "redux";
import favoriteReducer from "./Favorites/favoriteReducer";
import cartReducer from "./carts/cartReducer";

const rootReducer = combineReducers({
  addToCart: cartReducer,
  addToFavorite: favoriteReducer,
});

export default rootReducer;
