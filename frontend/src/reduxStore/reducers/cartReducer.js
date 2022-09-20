import { createSlice } from "@reduxjs/toolkit";
import { isEmpty } from "lodash";

const cartItems = localStorage.getItem("cart");

const initialState = {
  cartItems: cartItems && !isEmpty(cartItems) ? JSON.parse(cartItems) : [],
};

const cartReducer = createSlice({
  initialState,
  name: "cart",
  reducers: {
    addToCart: (state, action) => {
      const exist = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (!exist) {
        state.cartItems = [...state.cartItems, action.payload];
      } else {
        const prev = state.cartItems.map(
          (item) => item._id === exist._id ? action.payload : item
        );
        state.cartItems = [...prev];
      }

      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action) => {
      const exist = state.cartItems.filter(
        (item) => item._id !== action.payload
      );
      state.cartItems = [...exist];
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
  },
});

export const { addToCart, removeFromCart } = cartReducer.actions;

export default cartReducer.reducer;
