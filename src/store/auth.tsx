import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUser {
  userId: string;
}

interface IAuthState {
  user: IUser | null;
  isAuthenticated: boolean;
}

const initialState: IAuthState = {
  user: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.clear();
    },
  },
});

export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
