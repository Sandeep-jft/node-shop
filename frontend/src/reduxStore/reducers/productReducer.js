import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  error: "",
};

const productReducer = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload;
    },
    fetchProductsError: (state, action) => {
      state.error = action.payload.message || action.payload.error;
    },
  },
});

export const { getProducts, fetchProductsError } = productReducer.actions;

export default productReducer.reducer;
