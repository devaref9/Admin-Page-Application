import {
  createSlice,
  nanoid,
  createAsyncThunk,
  PayloadAction,
} from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../store";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: object;
  phone: string;
  website: string;
  company: object;
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get<User[]>(USERS_URL);
  return response.data;
});

export const addNewUser = createAsyncThunk(
  "users/addNewUser",
  async (initialUser: Partial<User>) => {
    const response = await axios.post(USERS_URL, initialUser);
    return response.data;
  }
);

export const updateUser = createAsyncThunk(
  "users/updateUser",
  async (initialUser: Partial<User>) => {
    const { id } = initialUser;
    const response = await axios.put(`${USERS_URL}/${id}`, initialUser);
    return response.data;
  }
);

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (initialUser: Partial<User>) => {
    const { id } = initialUser;
    const response = await axios.delete(`${USERS_URL}/${id}`);
    if (response?.status === 200) return initialUser;
    return response?.status;
  }
);

interface UserState {
  status: string;
  selectedUsersId: number[] | null;
  value: User[] | null;
  filteredUsers: User[] | null;
  error: string | null;
}

export const userSlice = createSlice({
  name: "users",
  initialState: {
    value: null,
    selectedUsersId: null,
    filteredUsers: null,
    status: "idle", // 'idle' Or 'Loading' Or 'Succeeded' Or 'Failed'
    error: null,
  } as UserState,
  reducers: {
    addUser: (state, action) => {
      const isExisted = state.value?.find(
        (user: any) => user.id.value === action.payload.id.value
      );

      if (isExisted) {
        const newState = state.value?.filter(
          (user: any) => user.id.value !== action.payload.id.value
        );
        if (newState) {
          state.value = [action.payload, ...newState];
        }
      } else {
        if (action.payload.id.value === "") {
          const userAutoID = nanoid(10);
          action.payload.id.value = userAutoID;
        }
        if (state.value) {
          state.value = [action.payload, ...state.value];
        } else {
          state.value = [action.payload];
        }
      }
    },

    updateSingleUserSelected: (state, { payload }) => {
      const isUserExisted = state.selectedUsersId?.includes(payload.id);

      if (!isUserExisted) {
        if (state.selectedUsersId && state.selectedUsersId.length > 0) {
          state.selectedUsersId.push(payload.id);
        } else {
          state.selectedUsersId = [payload.id];
        }
      } else {
        const newSelectedUsersId = state.selectedUsersId?.filter(
          (id) => id !== payload.id
        );
        state.selectedUsersId = newSelectedUsersId || null;
      }
    },

    updateSelectedUsersId: (state, action) => {
      switch (action.payload.type) {
        case "SELECT_ALL":
          state.selectedUsersId =
            state.value?.map((user) => {
              return user.id;
            }) || null;

          break;
        case "DESELECT_ALL":
          state.selectedUsersId = null;
          break;
        default:
          return;
      }
    },

    setFilteredUsers: (state, { payload }) => {
      const { searchKey } = payload;
      let currentUsers: User[] = [];
      let unSelectedUsers: User[] = [];
      let selectedUsers: User[] = [];
      if (state.value) {
        state.value.forEach((user) => {
          if (user.name.toLowerCase().includes(searchKey.toLowerCase())) {
            currentUsers.push(user);
          }
        });

        unSelectedUsers = currentUsers.filter((user) => {
          if (state.selectedUsersId)
            return state.selectedUsersId.indexOf(user.id) === -1;
          return true;
        });
        selectedUsers = state.selectedUsersId
          ? state.value.filter((user) => {
              if (state.selectedUsersId)
                return state.selectedUsersId.indexOf(user.id) !== -1;
              return false;
            })
          : [];
      }

      state.filteredUsers = [...selectedUsers, ...unSelectedUsers];
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.status = "succeeded";
        state.value = action.payload;
        state.filteredUsers = state.value;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        console.log("fetching failed!", action);
        // state.error = action.error.message;
      })
      .addCase(addNewUser.fulfilled, (state, action: PayloadAction<any>) => {
        console.log(action.payload);
        if (state.value) {
          state.value.push(action.payload);
        } else {
          state.value = [action.payload];
        }
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        payload.id = Number(payload.id);
        const newUsers =
          state.value && state.value.filter((user) => user.id !== payload.id);
        state.value = newUsers;
        if (newUsers) {
          state.value = [...newUsers, payload];
        } else {
          state.value = [payload];
        }
      })
      .addCase(deleteUser.fulfilled, (state, action: PayloadAction<any>) => {
        action.payload.id = Number(action.payload.id);
        const newUsers = state.value?.filter(
          (user) => user.id !== action.payload.id
        );
        const newSelectedUsersId = state.selectedUsersId?.filter(
          (id) => id !== action.payload.id
        );
        state.selectedUsersId = newSelectedUsersId || null;
        state.value = newUsers || null;
      });
  },
});

export const {
  addUser,
  updateSingleUserSelected,
  updateSelectedUsersId,
  setFilteredUsers,
} = userSlice.actions;

export const getUserById = (state: RootState, userId: number) => {
  return state.users.value?.find((user: User) => user.id === userId);
};

export const getFilteredUsers = (state: RootState) => {
  return state.users.filteredUsers;
};

export default userSlice.reducer;
