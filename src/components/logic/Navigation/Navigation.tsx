import { NavLink } from "react-router-dom";
import css from "./NavigationStyles";
import useScreenWidth from "@hooks/useScreenWidth";
import { NavigationProps } from "./Navigation.types";

const Navigation = ({ location, wrapper }: NavigationProps) => {
  const screenWidth = useScreenWidth();
  const isDesktopScreen = screenWidth >= 1280;

  const getLinkClasses = (isActive: boolean, currentLocation: string) => {
    const baseClass = css.linkClass;

    const isHomePage = currentLocation === "/";
    const useWithStyles =
      (isDesktopScreen && isHomePage) || (!isDesktopScreen && !isHomePage);

    const textColor = useWithStyles
      ? "text-white hover:border-white"
      : "text-dark hover:border-orange";

    const activeClass = isActive
      ? isDesktopScreen
        ? "border-orange"
        : "border-white"
      : "";

    return `${baseClass} ${textColor} ${activeClass}`;
  };

  return (
    <div className={`${css.navigationWrap} ${wrapper}`}>
      <NavLink
        className={({ isActive }) => getLinkClasses(isActive, location)}
        to="/news"
      >
        <p className="text-center">News</p>
      </NavLink>
      <NavLink
        className={({ isActive }) => getLinkClasses(isActive, location)}
        to="/notices"
      >
        <p className="text-center">Find pet</p>
      </NavLink>
      <NavLink
        className={({ isActive }) => getLinkClasses(isActive, location)}
        to="/friends"
      >
        <p className="text-center">Our friends</p>
      </NavLink>
    </div>
  );
};

export default Navigation;
