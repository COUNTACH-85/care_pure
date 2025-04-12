import React, { useState, useEffect } from "react";
import { supabase } from "../createClient";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/login");
        return;
      }

      setEmail(session.user.email); // Set the user's email from the session
    };

    fetchUserProfile();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
        <ion-icon name="person-circle-outline" className="w-24 h-24 rounded-full mb-4"></ion-icon>
          {/* <img
            src="https://via.placeholder.com/100"
            alt="Avatar"
            className="w-24 h-24 rounded-full mb-4"
          /> */}
          <p className="text-gray-600 text-lg">{email}</p>
        </div>
        <button
          onClick={handleLogout}
          className="w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition"
        >
          Log out
        </button>
      </div>
    </div>
  );
};

export default Profile;