import { createAsyncThunk } from "@reduxjs/toolkit";
import { AnimalResponse } from "./types";
import axios from "axios";

export const fetchAnimals = createAsyncThunk<
  AnimalResponse,
  { keyword: string },
  { rejectValue: string }
>("animal/fetchAll", async ({ keyword }, thunkAPI) => {
  try {
    const params = new URLSearchParams();
    if (keyword) {
      params.append("keyword", keyword);
    }

    const response = await axios.get(`/notices?${params?.toString()}`);
    return response.data;
  } catch (e) {
    if (e instanceof Error) {
      return thunkAPI.rejectWithValue(e.message);
    }
    return thunkAPI.rejectWithValue("Unknown error occurred");
  }
});
