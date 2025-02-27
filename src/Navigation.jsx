import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navigation() {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <header className="flex justify-between items-center w-full bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 h-12 shadow-lg px-4 sm:px-8 md:px-12 font-bold">
                <div className="flex items-center gap-4 text-white text-xl font-serif">
                    <img
                        src="path-to-your-logo.png"
                        alt="Code n Learn Logo"
                        className="rounded-full bg-white w-10 h-10"
                    />
                    <h1 className="text-white tracking-wide">Code n Learn</h1>
                </div>

                <nav className="sm:flex hidden gap-6 sm:gap-8 ">
                    <Link
                        to="/home"
                        className="text-white hover:scale-110 hover:text-gray-300 transition-transform ease-in-out duration-300 "
                    >
                        Home
                    </Link>
                    <Link
                        to="/challenges"
                        className="text-white hover:scale-110 hover:text-gray-300 transition-transform ease-in-out duration-300 "
                    >
                        Challenges
                    </Link>
                    <Link
                        to="/leaderboard"
                        className="text-white hover:scale-110 hover:text-gray-300 transition-transform ease-in-out duration-300 "
                    >
                        Leaderboard
                    </Link>
                    <Link
                        to="/profile"
                        className="text-white hover:scale-110 hover:text-gray-300 transition-transform ease-in-out duration-300 "
                    >
                        Profile
                    </Link>
                </nav>
            </header>

        {isOpen&&
            <nav className="flex sm:hidden flex-col absolute h-screen right-0 bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-600 shadow-lg px-4 sm:px-8 md:px-12">
                <Link
                    to="/home"
                    className="text-white hover:scale-110 hover:text-gray-300 transition-transform ease-in-out duration-300 "
                >
                    Home
                </Link>
                <Link
                    to="/challenges"
                    className="text-white hover:scale-110 hover:text-gray-300 transition-transform ease-in-out duration-300 "
                >
                    Challenges
                </Link>
                <Link
                    to="/leaderboard"
                    className="text-white hover:scale-110 hover:text-gray-300 transition-transform ease-in-out duration-300 "
                >
                    Leaderboard
                </Link>
                <Link
                    to="/profile"
                    className="text-white hover:scale-110 hover:text-gray-300 transition-transform ease-in-out duration-300 "
                >
                    Profile
                </Link>
            </nav>
            }
        </>
    );
}
