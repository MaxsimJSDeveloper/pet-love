import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  isVisible: boolean;
  toggleVisibility: () => void;
}

const Button = ({ isVisible, toggleVisibility, ...rest }: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={toggleVisibility}
      className="absolute top-[35%] right-[3%]"
      {...rest}
    >
      <svg className="fill-white stroke-[#262626]" width={18} height={18}>
        <use
          xlinkHref={`/img/symbol-defs.svg#${
            isVisible ? "icon-eye" : "icon-eye-off"
          }`}
        />
      </svg>
    </button>
  );
};

export default Button;
