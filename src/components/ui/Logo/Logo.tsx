import { NavLink } from "react-router-dom";
import { LogoProps } from "./Logo.types.ts";

import css from "./LogoStyles.ts";
import Icon from "../../../shared/Icon.tsx";

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
