import Navigation from "../Navigation/Navigation";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "../../ui/Logo/Logo";
import css from "./HeaderStyles";
import Icon from "../../../shared/Icon";

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
      className={`${css.header} ${
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
