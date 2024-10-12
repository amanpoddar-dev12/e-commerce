import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProductData = createAsyncThunk(
  "products/fetchProductData",
  async () => {
    const response = await fetch(`https://api.escuelajs.co/api/v1/products`);
    return response.json();
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductData.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProductData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
