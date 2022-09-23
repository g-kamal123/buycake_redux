import { configureStore } from "@reduxjs/toolkit";
import buy_slice from "./Buy-slice";

const Store = configureStore({
  reducer: buy_slice.reducer,
});
export const actions = buy_slice.actions;

export default Store;
