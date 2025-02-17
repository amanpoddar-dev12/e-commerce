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
    searchProducts: [],
    cartProducts: [],
    loading: false,
    error: null,
    total: 0,
    wishlistProducts: [],
    orderItems: [],
    orderTotal: 0,
  },
  reducers: {
    getProductsData: (state, action) => {
      state.products = action.payload;
      // console.log(state.products);
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
      // console.log("Inside beauty slice ");
      // console.log(state.products.products);
      // console.log(state.filteredProducts);
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

    searchProducts: (state, action) => {
      // action.payload.length===0?
      state.searchProducts = state.products;
      // console.log(action.payload);
      let query = action.payload;
      // query = query.split("")[0];
      const cleanQuery = query.replace(/[\[\]" ]/g, "").toLowerCase();
      console.log(cleanQuery);
      state.searchProducts = state.products.filter((product) => {
        const productTitle = product.title;

        return productTitle.toLowerCase().includes(cleanQuery);
      });
      console.log(state.products);
      console.log(state.searchProducts);
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
    updateProductsWishlist: (state, action) => {
      state.products = state.products.map((product) =>
        product.id === action.payload.uid
          ? { ...product, wishlist: action.payload.wishlist }
          : product
      );
    },
    updateCartWishlist: (state, action) => {
      state.cartProducts = state.cartProducts.map((product) =>
        product.uid === action.payload.uid
          ? { ...product, wishlist: action.payload.wishlist }
          : product
      );
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
    totalOrderPrice: (state) => {
      state.orderTotal =
        state.orderItems.length > 0
          ? state.orderItems.reduce(
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
    resetCart: (state) => {
      state.cartProducts = [];
    },
    resetCartTotal: (state) => {
      state.total = 0;
    },
    setOrder: (state) => {
      state.orderItems = state.cartProducts;
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

  searchProducts,
  Groceries,
  addCart,
  updateProductsWishlist,
  totalCartPrice,
  totalOrderPrice,
  updateCartWishlist,
  removeCartProduct,
  resetCart,
  setOrder,
  orderTotal,
  resetCartTotal,

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
