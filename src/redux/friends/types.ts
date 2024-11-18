interface WorkDay {
  _id: string;
  isOpen: boolean;
  from?: string;
  to?: string;
}

export interface PetFriend {
  _id: string;
  title: string;
  url: string;
  addressUrl: string | null;
  imageUrl: string;
  address: string | null;
  workDays: WorkDay[] | null;
  phone: string | null;
  email: string | null;
}

export interface FriendsState {
  friends: Array<PetFriend>;
  isLoading: boolean;
  error: string | null;
}
