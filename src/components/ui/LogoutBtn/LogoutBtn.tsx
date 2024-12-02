import { AppDispatch } from "@src/redux/store";
import { signOut } from "@src/redux/users/operation";
import { selectToken } from "@src/redux/users/selectors";

import { useDispatch, useSelector } from "react-redux";

const Logout = () => {
  const dispatch = useDispatch<AppDispatch>();

  const isLogged = useSelector(selectToken);

  const handleLogout = () => {
    dispatch(signOut());
  };

  return isLogged != null && <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
