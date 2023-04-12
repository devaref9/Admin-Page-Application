import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users";
import photosReducer from "../features/photos";
import themeReducer from "../features/theme";

export const store = configureStore({
  reducer: {
    users: userReducer,
    photos: photosReducer,
    theme: themeReducer,
  },
});
