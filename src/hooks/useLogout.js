import { replace, useNavigate } from "react-router";
import useAuthStore from "../app/authStore";

export const useLogout = () => {
  const navigate = useNavigate();
  const removeToken = useAuthStore((state) => state.removeToken);

  const logout = () => {
    removeToken("token");
    navigate("/login", replace);
  };
  return logout;
};
