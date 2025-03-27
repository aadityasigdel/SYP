import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header className="w-full bg-gray-900 text-white shadow-lg">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo/Brand */}
                        <div className="flex items-center">
                            <img
                                src="src/assets/CodeNLearnLogo.jpeg"    
                                alt="Code n Learn Logo"
                                className="h-14 w-14 rounded-full mr-3"
                            />
                            <span className="text-xl font-semibold">
                                Code n Learn
                            </span>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex space-x-8">
                            <NavLink to="/home">Home</NavLink>
                            <NavLink to="/challenges">Challenges</NavLink>
                            <NavLink to="/leaderboard">Leaderboard</NavLink>
                            <NavLink to="/profile">Profile</NavLink>
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden px-3 py-2 rounded-md text-white focus:outline-none"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <div className="w-6 flex flex-col gap-1">
                                <span className={`h-0.5 w-full bg-white transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                                <span className={`h-0.5 w-full bg-white ${isOpen ? 'opacity-0' : ''}`}></span>
                                <span className={`h-0.5 w-full bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className={`md:hidden bg-gray-800 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                    <div className="px-2 pt-2 pb-4 space-y-1">
                        <MobileNavLink to="/home" onClick={() => setIsOpen(false)}>
                            Home
                        </MobileNavLink>
                        <MobileNavLink to="/challenges" onClick={() => setIsOpen(false)}>
                            Challenges
                        </MobileNavLink>
                        <MobileNavLink to="/leaderboard" onClick={() => setIsOpen(false)}>
                            Leaderboard
                        </MobileNavLink>
                        <MobileNavLink to="/profile" onClick={() => setIsOpen(false)}>
                            Profile
                        </MobileNavLink>
                    </div>
                </div>
            </header>
        </>
    );
}

// Reusable NavLink component for desktop
function NavLink({ to, children }) {
    return (
        <Link
            to={to}
            className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors"
        >
            {children}
        </Link>
    );
}

// Reusable NavLink component for mobile
function MobileNavLink({ to, children, onClick }) {
    return (
        <Link
            to={to}
            onClick={onClick}
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition-colors"
        >
            {children}
        </Link>
    );
}