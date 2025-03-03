import React from "react";
import Navigation from "./Navigation";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/challenges");
    };

    const levels = [
        { title: "Beginner Level Programming", description: "Get your hands wet with Python." },
        { title: "Intermediate Level Programming", description: "Get into advanced learning with Python." },
        { title: "Advanced Level Programming", description: "Master your Python skills with real-world challenges." }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
            {/* Navigation Bar */}
            <Navigation />

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8">
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-gray-800 mb-4">
                        Welcome to Code N Learn
                    </h1>
                    <p className="text-lg text-gray-600 mb-8">
                        A platform to learn and grow.
                    </p>
                </div>

                {/* Programming Levels */}
                <div className="flex flex-col justify-center gap-6">
                    {levels.map((level, index) => (
                        <div key={index}>
                            <h1 className="text-2xl font-bold text-gray-800">{level.title}</h1>
                            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">Projects</h2>
                                <p className="text-gray-600">{level.description}</p>
                                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">
                                    View Projects
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action Section */}
                <div className="mt-12 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Ready for a Challenge?
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Solve real problems with different programming languages.
                    </p>
                    <button 
                        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all" 
                        onClick={handleNavigate}
                    >
                        Explore Challenges
                    </button>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-white mt-12 py-6 border-t border-gray-200">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-gray-600">&copy; All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
