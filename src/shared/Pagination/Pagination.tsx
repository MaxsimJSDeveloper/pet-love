import css from "./PaginationStyles";
import Icon from "@shared/Icon";
import CustomReactPaginate from "./ReactPaginate/ReactPaginate";
import { PaginationProps } from "./PaginationTypes";

const Pagination = ({
  totalPages,
  currentPage,
  incrementPage,
}: PaginationProps) => {
  const handlePageChange = (selectedItem: { selected: number }) => {
    const newPage = selectedItem.selected + 1;
    incrementPage(newPage);
  };

  const handleGoToFirstPage = () => {
    incrementPage(1);
  };

  const handleGoToLastPage = () => {
    incrementPage(totalPages);
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
