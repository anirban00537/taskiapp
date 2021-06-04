import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    authenticated: null,
  },
  reducers: {
    setAuthTrue: (state) => {
      state.authenticated = true;
    },
    setAuthFalse: (state) => {
      state.authenticated = false;
    },
  },
});

export const { setAuthTrue, setAuthFalse } = authSlice.actions;

export default authSlice.reducer;
