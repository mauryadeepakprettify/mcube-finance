import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/modalSlice";
import uiReducer from "./slices/uiSlice";

const store = configureStore({
  reducer: {
    modal: modalReducer,
    ui: uiReducer,
  },
});

export default store;
