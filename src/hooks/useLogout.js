import { replace, useNavigate } from "react-router";
import useAuthStore from "../app/authStore";

export const useLogout = () => {
  const navigate = useNavigate();
  const { removeToken } = useAuthStore();
  const logout = () => {
    removeToken();
    navigate("/login", replace);
  };
  return logout;
};
