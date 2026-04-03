import axios from "axios";

interface ThunkAPI<R> {
  rejectWithValue: (value: string) => R;
}

export const handleThunkError = <R>(e: unknown, thunkAPI: ThunkAPI<R>): R => {
  if (axios.isAxiosError(e) && e.response?.data?.message) {
    return thunkAPI.rejectWithValue(e.response.data.message);
  }

  if (e instanceof Error) {
    return thunkAPI.rejectWithValue(e.message);
  }

  return thunkAPI.rejectWithValue("Unknown error occurred");
};
