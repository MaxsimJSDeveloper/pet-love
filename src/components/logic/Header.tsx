import Navigation from "./Navigation/Navigation";
import sprite from "/img/symbol-defs.svg";
import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

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
    <header className="flex justify-between items-center fixed top-0 left-0 right-0 p-4 max-w-[290px] w-full mx-auto">
      <NavLink to="/" className="flex items-center gap-2">
        <div className="flex items-end justify-center gap-0 w-[76px] h-[20px] font-bold text-[20px] leading-[100%] tracking-[-0.04em] text-white">
          <p>petl</p>
          <svg
            className={
              location.pathname === "/" ? "fill-white" : "fill-[#F6B83D]"
            }
            width={23}
            height={23}
          >
            <use xlinkHref={`${sprite}#icon-logo`} />
          </svg>
          <p>ve</p>
        </div>
      </NavLink>

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
