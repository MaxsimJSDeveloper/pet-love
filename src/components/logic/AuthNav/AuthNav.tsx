import { NavLink } from "react-router-dom";
import { AuthNavProps } from "./AuthNav.types";

import css from "./AuthNavStyles";
import { useSelector } from "react-redux";
import { selectToken } from "@src/redux/users/selectors";
import Logout from "@src/components/logic/LogoutBtn/LogoutBtn";

const AuthNav = ({ location }: AuthNavProps) => {
  const token = useSelector(selectToken);

  return (
    <div className={css.navWrap}>
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
            <p className={`${css.text} text-white`}>Log In</p>
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
