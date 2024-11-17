import { RootState } from "../store";

export const selectCamper = (state: RootState) => state.news.news;
export const selectIsLoading = (state: RootState) => state.news.isLoading;
export const selectError = (state: RootState) => state.news.error;
