import { RootState } from "../store";

export const selectToken = (state: RootState) => state.users.token;
