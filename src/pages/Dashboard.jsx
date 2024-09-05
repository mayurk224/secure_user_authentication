import React, { useState, useEffect } from "react";
import { auth, db } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import Spinner from "../components/Spinner";
import { Link, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import pic from "../assets/profile.jpg";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState("");
  const [firstName, setFirstName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Dashboard";
    const unsubscribe = auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        setUser(authUser);

        try {
          const userDoc = await getDoc(doc(db, "users", authUser.uid));
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setFirstName(userData.firstName || "");
            setUserRole(userData.role || "");
          } else {
            console.error("No user document found");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        setUser(null);
        setFirstName("");
        setUserRole("");
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("You have been logged out successfully.");
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
      alert("Failed to log out. Please try again.");
    }
  };

  const handleEdit = () => {
    if (user) {
      navigate(`/edit/${user.uid}`);
    }
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-5">
        <div className="flex flex-col items-center">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg object-cover object-center"
            src={pic}
            alt="Bonnie image"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {firstName}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {user?.email}
          </span>
          <div className="flex mt-4 md:mt-6 max-[320px]:flex max-[320px]:flex-col max-[320px]:gap-3">
            <button
              onClick={handleEdit}
              className=" px-4 py-2 text-sm font-medium  text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
            >
              Update
            </button>
            <Link
              to="/change-password"
              className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 text-center"
            >
              Change Password
            </Link>

            {userRole === "admin" && (
              <Link
                to="/admin"
                className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 text-center"
              >
                Admin
              </Link>
            )}
            <button
              onClick={handleLogout}
              className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
