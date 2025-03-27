import React from "react";
import { useNavigate } from "react-router-dom";
import PyNav from "./pyNav"; // Import the PyNav component

export default function PythonIntro() {
    const navigate = useNavigate();

    const goToNextLesson = () => {
        navigate("/python/pyintroquiz"); // Navigate to the next lesson
    };

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Side Navigation Bar */}
            <PyNav />

            {/* Main Content Area */}
            <div className="flex-1 p-8 bg-white shadow-lg rounded-lg m-6">
                {/* Introduction Section */}
                <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                    Introduction to Python
                </h1>

                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Python is a powerful, high-level, interpreted programming
                    language. It was created by Guido van Rossum and first
                    released in 1991. Python emphasizes simplicity and
                    readability, making it an ideal choice for both beginners
                    and experienced developers.
                </p>

                {/* Section: What Can You Do With Python? */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                        What Can You Do With Python?
                    </h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        Python is used in a variety of domains and industries,
                        making it one of the most versatile programming languages
                        available.
                    </p>

                    <ul className="list-disc pl-6 text-gray-600 space-y-2">
                        <li>
                            <strong>Web Development:</strong> Python is widely used
                            for building web applications with frameworks like
                            Django and Flask.
                        </li>
                        <li>
                            <strong>Data Science and Analytics:</strong> Python is a
                            top choice for data analysis, manipulation, and
                            visualization with libraries like Pandas and Matplotlib.
                        </li>
                        <li>
                            <strong>Machine Learning:</strong> Python powers machine
                            learning applications with libraries like TensorFlow,
                            Keras, and Scikit-learn.
                        </li>
                        <li>
                            <strong>Automation:</strong> Automate repetitive tasks
                            such as file management, data scraping, and more using
                            Python scripts.
                        </li>
                        <li>
                            <strong>Artificial Intelligence:</strong> Python is
                            widely used to develop AI applications, including
                            natural language processing and computer vision.
                        </li>
                        <li>
                            <strong>Game Development:</strong> Python supports game
                            development with frameworks like Pygame, making it an
                            excellent choice for building 2D games.
                        </li>
                    </ul>
                </section>

                {/* Section: Why Choose Python? */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                        Why Choose Python?
                    </h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        Python is well-loved by developers due to its simplicity,
                        readability, and vast ecosystem of libraries. Here are some
                        reasons why Python is such a popular language:
                    </p>

                    <ul className="list-disc pl-6 text-gray-600 space-y-2">
                        <li>
                            <strong>Easy to Learn:</strong> Python has simple, clear
                            syntax which is easy for beginners to understand.
                        </li>
                        <li>
                            <strong>Extensive Libraries:</strong> Python boasts a
                            large number of libraries and frameworks that help
                            developers solve problems without reinventing the wheel.
                        </li>
                        <li>
                            <strong>Cross-Platform:</strong> Python runs on all
                            major operating systems, allowing for cross-platform
                            development.
                        </li>
                        <li>
                            <strong>Community Support:</strong> Python has a huge
                            and active community, offering abundant resources,
                            tutorials, and forums for support.
                        </li>
                        <li>
                            <strong>Versatile:</strong> Python is used in a variety
                            of fields including web development, data science,
                            automation, artificial intelligence, and more.
                        </li>
                    </ul>
                </section>

                {/* Section: Getting Started with Python */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                        Getting Started with Python
                    </h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        Getting started with Python is easy. All you need to do is
                        install Python on your machine and you're ready to go. There
                        are many online platforms such as Jupyter Notebooks, Google
                        Colab, and Replit where you can write and execute Python
                        code right from your browser.
                    </p>

                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        Whether you're interested in building web applications,
                        analyzing data, or creating AI models, Python provides a
                        great starting point for all types of projects.
                    </p>
                </section>

                {/* Button to navigate to the next lesson */}
                <button
                    onClick={goToNextLesson}
                    className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition duration-300"
                >
                    Next Lesson
                </button>
            </div>
        </div>
    );
}