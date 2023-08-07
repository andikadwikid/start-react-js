import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./actions/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

console.log("store : ", store.getState());

store.subscribe(() => {
  console.log("on subscribe : ", store.getState());
});

export default store;
