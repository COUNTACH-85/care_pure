import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import DietGenerator from "./pages/DietGenerator";
import Dashboard from "./pages/Dashboard";
import BlogPage from "./pages/BlogPage";
import React from "react";
import Login from "./components/login";
import Signup from "./components/signup";
import VoiceflowChatbot from "./components/VoiceflowChatbot";
import Userpage from "./user";

const AppRoutes = () => {
    return (
        <Router>
            <InnerRoutes />
        </Router>
    );
};

const InnerRoutes = () => {
    const location = useLocation();
    const hideChatbot = location.pathname === "/login" || location.pathname === "/signup";

    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/home" element={<Dashboard />} />
                <Route path="/blog" element={<BlogPage />} /> 
                <Route path="/diet-generator" element={<DietGenerator />} />
                <Route path="/login" element={<Userpage />} />
                {/* <Route path="/signup" element={<Userpage />} /> */}
                <Route path="*" element={<h1 className="text-center mt-20 text-2xl text-red-500">404 Not Found</h1>} />
            </Routes>
            {!hideChatbot && <VoiceflowChatbot />}
        </>
    );
};

export default AppRoutes;