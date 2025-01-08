export interface PaginationProps {
  totalPages: number;
  currentPage: number;
  incrementPage: (newPage: number) => void;
}
