import { createAsyncThunk } from "@reduxjs/toolkit";
import { AnimalResponse } from "./types";
import axios from "axios";

export const fetchAnimals = createAsyncThunk<
  AnimalResponse,
  {
    keyword: string;
    filters: { [key: string]: string };
    sorters: { byPrice: boolean | null; byPopularity: boolean | null };
  },
  { rejectValue: string }
>("animal/fetchAll", async ({ keyword, filters, sorters }, thunkAPI) => {
  try {
    const params = new URLSearchParams();

    if (keyword) {
      params.append("keyword", keyword);
    }

    Object.keys(filters).forEach((filter) => {
      const value = filters[filter];
      if (value) {
        params.append(filter, value);
      }
    });

    if (sorters.byPrice !== null) {
      params.append("byPrice", sorters.byPrice.toString());
    }
    if (sorters.byPopularity !== null) {
      params.append("byPopularity", sorters.byPopularity.toString());
    }

    const response = await axios.get(`/notices?${params.toString()}`);
    return response.data;
  } catch (e) {
    if (e instanceof Error) {
      return thunkAPI.rejectWithValue(e.message);
    }
    return thunkAPI.rejectWithValue("Unknown error occurred");
  }
});
