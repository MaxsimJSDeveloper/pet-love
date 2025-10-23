import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import Icon from "./Icon";

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
      <Icon
        id={isVisible ? "icon-eye" : "icon-eye-off"}
        className={"text-[#F6B83D]"}
        width={"18px"}
        height={"18px"}
      />
    </button>
  );
};

export default Button;
