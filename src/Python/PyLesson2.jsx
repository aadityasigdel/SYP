import React from "react";
import { useNavigate } from "react-router-dom";
import PyNav from "./pyNav"; // Import the PyNav component

export default function PyLesson2() {
    const navigate = useNavigate();

    const goToNextLesson = () => {
        navigate("/python/pylesson1quiz"); // Navigate to the next lesson
    };

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Side Navigation Bar */}
            <PyNav />

            {/* Main Content Area */}
            <div className="flex-1 p-8 bg-white shadow-lg rounded-lg m-6">
                {/* Lesson Title */}
                <h1 className="text-4xl font-bold text-gray-800 mb-8">
                    Lesson 2: Control Structures
                </h1>

                {/* Section: Conditional Statements */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                        Conditional Statements
                    </h2>
                    <p className="text-gray-600 mb-4">
                        Conditional statements allow you to execute code based on certain conditions. Python has the <code className="bg-gray-100 px-1.5 py-0.5 rounded">if</code>, <code className="bg-gray-100 px-1.5 py-0.5 rounded">elif</code>, and <code className="bg-gray-100 px-1.5 py-0.5 rounded">else</code> keywords to handle conditional logic.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Example:</h3>
                    <pre className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 overflow-x-auto">
                        <code>
                            {`# Check if the number is positive or negative
                            num = int(input("Enter a number: "))

                            if num > 0:
                                print("Positive number")
                            elif num < 0:
                                print("Negative number")
                            else:
                                print("Zero")`}
                        </code>
                    </pre>
                </section>

                {/* Section: Loops in Python */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                        Loops in Python
                    </h2>
                    <p className="text-gray-600 mb-4">
                        Loops are used to repeat a block of code multiple times. Python has two main types of loops: <code className="bg-gray-100 px-1.5 py-0.5 rounded">for</code> and <code className="bg-gray-100 px-1.5 py-0.5 rounded">while</code>.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-700 mb-4">For Loop:</h3>
                    <pre className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 overflow-x-auto">
                        <code>
                            {`# For loop to iterate through a list
                            fruits = ["apple", "banana", "cherry"]

                            for fruit in fruits:
                                print(fruit)`}
                        </code>
                    </pre>

                    <h3 className="text-xl font-semibold text-gray-700 mb-4">While Loop:</h3>
                    <pre className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 overflow-x-auto">
                        <code>
                            {`# While loop that prints numbers from 1 to 5
                            count = 1
                            while count <= 5:
                                print(count)
                                count += 1`}
                        </code>
                    </pre>
                </section>

                {/* Section: Break and Continue Statements */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                        Break and Continue Statements
                    </h2>
                    <p className="text-gray-600 mb-4">
                        You can control the flow of loops using the <code className="bg-gray-100 px-1.5 py-0.5 rounded">break</code> and <code className="bg-gray-100 px-1.5 py-0.5 rounded">continue</code> statements.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Break Example:</h3>
                    <pre className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 overflow-x-auto">
                        <code>
                            {`# Break loop when number is 3
                            for num in range(5):
                                if num == 3:
                                    break
                                print(num)`}
                        </code>
                    </pre>

                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Continue Example:</h3>
                    <pre className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 overflow-x-auto">
                        <code>
                            {`# Skip number 3
                            for num in range(5):
                                if num == 3:
                                    continue
                                print(num)`}
                        </code>
                    </pre>
                </section>

                {/* Section: Exercise */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                        Exercise
                    </h2>
                    <p className="text-gray-600 mb-4">
                        Create a program that asks the user for a number and prints whether the number is even or odd.
                    </p>
                </section>

                {/* Button to navigate to the next lesson */}
                <button
                    onClick={goToNextLesson}
                    className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition duration-300"
                >
                    Proceed to Lesson 3
                </button>
            </div>
        </div>
    );
}