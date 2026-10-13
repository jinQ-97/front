import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../src/authSlice"

const store = configureStore({
  reducer: {
    //myCounter: counterReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
