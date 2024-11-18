import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchNews } from "./operations";
import { NewsResponse, NewsState } from "./types";

const initialState: NewsState = {
  news: [],
  currentPage: 1,
  total: 0,
  isLoading: false,
  error: null,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchNews.fulfilled,
        (state, action: PayloadAction<NewsResponse>) => {
          state.isLoading = false;
          state.news = action.payload.results;
          state.total = action.payload.totalPages * action.payload.perPage;
          state.currentPage = action.payload.page;
        }
      )
      .addCase(fetchNews.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? action.error.message ?? null;
      });
  },
});

export const newsReducer = newsSlice.reducer;
