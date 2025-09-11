import useAuthStore from "../app/authStore";

export const useAuth = () => {
  const { token } = useAuthStore();
  const originalToken = import.meta.env.VITE_ACCESS_TOKEN;
  if (!token) return false;
  if (token == originalToken) return true;
  else return false;
};
