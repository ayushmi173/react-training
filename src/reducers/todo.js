import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    total_todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.total_todos = [...state.total_todos, action.payload];
    },
  },
});

export const { addTodo } = todoSlice.actions;
export const todos = todoSlice.reducer;
