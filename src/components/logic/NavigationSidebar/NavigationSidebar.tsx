import AuthNav from "../AuthNav/AuthNav";
import { NavigationProps } from "./Navigation.types";
import css from "./NavigationStyles";
import Icon from "@shared/Icon";
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
            id="icon-cross"
            className={location === "/" ? "text-dark" : "text-white"}
            width={"32px"}
            height={"32px"}
          />
        </button>
      </div>
      <Navigation location={location} />

      <AuthNav location={location} />
    </nav>
  );
};

export default NavigationSidebar;
