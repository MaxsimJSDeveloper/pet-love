import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/notices">Find pet</NavLink>
      <NavLink to="/friends">Our friends</NavLink>
    </nav>
  );
};

export default Navigation;
