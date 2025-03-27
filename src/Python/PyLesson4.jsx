import React from "react";
import { useNavigate } from "react-router-dom"; // Importing useNavigate for navigation
import PyNav from "./pyNav"; // Import the PyNav component for the sidebar

export default function PyLesson4() {
    const navigate = useNavigate(); // Declare useNavigate hook for navigation

    // Function to navigate to the next lesson
    const goToNextLesson = () => {
        navigate("/python/pylesson5");
    };

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <PyNav />

            {/* Main Content Area */}
            <div className="container mx-auto p-6 max-w-4xl flex-1">
                {/* Lesson Title */}
                <h1 className="text-4xl font-bold text-gray-800 mb-6">
                    Lesson 4: Error Handling
                </h1>

                {/* Section: What is Error Handling? */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-3">
                        What is Error Handling?
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Error handling in Python is a way to handle runtime
                        errors that occur during program execution. It allows
                        your program to continue running smoothly, even when an
                        error occurs.
                    </p>
                </section>

                {/* Section: Try-Except Block */}
                <section className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-700 mb-3">
                        Try-Except Block
                    </h3>
                    <p className="text-gray-600 mb-4">
                        Python uses a{" "}
                        <code className="bg-gray-100 px-1.5 py-0.5 rounded">
                            try-except
                        </code>{" "}
                        block to handle exceptions. Here's an example:
                    </p>
                    <pre className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 overflow-x-auto">
                        <code>
                            {`try:
    num = int(input("Enter a number: "))
    print(f"The number is {num}")
except ValueError:
    print("Invalid input! Please enter a valid number.")`}
                        </code>
                    </pre>
                </section>

                {/* Section: Finally Block */}
                <section className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-700 mb-3">
                        Finally Block
                    </h3>
                    <p className="text-gray-600 mb-4">
                        The{" "}
                        <code className="bg-gray-100 px-1.5 py-0.5 rounded">
                            finally
                        </code>{" "}
                        block is optional and will always be executed,
                        regardless of whether an exception occurred or not.
                    </p>
                    <pre className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 overflow-x-auto">
                        <code>
                            {`try:
    num = int(input("Enter a number: "))
    print(f"The number is {num}")
except ValueError:
    print("Invalid input!")
finally:
    print("Execution completed.")`}
                        </code>
                    </pre>
                </section>

                {/* Section: Multiple Except Blocks */}
                <section className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-700 mb-3">
                        Multiple Except Blocks
                    </h3>
                    <p className="text-gray-600 mb-4">
                        You can handle multiple types of exceptions in separate
                        except blocks:
                    </p>
                    <pre className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 overflow-x-auto">
                        <code>
                            {`try:
    num = int(input("Enter a number: "))
    result = 10 / num
    print(result)
except ValueError:
    print("Please enter a valid integer.")
except ZeroDivisionError:
    print("Division by zero is not allowed.")`}
                        </code>
                    </pre>
                </section>

                {/* Section: Custom Exceptions */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                        Custom Exceptions
                    </h2>
                    <p className="text-gray-600 mb-4">
                        You can also define your own custom exceptions in Python
                        by creating a new exception class that inherits from the
                        built-in{" "}
                        <code className="bg-gray-100 px-1.5 py-0.5 rounded">
                            Exception
                        </code>{" "}
                        class.
                    </p>
                    <pre className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-800 overflow-x-auto">
                        <code>
                            {`class NegativeValueError(Exception):
    def __init__(self, message="Value cannot be negative"):
        self.message = message
        super().__init__(self.message)

def check_value(value):
    if value < 0:
        raise NegativeValueError()

try:
    check_value(-5)
except NegativeValueError as e:
    print(e)`}
                        </code>
                    </pre>
                </section>

                {/* Section: Exercise */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                        Exercise
                    </h2>
                    <p className="text-gray-600 mb-4">
                        Create a program that asks the user for a number and
                        attempts to divide 100 by that number. If the user
                        enters zero or an invalid input, show an appropriate
                        error message.
                    </p>
                </section>

                {/* Button to navigate to the next lesson */}
                <button
                    onClick={goToNextLesson}
                    className="bg-blue-500 text-white py-2 px-6 rounded-md mt-6 hover:bg-blue-600 transition duration-300"
                >
                    Proceed to Lesson 5
                </button>
            </div>
        </div>
    );
}
