import { createAsyncThunk } from "@reduxjs/toolkit";
import { AnimalIdResponse, AnimalResponse } from "./types";
import axiosInstance from "@api/axiosInstance";
import { handleThunkError } from "@utils/handleThunkError";

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

      const response = await axiosInstance.get(`/notices?${params.toString()}`);
      return response.data;
    } catch (e) {
      return handleThunkError(e, thunkAPI);
    }
  },
);

export const fetchAnimalById = createAsyncThunk<
  AnimalIdResponse,
  string,
  { rejectValue: string }
>("animals/fetchById", async (id, thunkAPI) => {
  try {
    const response = await axiosInstance.get(`/notices/${id}`);

    return response.data;
  } catch (e) {
    return handleThunkError(e, thunkAPI);
  }
});

export const fetchFilters = createAsyncThunk<
  { category: string[]; sex: string[]; species: string[] },
  void,
  { rejectValue: string }
>("animals/fetchFilters", async (_, thunkAPI) => {
  try {
    const [categoryRes, sexRes, speciesRes] = await Promise.all([
      axiosInstance.get("/notices/categories"),
      axiosInstance.get("/notices/sex"),
      axiosInstance.get("/notices/species"),
    ]);

    return {
      category: categoryRes.data,
      sex: sexRes.data,
      species: speciesRes.data,
    };
  } catch (e) {
    return handleThunkError(e, thunkAPI);
  }
});
