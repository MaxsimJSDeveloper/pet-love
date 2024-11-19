import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { NewsResponse } from "./types";

axios.defaults.baseURL = "https://petlove.b.goit.study/api";

export const fetchNews = createAsyncThunk<
  NewsResponse,
  { currentPage: number; perPage: number },
  { rejectValue: string }
>("news/fetchAll", async ({ currentPage, perPage }, thunkAPI) => {
  try {
    if (currentPage <= 0 || perPage <= 0) {
      throw new Error("Invalid pagination parameters");
    }

    const params = new URLSearchParams();
    params.append("page", String(currentPage));
    params.append("perPage", String(perPage));

    const response = await axios.get(`/news?${params.toString()}`);
    return response.data;
  } catch (e) {
    if (e instanceof Error) {
      return thunkAPI.rejectWithValue(e.message);
    }
    return thunkAPI.rejectWithValue("Unknown error occurred");
  }
});
