import { NavLink } from "react-router-dom";
import AuthNav from "../AuthNav/AuthNav";
import { NavigationProps } from "./Navigation.types";
import css from "./NavigationStyles";
import Icon from "@src/shared/Icon";

const Navigation = ({ isOpen, setIsOpen, location }: NavigationProps) => {
  const handleNavClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`${isOpen ? css.navigation : "hidden"} ${
        location === "/" && isOpen ? "bg-white" : ""
      }`}
      onClick={handleNavClick}
    >
      <div className="flex justify-end items-start">
        <button onClick={handleClose} type="button">
          <Icon
            id="icon-close"
            stroke={location === "/" ? "stroke-[#262626]" : "stroke-white"}
            width={"32px"}
            height={"32px"}
          />
        </button>
      </div>
      <div className={`${css.navigationWrap}`}>
        <NavLink
          className={({ isActive }) =>
            `${css.linkClass} ${
              location !== "/" ? "text-white  hover:border-white" : ""
            } ${isActive ? "border-white" : ""}`
          }
          to="/news"
        >
          <p className="text-center">News</p>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${css.linkClass} ${
              location !== "/" ? "text-white  hover:border-white" : ""
            } ${isActive ? "border-white" : ""}`
          }
          to="/notices"
        >
          <p className="text-center">Find pet</p>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${css.linkClass} ${
              location !== "/" ? "text-white hover:border-white" : ""
            } ${isActive ? "border-white" : ""}`
          }
          to="/friends"
        >
          <p className="text-center">Our friends</p>
        </NavLink>
      </div>

      <div className="mt-auto flex flex-col items-center">
        <AuthNav location={location} />
      </div>
    </nav>
  );
};

export default Navigation;
