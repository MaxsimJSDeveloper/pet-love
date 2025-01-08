import { createAsyncThunk } from "@reduxjs/toolkit";
import { AnimalResponse } from "./types";
import axios from "axios";

export const fetchAnimals = createAsyncThunk<
  AnimalResponse,
  {
    keyword: string;
    filters: { [key: string]: string };
    sorters: { byPrice: boolean | null; byPopularity: boolean | null };
    currentPage: number;
    perPage: number;
  },
  { rejectValue: string }
>(
  "animal/fetchAll",
  async ({ keyword, filters, sorters, currentPage, perPage }, thunkAPI) => {
    try {
      if (currentPage <= 0 || perPage <= 0) {
        throw new Error("Invalid pagination parameters");
      }

      const params = new URLSearchParams();

      params.append("page", String(currentPage));
      params.append("limit", String(perPage));

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
  }
);
