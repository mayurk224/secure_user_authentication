// PublicRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import Spinner from "../components/Spinner";

const PublicRoute = ({ children }) => {
  const { user, loading } = useUserContext();

  if (loading) return <Spinner />;
  if (user) {
    return <Navigate to="/dashboard" />;
  }

  return children;
};

export default PublicRoute;
