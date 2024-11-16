import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
    <div className="flex flex-col gap-[8px] w-full">
      <NavLink
        className="rounded-[30px] h-[42px] flex items-center justify-center bg-[#f6b83d]"
        to="/login"
      >
        <p className="text-center uppercase  text-white font-bold text-sm">
          Log In
        </p>
      </NavLink>
      <NavLink
        className="rounded-[30px] h-[42px] flex items-center justify-center bg-[#fff4df]"
        to="/register"
      >
        <p className="text-center uppercase text-[#f6b83d] font-bold text-sm">
          Registration
        </p>
      </NavLink>
    </div>
  );
};

export default AuthNav;
