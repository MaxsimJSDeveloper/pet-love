import { ErrorMessage, useField } from "formik";
import Icon from "./Icon";

interface InputProps {
  placeholder: string;
  type: "text" | "password";
  name: string;
  twoIcons?: boolean;
}

const Input = ({ placeholder, twoIcons, type, name }: InputProps) => {
  const [field, meta] = useField(name);

  return (
    <div className="relative">
      <div className="flex items-center w-full">
        <input
          {...field}
          placeholder={placeholder}
          className={`w-full min-h-[42px] p-[12px] rounded-[30px] border-[1px] ${
            meta.error
              ? "border-[#ef2447]"
              : meta.touched && !meta.error
              ? "border-[#08aa83]"
              : "border-input-border-color"
          }`}
          type={type}
          autoComplete={name}
        />

        {/* Иконки для подтверждения или ошибки */}
        {meta.touched && !meta.error && (
          <Icon
            id="icon-check"
            className={`absolute top-1/2 transform -translate-y-1/2 ${
              twoIcons ? "right-[30px]" : "right-3"
            }`}
            width="18px"
            height="18px"
            fill="#08aa83"
          />
        )}
        {meta.touched && meta.error && (
          <Icon
            id="icon-cross"
            className={`absolute top-1/2 transform -translate-y-1/2 ${
              twoIcons ? "right-[30px]" : "right-3"
            }`}
            width="18px"
            height="18px"
            fill="#ef2447"
          />
        )}
      </div>

      {/* Сообщение об ошибке */}
      {meta.touched && meta.error && (
        <div className="absolute text-[#ef2447] text-[10px] top-full left-0 w-full">
          <ErrorMessage component="div" name={name} />
        </div>
      )}

      {meta.touched && meta.error && name === "confirmPassword" && (
        <div className="absolute text-[#ef2447] text-[10px] top-full left-0 w-full">
          <ErrorMessage component="div" name={name} />
        </div>
      )}

      {/* Сообщение об успешной валидации для пароля */}
      {meta.touched && !meta.error && name === "password" && (
        <div className={`absolute text-[#08aa83] text-[10px] top-full left-0`}>
          Password is secure
        </div>
      )}
    </div>
  );
};

export default Input;
