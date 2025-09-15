import toast from "react-hot-toast";

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

export const errorMessage = (err) => {
  switch (err.response.status) {
    case 401:
      return toast.error("Invalid credentials.");
    default:
      return toast.error("An error occurred. Please try again later.");
  }
};
