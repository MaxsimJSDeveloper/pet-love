import ModalAttention from "@src/components/ui/ModalAttention/ModalAttention";
import Title from "../shared/Tittle";
import NoticesFilters from "@src/components/logic/NoticesFilters/NoticesFilters";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@src/redux/store";
import {
  selectAnimals,
  selectError,
  selectIsLoading,
} from "@src/redux/animals/selectors";
import { useEffect } from "react";
import { fetchAnimals } from "@src/redux/animals/operation";
import NoticesList from "@src/components/ui/NoticesList/NoticesList";
import Loader from "@src/components/ui/Loader";
import ModalNotice from "@src/components/logic/ModalNotice/ModalNotice";

const NoticesPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const animals = useSelector(selectAnimals);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchAnimals());
  }, [dispatch]);

  return (
    <>
      <Title>Find your favorite pet</Title>
      <NoticesFilters />
      {isLoading && <Loader />}
      {error && <p>Error: {error}</p>}
      {animals.length > 0 ? (
        <NoticesList animals={animals} />
      ) : (
        !isLoading && <p>No news available.</p>
      )}

      <ModalAttention />
      <ModalNotice />
    </>
  );
};

export default NoticesPage;
