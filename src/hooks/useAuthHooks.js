import useAuthStore from "../app/authStore";

export const useAuth = () => {
  const token = useAuthStore((state) => state.token);
  if (token) return token;
  return false;
};
