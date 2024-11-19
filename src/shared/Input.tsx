import { useField } from "formik";

interface InputProps {
  placeholder: string;
  styles?: string;
  type: "text" | "password";
  name: string;
}

const Input = ({ placeholder, styles, type, name }: InputProps) => {
  const [field, meta] = useField(name);

  return (
    <div className="relative">
      <input
        {...field}
        placeholder={placeholder}
        className={`${styles} w-[100%] h-[42px] p-[12px] rounded-[30px] border-[1px] input-border-color ${
          meta.touched && meta.error ? "border-[#ef2447]" : "border-[#08aa83]"
        }`}
        type={type}
      />
      {meta.touched && meta.error && (
        <>
          <div className="text-red-500 text-sm mt-1">{meta.error}</div>
          <svg
            className="fill-white stroke-[#262626] absolute top-[19%] right-[3%]"
            width={18}
            height={18}
          >
            <use xlinkHref={`/img/symbol-defs.svg#icon-cross`} />
          </svg>
        </>
      )}
    </div>
  );
};

export default Input;
