import { Navigate } from "react-router";
import { getUser } from "../../lib/utils/getUser";

export const ProtectedRoutes = ({ children }) => {
  const isAuthenticated = getUser();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
