import { RootState } from "../store";

export const selectNews = (state: RootState) => state.news.news;
export const selectIsLoading = (state: RootState) => state.news.isLoading;
export const selectError = (state: RootState) => state.news.error;

export const selectTotalPages = (state: RootState) => state.news.total;
export const selectPerPage = (state: RootState) => state.news.perPage;
export const selectCurrentPage = (state: RootState) => state.news.currentPage;
