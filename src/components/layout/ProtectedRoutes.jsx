import React from "react";
import { Navigate } from "react-router";

export const ProtectedRoutes = ({ children, isAuthenticated }) => {
  return isAuthenticated ? children : <Navigate to="/login" replace={true} />;
};
