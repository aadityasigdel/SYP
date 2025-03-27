import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";

export default function Challenges() {
    const navigate = useNavigate();
    const [challenges, setChallenges] = useState({
        beginner: [],
        intermediate: [],
        advanced: [],
    });
    const [responses, setResponses] = useState({});
    const [completedChallenges, setCompletedChallenges] = useState([]);
    const [activeTab, setActiveTab] = useState("all");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const [challengesRes, completedRes] = await Promise.all([
                    fetch("http://localhost:5000/api/challenges"),
                    fetch("http://localhost:5000/api/completed-challenges", {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`,
                        },
                    })
                ]);

                const challengesData = await challengesRes.json();
                const categorizedChallenges = {
                    beginner: challengesData.filter(c => c.difficulty === "Beginner"),
                    intermediate: challengesData.filter(c => c.difficulty === "Intermediate"),
                    advanced: challengesData.filter(c => c.difficulty === "Advanced"),
                };
                setChallenges(categorizedChallenges);

                if (completedRes.ok) {
                    const completedData = await completedRes.json();
                    setCompletedChallenges(completedData.map(item => item.challenge_id));
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleResponseChange = (challengeId, value) => {
        setResponses(prev => ({ ...prev, [challengeId]: value }));
    };

    const handleResponseSubmit = async (challengeId) => {
        if (completedChallenges.includes(challengeId)) {
            alert("You have already submitted a solution for this challenge.");
            return;
        }

        const submitted_code = responses[challengeId];
        if (!submitted_code || submitted_code.trim() === "") {
            alert("Please write a solution before submitting.");
            return;
        }

        try {
            const token = localStorage.getItem("token");
            if (!token) {
                navigate("/login");
                return;
            }

            const response = await fetch(
                `http://localhost:5000/api/challenges/${challengeId}/submit`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({ submitted_code }),
                }
            );

            const data = await response.json();
            if (response.ok) {
                alert(data.message || "Solution submitted successfully!");
                setCompletedChallenges(prev => [...prev, challengeId]);
            } else {
                alert(data.message || "Error submitting solution");
            }
        } catch (error) {
            console.error("Error submitting solution:", error);
            alert("Submission failed. Please try again.");
        }
    };

    const getFilteredChallenges = () => {
        switch (activeTab) {
            case "beginner": return challenges.beginner;
            case "intermediate": return challenges.intermediate;
            case "advanced": return challenges.advanced;
            default: return [...challenges.beginner, ...challenges.intermediate, ...challenges.advanced];
        }
    };

    
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="sticky top-0 bg-white shadow z-50">
                <Navigation />
            </div>

            <div className="container mx-auto p-8 ">
                <div className="text-center mb-8 ">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                        Coding Challenges
                    </h1>
                    <p className="text-gray-900">
                        Test your skills 
                    </p>
                </div>

                <div className="mb-6 flex flex-col md:flex-row gap-4 justify-between items-center ">
                    <div className="flex gap-2">
                        {["all", "beginner", "intermediate", "advanced"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`p-2 rounded-lg ${activeTab === tab
                                    ? "bg-blue-600 text-white"
                                    : "bg-white text-gray-700"}`}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                {isLoading ? (
                    <div className="flex justify-center py-20 ">
                        <div className="spinner"></div>
                    </div>
                ) : getFilteredChallenges().length === 0 ? (
                    <div className="text-center py-16 bg-white rounded-lg shadow">
                        <p className="text-gray-900">No challenges found.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {getFilteredChallenges().map((challenge) => {
                            const isSubmitted = completedChallenges.includes(challenge.id);
                            return (
                                <div
                                    key={challenge.id}
                                    className={"bg-white rounded-lg border-2 border-gray-300 p-4 shadow-md shadow-gray-400"}
                                >
                                    <div className="flex justify-between mb-2">
                                        <h3 className="text-lg font-bold">
                                            {challenge.title}
                                        </h3>
                                        {isSubmitted && (
                                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                                                Completed
                                            </span>
                                        )}
                                    </div>

                                    <p className="text-gray-900 mb-3">
                                        {challenge.description}
                                    </p>

                                    <div className="flex justify-between mb-3 ">
                                        <span className="text-gray-500 text-sm">
                                            {new Date(challenge.created_at).toLocaleDateString()}
                                        </span>
                                    </div>

                                    <div className="mt-4">
                                        <label className="block mb-2 text-gray-900">
                                            Your Solution
                                        </label>
                                        <textarea
                                            className="w-full p-2 border rounded-lg mb-3"
                                            rows={4}
                                            placeholder={isSubmitted ? "Solution submitted" : "Write your code..."}
                                            value={responses[challenge.id] || ""}
                                            onChange={(e) => handleResponseChange(challenge.id, e.target.value)}
                                            disabled={isSubmitted}
                                        />

                                        <button
                                            className={`w-full p-2 rounded-lg ${isSubmitted
                                                ? "bg-gray-200 text-gray-900"
                                                : "bg-blue-600 text-white"}`}
                                            onClick={() => handleResponseSubmit(challenge.id)}
                                            disabled={isSubmitted}
                                        >
                                            {isSubmitted ? "Completed" : "Submit Solution"}
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}
