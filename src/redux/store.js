import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../Features/productSlice"; // Import the slice

const store = configureStore({
  reducer: {
    product: productSlice, // Use the product reducer
  },
});

export default store;
