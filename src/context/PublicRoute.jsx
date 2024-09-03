// PublicRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { useUserContext } from "./UserContext"; // Import the user context

const PublicRoute = ({ children }) => {
  const { user, loading } = useUserContext(); // Get the user and loading state from context

  if (loading) return <div>Loading...</div>; // Display loading indicator while loading

  // If user is authenticated, redirect to /dashboard
  if (user) {
    return <Navigate to="/dashboard" />;
  }

  // If user is not authenticated, render the children (e.g., Login component)
  return children;
};

export default PublicRoute;
