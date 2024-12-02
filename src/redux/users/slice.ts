import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { responseTypes, usersSliceStateTypes } from "./types";
import { signIn, signOut, signUp } from "./operation";

// Начальное состояние, которое будет заполнено при восстановлении данных через redux-persist
const initialState: usersSliceStateTypes = {
  user: null,
  token: null,
  isLoading: false,
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      signIn.fulfilled,
      (state, action: PayloadAction<responseTypes>) => {
        state.isLoading = false;
        state.user = {
          name: action.payload.name,
          email: action.payload.email,
        };
        state.token = action.payload.token;
        state.error = null;
      }
    );
    builder.addCase(signIn.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(signIn.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });

    builder.addCase(
      signUp.fulfilled,
      (state, action: PayloadAction<responseTypes>) => {
        state.isLoading = false;
        state.user = {
          name: action.payload.name,
          email: action.payload.email,
        };
        state.token = action.payload.token;
        state.error = null;
      }
    );
    builder.addCase(signUp.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });

    builder.addCase(signOut.fulfilled, (state) => {
      state.user = null;
      state.token = null;
      state.error = null;
    });
    builder.addCase(signOut.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
  },
});

export const usersReducer = usersSlice.reducer;
