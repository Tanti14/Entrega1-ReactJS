import { createSlice } from "@reduxjs/toolkit";
import {
  addItemToCart,
  removeItemFromCart,
  resetShippingCost,
} from "./cartFunctions";

/* const SHIPPING_COST = 1200; */

const INITAL_STATE = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: INITAL_STATE,
  reducers: {
    addToCart: (state, action) => {
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    },
    removeFromCart: (state, action) => {
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    },
    clearCart: (state, action) => {
      return {
        ...state,
        cartItems: [],
      };
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
