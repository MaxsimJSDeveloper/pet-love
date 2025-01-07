import AuthNav from "../AuthNav/AuthNav";
import { NavigationProps } from "./Navigation.types";
import css from "./NavigationStyles";
import Icon from "@src/shared/Icon";
import Navigation from "../Navigation/Navigation";

const NavigationSidebar = ({
  isOpen,
  setIsOpen,
  location,
}: NavigationProps) => {
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
      <Navigation location={location} />

      <div className="mt-auto flex flex-col items-center">
        <AuthNav location={location} />
      </div>
    </nav>
  );
};

export default NavigationSidebar;
