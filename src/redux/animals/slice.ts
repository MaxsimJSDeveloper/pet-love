import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Animal, AnimalResponse } from "./types";
import { fetchAnimals } from "./operation";

interface AnimalState {
  animals: Animal[];
  currentPage: number;
  perPage: number;
  totalPages: number;
  keyword: string;
  filters: {
    category: string;
    species: string;
    sex: string;
  };
  isLoading: boolean;
  isOpen: boolean;
  error: string | null;
}

const initialState: AnimalState = {
  animals: [],
  currentPage: 1,
  perPage: 6,
  totalPages: 0,
  keyword: "",
  filters: {
    category: "",
    species: "",
    sex: "",
  },
  isLoading: false,
  isOpen: false,
  error: null,
};

const animalSlice = createSlice({
  name: "animals",
  initialState,
  reducers: {
    openModal(state) {
      state.isOpen = true;
    },
    closeModal(state) {
      state.isOpen = false;
    },
    getKeyword(state, action: PayloadAction<string>) {
      state.keyword = action.payload;
    },
    updateFilters(
      state,
      action: PayloadAction<{
        filter: keyof AnimalState["filters"];
        value: string;
      }>
    ) {
      const { filter, value } = action.payload;
      if (state.filters[filter] !== value) {
        state.filters[filter] = value;
      }
    },
    resetPage(state) {
      state.currentPage = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnimals.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchAnimals.fulfilled,
        (state, action: PayloadAction<AnimalResponse>) => {
          state.isLoading = false;
          state.animals = action.payload.results;
          state.totalPages = action.payload.totalPages;
          state.error = null;
        }
      )
      .addCase(fetchAnimals.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? action.error.message ?? null;
      });
  },
});

export const { openModal, closeModal, getKeyword, resetPage, updateFilters } =
  animalSlice.actions;
export const animalsReducer = animalSlice.reducer;
