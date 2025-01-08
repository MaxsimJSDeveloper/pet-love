import ModalAttention from "@src/components/logic/ModalAttention/ModalAttention";
import Title from "../shared/Tittle";
import NoticesFilters from "@src/components/logic/NoticesFilters/NoticesFilters";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@src/redux/store";
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
} from "@src/redux/animals/selectors";
import { useEffect } from "react";
import { fetchAnimals } from "@src/redux/animals/operation";
import NoticesList from "@src/components/ui/NoticesList/NoticesList";
import Loader from "@src/components/ui/Loader";
import ModalNotice from "@src/components/logic/ModalNotice/ModalNotice";
import Pagination from "@src/shared/Pagination/Pagination";
import { incrementPage } from "@src/redux/animals/slice";

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
    <>
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
    </>
  );
};

export default NoticesPage;
