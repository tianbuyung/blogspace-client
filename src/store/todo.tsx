import { createSlice } from "@reduxjs/toolkit";

interface ITodoList {
  id: number;
  userId: string;
  todo: string;
  deletedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

interface ITodoState {
  todoList: ITodoList[];
}

const initialState: ITodoState = {
  todoList: [],
};

const todoSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getTodoList: (state, action) => {
      state.todoList = action.payload;
    },
  },
});

export const { getTodoList } = todoSlice.actions;

export default todoSlice.reducer;
