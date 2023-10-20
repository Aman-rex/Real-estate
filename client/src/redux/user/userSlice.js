import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state, action) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      (state.currentUser = action.payload),
        (state.loading = false),
        (state.error = null);
    },
    signInFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    updateUserStart: (state) => {
      state.loading = true;
    },
    updateUserSucess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    updateUserfailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    deleteUserStart: (state) => {
      state.loading = true;
    },
    deleteUserSucess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
    deleteUserFailure: (state, action) => {
      state.error = action.payload;
      state.loading = true;
    },
    signOutUserStart: (state) => {
      state.loading = true;
    },
    signOutUserSucess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
    signOutUserFailure: (state, action) => {
      state.error = action.payload;
      state.loading = true;
    },
  },
});

export const {
  signInStart,
  signInFailure,
  signInSuccess,
  updateUserStart,
  updateUserSucess,
  updateUserfailure,
  deleteUserStart,
  deleteUserSucess,
  deleteUserFailure,
  signOutUserStart,
  signOutUserSucess,
  signOutUserFailure
} = userSlice.actions;
export const userReducer = userSlice.reducer;
export const userSelector = (state) => state.user;
