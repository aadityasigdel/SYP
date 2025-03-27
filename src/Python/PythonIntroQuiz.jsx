import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PyNav from "./pyNav";

export default function PythonIntroQuiz() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      question: "Who created Python?",
      options: ["Dennis Ritchie", "Guido van Rossum", "James Gosling", "Linus Torvalds"],
      correct: 1,
    },
    {
      question: "In which year was Python first released?",
      options: ["1989", "1995", "1991", "2000"],
      correct: 2,
    },
    {
      question: "Which framework is used for Python web development?",
      options: ["Flask", "React", "Laravel", "Spring"],
      correct: 0,
    },
    {
      question: "What is Pandas used for in Python?",
      options: ["Machine Learning", "Data Analysis", "Web Development", "Game Development"],
      correct: 1,
    },
    {
      question: "Which library is popular for machine learning in Python?",
      options: ["Matplotlib", "Pygame", "TensorFlow", "Selenium"],
      correct: 2,
    },
    {
      question: "What can Python automate?",
      options: ["File management", "Data scraping", "Repetitive tasks", "All of the above"],
      correct: 3,
    },
    {
      question: "Python is known for its ____?",
      options: ["Complex syntax", "Low readability", "Simplicity and readability", "Obscurity"],
      correct: 2,
    },
    {
      question: "Which of these is a 2D game development library in Python?",
      options: ["TensorFlow", "Flask", "Pygame", "Keras"],
      correct: 2,
    },
    {
      question: "What type of language is Python?",
      options: ["Low-level", "High-level, interpreted", "Assembly language", "Binary language"],
      correct: 1,
    },
    {
      question: "Where can you write and run Python code online?",
      options: ["Google Colab", "Notepad", "Photoshop", "Figma"],
      correct: 0,
    },
  ];

  const handleAnswerChange = (questionIndex, optionIndex) => {
    setAnswers({ ...answers, [questionIndex]: optionIndex });
  };

  const handleSubmit = () => {
    let calculatedScore = 0;
    questions.forEach((q, index) => {
      if (answers[index] === q.correct) {
        calculatedScore += 1;
      }
    });
    setScore(calculatedScore);
    setShowScore(true);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <PyNav />
      <div className="flex-1 p-8 bg-white shadow-lg rounded-lg m-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Introduction to Python Quiz</h1>

        {questions.map((q, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              {index + 1}. {q.question}
            </h2>
            {q.options.map((option, i) => (
              <label key={i} className="block mb-2 cursor-pointer">
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={i}
                  checked={answers[index] === i}
                  onChange={() => handleAnswerChange(index, i)}
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>
        ))}

        {!showScore && (
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Submit Quiz
          </button>
        )}

        {showScore && (
          <div className="mt-6">
            <h2 className="text-2xl font-bold text-green-600 mb-4">
              Your score: {score} / {questions.length}
            </h2>
            <button
              onClick={() => navigate("/python/pylesson1")}
              className="bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600 transition duration-300"
            >
              Start Lesson 1
            </button>
          </div>
        )}
      </div>
    </div>
  );}
