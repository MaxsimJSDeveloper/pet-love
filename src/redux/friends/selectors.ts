import { RootState } from "../store";

export const selectFriends = (state: RootState) => state.friends.friends;
export const selectLoading = (state: RootState) => state.friends.isLoading;
export const selectError = (state: RootState) => state.friends.error;
