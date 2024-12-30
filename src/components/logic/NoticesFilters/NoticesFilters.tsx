import ReactSelect from "@src/shared/Select";
import {
  categoryOptions,
  genderOptions,
  typeOptions,
} from "./selectorsOptionsData";
import SearchField from "@src/shared/SearchField";

interface Option {
  value: string;
  label: string;
}

const NoticesFilters = () => {
  const handleChange = (option: Option | null) => {
    console.log("Selected:", option);
  };

  return (
    <div className="grid grid-cols-2 gap-4 grid-flow-row">
      <SearchField styles="col-span-2" />

      <ReactSelect
        name="category"
        options={categoryOptions}
        placeholder="Category"
        onChange={handleChange}
      />

      <ReactSelect
        name="gender"
        options={genderOptions}
        placeholder="By gender"
        onChange={handleChange}
      />

      <ReactSelect
        name="type"
        options={typeOptions}
        placeholder="By type"
        onChange={handleChange}
      />

      {/* Оставшийся SearchField для поиска по локации */}
      <SearchField placeholder="Location" />
    </div>
  );
};

export default NoticesFilters;
