import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AnimalIdResponse, AnimalResponse, AnimalState } from "./types";
import { fetchAnimalById, fetchAnimals, fetchFilters } from "./operation";

const initialState: AnimalState = {
  animals: [],
  animal: {
    _id: "",
    species: "",
    category: "",
    title: "",
    name: "",
    birthday: "",
    comment: "",
    sex: "",
    price: "",
    location: { _id: "", stateEn: "", cityEn: "" },
    imgURL: "",
    createdAt: "",
    user: { _id: "", email: "", phone: "" },
    popularity: 0,
    updatedAt: "",
  },
  currentPage: 1,
  perPage: 6,
  totalPages: 0,
  keyword: "",
  filters: {
    category: "",
    species: "",
    sex: "",
  },
  sorters: {
    byPrice: null,
    byPopularity: null,
  },
  filtersData: {
    category: [],
    species: [],
    sex: [],
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
    sortByPrice(state, action: PayloadAction<string | null>) {
      state.sorters.byPrice = action.payload;
    },
    sortByPopularity(state, action: PayloadAction<string | null>) {
      state.sorters.byPopularity = action.payload;
    },
    resetPage(state) {
      state.currentPage = 1;
    },
    incrementPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
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
      .addCase(fetchAnimalById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? action.error.message ?? null;
      })
      .addCase(fetchAnimalById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchAnimalById.fulfilled,
        (state, action: PayloadAction<AnimalIdResponse>) => {
          state.isLoading = false;
          state.animal = action.payload;
          state.error = null;
        }
      )
      .addCase(fetchAnimals.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? action.error.message ?? null;
      })
      .addCase(fetchFilters.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchFilters.fulfilled,
        (
          state,
          action: PayloadAction<{
            category: string[];
            sex: string[];
            species: string[];
          }>
        ) => {
          state.isLoading = false;
          state.filtersData = action.payload;
          state.error = null;
        }
      )
      .addCase(fetchFilters.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? action.error.message ?? null;
      });
  },
});

export const {
  openModal,
  closeModal,
  getKeyword,
  resetPage,
  updateFilters,
  sortByPrice,
  sortByPopularity,
  incrementPage,
} = animalSlice.actions;
export const animalsReducer = animalSlice.reducer;
