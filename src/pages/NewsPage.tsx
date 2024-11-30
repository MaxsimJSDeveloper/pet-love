import { useDispatch, useSelector } from "react-redux";
import SearchField from "../shared/SearchField";
import Title from "../shared/Tittle";
import { AppDispatch } from "../redux/store";
import {
  selectCurrentPage,
  selectError,
  selectIsLoading,
  selectKeywords,
  selectNews,
  selectPerPage,
} from "../redux/news/selectors";
import { useEffect } from "react";
import { fetchNews } from "../redux/news/operations";
import Loader from "../components/ui/Loader";
import NewsList from "../components/logic/NewsList/NewsList";
import Pagination from "../components/logic/Pagination/Pagination";

const NewsPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const news = useSelector(selectNews);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const currentPage = useSelector(selectCurrentPage);
  const perPage = useSelector(selectPerPage);

  const keyword = useSelector(selectKeywords);

  useEffect(() => {
    if (currentPage > 0 && perPage > 0) {
      dispatch(fetchNews({ currentPage, perPage, keyword }));
    }
  }, [currentPage, dispatch, perPage, keyword]);

  return (
    <>
      <div className="mb-[24px] md:flex md:justify-between md:mb-[46px] md:mt-[89px]">
        <Title style="mt-[54px] mb-[15px] md:mt-0 md:mb-0">News</Title>
        <SearchField styles="md:max-w-[230px]" />
      </div>
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
