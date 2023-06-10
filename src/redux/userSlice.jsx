import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    signedInUser: null,
  },
  reducers: {
    getSignedInUser: (state, action) => {
      state.signedInUser = action.payload;
    },
    logOut: (state, action) => {
      state.signedInUser = action.payload;
    },
  },
});

export const { getSignedInUser, logOut } = userSlice.actions;

export default userSlice.reducer;
