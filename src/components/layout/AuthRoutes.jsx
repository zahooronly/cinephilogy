import React from "react";
import { Navigate } from "react-router";

export const AuthRoutes = ({ children, isAuthenticated }) => {
  return (!isAuthenticated ? children : <Navigate to="/" replace={true} />);
};
