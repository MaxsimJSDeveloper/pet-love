import RadioBtn from "@components/logic/NoticesFilters/filtersElements/RadioBtn";

const RadioGroup = ({
  options,
  onChange,
}: {
  options: { btnName: string; type: string }[];
  onChange: (value: string) => void;
}) => (
  <div className="flex flex-wrap gap-[10px] py-[20px] border-t-[1px] w-full">
    {options.map(({ btnName, type }) => (
      <RadioBtn
        key={btnName}
        btnName={btnName}
        onChange={onChange}
        type={type}
      />
    ))}
  </div>
);

export default RadioGroup;
