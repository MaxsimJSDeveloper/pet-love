import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchNews } from "./operations";
import { NewsResponse, NewsState } from "./types";

const initialState: NewsState = {
  news: [],
  currentPage: 1,
  perPage: 6,
  total: 0,
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
      state.currentPage = action.payload; // Обновляем текущую страницу, передавая новое значение из action
    },
    resetPage(state) {
      state.currentPage = 1; // Если вы хотите сбросить страницу в 1, а не в 0
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
          state.currentPage = action.payload.page; // Задаем текущую страницу после получения данных
          state.error = null;
        }
      )
      .addCase(fetchNews.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? action.error.message ?? null;
      });
  },
});

export const { decrementPage, incrementPage, resetPage } = newsSlice.actions;

export const newsReducer = newsSlice.reducer;
