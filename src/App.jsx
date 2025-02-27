import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import Challenges from "./Challenges";
import Leaderboard from "./Leaderboard";
import Home from "./Home";
import Profile from "./Profile";
import Landing from "./Landing";
import Python from "./Python";
import Login from "./Login";
import SignUp from "./SignUp";
function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Landing/>} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/challenges" element={<Challenges />} />
                    <Route path="/leaderboard" element={<Leaderboard />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/python" element={<Python />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
