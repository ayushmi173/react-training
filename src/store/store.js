import { configureStore } from "@reduxjs/toolkit";

import { products } from "../reducers/product";
import { todos } from "../reducers/todo";

const store = configureStore({
  reducer: {
    todos: todos,
    product: products,
  },
});

export default store;
