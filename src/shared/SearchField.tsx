import sprite from "/img/symbol-defs.svg";

const SearchField = () => {
  return (
    <form className="relative">
      <input
        placeholder="Search"
        className="w-[335px] h-[42px] p-[12px] border-[1px] input-border-color relative rounded-[30px]"
      ></input>
      <button className="w-[18px] h-[18px]">
        <svg
          className="fill-white stroke-[#262626] absolute top-[12%] right-[8%]"
          width={32}
          height={32}
        >
          <use xlinkHref={`${sprite}#icon-search`} />
        </svg>
      </button>
    </form>
  );
};

export default SearchField;
