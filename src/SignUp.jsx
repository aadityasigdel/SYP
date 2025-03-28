import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    
    const nav = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Show loading indicator

        try {
            const response = await axios.post("http://localhost:5000/api/signup", formData);
            console.log("User signed up:", response.data);
            nav("/login"); // Redirect to login page
        } catch (error) {
            setError("An error occurred during signup. Please try again.");
            console.error(error);
        } finally {
            setIsLoading(false); // Hide loading indicator
        }
    };

    return (
        <div className="flex bg-[url('/src/assets/signup-BG.jpg')] bg-cover w-full items-center justify-center min-h-screen p-4">
            <div className="flex flex-col md:flex-row h-auto w-full max-w-4xl shadow-md shadow-blue-200 rounded-2xl overflow-hidden">
                {/* Left Section: Banner */}
                <div className="hidden md:flex flex-col bg-gradient-to-br from-purple-600 to-pink-600 items-center justify-center p-8 md:w-1/2">
                    <div className="text-center text-white space-y-6">
                        <h1 className="text-5xl font-bold">
                            Join Us Today!
                        </h1>
                        <p className="text-lg">
                            Sign up and be part of a community that inspires creativity and innovation. Your journey begins here.
                        </p>
                    </div>
                </div>

                {/* Right Section: Form */}
                <div className="flex items-center justify-center w-full md:w-1/2 bg-white">
                    <div className="w-full max-w-md p-8">
                        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
                            Sign Up
                        </h2>

                        {/* Error Message */}
                        {error && (
                            <div className="bg-red-100 text-red-700 p-4 mb-4 rounded-lg">
                                {error}
                            </div>
                        )}

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            {/* Username Field */}
                            <div>
                                <label
                                    htmlFor="username"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    Username
                                </label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                    placeholder="Enter your username"
                                    required
                                />
                            </div>

                            {/* Email Field */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            {/* Password Field */}
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                    placeholder="Enter your password"
                                    required
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-purple-500 text-white py-3 px-4 rounded-lg hover:bg-purple-600 transition-all duration-300 transform hover:scale-105"
                                disabled={isLoading} // Disable button when loading
                            >
                                {isLoading ? "Signing Up..." : "Sign Up"}
                            </button>
                        </form>

                        {/* Links */}
                        <div className="text-center mt-6">
                            <p className="text-sm text-gray-600">
                                Already have an account?{" "}
                                <Link
                                    to="/login"
                                    className="text-purple-500 hover:underline hover:text-purple-600 transition-all"
                                >
                                    Login
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
