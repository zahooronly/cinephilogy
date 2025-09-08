export const getUser = () => {
  const token = localStorage.getItem("token");
  if (token == "" || !token) return false;
  return true;
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
