import { configureStore } from "@reduxjs/toolkit";
// import { userReducer } from './UserSlice.js';

const store = configureStore({
    reducer: {
        // user: userReducer,
        // gig: gigReducer,
    }
});

export default store;