import ReactPaginate from "react-paginate";

import css from "../PaginationStyles";
import Icon from "@src/shared/Icon";

interface CustomReactPaginateProps {
  handlePageChange: (selectedItem: { selected: number }) => void;
  totalPages: number;
  currentPage: number;
  isPreviousDisabled: boolean;
  isNextDisabled: boolean;
}

const CustomReactPaginate = ({
  handlePageChange,
  totalPages,
  currentPage,
  isNextDisabled,
  isPreviousDisabled,
}: CustomReactPaginateProps) => {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel={
        <Icon
          id="icon-arrow-right"
          stroke="none"
          className={isNextDisabled ? "fill-date-color" : "fill-[#262626]"}
        />
      }
      onPageChange={handlePageChange}
      pageRangeDisplayed={1}
      marginPagesDisplayed={1}
      pageCount={totalPages}
      previousLabel={
        <Icon
          id="icon-arrow-left"
          stroke="none"
          className={isPreviousDisabled ? "fill-date-color" : "fill-[#262626]"}
        />
      }
      forcePage={currentPage - 1}
      renderOnZeroPageCount={null}
      containerClassName="flex items-center justify-center gap-[10px]"
      pageClassName="flex"
      pageLinkClassName={`${css.buttonWrap} text-[18px] font-bold`}
      previousClassName="flex"
      nextClassName="flex"
      previousLinkClassName={`${css.buttonWrap} mr-[14px] ml-[8px]`}
      nextLinkClassName={`${css.buttonWrap} ml-[14px] mr-[8px]`}
      activeClassName="bg-[#f6b83d] text-[#fff] border-[#f6b83d] rounded-full"
      disabledClassName="text-gray-400 cursor-not-allowed"
    />
  );
};

export default CustomReactPaginate;
