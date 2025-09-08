import { replace, useNavigate } from "react-router";

export const useLogout = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login", replace);
  };
  return logout;
};
