import ReactPaginate from "react-paginate";
import css from "../PaginationStyles";
import Icon from "@shared/Icon";

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
  if (totalPages <= 0) {
    return null;
  }

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel={
        <Icon
          id="icon-arrow-right"
          className={isNextDisabled ? "" : "text-dark"}
        />
      }
      onPageChange={handlePageChange}
      pageRangeDisplayed={1}
      marginPagesDisplayed={1}
      pageCount={totalPages}
      previousLabel={
        <Icon
          id="icon-arrow-left"
          className={isPreviousDisabled ? "" : "text-dark"}
        />
      }
      forcePage={currentPage > 0 ? currentPage - 1 : 0}
      renderOnZeroPageCount={null}
      containerClassName="flex items-center justify-center gap-[10px]"
      pageClassName="flex"
      pageLinkClassName={`${css.buttonWrap} text-[18px] font-bold`}
      previousClassName="flex"
      nextClassName="flex"
      previousLinkClassName={`${css.buttonWrap} mr-[14px] ml-[8px]`}
      nextLinkClassName={`${css.buttonWrap} ml-[14px] mr-[8px]`}
      activeClassName="bg-orange text-[#fff] border-orange rounded-full"
      disabledClassName="text-gray-400 cursor-not-allowed"
    />
  );
};

export default CustomReactPaginate;
