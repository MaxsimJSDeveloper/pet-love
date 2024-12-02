import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { responseTypes } from "./types";

export const signIn = createAsyncThunk<
  responseTypes,
  { email: string; password: string },
  { rejectValue: string }
>("users/signIn", async ({ email, password }, thunkAPI) => {
  try {
    const response = await axios.post("/users/signin", { email, password });
    return response.data;
  } catch (e) {
    if (e instanceof Error) {
      return thunkAPI.rejectWithValue(e.message);
    }
    return thunkAPI.rejectWithValue("Unknown error occurred");
  }
});

export const signUp = createAsyncThunk<
  responseTypes,
  { name: string; email: string; password: string },
  { rejectValue: string }
>("users/signUp", async ({ name, email, password }, thunkAPI) => {
  try {
    const response = await axios.post("/users/signup", {
      name,
      email,
      password,
    });
    return response.data;
  } catch (e) {
    if (e instanceof Error) {
      return thunkAPI.rejectWithValue(e.message);
    }
    return thunkAPI.rejectWithValue("Unknown error occurred");
  }
});
