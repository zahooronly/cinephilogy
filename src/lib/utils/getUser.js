export const getUser = () => {
  const token = localStorage.getItem("token");
  return Boolean(token);
};
