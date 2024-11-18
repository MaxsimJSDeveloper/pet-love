import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PetFriend } from "./types";

export const fetchFriends = createAsyncThunk<
  PetFriend[],
  void,
  { rejectValue: string }
>("friends/fetchAll", async (_, thunkAPI) => {
  try {
    const response = await axios.get("/friends");
    return response.data;
  } catch (e) {
    if (e instanceof Error) {
      return thunkAPI.rejectWithValue(e.message);
    }
    return thunkAPI.rejectWithValue("Unknown error");
  }
});
