import { NavLink } from "react-router-dom";
import css from "./AuthNavStyles";
import { AuthNavProps } from "./AuthNav.types";

const AuthNav = ({ location }: AuthNavProps) => {
  return (
    <div className={css.navWrap}>
      <NavLink
        className={`${css.navLink} ${
          location !== "/" ? "border-[1px] link-border-color" : ""
        }`}
        to="/login"
      >
        <p className={css.text}>Log In</p>
      </NavLink>
      <NavLink className={`${css.navLink} bg-[#fff4df]`} to="/register">
        <p className={`${css.text} text-[#f6b83d]`}>Registration</p>
      </NavLink>
    </div>
  );
};

export default AuthNav;
