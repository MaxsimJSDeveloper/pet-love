import { selectSorters } from "@redux/animals/selectors";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { sortByPrice, sortByPopularity } from "@redux/animals/slice";
import Icon from "@shared/Icon";

interface radioBtnProps {
  btnName: string;
  type: string;
  onChange: (value: string) => void;
}

const RadioBtn = React.memo(({ btnName, type, onChange }: radioBtnProps) => {
  const dispatch = useDispatch();
  const sorters = useSelector(selectSorters);

  const handleChange = () => {
    onChange(btnName);
  };

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (type === "popularity") {
      dispatch(sortByPopularity(null));
    } else if (type === "price") {
      dispatch(sortByPrice(null));
    }
  };

  const isSelected =
    (type === "popularity" &&
      (btnName === "popular"
        ? sorters.byPopularity === true
        : sorters.byPopularity === false)) ||
    (type === "price" &&
      (btnName === "expensive"
        ? sorters.byPrice === true
        : sorters.byPrice === false));

  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="radio"
        name="filter"
        className="hidden"
        value={btnName}
        onChange={handleChange}
      />
      <span
        className={`p-[14px] h-[48px] rounded-[30px] flex hover:border items-center hover:border-[#F6B83D] capitalize ${
          isSelected ? "bg-[#F6B83D] text-white" : "bg-white text-[#262626]"
        }`}
      >
        <p>{btnName}</p>
        {isSelected && (
          <button className="ml-[12px]" onClick={handleReset}>
            <Icon id="icon-cross-white" width="18px" height="18px" />
          </button>
        )}
      </span>
    </label>
  );
});

export default RadioBtn;
