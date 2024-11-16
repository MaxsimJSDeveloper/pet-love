import { NavLink } from "react-router-dom";
import AuthNav from "../AuthNav";
import { NavigationProps } from "./Navigation.types";

import sprite from "/img/symbol-defs.svg";
import { linkClass } from "./NavigationStyles";

const Navigation = ({ isOpen, setIsOpen }: NavigationProps) => {
  const handleNavClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`${
        isOpen
          ? "absolute top-0 right-[-23px] w-[218px] bg-[#fff] h-[100vh] p-[20px] flex flex-col"
          : "hidden"
      }`}
      onClick={handleNavClick}
    >
      <div className="flex justify-end items-start">
        <button onClick={handleClose} type="button">
          <svg className="stroke-[#262626]" width={32} height={32}>
            <use xlinkHref={`${sprite}#icon-close`} />
          </svg>
        </button>
      </div>
      <div className="flex flex-col items-center justify-center flex-grow space-y-4">
        <NavLink
          className={({ isActive }) =>
            isActive ? `${linkClass} border-[#f6b83d]` : linkClass
          }
          to="/news"
        >
          <p className="text-center">News</p>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${linkClass} border-[#f6b83d]` : linkClass
          }
          to="/notices"
        >
          <p className="text-center">Find pet</p>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${linkClass} border-[#f6b83d]` : linkClass
          }
          to="/friends"
        >
          <p className="text-center">Our friends</p>
        </NavLink>
      </div>

      <div className="mt-auto flex flex-col items-center">
        <AuthNav />
      </div>
    </nav>
  );
};

export default Navigation;
