import { combineReducers } from "redux";
import cartReducer from "./carts/cartReducer";

const rootReducer = combineReducers({
  addToCart: cartReducer,
});

export default rootReducer;
