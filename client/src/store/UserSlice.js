import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // currentUser: null,
  isAuthenticated: false,
  loading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // setCurrentUser: (state, action) => {
    //   state.currentUser = action.payload;
    //   state.isAuthenticated = true;
    //   state.loading = false;
    //   state.error = null;
    // },
    login: (state) => {
      state.isAuthenticated = true;
      state.loading = false;
    },
    logout: (state) => {
      // state.currentUser = null;
      state.isAuthenticated = false;
      state.loading = false;
      // state.error = null;
    },
    setLoading: (state) => {
      state.loading = true;
    }
  },
});

export const { login, logout, setLoading} = userSlice.actions;
export default userSlice.reducer;