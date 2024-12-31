import ReactSelect from "@src/shared/Select";
import {
  categoryOptions,
  genderOptions,
  typeOptions,
} from "./selectorsOptionsData";
import SearchField from "@src/shared/SearchField";
import useScreenWidth from "@src/hooks/useScreenWidth";
import RadioBtn from "@src/shared/RadioBtn";

interface Option {
  value: string;
  label: string;
}

const NoticesFilters = () => {
  const handleChange = (option: Option | null) => {
    console.log("Selected:", option);
  };

  const screenWidth = useScreenWidth();
  const isTabletScreen = screenWidth >= 768;

  return (
    <div className="bg-[#FFF4DF] rounded-[30px] mt-[40px] px-[20px] md:px-[32px]">
      <div className="flex flex-wrap gap-x-[8px] gap-y-[12px] py-[20px] md:gap-[16px] md:pt-[40px] md:pb-[20px]">
        <SearchField styles="w-[295px] border-[#FFF4DF] hover:border hover:border-[#F6B83D] md:w-[265px]" />

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
          options={genderOptions}
          placeholder="By gender"
          onChange={handleChange}
        />

        <ReactSelect
          name="type"
          width={`${isTabletScreen ? "190px" : "295px"}`}
          options={typeOptions}
          placeholder="By type"
          onChange={handleChange}
        />

        <SearchField
          placeholder="Location"
          styles="w-[295px] border-[#FFF4DF] hover:border-[#F6B83D] md:w-[227px]"
        />
      </div>

      <div className="flex flex-wrap gap-[10px] py-[20px] border-t-[1px] w-full">
        <RadioBtn btnName="popular" />
        <RadioBtn btnName="unpopular" />
        <RadioBtn btnName="cheap" />
        <RadioBtn btnName="expensive" />
      </div>
    </div>
  );
};

export default NoticesFilters;
