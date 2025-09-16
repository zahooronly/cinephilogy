import { Navigate } from "react-router";
import useAuthStore from "../../app/authStore";
import { ROUTE_PATHS } from "../../lib/constants/routesConstants";

export const AuthRoutes = ({ children }) => {
  const token = useAuthStore((state) => state.token);
  if (token) return <Navigate to={ROUTE_PATHS.HOME} replace />;
  return children;
};
