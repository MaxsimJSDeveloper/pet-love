import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { getKeyword, resetPage } from "../redux/news/slice";

const SearchField = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.trim();
    dispatch(resetPage());
    dispatch(getKeyword(searchValue));
  };

  return (
    <form className="relative">
      <input
        name="search"
        placeholder="Search"
        className="w-[335px] h-[42px] p-[12px] border-[1px] input-border-color relative rounded-[30px]"
        onChange={handleInputChange}
      />
      <button type="submit" className="w-[18px] h-[18px]">
        <svg
          className="fill-white stroke-[#262626] absolute top-[19%] right-[3%]"
          width={18}
          height={18}
        >
          <use xlinkHref={`/img/symbol-defs.svg#icon-search`} />
        </svg>
      </button>
    </form>
  );
};

export default SearchField;
