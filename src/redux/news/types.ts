export interface NewsState {
  news: NewsItem[];
  currentPage: number;
  total: number;
  isLoading: boolean;
  error: string | null;
}

export interface NewsResponse {
  news: NewsItem[];
  total: number;
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
