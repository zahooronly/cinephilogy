import { Navigate } from "react-router";
import { getUser } from "../../lib/utils";

export const ProtectedRoutes = ({ children }) => {
  const isAuthenticated = getUser();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
