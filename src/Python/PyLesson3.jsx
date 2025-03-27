import React from "react";
import { useNavigate } from "react-router-dom"; // Importing useNavigate for navigation
import PyNav from "./pyNav"; // Import the PyNav component
export default function PyLesson3() {
    const navigate = useNavigate(); // Declare useNavigate hook for navigation

    // Function to navigate to the next challenge
    const goToNextChallenge = () => {
        navigate("/python/pylesson4"); // Navigate to the next lesson or challenge
    };

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Side Navigation Bar */}
            <PyNav />

            {/* Main Content Area */}
            <div className="flex-1 p-8 bg-white shadow-lg rounded-lg m-6">
                {/* Lesson Title */}
                <h1 className="text-4xl font-bold text-gray-800 mb-8">
                    Lesson 3: Functions
                </h1>

                {/* Section: What are Functions? */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                        What are Functions?
                    </h2>
                    <p className="text-gray-600 mb-4">
                        Functions allow you to organize code into reusable blocks. They help improve code readability and reduce redundancy.
                    </p>
                </section>

                {/* Section: Defining Functions */}
                <section className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Defining Functions</h3>
                    <p className="text-gray-600 mb-4">
                        Functions are defined using the <code className="bg-gray-100 px-1.5 py-0.5 rounded">def</code> keyword. Heres a simple function that prints a message:
                    </p>
                    <pre className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 overflow-x-auto">
                        <code>
                            {`# Function definition
def greet():
    print("Hello, Python!")
greet()`}  
                        </code>
                    </pre>
                </section>

                {/* Section: Function Parameters */}
                <section className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Function Parameters</h3>
                    <p className="text-gray-600 mb-4">
                        Functions can accept parameters that allow you to pass values to the function. Heres an example:
                    </p>
                    <pre className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 overflow-x-auto">
                        <code>
                            {`# Function with parameters
def greet(name):
    print(f"Hello, {name}!")
greet("John")`}
                        </code>
                    </pre>
                </section>

                {/* Section: Returning Values */}
                <section className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Returning Values</h3>
                    <p className="text-gray-600 mb-4">
                        Functions can also return values using the <code className="bg-gray-100 px-1.5 py-0.5 rounded">return</code> statement. For example:
                    </p>
                    <pre className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 overflow-x-auto">
                        <code>
                            {`# Function that returns a value
def add(a, b):
    return a + b
result = add(5, 3)
print(result)  # Output: 8`}
                        </code>
                    </pre>
                </section>

                {/* Section: Variable Scope in Functions */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-4">
                        Variable Scope in Functions
                    </h2>
                    <p className="text-gray-600 mb-4">
                        In Python, variables defined inside a function are local to that function. You cannot access them outside the function. However, variables defined outside the function are global.
                    </p>
                </section>

                {/* Local Variable Example */}
                <section className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Local Variable Example:</h3>
                    <pre className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 overflow-x-auto">
                        <code>
                            {`# Local variable inside function
def my_function():
    x = 10  # Local variable
    print(x)
my_function()`}
                        </code>
                    </pre>
                </section>

                {/* Global Variable Example */}
                <section className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Global Variable Example:</h3>
                    <pre className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 overflow-x-auto">
                        <code>
                            {`# Global variable
x = 5
def my_function():
    global x
    x = 10  # Modify global variable
my_function()
print(x)  # Output: 10`}
                        </code>
                    </pre>
                </section>

                {/* Section: Exercise */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-4">
                        Exercise
                    </h2>
                    <p className="text-gray-600 mb-4">
                        Write a function that accepts two numbers and returns their sum. Test your function by calling it with different numbers.
                    </p>
                </section>

                {/* Button to navigate to the next lesson */}
                <button
                    onClick={goToNextChallenge} // Calls the function to navigate
                    className="bg-blue-500 text-white py-2 px-6 rounded-md mt-4 hover:bg-blue-600 transition duration-300"
                >
                    Solve Problem
                </button>
            </div>
        </div>
    );
}
