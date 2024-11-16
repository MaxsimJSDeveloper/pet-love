import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { NewsResponse } from "./types";

axios.defaults.baseURL = "https://petlove.b.goit.study/api";

export const fetchNews = createAsyncThunk<
  NewsResponse,
  void,
  { rejectValue: string }
>("news/fetchAll", async (_, thunkAPI) => {
  try {
    const response = await axios.get(`/news`);
    return response.data;
  } catch (e) {
    if (e instanceof Error) {
      return thunkAPI.rejectWithValue(e.message);
    }
    return thunkAPI.rejectWithValue("Unknown error occurred");
  }
});
