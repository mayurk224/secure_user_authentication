import React from "react";
import { Navigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user, userRole, loading } = useUserContext();

  // While loading, you might want to display a loading indicator
  if (loading) return <div>Loading...</div>;

  // If not logged in, redirect to login
  if (!user) {
    return <Navigate to="/" />;
  }

  // If user role is not allowed, redirect to not authorized
  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/dashboard" />;
  }

  // If everything is fine, render the children components
  return children;
};

export default ProtectedRoute;
