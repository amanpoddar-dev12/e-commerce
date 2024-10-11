import { createSlice } from "@reduxjs/toolkit";
import getProduct from "../Data/ProductData";
const initialState = getProduct();
const Slices = createSlice({
  name: "filter",
  initialState,
  reducers: {
    clothes: (state, action) => {
      state.map(cloth);
    },
  },
});
export default Slices;
