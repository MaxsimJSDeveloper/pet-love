import Select from "react-select";

interface ReactSelectProps {
  name: "category" | "species" | "sex";
  width?: string;
  options: string[];
  placeholder?: string;
  onChange: (
    value: string | null,
    filterType: "category" | "species" | "sex"
  ) => void;
}

const ReactSelect = ({
  name,
  width,
  options,
  placeholder,
  onChange,
}: ReactSelectProps) => {
  return (
    <Select
      name={name}
      options={options.map((value) => ({ label: value, value }))}
      placeholder={placeholder}
      onChange={(selectedOption) =>
        onChange(selectedOption?.value || null, name)
      }
      styles={{
        control: (baseStyles) => ({
          ...baseStyles,
          borderRadius: "30px",
          height: "48px",
          border: "none",
          boxShadow: "none",
          width: `${width}`,
          "&:hover": {
            border: "1px solid #F6B83D",
          },
        }),
        dropdownIndicator: (baseStyles) => ({
          ...baseStyles,
          color: "#262626",
        }),
        indicatorSeparator: () => ({
          display: "none",
        }),
        menu: (baseStyles) => ({
          ...baseStyles,
          borderRadius: "15px",
        }),
        option: (baseStyles, state) => ({
          ...baseStyles,
          backgroundColor: "white",
          color: state.isSelected ? "#f6b83d" : "rgba(38, 38, 38, 0.6)",
          borderRadius: "15px",
          "&:hover": {
            color: "#f6b83d",
          },
        }),
      }}
    />
  );
};

export default ReactSelect;
