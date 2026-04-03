import { createAsyncThunk } from "@reduxjs/toolkit";
import { responseTypes } from "./types";
import axiosInstance from "@api/axiosInstance";
import { handleThunkError } from "@utils/handleThunkError";

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
    return handleThunkError(e, thunkAPI);
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
    return handleThunkError(e, thunkAPI);
  }
});

export const signOut = createAsyncThunk<
  { message: string },
  void,
  { rejectValue: string }
>("users/signOut", async (_, thunkAPI) => {
  try {
    const response = await axiosInstance.post("/users/signout");

    return response.data;
  } catch (e) {
    return handleThunkError(e, thunkAPI);
  }
});
