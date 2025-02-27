import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col">
            {/* Header */}
            <motion.header 
                className="w-full py-6 px-10 flex justify-between items-center fixed top-0 left-0 bg-gray-800/80 backdrop-blur-md z-50"
            >
                <h1 className="text-3xl font-bold text-indigo-400">Code & Learn</h1>
                <nav>
                    <Link
                        to="/signup"
                        className="bg-indigo-500 px-6 py-2 rounded-full font-semibold hover:bg-indigo-600 transition"
                    >
                        Sign Up
                    </Link>
                </nav>
            </motion.header>

            {/* Hero Section */}
            <section className="flex-1 flex flex-col justify-center items-center text-center px-6">
                <motion.h2
                    className="text-5xl font-bold mb-6"
                >
                    Master Coding Effortlessly
                </motion.h2>
                <motion.p
                    className="text-lg text-gray-300 max-w-2xl mb-6"
                >
                    Join our platform to access high-quality tutorials, real-world coding challenges, and a thriving community.
                </motion.p>
                <motion.div>
                    <Link
                        to="/signup"
                        className="bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-4 rounded-full text-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition"
                    >
                        Get Started
                    </Link>
                </motion.div>
            </section>

            {/* Footer */}
            <motion.footer 
                className="py-6 text-center text-gray-500"
            >
                &copy; 2024 Code & Learn. All rights reserved.
            </motion.footer>
        </div>
    );
}