import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get(USERS_URL);
  return response.data;
});

export const addNewUser = createAsyncThunk(
  "users/addNewUser",
  async (initialUser) => {
    const response = await axios.post(USERS_URL, initialUser);
    return response.data;
  }
);

export const updateUser = createAsyncThunk(
  "users/updateUser",
  async (initialUser) => {
    const { id } = initialUser;
    const response = await axios.put(`${USERS_URL}/${id}`, initialUser);
    return response.data;
  }
);

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (initialUser) => {
    const { id } = initialUser;
    const response = await axios.delete(`${USERS_URL}/${id}`);
    if (response?.status === 200) return initialUser;
    return response?.status;
  }
);

export const userSlice = createSlice({
  name: "users",
  initialState: {
    value: [],
    selectedUsersId: [],
    filteredUsers: [],
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

    setFilteredUsers: (state, { payload }) => {
      const { searchKey } = payload;
      const currentUsers = [];

      state.value.forEach((user) => {
        if (user.name.toLowerCase().includes(searchKey.toLowerCase())) {
          currentUsers.push(user);
        }
      });
      const unSelectedUsers = currentUsers.filter((user) => {
        return state.selectedUsersId.indexOf(user.id) === -1;
      });
      const selectedUsers = state.selectedUsersId
        ? state.value.filter((user) => {
            return state.selectedUsersId.indexOf(user.id) !== -1;
          })
        : [];

      state.filteredUsers = [...selectedUsers, ...unSelectedUsers];
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
        state.filteredUsers = state.value;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        console.log("fetching failed!", action);
        // state.error = action.error.message;
      })
      .addCase(addNewUser.fulfilled, (state, { payload }) => {
        state.value.push(payload);
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        payload.id = Number(payload.id);
        const newUsers = state.value.filter((user) => user.id !== payload.id);
        state.value = newUsers;
        state.value = [...newUsers, payload];
      })
      .addCase(deleteUser.fulfilled, (state, { payload }) => {
        payload.id = Number(payload.id);
        const newUsers = state.value.filter((user) => user.id !== payload.id);
        const newSelectedUsersId = state.selectedUsersId.filter(
          (id) => id !== payload.id
        );
        state.selectedUsersId = newSelectedUsersId;
        state.value = newUsers;
      });
  },
});

export const {
  addUser,
  updateSingleUserSelected,
  updateCheck,
  updateSelectedUsersId,
  setFilteredUsers,
} = userSlice.actions;

export const getUserById = (state, userId) => {
  return state.users.value.find((user) => user.id === userId);
};

export const getFilteredUsers = (state) => {
  return state.users.filteredUsers;
};

export default userSlice.reducer;
