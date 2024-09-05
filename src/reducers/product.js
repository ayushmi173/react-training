import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    total_products: [],
  },
  reducers: {
    addproduct: (state, action) => {
      state.total_products = [...state.total_products, action.payload];
    },
  },
});

export const { addproduct } = productSlice.actions;
export const products = productSlice.reducer;
