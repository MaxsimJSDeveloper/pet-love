import { createAsyncThunk } from "@reduxjs/toolkit";
import { PetFriend } from "./types";
import axiosInstance from "@api/axiosInstance";

export const fetchFriends = createAsyncThunk<
  PetFriend[],
  void,
  { rejectValue: string }
>("friends/fetchAll", async (_, thunkAPI) => {
  try {
    const response = await axiosInstance.get("/friends");
    return response.data;
  } catch (e) {
    if (e instanceof Error) {
      return thunkAPI.rejectWithValue(e.message);
    }
    return thunkAPI.rejectWithValue("Unknown error");
  }
});
