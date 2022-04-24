import { configureStore } from "@reduxjs/toolkit";
import apiReducer from './apiSlice';
import messageReducer from './messageSlice';


export const store = configureStore({
  reducer: {
    api: apiReducer,
    msg: messageReducer,
  }
});