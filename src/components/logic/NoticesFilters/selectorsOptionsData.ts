import { Option } from "./NoticesFilters.types";

export const categoryOptions: Option[] = [
  { value: "sell", filter: "category" },
  { value: "free", filter: "category" },
  { value: "lost", filter: "category" },
  { value: "found", filter: "category" },
];

export const sexOptions: Option[] = [
  { value: "unknown", filter: "sex" },
  { value: "female", filter: "sex" },
  { value: "male", filter: "sex" },
  { value: "multiple", filter: "sex" },
];

export const speciesOptions: Option[] = [
  { value: "dog", filter: "species" },
  { value: "cat", filter: "species" },
  { value: "monkey", filter: "species" },
  { value: "bird", filter: "species" },
  { value: "snake", filter: "species" },
  { value: "turtle", filter: "species" },
  { value: "lizard", filter: "species" },
  { value: "frog", filter: "species" },
  { value: "fish", filter: "species" },
  { value: "ants", filter: "species" },
  { value: "bees", filter: "species" },
  { value: "butterfly", filter: "species" },
  { value: "spider", filter: "species" },
  { value: "scorpion", filter: "species" },
];
