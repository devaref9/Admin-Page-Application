import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  colors: {
    dark: "#e3e3e3",
    white: "#ffffff",
    body: "#F1F6F9",
    text: "#393646",
    primary: "#394867",
    primaryLight: "#9BA4B5",
    primaryDark: "#212A3E",
    danger: "#ED2B2A",
    bg: "212A3E"
  },
  media: { small: "645px", large: "992px" },
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
