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
    addCart: (state, action) => {
      const newProduct = action.payload; // Get the new product from the action payload
      const existingProductIndex = state.cartProducts.findIndex(
        (product) => product.uid === newProduct.uid // Check if the product already exists by UID
      );

      if (existingProductIndex !== -1) {
        // If product exists
        const existingProduct = state.cartProducts[existingProductIndex];
        if (
          newProduct.quantity > existingProduct.quantity ||
          newProduct.quantity < existingProduct.quantity
        ) {
          // If new quantity is greater than the existing one, update it
          state.cartProducts[existingProductIndex] = {
            ...existingProduct,
            quantity: newProduct.quantity,
          };
        }
      } else {
        // If product doesn't exist in cart, add it
        state.cartProducts.push(newProduct);
      }

      console.log("inside addCart slice");
    },
    addCartQuantity: (state, action) => {
      state.cartProducts = state.cartProducts.map((product) =>
        product.uid === action.payload.uid
          ? { ...product, quantity: action.payload.quantity }
          : product
      );
    },
    totalCartPrice: (state) => {
      state.total =
        state.cartProducts.length > 0
          ? state.cartProducts.reduce(
              (sum, item) => sum + item.price * item.quantity,
              0
            )
          : 0;
    },
    removeCartProduct: (state, action) => {
      console.log(state.cartProducts);
      state.cartProducts = state.cartProducts.filter((item) => {
        console.log("Current item uid:", item.uid);
        return item.uid !== action.payload;
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
    UpdateWishListProductQuantity: (state, action) => {
      state.wishlistProducts = state.wishlistProducts.map((product) =>
        product.uid === action.payload.uid
          ? { ...product, quantity: action.payload.quantity }
          : product
      );
    },
    RemoveWishListProducts: (state, action) => {
      state.wishlistProducts = state.wishlistProducts.filter(
        (product) => product.uid !== action.payload
      );
    },
    TrackWishListItem: (state, action) => {
      state.products = state.products.map((product) =>
        product.id === action.payload
          ? { ...product, wishlist: !product.wishlist }
          : product
      );
      console.log(action.payload);
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
  addCart,
  totalCartPrice,
  removeCartProduct,
  UpdateWishListProduct,
  RemoveWishListProducts,
  UpdateWishListProductQuantity,
  cartProducts,
  addCartQuantity,
  wishlistProducts,
  TrackWishListItem,
  total,
} = productSlice.actions;

export const { useGetProductsQuery, useGetProductsByIdQuery } =
  createProductsApi;

export default productSlice.reducer;
