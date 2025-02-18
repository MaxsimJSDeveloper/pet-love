import ReactSelect from "@components/logic/NoticesFilters/filtersElements/Select";
import SearchField from "@shared/SearchField";
import useScreenWidth from "@hooks/useScreenWidth";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@redux/store";
import {
  getKeyword,
  resetPage,
  sortByPopularity,
  sortByPrice,
  updateFilters,
} from "@redux/animals/slice";
import { useCallback, useEffect } from "react";
import RadioGroup from "./subComponents/RadioGroup";
import { fetchFilters } from "@redux/animals/operation";
import {
  selectCategory,
  selectSex,
  selectSpecies,
} from "@redux/animals/selectors";

const NoticesFilters = () => {
  const dispatch = useDispatch<AppDispatch>();

  const sex = useSelector(selectSex);
  const category = useSelector(selectCategory);
  const species = useSelector(selectSpecies);

  useEffect(() => {
    dispatch(fetchFilters());
  }, [dispatch]);

  const handleChange = useCallback(
    (
      selectedValue: string | null,
      filterType: "category" | "species" | "sex"
    ) => {
      if (selectedValue) {
        dispatch(updateFilters({ filter: filterType, value: selectedValue }));
      }
    },
    [dispatch]
  );

  const handleRadioChange = (value: string) => {
    if (value === "popular" || value === "unpopular") {
      dispatch(sortByPopularity(value));
    } else if (value === "cheap" || value === "expensive") {
      dispatch(sortByPrice(value));
    }
  };

  const screenWidth = useScreenWidth();
  const isTabletScreen = screenWidth >= 768;

  const handleKeyword = (value: string) => {
    dispatch(getKeyword(value));
  };

  return (
    <section className="bg-[#FFF4DF] rounded-[30px] my-[40px] px-[20px] md:px-[32px]">
      <div className="flex flex-wrap gap-x-[8px] gap-y-[12px] py-[20px] md:gap-[16px] md:pt-[40px] md:pb-[20px]">
        <SearchField
          styles="w-[295px] bg-white border-[#fff4df] hover:border-[#F6B83D] md:w-[265px]"
          onSearch={handleKeyword}
          resetPage={() => {
            dispatch(resetPage());
          }}
        />

        <ReactSelect
          name="category"
          width={`${isTabletScreen ? "170px" : "143px"}`}
          options={category}
          placeholder="Category"
          onChange={handleChange}
        />

        <ReactSelect
          name="sex"
          width={`${isTabletScreen ? "170px" : "143px"}`}
          options={sex}
          placeholder="By gender"
          onChange={handleChange}
        />

        <ReactSelect
          name="species"
          width={`${isTabletScreen ? "190px" : "295px"}`}
          options={species}
          placeholder="By type"
          onChange={handleChange}
        />

        <SearchField
          placeholder="Location"
          styles="w-[295px] border-[#FFF4DF] bg-white hover:border-[#F6B83D] md:w-[227px]"
          onSearch={handleKeyword}
          resetPage={() => {
            dispatch(resetPage());
          }}
        />
      </div>

      <RadioGroup
        options={[
          { btnName: "popular", type: "popularity" },
          { btnName: "unpopular", type: "popularity" },
          { btnName: "cheap", type: "price" },
          { btnName: "expensive", type: "price" },
        ]}
        onChange={handleRadioChange}
      />
    </section>
  );
};

export default NoticesFilters;
