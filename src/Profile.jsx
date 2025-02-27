import React from "react";
import Navigation from "./Navigation";

export default function Profile() {
  // Placeholder user data (replace with actual data from state or API)
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    bio: "Software Engineer | React Enthusiast | Open Source Contributor",
    profilePicture: "https://via.placeholder.com/150", // Placeholder image URL
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Navigation Bar */}
      <Navigation />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
            <div className="flex items-center space-x-6">
              {/* Profile Picture */}
              <img
                src={user.profilePicture}
                alt="Profile"
                className="w-24 h-24 rounded-full border-4 border-white"
              />
              {/* User Info */}
              <div>
                <h1 className="text-3xl font-bold text-white">{user.name}</h1>
                <p className="text-lg text-blue-100">{user.bio}</p>
              </div>
            </div>
          </div>

          {/* Profile Details */}
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Profile Details</h2>
            <div className="space-y-4">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-600">Email</label>
                <p className="mt-1 text-lg text-gray-800">{user.email}</p>
              </div>

              {/* Bio */}
              <div>
                <label className="block text-sm font-medium text-gray-600">Bio</label>
                <p className="mt-1 text-lg text-gray-800">{user.bio}</p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="p-6 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Actions</h2>
            <div className="flex space-x-4">
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all">
                Edit Profile
              </button>
              <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-all">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white mt-12 py-6 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">&copy; 2023 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}