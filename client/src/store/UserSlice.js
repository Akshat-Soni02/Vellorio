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
    },
    login_creator: (state, action) => {
      state.isAuthenticated = true;
      state.loading = false;
      
      // Merge old user data with new user data
      state.user = {
          ...state.user,
          description:action.payload.description,
          languages: action.payload.languages,
          education: action.payload.education,
          skills: action.payload.skills,
          // Add other fields as needed
      };
  },
  
  },
});

export const { login, logout, setLoading, resetLoading, setCurrentUser,login_creator} = userSlice.actions;
export default userSlice.reducer;