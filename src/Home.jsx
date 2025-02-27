import React from "react";
import Navigation from "./Navigation";

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
            {/* Navigation Bar */}
            <Navigation />

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8">
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-gray-800 mb-4">
                        Welcome to Your Dashboard
                    </h1>
                    <p className="text-lg text-gray-600 mb-8">
                        Manage your projects, tasks, and team members effortlessly.
                    </p>
                </div>

                {/* Placeholder Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Projects</h2>
                        <p className="text-gray-600">
                            View and manage all your ongoing projects in one place.
                        </p>
                        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">
                            View Projects
                        </button>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Tasks</h2>
                        <p className="text-gray-600">
                            Keep track of your tasks and deadlines with ease.
                        </p>
                        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">
                            View Tasks
                        </button>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Team</h2>
                        <p className="text-gray-600">
                            Collaborate with your team members and assign tasks.
                        </p>
                        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">
                            View Team
                        </button>
                    </div>
                </div>

                {/* Call to Action Section */}
                <div className="mt-12 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Ready to Get Started?
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Join thousands of users who are already managing their work efficiently.
                    </p>
                    <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all">
                        Explore Features
                    </button>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-white mt-12 py-6 border-t border-gray-200">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-gray-600">
                        &copy; 2023 Your Company. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}