import React from "react";
import { Navigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import Spinner from "../components/Spinner";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user, userRole, loading } = useUserContext();

  if (loading) return <Spinner />;

  if (!user) {
    return <Navigate to="/" />;
  }

  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/dashboard" />;
  }

  return children;
};

export default ProtectedRoute;
