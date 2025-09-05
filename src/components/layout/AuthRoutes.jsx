import { Navigate, Outlet } from "react-router";

export const AuthRoutes = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};
