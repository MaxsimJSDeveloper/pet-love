import { useState, useEffect, useCallback } from "react";
import Navigation from "../Navigation/Navigation";
import { useLocation } from "react-router-dom";
import Icon from "@shared/Icon";
import Logo from "@components/ui/Logo/Logo";
import { useSelector } from "react-redux";
import { selectToken } from "@src/redux/users/selectors";
import AuthNav from "../AuthNav/AuthNav";
import Logout from "@src/components/ui/LogoutBtn/LogoutBtn";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const location = useLocation();

  const token = useSelector(selectToken);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  // Мемоизируем функцию с помощью useCallback
  const handleOutsideClick = useCallback(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [isOpen]); // Зависимость от isOpen

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [handleOutsideClick]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Обновляем ширину экрана при изменении размера
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
          toggleNav();
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
        setIsOpen={setIsOpen}
      />
    </header>
  );
};

export default Header;
