import { NavLink } from "react-router-dom";

import css from "./LogoStyles";
import { LogoProps } from "./Logo.types";
import Icon from "@shared/Icon";

export const Logo = ({ location }: LogoProps) => {
  return (
    <NavLink to="/" className={css.navLink}>
      <div
        className={`${css.logoContainer} ${
          location === "/" ? "text-white" : "text-dark"
        }`}
      >
        <p className="md:text-[28px]">petl</p>
        <div>
          <Icon
            id="icon-logo"
            className={location === "/" ? "text-white" : "text-orange"}
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
