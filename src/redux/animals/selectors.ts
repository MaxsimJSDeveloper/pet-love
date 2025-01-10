import { RootState } from "../store";

export const selectAnimals = (state: RootState) => state.animals.animals;
export const selectIsLoading = (state: RootState) => state.animals.isLoading;
export const selectError = (state: RootState) => state.animals.error;

export const selectIsOpen = (state: RootState) => state.animals.isOpen;
export const selectKeyword = (state: RootState) => state.animals.keyword;

export const selectFilters = (state: RootState) => state.animals.filters;
export const selectSorters = (state: RootState) => state.animals.sorters;

export const selectTotalPages = (state: RootState) => state.animals.totalPages;
export const selectPerPage = (state: RootState) => state.animals.perPage;
export const selectCurrentPage = (state: RootState) =>
  state.animals.currentPage;

export const selectAnimal = (state: RootState) => state.animals.animal;
