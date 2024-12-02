export interface usersSliceStateTypes {
  user: {
    name: string;
    email: string;
  } | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
}

export interface responseTypes {
  email: string;
  name: string;
  token: string;
}
