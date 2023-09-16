import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "./reducers/themeReducer";

const Store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export default Store;
