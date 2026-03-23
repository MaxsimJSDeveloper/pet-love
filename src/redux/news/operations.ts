import { createAsyncThunk } from "@reduxjs/toolkit";
import { NewsResponse } from "./types";
import axiosInstance from "../../api/axiosInstance";

export const fetchNews = createAsyncThunk<
  NewsResponse,
  { currentPage: number; perPage: number; keyword: string },
  { rejectValue: string }
>("news/fetchAll", async ({ currentPage, perPage, keyword }, thunkAPI) => {
  try {
    if (currentPage <= 0 || perPage <= 0) {
      throw new Error("Invalid pagination parameters");
    }

    const params = new URLSearchParams();
    params.append("page", String(currentPage));
    params.append("limit", String(perPage));

    if (keyword && keyword.trim() !== "") {
      params.append("keyword", keyword);
    }

    const response = await axiosInstance.get(`/news?${params.toString()}`);
    return response.data;
  } catch (e) {
    if (e instanceof Error) {
      return thunkAPI.rejectWithValue(e.message);
    }
    return thunkAPI.rejectWithValue("Unknown error occurred");
  }
});
