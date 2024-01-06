import { createSlice } from "@reduxjs/toolkit";
import { Products, TotalProducts } from "../../data/products.js";

const INITAL_STATE = {
  products: Products,
  totalProducts: TotalProducts,
};

export const productsSlice = createSlice({
  name: "products",
  initialState: INITAL_STATE,
  reducers: {
    getProducts: (state) => {
      return state;
    },
  },
});

export const { getProducts } = productsSlice.actions;
export default productsSlice.reducer;
