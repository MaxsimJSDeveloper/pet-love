import { NavLink } from "react-router-dom";

import css from "./LogoStyles";
import { LogoProps } from "./Logo.types";
import Icon from "@src/shared/Icon";

export const Logo = ({ location }: LogoProps) => {
  return (
    <NavLink to="/" className={css.navLink}>
      <div
        className={`${css.logoContainer} ${
          location === "/" ? "text-white" : "text-[#262626]"
        }`}
      >
        <p className="md:text-[28px]">petl</p>
        <div>
          <Icon
            id="icon-logo"
            className={
              location === "/"
                ? "fill-white stroke-white"
                : "fill-[#F6B83D] stroke-[#F6B83D]"
            }
            fill={location === "/" ? "#fff" : "#F6B83D"}
            stroke={location === "/" ? "#fff" : "#F6B83D"}
            width="23px"
            height="23px"
          />
        </div>

        <p className="md:text-[28px]">ve</p>
      </div>
    </NavLink>
  );
};

export default Logo;
