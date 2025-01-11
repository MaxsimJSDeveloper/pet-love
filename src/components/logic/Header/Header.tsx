import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Icon from "@shared/Icon";
import Logo from "@components/ui/Logo/Logo";
import { useSelector } from "react-redux";
import { selectToken } from "@redux/users/selectors";
import AuthNav from "../AuthNav/AuthNav";
import useScreenWidth from "@hooks/useScreenWidth";
import Logout from "../LogoutBtn/LogoutBtn";
import useToggle from "@hooks/useToggle";
import useOutsideClick from "@hooks/useOutsideClick";
import NavigationSidebar from "../NavigationSidebar/NavigationSidebar";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  const { isOpen, toggle, close } = useToggle(false);
  const location = useLocation();
  const token = useSelector(selectToken);

  useOutsideClick(close, isOpen);

  useEffect(() => {
    close();
  }, [location, close]);

  const screenWidth = useScreenWidth();
  const isTabletScreen = screenWidth >= 768;
  const isDesktopScreen = screenWidth >= 1280;

  return (
    <header
      className={`flex justify-between items-center relative mx-auto z-50 md:w-[636px] xl:w-[1152px] ${
        location.pathname === "/" ? "px-[16px]" : "px-0"
      }`}
    >
      <Logo location={location.pathname} />
      {isDesktopScreen && <Navigation location={location.pathname} />}

      {token === null && isTabletScreen && (
        <AuthNav location={location.pathname} />
      )}
      {token != null && isTabletScreen && <Logout />}

      {!isDesktopScreen && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggle();
          }}
          className="bg-transparent border-none text-xl p-2"
        >
          <Icon
            id="icon-burger"
            stroke={
              location.pathname === "/" ? "stroke-white" : "stroke-[#262626]"
            }
            width={"23px"}
            height={"23px"}
          />
        </button>
      )}

      {!isDesktopScreen && (
        <NavigationSidebar
          location={location.pathname}
          isOpen={isOpen}
          setIsOpen={close}
        />
      )}
    </header>
  );
};

export default Header;
