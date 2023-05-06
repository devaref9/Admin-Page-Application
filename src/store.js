import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/users/usersSlice.js";
import photosReducer from "./features/photos.js";
import themeReducer from "./features/theme.js";

export const store = configureStore({
  reducer: {
    users: userReducer,
    photos: photosReducer,
    theme: themeReducer,
  },
});
