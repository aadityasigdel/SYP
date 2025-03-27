import React from "react";
import { useNavigate } from "react-router-dom";
import PyNav from "./pyNav"; // Import the PyNav component

export default function PyLesson1() {
    const navigate = useNavigate();

    const goToNextLesson = () => {
        navigate("/python/pylesson2"); // Navigate to the next lesson
    };

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Side Navigation Bar */}
            <PyNav />

            {/* Main Content Area */}
            <div className="flex-1 p-8 bg-white shadow-lg rounded-lg m-6">
                {/* Lesson Title */}
                <h1 className="text-4xl font-bold text-gray-800 mb-8">
                    Lesson 1: Introduction to Python
                </h1>

                {/* Section: Getting Started with Python */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                        Getting Started with Python
                    </h2>
                    <p className="text-gray-600 mb-4">
                        Python is a versatile, high-level programming language. In this lesson, we’ll cover the basics like setting up your environment and writing your first Python program.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Setting Up Python</h3>
                    <p className="text-gray-600 mb-4">
                        To start programming in Python, you need to install it from the official website:
                        <a
                            href="https://www.python.org/downloads/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500"
                        >
                            Download Python
                        </a>.
                    </p>
                </section>

                {/* Section: Python Syntax Basics */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                        Python Syntax Basics
                    </h2>
                    <p className="text-gray-600 mb-4">
                        Python is known for its simple and readable syntax. Here are some key concepts:
                    </p>

                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Variables and Data Types</h3>
                    <pre className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 overflow-x-auto">
                        <code>
                            {`# Defining variables
age = 30  # Integer
name = "John"  # String
height = 5.9  # Float
is_active = True  # Boolean`}
                        </code>
                    </pre>
                    <p className="text-gray-600 mb-4">
                        Variables are used to store values. Python automatically detects the type of variable (e.g., integer, string, float, boolean).
                    </p>

                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Basic Operators</h3>
                    <pre className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 overflow-x-auto">
                        <code>
                            {`# Example of arithmetic operators
x = 10
y = 5
sum = x + y  # Addition`}
                        </code>
                    </pre>
                    <p className="text-gray-600 mb-4">
                        Operators in Python allow you to perform calculations. You can use arithmetic operators like +, -, *, and /.
                    </p>
                </section>

                {/* Section: First Python Program */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                        Your First Python Program
                    </h2>
                    <p className="text-gray-600 mb-4">
                        Now let's write a simple Python program that outputs a greeting.
                    </p>
                    <pre className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 overflow-x-auto">
                        <code>
                            {`# Simple Python Program
print("Hello, World!")`}
                        </code>
                    </pre>
                    <p className="text-gray-600 mb-4">
                        Save this program with the filename <code>hello.py</code>, and run it in your terminal using the command: <code>python hello.py</code>.
                    </p>
                </section>

                {/* Section: Exercise */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                        Exercise
                    </h2>
                    <p className="text-gray-600 mb-4">
                        Write a Python program that takes the user's name as input and prints a personalized greeting.
                    </p>
                </section>

                {/* Button to navigate to the next lesson */}
                <button
                    onClick={goToNextLesson}
                    className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition duration-300"
                >
                    Proceed to Lesson 2
                </button>
            </div>
        </div>
    );
}
