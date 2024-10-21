import { createSlice } from "@reduxjs/toolkit";
import { enableMapSet } from "immer";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
enableMapSet();

export const createProductsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "products",
    }),
    getProductsById: builder.query({
      query: (id) => `products/${id}`,
    }),
  }),
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    filteredProducts: [],
    cartProducts: [],
    loading: false,
    error: null,
    total: 0,
    wishlistProducts: [],
  },
  reducers: {
    getProductsData: (state, action) => {
      state.products = action.payload;
      console.log(state.products);
    },

    Clothes: (state) => {
      state.filteredProducts = state.products.filter(
        (product) => product.category === "Clothes"
      );
    },
    Groceries: (state) => {
      state.filteredProducts = state.products.filter(
        (product) => product.category === "groceries"
      );
    },

    Furniture: (state) => {
      state.filteredProducts = state.products.filter(
        (product) => product.category === "furniture"
      );
    },
    Beauty: (state) => {
      state.filteredProducts = state.products.filter(
        (product) => product.category === "beauty"
      );
      console.log("Inside beauty slice ");
      console.log(state.products.products);
      console.log(state.filteredProducts);
    },
    Shoes: (state) => {
      state.filteredProducts = state.products.filter(
        (product) => product.category === "shoes"
      );
    },
    Fragrances: (state) => {
      state.filteredProducts = state.products.filter(
        (product) => product.category === "fragrances"
      );
    },
    resetFilters: (state) => {
      state.filteredProducts = state.products; // Reset filters
    },
    getCartData: (state, action) => {
      state.cartProducts.push(action.payload);
      console.log(state.cartProducts);
      console.log("inside getCartData slice");
    },
    totalCartPrice: (state) => {
      state.total =
        state.cartProducts.length > 0
          ? state.cartProducts.reduce((sum, item) => sum + item.price, 0)
          : 0;
    },
    removeCartProduct: (state, action) => {
      console.log(state.cartProducts);
      state.cartProducts = state.cartProducts.filter((item) => {
        console.log("Current item uid:", item.uid);
        return item.uid !== action.payload; // action.payload will be the uid passed from dispatch
      });
      console.log("Updated cart products:", state.cartProducts);
    },
    UpdateWishListProduct: (state, action) => {
      console.log("inside update wishlist");
      const newProduct = action.payload;
      const updatedList = [...state.wishlistProducts, newProduct];
      state.wishlistProducts = updatedList.filter(
        (product, index, self) =>
          index === self.findIndex((p) => p.uid === product.uid)
      );
    },
  },
});

export const {
  getProductsData,
  Clothes,
  Furniture,
  Beauty,
  Shoes,
  resetFilters,
  Groceries,
  getCartData,
  totalCartPrice,
  removeCartProduct,
  UpdateWishListProduct,
} = productSlice.actions;

export const { useGetProductsQuery, useGetProductsByIdQuery } =
  createProductsApi;

export default productSlice.reducer;
