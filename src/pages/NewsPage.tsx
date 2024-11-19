import { useDispatch, useSelector } from "react-redux";
import SearchField from "../shared/SearchField";
import Title from "../shared/Tittle";
import { AppDispatch } from "../redux/store";
import {
  selectCurrentPage,
  selectError,
  selectIsLoading,
  selectNews,
  selectPerPage,
  selectTotalPages,
} from "../redux/news/selectors";
import { useEffect } from "react";
import { fetchNews } from "../redux/news/operations";
import Loader from "../components/ui/Loader";
import NewsList from "../components/logic/NewsList/NewsList";
import Pagination from "../components/logic/Pagination/Pagination";

const NewsPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const currentPage = useSelector(selectCurrentPage);
  const perPage = useSelector(selectPerPage);
  const news = useSelector(selectNews);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const totalPages = useSelector(selectTotalPages);

  useEffect(() => {
    if (currentPage > 0 && perPage > 0) {
      dispatch(fetchNews({ currentPage, perPage }));
    }
  }, [currentPage, dispatch, perPage]);

  useEffect(() => {
    console.log("Current Page:", currentPage);
    console.log("Total Pages:", totalPages);
  }, [currentPage, totalPages]);

  return (
    <>
      <Title>News</Title>
      <SearchField />
      {loading && <Loader />}
      {error && <p>Error: {error}</p>}
      {news.length > 0 ? (
        <NewsList news={news} />
      ) : (
        !loading && <p>No news available.</p>
      )}
      <Pagination />
    </>
  );
};

export default NewsPage;
