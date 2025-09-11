import useAuthStore from "../app/authStore";

export const useAuth = () => {
  const { token } = useAuthStore();
  if (!token) return false;
  return true;
};
