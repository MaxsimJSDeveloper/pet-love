import { RootState } from "../store";

export const selectAnimals = (state: RootState) => state.animals.animals;
export const selectIsLoading = (state: RootState) => state.animals.isLoading;
export const selectError = (state: RootState) => state.animals.error;

export const selectIsOpen = (state: RootState) => state.animals.isOpen;
