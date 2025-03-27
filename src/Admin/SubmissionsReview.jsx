import React, { useEffect, useState } from 'react';

export default function SubmissionsReview() {
    const [submissions, setSubmissions] = useState([]);
    const [feedbacks, setFeedbacks] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchSubmissions = async () => {
        try {
            setLoading(true);
            setError(null);

            // Direct URL without using API_URL
            const response = await fetch("http://localhost:5000/api/admin/submissions", {
                method: 'GET',
            });

            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }

            const data = await response.json();
            if (!Array.isArray(data)) {
                throw new Error('Expected array but got: ' + typeof data);
            }

            setSubmissions(data);
        } catch (error) {
            console.error("Fetch error:", error);
            setError(`Failed to load submissions: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSubmissions();
    }, []);

    const handleFeedbackChange = (submissionId, feedback) => {
        setFeedbacks(prev => ({ ...prev, [submissionId]: feedback }));
    };

    const handleApprove = async (submissionId, approved) => {
        try {
            // Direct URL without using API_URL
            const response = await fetch(`http://localhost:5000/api/admin/submissions/${submissionId}/review`, {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({ 
                    approved, 
                    feedback: feedbacks[submissionId] || (approved ? "Good job!" : "Needs improvement")
                }),
                credentials: 'include'
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            await fetchSubmissions(); // Refresh submissions after approval
        } catch (error) {
            console.error("Approval error:", error);
            setError(`Failed to submit review: ${error.message}`);
        }
    };

    return (
        <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                Pending Submissions ({submissions.length})
            </h2>

            {error && (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4">
                    <p className="font-bold">Error</p>
                    <p>{error}</p>
                    <button 
                        onClick={fetchSubmissions}
                        className="mt-2 text-sm text-red-600 hover:text-red-800"
                    >
                        Retry
                    </button>
                </div>
            )}

            {loading ? (
                <div className="flex justify-center py-10">
                    <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
                </div>
            ) : submissions.length === 0 ? (
                <div className="text-center py-10">
                    <p className="text-gray-500">
                        {error ? 'Could not load submissions' : 'No submissions pending review'}
                    </p>
                    {!error && (
                        <button
                            onClick={fetchSubmissions}
                            className="mt-2 px-4 py-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200"
                        >
                            Refresh
                        </button>
                    )}
                </div>
            ) : (
                <div className="space-y-6">
                    {submissions.map((sub) => (
                        <div key={sub.id} className="border border-gray-200 rounded-lg p-4">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="text-lg font-semibold">{sub.title}</h3>
                                    <p className="text-sm text-gray-600">Submitted by: {sub.username}</p>
                                </div>
                                <span className="text-sm text-gray-500">
                                    {new Date(sub.submitted_at).toLocaleString()}
                                </span>
                            </div>
                            
                            <div className="bg-gray-50 p-3 rounded-md mb-4">
                                <pre className="whitespace-pre-wrap font-mono text-sm">{sub.submitted_code}</pre>
                            </div>
                            
                            <textarea
                                value={feedbacks[sub.id] || ""}
                                onChange={(e) => handleFeedbackChange(sub.id, e.target.value)}
                                placeholder="Provide feedback..."
                                className="w-full p-3 border border-gray-300 rounded-md mb-3"
                                rows={3}
                            />
                            
                            <div className="flex justify-end space-x-3">
                                <button
                                    onClick={() => handleApprove(sub.id, false)}
                                    className="px-4 py-2 bg-red-100 text-red-700 rounded-md hover:bg-red-200"
                                >
                                    Reject
                                </button>
                                <button
                                    onClick={() => handleApprove(sub.id, true)}
                                    className="px-4 py-2 bg-green-100 text-green-700 rounded-md hover:bg-green-200"
                                >
                                    Approve
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
