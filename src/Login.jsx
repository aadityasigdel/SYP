import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError(""); // Clear error when user starts typing
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const storedUser = JSON.parse(localStorage.getItem("userData"));
        if (storedUser && storedUser.email === formData.email && storedUser.password === formData.password) {
            navigate("/home"); // Navigate to the home route
        } else {
            setError("Invalid email or password");
        }
    };

    return (
        <div className="flex bg-gradient-to-br from-blue-50 to-purple-50 w-full items-center justify-center min-h-screen p-4">
            <div className="flex flex-col md:flex-row h-auto md:h-[600px] w-full max-w-4xl shadow-2xl shadow-blue-100 rounded-2xl overflow-hidden">
                
                {/* Left Section: Banner */}
                <div className="hidden md:flex flex-col bg-gradient-to-br from-blue-600 to-purple-600 items-center justify-center p-8 md:w-1/2">
                    <div className="text-center text-white space-y-6">
                        <h1 className="text-5xl font-bold">Welcome Back!</h1>
                        <p className="text-lg">
                            Log in to access your personalized dashboard, projects, and more.
                        </p>
                    </div>
                </div>

                {/* Right Section: Form */}
                <div className="flex items-center justify-center w-full md:w-1/2 bg-white">
                    <div className="w-full max-w-md p-8">
                        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Login</h2>
                        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            {/* Password Field */}
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    placeholder="Enter your password"
                                    required
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
                            >
                                Login
                            </button>
                        </form>

                        {/* Links */}
                        <div className="text-center mt-6">
                            <p className="text-sm text-gray-600">
                                Don't have an account?{" "}
                                <Link to="/signup" className="text-blue-500 hover:underline hover:text-blue-600 transition-all">
                                    Sign up
                                </Link>
                            </p>
                            <p className="text-sm text-gray-600 mt-2">
                                <Link to="/forgot-password" className="text-blue-500 hover:underline transition-all">
                                    Forgot password?
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}