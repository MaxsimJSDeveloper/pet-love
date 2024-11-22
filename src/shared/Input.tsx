import { ErrorMessage, useField } from "formik";

interface InputProps {
  placeholder: string;
  type: "text" | "password";
  name: string;
  twoIcons?: boolean;
}

const Input = ({ placeholder, twoIcons, type, name }: InputProps) => {
  const [field, meta] = useField(name);

  return (
    <div className="relative mb-2">
      <input
        {...field}
        placeholder={placeholder}
        className={`relative w-full h-[42px] p-[12px] rounded-[30px] border-[1px] border-input-border-color ${
          meta.touched && meta.error ? "border-[#ef2447]" : "border-[#08aa83]"
        }`}
        type={type}
      />
      {meta.touched && !meta.error && (
        <svg
          className={`absolute top-[30%] ${
            twoIcons ? "right-[9%]" : "right-[3%]"
          }`}
          width={18}
          height={18}
        >
          <use xlinkHref={`/img/symbol-defs.svg#icon-check`} />
        </svg>
      )}
      {meta.touched && !meta.error && name === "password" && (
        <div className="absolute text-[#08aa83] text-sm mt-1 top-full left-0">
          Password is secure
        </div>
      )}
      {meta.touched && meta.error && (
        <ErrorMessage
          component="div"
          name={name}
          className="absolute text-red-500 text-sm mt-1 top-full left-0"
        />
      )}
      {meta.touched && meta.error && (
        <svg
          className={`absolute top-[30%] ${
            twoIcons ? "right-[9%]" : "right-[3%]"
          }`}
          width={18}
          height={18}
        >
          <use xlinkHref={`/img/symbol-defs.svg#icon-cross`} />
        </svg>
      )}
    </div>
  );
};

export default Input;
