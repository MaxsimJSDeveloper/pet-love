import { createAsyncThunk } from "@reduxjs/toolkit";
import { AnimalIdResponse, AnimalResponse } from "./types";
import axios from "axios";
import { store } from "../store";

export const fetchAnimals = createAsyncThunk<
  AnimalResponse,
  {
    keyword: string;
    filters: { [key: string]: string };
    sorters: { byPrice: string | null; byPopularity: string | null };
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
        const price = sorters.byPrice === "cheap" ? false : true;
        params.append("byPrice", price.toString());
      }

      if (sorters.byPopularity !== null) {
        const popularity = sorters.byPopularity === "unpopular" ? false : true;
        params.append("byPopularity", popularity.toString());
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

export const fetchAnimalById = createAsyncThunk<
  AnimalIdResponse,
  string,
  { rejectValue: string }
>("animals/fetchById", async (id, thunkAPI) => {
  try {
    const state = store.getState();
    const token = state.users.token;

    const response = await axios.get(`/notices/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message);
    }
    return thunkAPI.rejectWithValue("Unknown error occurred");
  }
});

export const fetchFilters = createAsyncThunk<
  { category: string[]; sex: string[]; species: string[] },
  void,
  { rejectValue: string }
>("animals/fetchFilters", async (_, thunkAPI) => {
  try {
    const [categoryRes, sexRes, speciesRes] = await Promise.all([
      axios.get("/notices/categories"),
      axios.get("/notices/sex"),
      axios.get("/notices/species"),
    ]);

    return {
      category: categoryRes.data,
      sex: sexRes.data,
      species: speciesRes.data,
    };
  } catch (e) {
    if (e instanceof Error) {
      return thunkAPI.rejectWithValue(e.message);
    }
    return thunkAPI.rejectWithValue("Unknown error");
  }
});
