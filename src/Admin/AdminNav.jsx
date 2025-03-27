import React, { useState } from "react";
import { Link } from "react-router-dom";
import SubmissionsReview from "./SubmissionsReview";

export default function AdminNav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 min-h-full shadow-lg">
      {/* Desktop Navbar */}
      <div className="hidden md:flex flex-col space-y-6">
        <ul className="space-y-4">
          <li>
            <Link to="/admin/challanges" className="text-lg font-medium hover:text-gray-300 transition">
              Challenges
            </Link>
          </li>
          <li>
            <Link to="/admin/manageuser" className="text-lg font-medium hover:text-gray-300 transition">
              User Management
            </Link>
           
          </li>
          <li>
          <Link
            to="/admin/submissions"
             className="text-lg font-medium hover:text-gray-300 transition"
          >
            Review Submissions
          </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Admin</h1>
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {isOpen ? "Close" : "Menu"} {/* Text-based toggle */}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-0 left-0 w-full bg-gray-900 text-white p-6 space-y-6 transform transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } md:hidden`}
      >
        <ul className="space-y-4">
          <li>
            <Link to="/admin/challanges" className="block text-lg font-medium hover:text-gray-300 transition" onClick={() => setIsOpen(false)}>
              Challenges
            </Link>
          </li>
          <li>
            <Link to="/admin/manageuser" className="block text-lg font-medium hover:text-gray-300 transition" onClick={() => setIsOpen(false)}>
              User Management
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}