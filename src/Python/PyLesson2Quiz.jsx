import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PyNav from "./pyNav";

export default function PyLesson2Quiz() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      question: "What keyword is used for conditional statements in Python?",
      options: ["switch", "if", "cond", "when"],
      correct: 1,
    },
    {
      question: "Which Python loop is used to iterate over a sequence?",
      options: ["for loop", "while loop", "do-while loop", "repeat loop"],
      correct: 0,
    },
    {
      question: "What will 'break' do in a loop?",
      options: ["Skip one iteration", "End the loop", "Continue loop", "Restart loop"],
      correct: 1,
    },
    {
      question: "Which statement skips the current iteration and moves to the next one?",
      options: ["skip", "continue", "pass", "break"],
      correct: 1,
    },
    {
      question: "How do you check if a number is even or odd in Python?",
      options: ["Using modulus operator %", "Using division ", "Using multiplication", "Using subtraction"],
      correct: 0,
    },
    {
      question: "What does the 'elif' keyword mean?",
      options: ["else if", "end loop if", "exit line", "evaluate if"],
      correct: 0,
    },
    {
      question: "Which loop continues until a condition becomes False?",
      options: ["while loop", "for loop", "each loop", "constant loop"],
      correct: 0,
    },
    {
      question: "What happens if none of the 'if' or 'elif' conditions are met?",
      options: ["The program stops", "The 'else' block runs", "An error occurs", "Nothing happens"],
      correct: 1,
    },
    {
      question: "Which symbol is used for indentation blocks in Python?",
      options: ["Brackets {}", "Tabs/Spaces", "Semicolons ;", "Quotes "],
      correct: 1,
    },
    {
      question: "Which loop type is commonly used with a range of numbers?",
      options: ["while loop", "for loop", "foreach loop", "do loop"],
      correct: 1,
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
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Lesson 2: Control Structures Quiz</h1>

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
              onClick={() => navigate("/python/pylesson3")}
              className="bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600 transition duration-300"
            >
              Proceed to Lesson 3
            </button>
          </div>
        )}
      </div>
    </div>
  );}