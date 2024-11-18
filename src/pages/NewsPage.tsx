import { useDispatch, useSelector } from "react-redux";
import SearchField from "../shared/SearchField";
import Title from "../shared/Tittle";
import { AppDispatch } from "../redux/store";
import {
  selectError,
  selectIsLoading,
  selectNews,
} from "../redux/news/selectors";
import { useEffect } from "react";
import { fetchNews } from "../redux/news/operations";
import Loader from "../components/ui/Loader";
import NewsList from "../components/logic/NewsList/NewsList";

const NewsPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const news = useSelector(selectNews);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

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
    </>
  );
};

export default NewsPage;
