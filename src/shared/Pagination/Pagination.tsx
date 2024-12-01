import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@redux/store";
import { incrementPage } from "@redux/news/slice";
import {
  selectKeywords,
  selectPerPage,
  selectTotalPages,
  selectCurrentPage,
} from "@redux/news/selectors";

import css from "./PaginationStyles";
import Icon from "@shared/Icon";
import CustomReactPaginate from "./ReactPaginate/ReactPaginate";
import { fetchNews } from "@redux/news/operations";

const Pagination = () => {
  const dispatch = useDispatch<AppDispatch>();

  const totalPages = useSelector(selectTotalPages);
  const perPage = useSelector(selectPerPage);
  const keyword = useSelector(selectKeywords);
  const currentPage = useSelector(selectCurrentPage);

  const handlePageChange = (selectedItem: { selected: number }) => {
    const newPage = selectedItem.selected + 1;
    dispatch(incrementPage(newPage));
    dispatch(fetchNews({ currentPage: newPage, perPage, keyword }));
  };

  const handleGoToFirstPage = () => {
    dispatch(incrementPage(1));
    dispatch(fetchNews({ currentPage: 1, perPage, keyword }));
  };

  const handleGoToLastPage = () => {
    dispatch(incrementPage(totalPages));
    dispatch(fetchNews({ currentPage: totalPages, perPage, keyword }));
  };

  const isPreviousDisabled = currentPage === 1;
  const isNextDisabled = currentPage === totalPages;

  return (
    <div className="flex items-center justify-center mt-[60px]">
      <button onClick={handleGoToFirstPage} className={`${css.buttonWrap}`}>
        <div className="flex relative">
          <Icon
            id="icon-arrow-left"
            stroke="none"
            className={`${
              isPreviousDisabled ? "fill-date-color" : "fill-[#262626]"
            }`}
          />
          <Icon
            id="icon-arrow-left"
            stroke="none"
            className={`absolute right-2 ${
              isPreviousDisabled ? "fill-date-color" : "fill-[#262626]"
            }`}
          />
        </div>
      </button>
      <CustomReactPaginate
        handlePageChange={handlePageChange}
        totalPages={totalPages}
        currentPage={currentPage}
        isNextDisabled={isNextDisabled}
        isPreviousDisabled={isPreviousDisabled}
      />

      <button onClick={handleGoToLastPage} className={`${css.buttonWrap}`}>
        <div className="flex relative">
          <Icon
            id="icon-arrow-right"
            className={`${
              isNextDisabled ? "fill-date-color" : "fill-[#262626]"
            }`}
          />
          <Icon
            id="icon-arrow-right"
            className={`absolute left-2 ${
              isNextDisabled ? "fill-date-color" : "fill-[#262626]"
            }`}
          />
        </div>
      </button>
    </div>
  );
};

export default Pagination;
