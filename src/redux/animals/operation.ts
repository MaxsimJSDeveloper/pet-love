import { createAsyncThunk } from "@reduxjs/toolkit";
import { AnimalResponse } from "./types";
import axios from "axios";

export const fetchAnimals = createAsyncThunk<AnimalResponse>(
  "animal/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/notices`);
      return response.data;
    } catch (e) {
      if (e instanceof Error) {
        return thunkAPI.rejectWithValue(e.message);
      }
      return thunkAPI.rejectWithValue("Unknown error occurred");
    }
  }
);
