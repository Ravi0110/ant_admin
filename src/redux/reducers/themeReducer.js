import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isDark: localStorage.getItem("theme") ? localStorage.getItem('theme') === 'dark' : false
};

export const themeReducer = createReducer(initialState, {
  ChangeTheme: (state) => {
    state.isDark = !state?.isDark;
    localStorage.setItem("theme", !state.isDark ? 'light' : 'dark')
  }
});
