import ReactSelect from "@src/shared/Select";
import {
  categoryOptions,
  sexOptions,
  speciesOptions,
} from "./selectorsOptionsData";
import SearchField from "@src/shared/SearchField";
import useScreenWidth from "@src/hooks/useScreenWidth";
import RadioBtn from "@src/shared/RadioBtn";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@src/redux/store";
import {
  getKeyword,
  resetPage,
  sortByPopularity,
  sortByPrice,
  updateFilters,
} from "@src/redux/animals/slice";
import { Option } from "./NoticesFilters.types";
import { useCallback } from "react";

const NoticesFilters = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = useCallback(
    (option: Option | null) => {
      if (option) {
        const { filter, value } = option;
        dispatch(updateFilters({ filter, value }));
      }
    },
    [dispatch]
  );

  const handleRadioChange = (value: string) => {
    const priceMap: Record<string, boolean | null> = {
      cheap: false,
      expensive: true,
    };

    const popularityMap: Record<string, boolean | null> = {
      unpopular: false,
      popular: true,
    };

    if (value in priceMap) {
      dispatch(sortByPrice(priceMap[value]));
    } else if (value in popularityMap) {
      dispatch(sortByPopularity(popularityMap[value]));
    }
  };

  const screenWidth = useScreenWidth();
  const isTabletScreen = screenWidth >= 768;

  const handleKeyword = (value: string) => {
    dispatch(getKeyword(value));
  };

  return (
    <div className="bg-[#FFF4DF] rounded-[30px] my-[40px] px-[20px] md:px-[32px]">
      <div className="flex flex-wrap gap-x-[8px] gap-y-[12px] py-[20px] md:gap-[16px] md:pt-[40px] md:pb-[20px]">
        <SearchField
          styles="w-[295px] border-[#FFF4DF] hover:border hover:border-[#F6B83D] md:w-[265px]"
          onSearch={handleKeyword}
          resetPage={() => {
            dispatch(resetPage());
          }}
        />

        <ReactSelect
          name="category"
          width={`${isTabletScreen ? "170px" : "143px"}`}
          options={categoryOptions}
          placeholder="Category"
          onChange={handleChange}
        />

        <ReactSelect
          name="gender"
          width={`${isTabletScreen ? "170px" : "143px"}`}
          options={sexOptions}
          placeholder="By gender"
          onChange={handleChange}
        />

        <ReactSelect
          name="type"
          width={`${isTabletScreen ? "190px" : "295px"}`}
          options={speciesOptions}
          placeholder="By type"
          onChange={handleChange}
        />

        <SearchField
          placeholder="Location"
          styles="w-[295px] border-[#FFF4DF] hover:border-[#F6B83D] md:w-[227px]"
          onSearch={handleKeyword}
          resetPage={() => {
            dispatch(resetPage());
          }}
        />
      </div>

      <div className="flex flex-wrap gap-[10px] py-[20px] border-t-[1px] w-full">
        <RadioBtn
          btnName="popular"
          onChange={handleRadioChange}
          type="popularity"
        />
        <RadioBtn
          btnName="unpopular"
          onChange={handleRadioChange}
          type="popularity"
        />
        <RadioBtn btnName="cheap" onChange={handleRadioChange} type="price" />
        <RadioBtn
          btnName="expensive"
          onChange={handleRadioChange}
          type="price"
        />
      </div>
    </div>
  );
};

export default NoticesFilters;
