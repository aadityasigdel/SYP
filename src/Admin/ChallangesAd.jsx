import React, { useEffect, useState } from "react";

export default function ChallengesAD() {
    // Challenge management states
    const [challenge, setChallenge] = useState({
        title: "",
        description: "",
        difficulty: "Beginner",
    });
    const [challenges, setChallenges] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingId, setEditingId] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    
    // Solution review states
    const [submissions, setSubmissions] = useState([]);
    const [feedbacks, setFeedbacks] = useState({});
    const [activeTab, setActiveTab] = useState("challenges");

    // Fetch challenges and submissions
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                
                if (activeTab === "challenges") {
                    const response = await fetch("http://localhost:5000/api/challenges");
                    const data = await response.json();
                    setChallenges(data);
                } else {
                    const response = await fetch("/api/admin/submissions");
                    const data = await response.json();
                    setSubmissions(data);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [activeTab]);

    // Update your fetchData function in useEffect
const fetchData = async () => {
  try {
      setLoading(true);
      console.log("Fetching data for tab:", activeTab); // Debug log
      
      if (activeTab === "challenges") {
          const response = await fetch("http://localhost:5000/api/challenges");
          const data = await response.json();
          console.log("Challenges data:", data); // Debug log
          setChallenges(data);
      } else {
          const response = await fetch("/api/admin/submissions");
          const data = await response.json();
          console.log("Submissions data:", data); // Debug log
          setSubmissions(data);
      }
  } catch (error) {
      console.error("Error fetching data:", error);
  } finally {
      setLoading(false);
  }
};



    // Challenge management functions
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setChallenge((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = editingId
                ? `http://localhost:5000/api/challenges/${editingId}`
                : "http://localhost:5000/api/challenges";
            const method = editingId ? "PUT" : "POST";

            const response = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(challenge),
            });

            // Refresh challenges
            const challengesResponse = await fetch("http://localhost:5000/api/challenges");
            setChallenges(await challengesResponse.json());
            
            // Reset form
            setChallenge({ title: "", description: "", difficulty: "Beginner" });
            setEditingId(null);
        } catch (error) {
            console.error("Error submitting challenge:", error);
        }
    };

    const handleEdit = (challengeId) => {
        const challengeToEdit = challenges.find((ch) => ch.id === challengeId);
        setChallenge({
            title: challengeToEdit.title,
            description: challengeToEdit.description,
            difficulty: challengeToEdit.difficulty,
        });
        setEditingId(challengeId);
    };

    const handleDelete = async (challengeId) => {
        if (window.confirm("Are you sure you want to delete this challenge?")) {
            try {
                await fetch(`http://localhost:5000/api/challenges/${challengeId}`, {
                    method: "DELETE",
                });
                setChallenges(challenges.filter(ch => ch.id !== challengeId));
            } catch (error) {
                console.error("Error deleting challenge:", error);
            }
        }
    };

    // Solution review functions
    const handleFeedbackChange = (submissionId, feedback) => {
        setFeedbacks(prev => ({ ...prev, [submissionId]: feedback }));
    };

    const handleApprove = async (submissionId, approved) => {
        try {
            await fetch(`/api/admin/submissions/`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ 
                    approved, 
                    feedback: feedbacks[submissionId] || (approved ? "Good job!" : "Needs improvement")
                }),
            });
            
            // Refresh submissions
            const response = await fetch("/api/admin/submissions");
            setSubmissions(await response.json());
            setFeedbacks(prev => ({ ...prev, [submissionId]: "" }));
        } catch (error) {
            console.error("Error submitting review:", error);
        }
    };

    // Helper functions
    const filteredChallenges = challenges.filter(
        (ch) =>
            ch.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            ch.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getDifficultyColor = (difficulty) => {
        switch (difficulty) {
            case "Beginner": return "bg-green-100 text-green-800";
            case "Intermediate": return "bg-yellow-100 text-yellow-800";
            case "Advanced": return "bg-red-100 text-red-800";
            default: return "bg-gray-100 text-gray-800";
        }
    };

    return (
    

                    <>
                        {/* Challenge Form */}
                        <div className="bg-white rounded-xl shadow-md p-6 mb-10">
                            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                                {editingId ? "Edit Challenge" : "Create New Challenge"}
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                                            Challenge Title *
                                        </label>
                                        <input
                                            type="text"
                                            id="title"
                                            name="title"
                                            value={challenge.title}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="difficulty" className="block text-sm font-medium text-gray-700 mb-1">
                                            Difficulty Level *
                                        </label>
                                        <select
                                            id="difficulty"
                                            name="difficulty"
                                            value={challenge.difficulty}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                            required
                                        >
                                            <option value="Beginner">Beginner</option>
                                            <option value="Intermediate">Intermediate</option>
                                            <option value="Advanced">Advanced</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                                        Challenge Description *
                                    </label>
                                    <textarea
                                        id="description"
                                        name="description"
                                        value={challenge.description}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                        rows="5"
                                        required
                                    />
                                </div>

                                <div className="flex justify-end space-x-4">
                                    {editingId && (
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setChallenge({ title: "", description: "", difficulty: "Beginner" });
                                                setEditingId(null);
                                            }}
                                            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                                        >
                                            Cancel
                                        </button>
                                    )}
                                    <button
                                        type="submit"
                                        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                                    >
                                        {editingId ? "Update Challenge" : "Create Challenge"}
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Challenges List */}
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
                                <h2 className="text-2xl font-semibold text-gray-800">
                                    Current Challenges
                                </h2>
                                <input
                                    type="text"
                                    placeholder="Search challenges..."
                                    className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-md"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>

                            {loading ? (
                                <div className="flex justify-center py-10">
                                    <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
                                </div>
                            ) : filteredChallenges.length === 0 ? (
                                <div className="text-center py-10">
                                    <p className="text-gray-500">
                                        {searchTerm ? "No matching challenges found" : "No challenges available"}
                                    </p>
                                </div>
                            ) : (
                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Difficulty</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {filteredChallenges.map((ch) => (
                                                <tr key={ch.id} className="hover:bg-gray-50">
                                                    <td className="px-6 py-4 whitespace-normal max-w-xs">
                                                        <div className="font-medium text-gray-900">{ch.title}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-normal max-w-md">
                                                        <div className="text-gray-600 line-clamp-2">{ch.description}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getDifficultyColor(ch.difficulty)}`}>
                                                            {ch.difficulty}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                        <button
                                                            onClick={() => handleEdit(ch.id)}
                                                            className="text-blue-600 hover:text-blue-900 mr-4"
                                                        >
                                                            Edit
                                                        </button>
                                                        <button
                                                            onClick={() => handleDelete(ch.id)}
                                                            className="text-red-600 hover:text-red-900"
                                                        >
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    </>
                )}  