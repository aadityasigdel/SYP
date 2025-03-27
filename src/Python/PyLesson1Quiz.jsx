import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PyNav from "./pyNav";

export default function PyLesson1Quiz() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState(""); // Added state for feedback message

  // List of questions
  const questions = [
    {
      question: "What is Python?",
      options: ["A snake", "A high-level programming language", "A car brand", "A type of coffee"],
      correct: 1,
    },
    {
      question: "Which website is used to download Python?",
      options: ["python.org", "pypi.org", "python.com", "download.com"],
      correct: 0,
    },
    {
      question: "How do you define a string variable in Python?",
      options: ["str name = John", "name = 'John'", "string name = \"John\"", "name := 'John'"],
      correct: 1,
    },
    {
      question: "Which of these is a Boolean value in Python?",
      options: ["Yes", "True", "On", "Okay"],
      correct: 1,
    },
    {
      question: "Which operator is used for multiplication?",
      options: ["+", "-", "*", "/"],
      correct: 2,
    },
    {
      question: "How do you print something in Python?",
      options: ["console.log()", "echo()", "print()", "printf()"],
      correct: 2,
    },
    {
      question: "What is the extension for Python files?",
      options: [".py", ".js", ".txt", ".exe"],
      correct: 0,
    },
    {
      question: "What does the following do: x = 5.9?",
      options: ["Creates a float", "Creates an integer", "Creates a string", "Creates a boolean"],
      correct: 0,
    },
    {
      question: "How do you run a Python file from terminal?",
      options: ["run file.py", "start file.py", "python file.py", "open file.py"],
      correct: 2,
    },
    {
      question: "What is the output of: print(\"Hello, World!\")?",
      options: ["Hello World", "Hello, World!", "World Hello", "Syntax Error"],
      correct: 1,
    },
  ];

  // Check if quiz is completed when the component mounts
  useEffect(() => {
    const completed = localStorage.getItem("quizCompleted");
    if (completed === "true") {
      setQuizCompleted(true);
      const savedScore = parseInt(localStorage.getItem("score"), 10) || 0; // Convert to number
      setScore(savedScore);
    }
  }, []);

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

    // Save the quiz completion status and score to localStorage
    localStorage.setItem("quizCompleted", "true");
    localStorage.setItem("score", calculatedScore.toString());

    // Set feedback message based on score
    if (calculatedScore === questions.length) {
      setFeedbackMessage("Excellent! You got a perfect score! 🎉");
    } else if (calculatedScore >= questions.length * 0.75) {
      setFeedbackMessage("Great job! You're almost there. 😄");
    } else if (calculatedScore >= questions.length * 0.5) {
      setFeedbackMessage("Good work! Keep practicing. 💪");
    } else {
      setFeedbackMessage("Don't worry! Try again to improve your score. 👍");
    }

    // Force page reload to show updated state and feedback message
    window.location.reload();
  };

  const resetQuiz = () => {
    // Clear localStorage to allow the user to retake the quiz
    localStorage.removeItem("quizCompleted");
    localStorage.removeItem("score");
    setQuizCompleted(false);
    setScore(0);
    setAnswers({});
    setShowScore(false);
    setFeedbackMessage(""); // Clear feedback message
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <PyNav />
      <div className="flex-1 p-8 bg-white shadow-lg rounded-lg m-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Lesson 1 Quiz</h1>

        {quizCompleted ? (
          <div className="mt-6">
            <h2 className="text-2xl font-bold text-green-600 mb-4">
              Your score: {score} / {questions.length}
            </h2>
            <p className="text-lg text-gray-700">{feedbackMessage}</p> {/* Display feedback message immediately */}
            <button
              onClick={resetQuiz}
              className="bg-orange-500 text-white py-2 px-6 rounded-md hover:bg-orange-600 transition duration-300"
            >
              Retake Quiz
            </button>
          </div>
        ) : (
          <>
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

            <button
              onClick={handleSubmit}
              className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Submit Quiz
            </button>
          </>
        )}
      </div>
    </div>
  );
}
