import ModalAttention from "@components/logic/ModalAttention/ModalAttention";
import NoticesFilters from "@components/logic/NoticesFilters/NoticesFilters";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@redux/store";
import {
  selectAnimals,
  selectCurrentPage,
  selectError,
  selectFilters,
  selectIsLoading,
  selectKeyword,
  selectPerPage,
  selectSorters,
  selectTotalPages,
} from "@redux/animals/selectors";
import { useEffect } from "react";
import { fetchAnimals } from "@redux/animals/operation";
import NoticesList from "@components/ui/NoticesList/NoticesList";
import Loader from "@components/ui/Loader";
import ModalNotice from "@components/logic/ModalNotice/ModalNotice";
import Pagination from "@shared/Pagination/Pagination";
import { incrementPage } from "@redux/animals/slice";
import Title from "@shared/Tittle";

const NoticesPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const animals = useSelector(selectAnimals);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  const keyword = useSelector(selectKeyword);
  const filters = useSelector(selectFilters);
  const sorters = useSelector(selectSorters);

  const currentPage = useSelector(selectCurrentPage);
  const perPage = useSelector(selectPerPage);
  const totalPages = useSelector(selectTotalPages);

  useEffect(() => {
    dispatch(fetchAnimals({ keyword, filters, sorters, currentPage, perPage }));
  }, [dispatch, keyword, filters, sorters, currentPage, perPage]);

  const handleIncrementPage = (newPage: number) => {
    dispatch(incrementPage(newPage));
  };

  return (
    <section>
      <Title>Find your favorite pet</Title>
      <NoticesFilters />
      {isLoading && <Loader />}
      {error && <p>Error: {error}</p>}
      {animals.length > 0 ? (
        <NoticesList animals={animals} />
      ) : (
        !isLoading && <p>No animals available.</p>
      )}

      <ModalAttention />
      <ModalNotice />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        incrementPage={handleIncrementPage}
      />
    </section>
  );
};

export default NoticesPage;
