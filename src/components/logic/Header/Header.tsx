import { useEffect } from "react";
import Navigation from "../Navigation/Navigation";
import { useLocation } from "react-router-dom";
import Icon from "@shared/Icon";
import Logo from "@components/ui/Logo/Logo";
import { useSelector } from "react-redux";
import { selectToken } from "@src/redux/users/selectors";
import AuthNav from "../AuthNav/AuthNav";
import useScreenWidth from "@src/hooks/useScreenWidth";
import Logout from "../LogoutBtn/LogoutBtn";
import useToggle from "@src/hooks/useToggle";
import useOutsideClick from "@src/hooks/useOutsideClick";

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

  return (
    <header
      className={`flex justify-between items-center relative mx-auto z-50 md:w-[636px] ${
        location.pathname === "/" ? "px-[16px]" : "px-0"
      }`}
    >
      <Logo location={location.pathname} />
      {token === null && isTabletScreen && (
        <AuthNav location={location.pathname} />
      )}
      {token != null && isTabletScreen && <Logout />}
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

      <Navigation
        location={location.pathname}
        isOpen={isOpen}
        setIsOpen={close}
      />
    </header>
  );
};

export default Header;
