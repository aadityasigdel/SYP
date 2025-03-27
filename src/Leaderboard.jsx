import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";

export default function Leaderboard() {
    const navigate = useNavigate();
    const [leaderboardData, setLeaderboardData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLeaderboard = async () => {
            try {
                setLoading(true);
                const response = await fetch("http://localhost:5000/api/leaderboard");
                if (!response.ok) throw new Error("Failed to fetch leaderboard data");
                const data = await response.json();
                setLeaderboardData(data);
                setError(null);
            } catch (err) {
                setError(err.message);
                setLeaderboardData([]);
            } finally {
                setLoading(false);
            }
        };

        fetchLeaderboard();
    }, []);

    const getRankColor = (index) => {
        if (index === 0) return "bg-yellow-400";
        if (index === 1) return "bg-gray-300";
        if (index === 2) return "bg-amber-700";
        return index % 2 === 0 ? "bg-white" : "bg-gray-50";
    };

    const getRankIcon = (index) => {
        if (index === 0) return "🥇";
        if (index === 1) return "🥈";
        if (index === 2) return "🥉";
        return index + 1;
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="sticky top-0 bg-white border-b shadow-sm">
                <Navigation />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                            Top Coders
                        </span>
                    </h1>
                    <p className="text-gray-600">Ranking based on challenge completion and performance</p>
                </div>

                {loading && (
                    <div className="flex justify-center py-16">
                        <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                )}

                {error && (
                    <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded mb-6">
                        <div className="flex">
                            <svg className="h-5 w-5 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                            <div>
                                <p className="font-semibold">Error loading leaderboard</p>
                                <p>{error}</p>
                            </div>
                        </div>
                    </div>
                )}

                {!loading && !error && (
                    <div className="space-y-3">
                        {leaderboardData.length > 0 ? (
                            <div className="shadow-md rounded-xl">
                                {/* Header Row */}
                                <div className="grid grid-cols-12 gap-4 bg-gray-100 p-4 text-sm font-semibold border-b border-gray-200">
                                    <div className="col-span-1 text-center">Rank</div>
                                    <div className="col-span-7">Name</div>
                                    <div className="col-span-2 text-right">Score</div>
                                </div>
                                
                                {/* Data Rows */}
                                {leaderboardData.map((user, index) => (
                                    <div
                                        key={user.id}
                                        className={`grid grid-cols-12 gap-4 items-center p-4 border-b border-gray-100 last:border-0 ${getRankColor(index)}`}
                                    >
                                        <div className="col-span-1 text-center font-bold text-gray-700">
                                            <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-white shadow-sm">
                                                {getRankIcon(index)}
                                            </span>
                                        </div>
                                        <div className="col-span-7 flex items-center">
                                            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-lg font-bold text-blue-600 shadow-sm">
                                                {user.name.charAt(0).toUpperCase()}
                                            </div>
                                            <div className="ml-4">
                                                <h3 className="font-semibold text-gray-800">{user.name}</h3>
                                                <p className="text-gray-500 text-sm">{user.username}</p>
                                            </div>
                                        </div>
                                        <div className="col-span-2 text-right">
                                            <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-blue-50 text-blue-600">
                                                {user.score} pts
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12 border-2 border-dashed border-gray-200 rounded-xl bg-white">
                               
                                <h3 className="text-lg font-medium text-gray-500 mb-2">No rankings yet</h3>
                                <p className="text-gray-400">Complete challenges to appear on the leaderboard</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
