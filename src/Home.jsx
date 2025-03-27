import React from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import pythonimg from "./assets/pythonimg.jpeg";

export default function Home() {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/challenges");
    };

    const handlePythonNavigate = () => {
        navigate("/python/pythonIntro");
    };

    return (
        <div className="flex min-h-screen bg-gray-50">
            <div className="flex-1">
                <div className="bg-white/10 backdrop-blur-md sticky top-0 z-50 shadow-lg">
                    <Navigation />
                </div>

                {/* Hero Section */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
                    <div className="container mx-auto px-8 text-center">
                        <h1 className="text-5xl font-bold mb-6">
                            Master Coding with Code N Learn
                        </h1>
                        <p className="text-xl mb-8 max-w-3xl mx-auto">
                            Your interactive platform to learn, practice, and excel in programming
                        </p>
                    </div>
                </div>

               {/* Python Beginner Level */}
               <section className="mb-20">
                        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
                            Python Beginner Level
                        </h2>
                        <div className="flex justify-center">
                            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 max-w-md w-full">
                                <div
                                    className="h-48 rounded-lg mb-6 relative overflow-hidden"
                                    style={{
                                        backgroundImage: `url(${pythonimg})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                                        <span className="text-white text-4xl font-bold">
                                            Python
                                        </span>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Python for Beginners
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    Learn the basics of Python programming from scratch with our comprehensive beginner's course.
                                </p>
                                <button
                                    onClick={handlePythonNavigate}
                                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all"
                                >
                                    Start Learning Python
                                </button>
                            </div>
                        </div>
                    </section>


                {/* Features Section */}
                <div className="container mx-auto px-8 py-16">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Why Choose Code N Learn?</h2>
                    <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                        We provide the best resources to help you grow as a developer
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                            <h3 className="text-xl font-semibold mb-2 text-blue-600">Hands-on Practice</h3>
                            <p className="text-gray-600">
                                Learn by doing with our interactive coding challenges and real-world projects.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                            <h3 className="text-xl font-semibold mb-2 text-purple-600">Structured Learning</h3>
                            <p className="text-gray-600">
                                Follow our carefully designed curriculum to master programming step by step.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                            <h3 className="text-xl font-semibold mb-2 text-green-600">Beginner Friendly</h3>
                            <p className="text-gray-600">
                                Perfect for beginners with clear explanations and gradual difficulty progression.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                            <h3 className="text-xl font-semibold mb-2 text-orange-600">Community Support</h3>
                            <p className="text-gray-600">
                                Join our community of learners and get help when you're stuck.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Second Python Course Section */}
                <div className="bg-gray-100 py-16">
                    <div className="container mx-auto px-8">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Featured Course</h2>

                        <div className="flex flex-col lg:flex-row gap-8 items-center">
                            <div className="lg:w-1/2">
                                <div className="relative rounded-xl overflow-hidden shadow-xl h-80">
                                    <img
                                        src={pythonimg}
                                        alt="Python Programming"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                                        <div>
                                            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-2 inline-block">
                                                Beginner Level
                                            </span>
                                            <h3 className="text-white text-3xl font-bold">Python Fundamentals</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:w-1/2">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Start Your Coding Journey</h3>
                                <p className="text-gray-600 mb-6">
                                    Python is the perfect language for beginners. Our comprehensive course will guide you from the very basics to building your first applications.
                                </p>

                                <div className="space-y-3 mb-8">
                                    <p className="text-gray-700">• Learn Python syntax and fundamentals</p>
                                    <p className="text-gray-700">• Work with real-world projects</p>
                                    <p className="text-gray-700">• Interactive exercises with instant feedback</p>
                                    <p className="text-gray-700">• Progress tracking and certificates</p>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button
                                        onClick={handlePythonNavigate}
                                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 cursor-pointer transition-all font-medium flex-1 text-center"
                                    >
                                        Start Learning Now
                                    </button>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
                    <div className="container mx-auto px-8 text-center">
                        <h2 className="text-3xl font-bold mb-6">Ready to Start Your Coding Journey?</h2>
                        <p className="text-xl mb-8 max-w-2xl mx-auto">
                            Join thousands of learners who have transformed their careers with Code N Learn
                        </p>
                        <button
                            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 cursor-pointer transition-all text-lg shadow-lg"
                            onClick={handleNavigate}
                        >
                            Get Started Now
                        </button>
                    </div>
                </div>

                {/* Footer */}
                <footer className="bg-gray-900 text-white py-12">
                    <div className="container mx-auto px-8">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <div className="mb-6 md:mb-0">
                                <h4 className="text-xl font-bold mb-2">Code N Learn</h4>
                                <p className="text-gray-400">
                                    Empowering the next generation of developers
                                </p>
                            </div>

                            <div className="flex flex-col items-center md:items-end">
                                <div className="flex space-x-6 mb-4">
                                    <a href="#" className="text-gray-400 hover:text-white cursor-pointer transition">About</a>
                                    <a href="#" className="text-gray-400 hover:text-white cursor-pointer transition">Courses</a>
                                    <a href="#" className="text-gray-400 hover:text-white cursor-pointer transition">Challenges</a>
                                    <a href="#" className="text-gray-400 hover:text-white cursor-pointer transition">Contact</a>
                                </div>
                                <p className="text-gray-400 text-sm">
                                    &copy; 2025 Code N Learn. All rights reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}