import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchNews } from "./operations";
import { NewsResponse, NewsState } from "./types";

const initialState: NewsState = {
  news: [],
  currentPage: 1,
  perPage: 6,
  total: 0,
  keyword: "",
  isLoading: false,
  error: null,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    decrementPage(state) {
      state.currentPage -= 1;
    },
    incrementPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    resetPage(state) {
      state.currentPage = 1;
    },
    getKeyword(state, action: PayloadAction<string>) {
      state.keyword = action.payload;
    },
  },
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
          state.total = action.payload.totalPages;
          state.currentPage = action.payload.page;
          state.error = null;
        }
      )
      .addCase(fetchNews.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? action.error.message ?? null;
      });
  },
});

export const { decrementPage, incrementPage, resetPage, getKeyword } =
  newsSlice.actions;

export const newsReducer = newsSlice.reducer;
