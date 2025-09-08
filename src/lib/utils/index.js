import useAuthStore from "../../app/authStore";

export const useAuth = () => {
  const { token } = useAuthStore();
  if (!token) return false;
  return true;
};

export const useToken = () => {
  const { token } = useAuthStore();
  return token;
};

export const getStarRating = (rating) => {
  return (rating / 2).toFixed(1);
};
export const formatRuntime = (minutes) => {
  if (!minutes) return "";
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}h ${mins}m`;
};

export const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
