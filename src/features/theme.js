import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  colors: {
    dark: "#e3e3e3",
    white: "#ffffff",
    body: "#F1F1F1",
    text: "#747474",
    primary: "#57EFDD",
    primaryLight: "#6eebe736",
    danger: "#FF5050",
  },
  darkmode: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    setDefaultTheme(state) {
      state = initialState;
    },
  },
});

export const { setDefaultTheme } = themeSlice.actions;

export default themeSlice.reducer;
