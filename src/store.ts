import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/users/usersSlice";
import photosReducer from "./features/photos.js";
import themeReducer from "./features/theme.js";

export const store = configureStore({
  reducer: {
    users: userReducer,
    photos: photosReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
