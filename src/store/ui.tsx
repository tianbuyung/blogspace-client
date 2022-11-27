import { createSlice } from "@reduxjs/toolkit";

interface IUiState {
  addTodoVisible: boolean;
  editTodoVisible: boolean;
}

const initialState: IUiState = {
  addTodoVisible: false,
  editTodoVisible: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleAddTodo: (state) => {
      state.addTodoVisible = !state.addTodoVisible;
    },
    toggleEditTodo: (state) => {
      state.editTodoVisible = !state.editTodoVisible;
    },
  },
});

export const { toggleAddTodo, toggleEditTodo } = uiSlice.actions;

export default uiSlice.reducer;
