import React from "react";
import Navigation from "./Navigation";

export default function Leaderboard() {
   

    return (
        <div>
            <Navigation />
            {/* Leaderboard Content */}
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4">Leaderboard</h1>
                <div>
                    {/* Leaderboard Table */}
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">Rank</th>
                                <th className="px-4 py-2">Name</th>
                                <th className="px-4 py-2">Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
