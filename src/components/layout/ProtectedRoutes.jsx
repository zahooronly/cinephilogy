import { Navigate } from "react-router";
import { useAuth } from "../../hooks/useAuthHooks";

export const ProtectedRoutes = ({ children }) => {
  const isAuthenticated = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
