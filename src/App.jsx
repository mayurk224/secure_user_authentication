import React from "react";
import { UserProvider } from "./context/UserContext";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AdminPanel from "./pages/AdminPanel";
import ProtectedRoute from "./Routes/ProtectedRoute";
import ForgotPassword from "./pages/ForgotPassword";
import ChangePassword from "./pages/ChangePassword";
import EditUser from "./pages/EditUser";
import PublicRoute from "./Routes/PublicRoute";
import Maintenance from "./pages/Maintenance";
import PageNotFound from "./pages/PageNotFound";
import NetworkCheck from "./Routes/NetworkCheck";

function App() {
  return (
    <UserProvider>
      <Router>
        <NetworkCheck>
          <Routes>
            <Route
              path="/"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />
            <Route
              path="/forgot-password"
              element={
                <PublicRoute>
                  <ForgotPassword />
                </PublicRoute>
              }
            />
            <Route
              path="/change-password"
              element={
                <ProtectedRoute allowedRoles={["user", "admin"]}>
                  <ChangePassword />
                </ProtectedRoute>
              }
            />
            <Route
              path="/edit/:userId"
              element={
                <ProtectedRoute allowedRoles={["user", "admin"]}>
                  <EditUser />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute allowedRoles={["user", "admin"]}>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin"
              element={
                <ProtectedRoute allowedRoles={["admin"]}>
                  <AdminPanel />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/maintenance" element={<Maintenance />} />
          </Routes>
        </NetworkCheck>
      </Router>
    </UserProvider>
  );
}

export default App;
