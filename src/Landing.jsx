import React from "react";
import { Link } from "react-router-dom";
import bgImage from "./assets/Bg-Landing.avif";
import challimage from "./assets/Challanges.svg";
import compimg from "./assets/CompImg.svg";
import Reviuser from "./assets/userpic.svg";
import learnimg from "/src/assets/Learning.svg";


export default function Landing() {
    return (
        <div className="min-h-screen bg-gray-950 text-white flex flex-col relative overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-50 pt-10"
                style={{ backgroundImage: `url(${bgImage})` }}
            ></div>

            {/* Header */}
            <header className="w-full py-6 px-8 sm:px-12 flex justify-between items-center fixed top-0 left-0 bg-gray-900/80 backdrop-blur-md z-50 shadow-lg">
                <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                    Code N Learn
                </h1>
                <nav className="space-x-4">
                    <Link
                        to="/signup"
                        className="bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-2 rounded-full font-semibold  shadow-md"
                    >
                        Sign Up
                    </Link>
                    <Link
                        to="/login"
                        className="bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-2 rounded-full font-semibold shadow-md "
                    >
                        Login
                    </Link>
                </nav>
            </header>

            {/* Main Content */}
            <section className="flex flex-col justify-center items-center text-center px-6 sm:px-8 relative pt-32 sm:pt-40 h-full pb-20">
                <div className="max-w-4xl space-y-8">
                    <h2 className="text-4xl sm:text-6xl font-bold text-blue-200">
                        First, solve the problem. Then, write the code.
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-300">
                        Learn from interactive tutorials, solve real-world
                        problems, and join a passionate community of developers.
                    </p>
                    <div>
                        <Link
                            to="/signup"
                            className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-4 rounded-full text-lg sm:text-xl font-semibold shadow-lg hover:shadow-xl hover:from-indigo-600 hover:to-purple-700 transition duration-300"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-transparent relative z-10 border-1 border-gray-700 backdrop-blur-xl">
                <div className="flex flex-col px-6 sm:px-8 text-center bg-transparent">
                    <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                        Features
                    </h3>
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                            <img
                                src={challimage}
                                alt="Code challenge feature"
                                className="w-full h-60 img-cover rounded-md mb-4"
                            />
                            <h4 className="text-xl font-semibold">
                                Challenges
                            </h4>
                            <p className="mt-4 text-gray-300">
                                Solve real problems with challenges.
                            </p>
                        </div>
                        {/* Feature 2 */}
                        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                            <img
                                src={learnimg}
                                alt="Different levels of learning"
                                className="w-full h-60 img-cover rounded-md mb-4"
                            />
                            <h4 className="text-xl font-semibold">
                                Different Levels of Learning
                            </h4>
                            <p className="mt-4 text-gray-300">
                                Learn according to your experience and improve
                                your skills.
                            </p>
                        </div>
                        {/* Feature 3 */}
                        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                            <img
                                src={compimg}
                                alt="Competitive learning spirit"
                                className="w-full h-60 img-cover rounded-md mb-4"
                            />
                            <h4 className="text-xl font-semibold">
                                Competitive Spirit
                            </h4>
                            <p className="mt-4 text-gray-300">
                                Prepare for a competitive learning experience.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reviews Section */}
            <section>
                <div className="py-20 bg-transparent relative z-10 border border-gray-700 backdrop-blur-xl">
                    <div className="flex flex-col px-6 sm:px-8 text-center bg-transparent">
                        <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                            What our users say
                        </h3>
                        <div className="  mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            <div className=" flex flex-col bg-gray-800 p-6 rounded-lg shadow-lg">
                                <div className="flex  items-center space-x-4">
                                    <img
                                    
                                        src={Reviuser}
                                        className="w-24 h-24 rounded-full border-2 border-gray-600"
                                    />
                                    <h4 className="  text-lg font-semibold text-white">
                                       <span className="text-gray-400">Name :</span> Jonny Rai 
                                    </h4>
                                </div>
                                <p className="mt-4 text-gray-200">
                                    Great serviece. I love it.
                                </p>
                                <div className="mt-3 flex"></div>
                            </div>

                            <div className=" flex flex-col bg-gray-800 p-6 rounded-lg shadow-lg">
                                <div className="flex  items-center space-x-4">
                                    <img
                                    
                                        src={Reviuser}
                                        className="w-24 h-24 rounded-full border-2 border-gray-600"
                                    />
                                    <h4 className="  text-lg font-semibold text-white">
                                       <span className="text-gray-400">Name :</span> Alejandro Hernandez
                                    </h4>
                                </div>
                                <p className="mt-4 text-gray-200 p-7">
                                     My dedication to learning is bought me to this platform, the best descision of my ife 
                                </p>
                                <div className="mt-3 flex"></div>
                            </div>

                            <div className=" flex flex-col bg-gray-800 p-6 rounded-lg shadow-lg">
                                <div className="flex  items-center space-x-4">
                                    <img
                                    
                                        src={Reviuser}
                                        className="w-24 h-24 rounded-full border-2 border-gray-600"
                                    />
                                    <h4 className="  text-lg font-semibold text-white">
                                       <span className="text-gray-400">Name :</span> Ramesh kumar pandey
                                    </h4>
                                </div>
                                <p className="mt-4 text-gray-200">
                                I highly recommend this platform.
                                </p>
                                <div className="mt-3 flex"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 text-center text-gray-400 relative z-10 bg-transparent">
                <p>&copy; All rights reserved.</p>
            </footer>
        </div>
    );
}
