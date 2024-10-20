import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { enableMapSet } from "immer";
enableMapSet();
export const fetchProductData = createAsyncThunk(
  "products/fetchProductData",
  async () => {
    const response = await fetch("https://dummyjson.com/products");
    return response.json();
  }
);

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
    Clothes: (state) => {
      state.filteredProducts = state.products.products.filter(
        (product) => product.category === "Clothes"
      );
    },
    Groceries: (state) => {
      state.filteredProducts = state.products.products.filter(
        (product) => product.category === "groceries"
      );
    },

    Furniture: (state) => {
      state.filteredProducts = state.products.products.filter(
        (product) => product.category === "furniture"
      );
    },
    Beauty: (state) => {
      state.filteredProducts = state.products.products.filter(
        (product) => product.category === "beauty"
      );
      console.log("Inside beauty slice ");
      console.log(state.products.products);
      console.log(state.filteredProducts);
    },
    Shoes: (state) => {
      state.filteredProducts = state.products.products.filter(
        (product) => product.category === "shoes"
      );
    },
    Fragrances: (state) => {
      state.filteredProducts = state.products.products.filter(
        (product) => product.category === "fragrances"
      );
    },
    resetFilters: (state) => {
      state.filteredProducts = state.products.products; // Reset filters
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductData.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.filteredProducts = action.payload;
      })
      .addCase(fetchProductData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {
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
// export productSlice.selectors
export default productSlice.reducer;
