import { createAsyncThunk } from "@reduxjs/toolkit";
import { responseTypes, usersSliceStateTypes } from "./types";
import axiosInstance from "@api/axiosInstance";

export const signIn = createAsyncThunk<
  responseTypes,
  { email: string; password: string },
  { rejectValue: string }
>("users/signIn", async ({ email, password }, thunkAPI) => {
  try {
    const response = await axiosInstance.post("/users/signin", {
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

export const signUp = createAsyncThunk<
  responseTypes,
  { name: string; email: string; password: string },
  { rejectValue: string }
>("users/signUp", async ({ name, email, password }, thunkAPI) => {
  try {
    const response = await axiosInstance.post("/users/signup", {
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

export const signOut = createAsyncThunk<
  { message: string },
  void,
  { rejectValue: string }
>("users/signOut", async (_, thunkAPI) => {
  const state = thunkAPI.getState() as { users: usersSliceStateTypes };
  const token = state.users.token;

  try {
    const response = await axiosInstance.post("/users/signout", null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (e) {
    if (e instanceof Error) {
      return thunkAPI.rejectWithValue(e.message);
    }
    return thunkAPI.rejectWithValue("Unknown error occurred");
  }
});
