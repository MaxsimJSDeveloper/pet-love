import { NavLink } from "react-router-dom";
import { AuthNavProps } from "./AuthNav.types";

import css from "./AuthNavStyles";
import { useSelector } from "react-redux";
import { selectToken } from "@redux/users/selectors";
import Logout from "@components/logic/LogoutBtn/LogoutBtn";

const AuthNav = ({ location, styles }: AuthNavProps) => {
  const token = useSelector(selectToken);

  return (
    <div className={`${css.navWrap} ${styles}`}>
      {token ? (
        <Logout style="m-auto border" />
      ) : (
        <>
          <NavLink
            className={`${css.navLink} ${
              location !== "/" ? "border-[1px] link-border-color" : ""
            }`}
            to="/login"
          >
            <p className={`${css.text} text-white xl:w-[120px]`}>Log In</p>
          </NavLink>
          <NavLink className={`${css.navLink} bg-[#fff4df]`} to="/register">
            <p className={`${css.text} text-[#f6b83d]`}>Registration</p>
          </NavLink>
        </>
      )}
    </div>
  );
};

export default AuthNav;
