import { BrowserRouter, Route, Routes } from "react-router-dom";

import Admin from "./Admin/admin";
import "./App.css";
import Challenges from "./Challenges";
import Home from "./Home";
import Landing from "./Landing";
import Leaderboard from "./Leaderboard";
import Login from "./Login";
import Profile from "./Profile";
import Python from "./Python/Python";
import SignUp from "./SignUp";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/home" element={<Home />} />
                <Route path="/challenges" element={<Challenges />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/admin/*" element={<Admin /> } />
                 <Route path="/python/*" element={<Python />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
