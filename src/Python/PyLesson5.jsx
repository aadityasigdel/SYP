import React from "react";
import { useNavigate } from "react-router-dom";
import PyNav from "./pyNav"; // Import the PyNav component

export default function PyLesson5() {
    const navigate = useNavigate();

    const goToNextLesson = () => {
        navigate("/python/pylesson6"); // Navigate to the next lesson
    };

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Side Navigation Bar */}
            <PyNav />

            {/* Main Content Area */}
            <div className="flex-1 p-8 bg-white shadow-lg rounded-lg m-6">
                {/* Lesson Title */}
                <h1 className="text-4xl font-bold text-gray-800 mb-8">
                    Lesson 5: Working with Libraries
                </h1>

                {/* Section: What are Libraries? */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                        What are Libraries?
                    </h2>
                    <p className="text-gray-600 mb-4">
                        Libraries are pre-written Python code that you can import into your programs to add extra functionality. Libraries provide a way to avoid writing common code from scratch.
                    </p>
                </section>

                {/* Section: Importing Libraries */}
                <section className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">
                        Importing Libraries
                    </h3>
                    <p className="text-gray-600 mb-4">
                        You can import a library using the <code className="bg-gray-100 px-1.5 py-0.5 rounded">import</code> keyword. For example, to use the built-in <code className="bg-gray-100 px-1.5 py-0.5 rounded">math</code> library:
                    </p>
                    <pre className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 overflow-x-auto">
                        <code>
                            {`# Importing the math library
                            import math

                            print(math.sqrt(16))  # Output: 4.0`}
                        </code>
                    </pre>
                </section>

                {/* Section: Using Specific Functions from Libraries */}
                <section className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">
                        Using Specific Functions from Libraries
                    </h3>
                    <p className="text-gray-600 mb-4">
                        If you only need a specific function, you can import it directly:
                    </p>
                    <pre className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 overflow-x-auto">
                        <code>
                            {`# Importing specific functions
                            from math import sqrt

                            print(sqrt(25))  # Output: 5.0`}
                        </code>
                    </pre>
                </section>

                {/* Section: Third-Party Libraries */}
                <section className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">
                        Third-Party Libraries
                    </h3>
                    <p className="text-gray-600 mb-4">
                        There are many third-party libraries available that you can install using <code className="bg-gray-100 px-1.5 py-0.5 rounded">pip</code>, the Python package manager. For example, the <code className="bg-gray-100 px-1.5 py-0.5 rounded">requests</code> library allows you to make HTTP requests.
                    </p>
                    <pre className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 overflow-x-auto">
                        <code>
                            {`# Install the requests library using pip
                            # pip install requests

                            import requests

                            response = requests.get('https://api.github.com')
                            print(response.status_code)  # Output: 200`}
                        </code>
                    </pre>
                </section>

                {/* Section: Popular Python Libraries */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                        Popular Python Libraries
                    </h2>
                    <ul className="list-disc pl-6 text-gray-600 space-y-2">
                        <li>
                            <strong>NumPy:</strong> A library for working with large, multi-dimensional arrays and matrices, along with a collection of mathematical functions.
                        </li>
                        <li>
                            <strong>Pandas:</strong> A powerful data manipulation and analysis library, widely used for working with structured data.
                        </li>
                        <li>
                            <strong>Matplotlib:</strong> A library for creating static, animated, and interactive visualizations in Python.
                        </li>
                        <li>
                            <strong>Requests:</strong> A simple HTTP library for making requests to web services and APIs.
                        </li>
                        <li>
                            <strong>Flask:</strong> A web framework for building web applications in Python.
                        </li>
                    </ul>
                </section>

                {/* Section: Exercise */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                        Exercise
                    </h2>
                    <p className="text-gray-600 mb-4">
                        Create a program that fetches data from a public API (e.g., JSONPlaceholder or GitHub API) and prints out some relevant information, like the user's name and email.
                    </p>
                </section>

                {/* Button to navigate to the next lesson */}
                <button
                    onClick={goToNextLesson}
                    className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition duration-300"
                >
                    Proceed to Next Lesson
                </button>
            </div>
        </div>
    );
}