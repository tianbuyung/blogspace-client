import { configureStore } from "@reduxjs/toolkit";

import userReducer from "store/auth";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
