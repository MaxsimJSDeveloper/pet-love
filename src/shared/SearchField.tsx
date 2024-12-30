import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { getKeyword, resetPage } from "../redux/news/slice";
import Icon from "./Icon";

interface SearchFieldProps {
  styles?: string;
  placeholder?: string;
}

const SearchField = ({ styles, placeholder = "Search" }: SearchFieldProps) => {
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
        placeholder={placeholder}
        className={`${styles} h-[42px] p-[12px] border-[1px] input-border-color rounded-[30px]`}
        onChange={handleInputChange}
      />
      <button
        type="submit"
        className="absolute top-1/2 -translate-y-1/2 right-[10px] w-[18px] h-[18px] pointer-events-auto"
      >
        <Icon
          id="icon-search"
          className="fill-white stroke-[#262626]"
          width="18px"
          height="18px"
        />
      </button>
    </form>
  );
};

export default SearchField;
