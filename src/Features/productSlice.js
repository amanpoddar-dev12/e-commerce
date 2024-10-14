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
    products: [], // Original products list
    filteredProducts: [], // For filtered products
    loading: false,
    error: null,
  },
  reducers: {
    Clothes: (state) => {
      state.filteredProducts = state.products.filter(
        (product) => product.category.name === "Clothes"
      );
    },
    Furniture: (state) => {
      state.filteredProducts = state.products.filter(
        (product) => product.category.name === "Furniture"
      );
    },
    Electronics: (state) => {
      state.filteredProducts = state.products.filter(
        (product) => product.category.name === "Electronics"
      );
    },
    Shoes: (state) => {
      state.filteredProducts = state.products.filter(
        (product) => product.category.name === "Shoes"
      );
    },
    resetFilters: (state) => {
      state.filteredProducts = state.products; // Reset filters
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductData.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.filteredProducts = action.payload; // Set both products and filteredProducts
      })
      .addCase(fetchProductData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { Clothes, Furniture, Electronics, Shoes, resetFilters } =
  productSlice.actions;

export default productSlice.reducer;
