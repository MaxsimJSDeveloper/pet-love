import { createSlice } from "@reduxjs/toolkit";
import { FriendsState } from "./types";
import { fetchFriends } from "./operation";

const initialState: FriendsState = {
  friends: [],
  isLoading: false,
  error: null,
};

const friendsSlice = createSlice({
  name: "friends",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFriends.pending, (state) => {
      state.isLoading = true;
    });
    builder
      .addCase(fetchFriends.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? action.error.message ?? null;
      })
      .addCase(fetchFriends.fulfilled, (state, action) => {
        state.friends = action.payload;
        state.isLoading = false;
      });
  },
});

export const friendsReducer = friendsSlice.reducer;
