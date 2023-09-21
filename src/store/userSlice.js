import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "userLogin",
  initialState: {
    isLoggedIn: false,
    user: { name: "name", email: "email", password: "password" },
  },
  reducers: {
    setIsLoggedIn(state, action) {
      state.isLoggedIn = !state.isLoggedIn;
      state.user = action.payload;
    },
  },
});

export const { setIsLoggedIn } = userSlice.actions;
export default userSlice.reducer;
