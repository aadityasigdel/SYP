import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    company: "",
    bio: "",
    profile_picture: "",
    phone: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/user/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      const response = await fetch("http://localhost:5000/api/user/edit", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setUser({
          ...user,
          company: formData.company,
          bio: formData.bio,
          profile_picture: formData.profile_picture,
          phone: formData.phone,
        });
        setEditMode(false);
      } else {
        setError(data.message || "Failed to update profile");
      }
    } catch (err) {
      setError("Error updating profile. Please try again.");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg max-w-md">
          <p className="font-medium">Error loading profile:</p>
          <p>{error}</p>
          <button 
            onClick={() => navigate("/login")}
            className="mt-2 text-blue-600 hover:text-blue-800"
          >
            Return to login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 z-50 bg-white shadow-sm">
        <Navigation />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* Profile Header */}
        <div className="flex flex-col items-center mb-12">
          <div className="relative group w-32 h-32">
            <img
              src={user.profile_picture || "/default-profile.jpg"}
              alt="Profile"
              className="w-full h-full rounded-full border-4 border-white shadow-lg object-cover"
            />
            {editMode && (
              <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                <label className="text-white text-sm font-medium">
                  Change Photo
                  <input 
                    type="file" 
                    className="hidden" 
                    onChange={(e) => {
                      // Handle file upload logic here
                    }}
                  />
                </label>
              </div>
            )}
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mt-6">{user.name}</h1>
          <div className="flex items-center mt-2">
            <span className="w-5 h-5 text-gray-500 mr-1">📍</span>
            <p className="text-gray-600">{user.company || "No company specified"}</p>
          </div>
          <p className="text-gray-400 text-sm mt-2">
            Member since {user.joineddate ? new Date(user.joineddate).toLocaleDateString() : "unknown"}
          </p>
        </div>

        {/* Profile Content */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-3xl mx-auto">
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4">
              <p>{error}</p>
            </div>
          )}

          {editMode ? (
            <form onSubmit={handleSave} className="p-6 space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">Edit Profile</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Bio</label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows="4"
                  placeholder="Tell us about yourself..."
                ></textarea>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Profile Picture URL</label>
                <input
                  type="text"
                  name="profile_picture"
                  value={formData.profile_picture}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Paste image URL"
                />
              </div>

              <div className="flex justify-end space-x-4 pt-4">
                <button
                  type="button"
                  onClick={() => setEditMode(false)}
                  className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-md"
                >
                  Save Changes
                </button>
              </div>
            </form>
          ) : (
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Profile Information</h2>
                <button
                  onClick={() => {
                    setEditMode(true);
                    setFormData({
                      company: user.company || "",
                      bio: user.bio || "",
                      profile_picture: user.profile_picture || "",
                      phone: user.phone || "",
                    });
                  }}
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Edit Profile
                </button>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">About</h3>
                <p className="text-gray-600 whitespace-pre-line">
                  {user.bio || "No bio added yet."}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <InfoCard 
                  icon={<span className="w-6 h-6 text-blue-500">📧</span>}
                  title="Email" 
                  value={user.email} 
                />
                <InfoCard 
                  icon={<span className="w-6 h-6 text-green-500">📱</span>}
                  title="Phone" 
                  value={user.phone || "Not provided"} 
                />
                <InfoCard 
                  icon={<span className="w-6 h-6 text-purple-500">🏢</span>}
                  title="Company" 
                  value={user.company || "Not provided"} 
                />
                <InfoCard 
                  icon={<span className="w-6 h-6 text-yellow-500">⭐</span>}
                  title="Score" 
                  value={user.score || "0"} 
                />
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6 border-t border-gray-200">
                <button
                  onClick={() => {
                    localStorage.removeItem("token");
                    navigate("/login");
                  }}
                  className="flex items-center justify-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function InfoCard({ icon, title, value }) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition">
      <div className="flex items-center space-x-4">
        <div className="p-2 rounded-full bg-white shadow-sm">
          {icon}
        </div>
        <div>
          <h3 className="font-medium text-gray-500">{title}</h3>
          <p className="text-gray-800 font-medium">{value}</p>
        </div>
      </div>
    </div>
  );
}
