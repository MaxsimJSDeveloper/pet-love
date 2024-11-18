import { NavLink } from "react-router-dom";
import { LogoProps } from "./Logo.types.ts";

import sprite from "/img/symbol-defs.svg";
import css from "./LogoStyles.ts";

export const Logo = ({ location }: LogoProps) => {
  return (
    <NavLink to="/" className={css.navLink}>
      <div
        className={`${css.logoContainer} ${
          location === "/" ? "text-white" : "text-[#262626]"
        }`}
      >
        <p>petl</p>
        <svg
          className={location === "/" ? "fill-white" : "fill-[#F6B83D]"}
          width={23}
          height={23}
        >
          <use xlinkHref={`${sprite}#icon-logo`} />
        </svg>
        <p>ve</p>
      </div>
    </NavLink>
  );
};

export default Logo;
