import { configureStore } from "@reduxjs/toolkit";

import authReducer from "@store/auth";
import todoReducer from "@store/todo";
import uiReducer from "@store/ui";

export const store = configureStore({
  reducer: {
    login: authReducer,
    todo: todoReducer,
    ui: uiReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
