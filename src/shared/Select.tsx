import Select from "react-select";

interface Option {
  value: string;
  label: string;
}

interface ReactSelectProps {
  name: string;
  width?: string;
  options: Option[];
  placeholder?: string;
  onChange: (selectedOption: Option | null) => void;
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
      options={options}
      placeholder={placeholder}
      onChange={onChange}
      styles={{
        control: (baseStyles) => ({
          ...baseStyles,
          borderRadius: "30px",
          height: "42px",
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
