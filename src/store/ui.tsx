import { createSlice } from "@reduxjs/toolkit";

interface IUiState {
  addTodoVisible: boolean;
}

const initialState: IUiState = {
  addTodoVisible: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleAddTodo: (state) => {
      state.addTodoVisible = !state.addTodoVisible;
    },
  },
});

export const { toggleAddTodo } = uiSlice.actions;

export default uiSlice.reducer;
