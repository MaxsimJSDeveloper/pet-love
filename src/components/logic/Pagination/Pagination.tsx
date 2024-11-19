import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { incrementPage } from "../../../redux/news/slice";
import ReactPaginate from "react-paginate";
import { selectTotalPages } from "../../../redux/news/selectors";

const Pagination = () => {
  const dispatch = useDispatch<AppDispatch>();
  const totalPages = useSelector(selectTotalPages); // Получаем общее количество страниц

  const handlePageChange = (selectedItem: { selected: number }) => {
    const newPage = selectedItem.selected + 1; // +1, чтобы преобразовать индекс в номер страницы (пагинация начинается с 0, а страницы с 1)
    dispatch(incrementPage(newPage)); // передаем новую страницу в Redux
  };

  return (
    <div className="flex justify-center mt-6">
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageChange}
        pageRangeDisplayed={1}
        marginPagesDisplayed={1}
        pageCount={totalPages} // Общее количество страниц
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="flex items-center space-x-2"
        pageClassName="flex"
        pageLinkClassName="px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        previousClassName="flex"
        nextClassName="flex"
        previousLinkClassName="px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        nextLinkClassName="px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        activeClassName="bg-blue-500 text-white"
        disabledClassName="text-gray-400 cursor-not-allowed"
      />
    </div>
  );
};

export default Pagination;
