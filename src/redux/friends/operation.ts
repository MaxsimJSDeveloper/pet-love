import { createAsyncThunk } from "@reduxjs/toolkit";
import { PetFriend } from "./types";
import axiosInstance from "@api/axiosInstance";
import { handleThunkError } from "@utils/handleThunkError";

export const fetchFriends = createAsyncThunk<
  PetFriend[],
  void,
  { rejectValue: string }
>("friends/fetchAll", async (_, thunkAPI) => {
  try {
    const response = await axiosInstance.get("/friends");
    return response.data;
  } catch (e) {
    return handleThunkError(e, thunkAPI);
  }
});
