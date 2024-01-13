import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  loading: false,
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.user = action.payload;
    },
    login: (state,action) => {
      state.isAuthenticated = true;
      state.loading = false;
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
    },
    setLoading: (state) => {
      state.loading = true;
    },
    resetLoading: (state) => {
      state.loading = false;
    }
  },
});

export const { login, logout, setLoading, resetLoading, setCurrentUser} = userSlice.actions;
export default userSlice.reducer;