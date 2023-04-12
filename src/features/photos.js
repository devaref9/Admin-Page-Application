import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const PHOTOS_URL = "https://jsonplaceholder.typicode.com/albums/1/photos";

export const fetchPhotos = createAsyncThunk("photos/fetchPhotos", async () => {
  try {
    const response = await axios.get(PHOTOS_URL);
    return response.data;
  } catch (err) {
    return err.message;
  }
});

export const photosSlice = createSlice({
  name: "photos",
  initialState: {
    value: [],
    status: "idle", // 'idle' Or 'Loading' Or 'Succeeded' Or 'Failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhotos.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPhotos.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.value = payload;
      })
      .addCase(fetchPhotos.rejected, (state, action) => {
        state.status = "failed";
        console.log(action);
        // state.error = action.error.message;
      });
  },
});

export default photosSlice.reducer;
