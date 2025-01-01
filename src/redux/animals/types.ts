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
}

export interface AnimalResponse {
  page: number;
  perPage: number;
  totalPages: number;
  results: Array<Animal>;
}
