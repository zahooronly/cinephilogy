import { Navigate } from "react-router";
import { useToken } from "../../hooks/useToken";

export const ProtectedRoutes = ({ children }) => {
  const token = useToken();
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
