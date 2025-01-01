import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Animal, AnimalResponse } from "./types";
import { fetchAnimals } from "./operation";

interface AnimalState {
  animals: Animal[];
  currentPage: number;
  perPage: number;
  totalPages: number;
  filters: {
    category: string;
    gender: string;
    type: string;
    location: string;
    keyword: string;
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
  filters: {
    category: "",
    gender: "",
    type: "",
    location: "",
    keyword: "",
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
        state.error =
          action.payload instanceof Error
            ? action.payload.message
            : "Unknown error occurred";
      });
  },
});

export const { openModal, closeModal } = animalSlice.actions;
export const animalsReducer = animalSlice.reducer;
