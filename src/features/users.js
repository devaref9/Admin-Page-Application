import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
// import { userData } from "../FakeData";
import axios from "axios";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  try {
    const response = await axios.get(USERS_URL);
    return response.data;
  } catch (err) {
    return err.message;
  }
});

export const userSlice = createSlice({
  name: "users",
  initialState: {
    value: [],
    selectedUsersId: [],
    status: "idle", // 'idle' Or 'Loading' Or 'Succeeded' Or 'Failed'
    error: null,
  },
  reducers: {
    addUser: (state, action) => {
      const isExisted = state.value.find(
        (user) => user.id.value === action.payload.id.value
      );

      if (isExisted) {
        const newState = state.value.filter(
          (user) => user.id.value !== action.payload.id.value
        );
        state.value = [action.payload, ...newState];
      } else {
        if (action.payload.id.value === "") {
          const userAutoID = nanoid(10);
          action.payload.id.value = userAutoID;
        }
        state.value = [action.payload, ...state.value];
      }
    },

    deleteSelectedUsers: (state, action) => {
      const newState = state.value.filter((user) => !user.isSelected);
      state.value = newState;
    },

    updateSingleUserSelected: (state, { payload }) => {
      const isUserExisted = state.selectedUsersId.filter(
        (id) => payload.id === id
      ).length;
      if (!isUserExisted) {
        state.selectedUsersId.push(payload.id);
      } else {
        const newSelectedUsersId = state.selectedUsersId.filter(
          (id) => id !== payload.id
        );
        state.selectedUsersId = newSelectedUsersId;
      }
      // state.selectedUsersId.forEach((user) => {
      //   if (user.id === action.payload) {
      //     user.isSelected = !user.isSelected;
      //   }
      // });
    },

    updateSelectedUsersId: (state, action) => {
      switch (action.payload.type) {
        case "SELECT_ALL":
          state.selectedUsersId = state.value.map((user) => {
            return user.id;
          });
          break;
        case "DESELECT_ALL":
          state.selectedUsersId = [];
          break;
        default:
          return;
      }
    },

    updateCheck: (state, action) => {
      state.value.forEach((user) => {
        if (user.id.value === action.payload.id.value) {
          let allChecked = true;
          for (let item in action.payload) {
            if (
              action.payload[item].isChecked !== undefined &&
              !action.payload[item].isChecked
            ) {
              allChecked = false;
              break;
            }
          }
          user.isChecked = allChecked;
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.value = payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        console.log(action);
        // state.error = action.error.message;
      });
  },
});

export const {
  addUser,
  deleteSelectedUsers,
  updateSingleUserSelected,
  updateCheck,
  updateSelectedUsersId,
} = userSlice.actions;

export default userSlice.reducer;
