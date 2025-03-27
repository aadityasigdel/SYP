import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

export default function PyNav() {
    return (
        <nav className="w-64 bg-gray-800 text-white p-6">
            <h2 className="text-xl font-bold mb-6">Python Lessons</h2>
            <ul className="space-y-3">
                <li>
                    <Link
                        to="../pythonIntro"
                        className="block py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300"
                    >
                        Introduction
                    </Link>
                </li>
                <li>
                    <Link
                        to="../pylesson1"
                        className="block py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300"
                    >
                        Lesson 1
                    </Link>
                </li>
                <li>
                    <Link
                        to="../pylesson2"
                        className="block py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300"
                    >
                        Lesson 2
                    </Link>
                </li>
                <li>
                    <Link
                        to="../pylesson3"
                        className="block py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300"
                    >
                        Lesson 3
                    </Link>
                </li>
                <li>
                    <Link
                        to="../pylesson4"
                        className="block py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300"
                    >
                        Lesson 4
                    </Link>
                </li>
                <li>
                    <Link
                        to="../pylesson5"
                        className="block py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300"
                    >
                        Lesson 5
                    </Link>
                </li>
            </ul>
        </nav>
    );
}