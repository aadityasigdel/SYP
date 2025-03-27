import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "../Navigation.jsx";
import PyLesson1 from "./PyLesson1.jsx";
import PyLesson1Quiz from "./PyLesson1Quiz.jsx";
import PyLesson2 from "./PyLesson2.jsx";
import PyLesson2Quiz from "./PyLesson2Quiz.jsx";
import PyLesson3 from "./PyLesson3.jsx";
import PyLesson3Quiz from "./PyLesson3Quiz.jsx";
import PyLesson4 from "./PyLesson4.jsx";
import PyLesson4Quiz from "./PyLesson4Quiz.jsx";
import PyLesson5 from "./PyLesson5.jsx";
import PyLesson5Quiz from "./PyLesson5Quiz.jsx";
import PythonIntro from "./PythonIntro.jsx";
import PythonIntroQuiz from "./PythonIntroQuiz.jsx";

export default function Python() {
    return (
        <div>
            <div className="shadow-xl border-b border-gray-200">
                <Navigation />
            </div>

            <Routes>
                <Route path="pythonIntro" element={<PythonIntro />} />
                <Route path="pylesson1" element={<PyLesson1 />} />
                <Route path="pylesson2" element={<PyLesson2 />} />
                <Route path="pylesson3" element={<PyLesson3 />} />
                <Route path="pylesson4" element={<PyLesson4 />} />
                <Route path="pylesson5" element={<PyLesson5 />} />
                <Route path="pyintroquiz" element={<PythonIntroQuiz />} />
                <Route path="pylesson1quiz" element={<PyLesson1Quiz />}/>
                <Route path="pylesson2quiz" element={<PyLesson2Quiz />}/>
                <Route path="pylesson3quiz" element={<PyLesson3Quiz />}/>
                <Route path="pylesson4quiz" element={<PyLesson4Quiz />}/>
                <Route path="pylesson5quiz" element={<PyLesson5Quiz />}/>
            </Routes>
        </div>
    );
}
