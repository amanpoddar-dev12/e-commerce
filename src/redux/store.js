import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../Features/productSlice";
import { createProductsApi } from "../Features/productSlice";

const store = configureStore({
  reducer: {
    product: productSlice,
    [createProductsApi.reducerPath]: createProductsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(createProductsApi.middleware),
});

export default store;
