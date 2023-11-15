import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
      state.error = null;
    },
    logout: (state) => {
      state.currentUser = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state) => {
      state.loading = true;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

// export const loginAction = (userData) => async (dispatch) => {
//   try {
//     dispatch(setLoading());

//     // Call the login API
//     const response = await loginApi(userData);

//     // Dispatch the setCurrentUser action with the user data if successful
//     dispatch(setCurrentUser(response.data));
//   } catch (error) {
//     dispatch(setError(error.message));
//   }
// };

export const { setCurrentUser, logout, setLoading, setError } = userSlice.actions;
export default userSlice.reducer;