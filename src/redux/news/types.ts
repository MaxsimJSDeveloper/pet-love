export interface NewsResponse {
  page: number;
  perPage: number;
  totalPages: number;
  results: Array<NewsItem>;
}

export interface NewsState {
  news: Array<NewsItem>;
  currentPage: number;
  total: number;
  perPage: number;
  keyword: string;
  isLoading: boolean;
  error: string | null;
}

export interface NewsItem {
  _id: string;
  imgUrl: string;
  title: string;
  text: string;
  date: string;
  url: string;
  id: string;
}
