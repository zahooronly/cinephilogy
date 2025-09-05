import { useNavigate } from "react-router";

export const useLogout = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
    navigate("/login");
  };
  return logout;
};
