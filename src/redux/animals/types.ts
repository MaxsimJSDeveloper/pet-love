export interface AnimalState {
  animals: Animal[];
  animal: AnimalIdResponse;
  currentPage: number;
  perPage: number;
  totalPages: number;
  keyword: string;
  filters: {
    category: string;
    species: string;
    sex: string;
  };
  sorters: {
    byPrice: string | null;
    byPopularity: string | null;
  };
  filtersData: {
    category: string[];
    species: string[];
    sex: string[];
  };
  isLoading: boolean;
  isOpen: boolean;
  error: string | null;
}

export interface Animal {
  _id: string;
  species:
    | "dog"
    | "cat"
    | "monkey"
    | "bird"
    | "snake"
    | "turtle"
    | "lizard"
    | "frog"
    | "fish"
    | "ants"
    | "bees"
    | "butterfly"
    | "spider"
    | "scorpion";
  category: "sell" | "free" | "lost" | "found";
  title: string;
  name: string;
  birthday: string;
  comment: string;
  sex: "male" | "female" | "unknown" | "multiple";
  location: string;
  imgURL: string;
  createdAt: string;
  user: string;
  popularity: number;
  updatedAt: string;
  price: string;
}

export interface AnimalResponse {
  page: number;
  perPage: number;
  totalPages: number;
  results: Array<Animal>;
}

interface Location {
  _id: string;
  stateEn: string;
  cityEn: string;
}

interface User {
  _id: string;
  email: string;
  phone: string;
}

export interface AnimalIdResponse {
  _id: string;
  species: string;
  category: string;
  title: string;
  name: string;
  price: string;
  birthday: string;
  comment: string;
  sex: string;
  location: Location;
  imgURL: string;
  createdAt: string;
  user: User;
  popularity: number;
  updatedAt: string;
}
