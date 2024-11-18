import Navigation from "../Navigation/Navigation";
import sprite from "/img/symbol-defs.svg";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "../../ui/Logo/Logo";

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
    <header className="flex justify-between items-center fixed top-0 left-0 right-0 p-4 max-w-[290px] w-full mx-auto z-50">
      <Logo location={location.pathname} />

      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleNav();
        }}
        className="bg-transparent border-none text-xl p-2"
      >
        <svg
          className={
            location.pathname === "/" ? "stroke-white" : "stroke-[#262626]"
          }
          width={23}
          height={23}
        >
          <use xlinkHref={`${sprite}#icon-burger`} />
        </svg>
      </button>

      <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default Header;
