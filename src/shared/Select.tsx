import Select from "react-select";

interface Option {
  value: string;
  label: string;
}

interface ReactSelectProps {
  name: string;
  options: Option[];
  placeholder?: string;
  onChange: (selectedOption: Option | null) => void;
}

const ReactSelect = ({
  name,
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
          border: "1px solid #d1d5db", // цвет границы (можно настроить)
          boxShadow: "none",
        }),
        dropdownIndicator: (baseStyles) => ({
          ...baseStyles,
          color: "#262626",
        }),
        indicatorSeparator: () => ({
          display: "none", // Скрываем вертикальную риску
        }),
        menu: (baseStyles) => ({
          ...baseStyles,
          borderRadius: "15px", // Если нужно закруглить меню
        }),
      }}
    />
  );
};

export default ReactSelect;
