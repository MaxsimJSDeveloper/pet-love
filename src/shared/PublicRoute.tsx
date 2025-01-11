import { selectToken } from "@redux/users/selectors";
import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

interface PublicRouteProps {
  children: ReactNode;
}

const PublicRoute = ({ children }: PublicRouteProps) => {
  const token = useSelector(selectToken);

  return token ? <Navigate to="/" /> : children;
};

export default PublicRoute;
