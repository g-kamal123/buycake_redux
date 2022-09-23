import { createSlice } from "@reduxjs/toolkit";

export const numcake = { numberofcake: 10 };
const buy_slice = createSlice({
  name: "cake",
  initialState: numcake,
  //creating reducer
  reducers: {
    buycake(state, action) {
      if (state.numberofcake >= 1) state.numberofcake--;
    },
  },
});
export default buy_slice;
