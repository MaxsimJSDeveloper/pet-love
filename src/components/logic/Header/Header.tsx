import Navigation from "../Navigation/Navigation";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
// import css from "./HeaderStyles";
import Icon from "@shared/Icon";
import Logo from "@components/ui/Logo/Logo";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`flex justify-between items-center relative mx-auto z-50 md:w-[636px] ${
        location.pathname === "/" ? "px-[16px]" : "px-0"
      }`}
    >
      <Logo location={location.pathname} />

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
