import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NetworkCheck = ({ children }) => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const navigate = useNavigate();

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    if (!isOnline) {
      navigate("/maintenance");
    } 

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [isOnline, navigate]);

  return children;
};

export default NetworkCheck;
