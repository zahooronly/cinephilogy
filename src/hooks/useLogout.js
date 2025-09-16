import { replace, useNavigate } from "react-router";
import useAuthStore from "../app/authStore";
import { ROUTE_PATHS } from "../lib/constants/routesConstants";

export const useLogout = () => {
  const navigate = useNavigate();
  const deleteToken = useAuthStore((state) => state.deleteToken);

  const logout = () => {
    deleteToken();
    navigate(ROUTE_PATHS.LOGIN, replace);
  };
  return logout;
};
