import AuthNav from "../AuthNav/AuthNav";
import { NavigationProps } from "./Navigation.types";
import css from "./NavigationStyles";
import Icon from "@shared/Icon";
import Navigation from "../Navigation/Navigation";
import { forwardRef } from "react";

const NavigationSidebar = forwardRef<HTMLElement, NavigationProps>(
  ({ isOpen, setIsOpen, location }, ref) => {
    const handleClose = () => {
      setIsOpen(false);
    };

    return (
      <nav
        ref={ref}
        className={`${isOpen ? css.navigation : "hidden"} ${
          location === "/" && isOpen ? "bg-white" : ""
        }`}
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
  },
);

export default NavigationSidebar;
