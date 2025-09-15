import useAuthStore from "../app/authStore";

export const useToken = () => {
  const token = useAuthStore((state) => state.token);
  if (token) return token;
  return false;
};
