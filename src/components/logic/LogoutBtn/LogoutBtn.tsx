import { AppDispatch } from "@src/redux/store";
import { signOut } from "@src/redux/users/operation";
import { selectToken } from "@src/redux/users/selectors";
import { useDispatch, useSelector } from "react-redux";

interface LogoutProps {
  style?: string;
}

const Logout = ({ style }: LogoutProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const isLogged = useSelector(selectToken);

  const handleLogout = () => {
    dispatch(signOut());
  };

  return (
    isLogged != null && (
      <button
        className={`${style} rounded-[30px] py-[15px] px-[35px] max-w-[136px] bg-[#f6b83d] text-[16px] text-bold uppercase text-white leading-[125%] tracking-[-0.03em] ml-auto`}
        onClick={handleLogout}
      >
        Log out
      </button>
    )
  );
};

export default Logout;
